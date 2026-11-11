// 会话名单同步源（execFileSync，resolve 低频、毫秒级，杜绝异步刷新竞态）。
// 复用优先的会话路由器本体（createSessionRouter）留在 @juli-os/agents——
// 那是派发语义不是终端遥控；本文件只提供名单的生产侧同步快照。

import { execFileSync } from 'node:child_process';
import { TMUX_BIN } from './tmux.ts';

/** 生产 listSync：tmux list-sessions（可选自定 socket）。异常归一空名单
 * （无 server / 无 tmux 与空会话同形，路由层以快照兜底）。 */
export const tmuxListSync = (socketPath?: string): readonly string[] => {
  const args = [...(socketPath ? ['-S', socketPath] : []), 'list-sessions', '-F', '#{session_name}'];
  try {
    return execFileSync(TMUX_BIN, args, { encoding: 'utf8', timeout: 3000 })
      .split('\n').map((x) => x.trim()).filter(Boolean);
  } catch {
    return []; // 无 server / 无 tmux：空名单
  }
};
