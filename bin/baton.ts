#!/usr/bin/env node
// baton — 终端遥控器 CLI，一条命令一个动作，全部调用包自己的导出函数。
// Usage:
//   baton list [--socket=/path]            列 tmux 会话名（缺省 default socket）
//   baton capture --session=NAME [--lines=40]   抓会话 pane 尾部到 stdout
import { createTmuxClient } from '../src/index.ts';

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (name: string): string | undefined => {
  const eq = `--${name}=`;
  const hit = args.find((a) => a.startsWith(eq));
  return hit ? hit.slice(eq.length) : undefined;
};

const usage = (): never => {
  console.error('用法: baton list [--socket=/path] | baton capture --session=NAME [--lines=40]');
  process.exit(2);
};

const client = () => createTmuxClient({ socketPath: flag('socket') });

if (cmd === 'list') {
  void client().listSessions().then((names) => {
    if (names.length === 0) {
      console.log('(no sessions / no server on this socket)');
      return;
    }
    for (const n of names) console.log(n);
  });
} else if (cmd === 'capture') {
  const session = flag('session') ?? usage();
  const lines = Number(flag('lines') ?? 40);
  void client().capturePane(session, lines).then((r) => {
    if (!r.ok) {
      console.error(`capture 失败: ${r.error.message}`);
      process.exit(1);
    }
    process.stdout.write(r.value);
  });
} else {
  usage();
}
