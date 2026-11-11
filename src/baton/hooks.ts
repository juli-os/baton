// CC hook 命令组的形状契约（baton 侧只关心形状，不带注入语义）：六事件表
// （Stop/SessionStart/PermissionRequest/UserPromptSubmit/Notification/PostToolUse）
// 与 settings.json 写入留在 @juli-os/agents——那是 Claude Code 注入语义不是
// 终端遥控。baton 的 backend/hookSpecs 组装只消费这里定义的形状。

/** CC hook 命令组的一条（事件名 + 可选工具白名单 + 完整命令行）。 */
export interface HookSpec {
  /** CC hook 事件名（Stop / SessionStart / PermissionRequest / UserPromptSubmit / Notification / PostToolUse）。 */
  readonly event: string;
  /** 工具名白名单（正则 include 过滤，CC 官方机制）：省略=全量。 */
  readonly matcher?: string;
  /** 完整命令行（通常 = `node <dist>/cli/hook.js <verb> "$(会话名解析)" ...`）。 */
  readonly command: string;
}

/** hook 命令组的注入工厂：调用方（agents）传自己的 defaultHookSpecs——
 * sessionExpr 是「hook 进程内解析我在哪个会话」的 shell 表达式，随终端后端
 * 变化（tmux=display-message 运行时反查；herdr=JULI_HERDR_SESSION env），
 * 由 baton 的后端工厂按分支传入，缺省值由工厂自带。 */
export type HookSpecFactory = (
  hookJsPath: string,
  password: string,
  serviceUrl: string,
  sessionExpr?: string,
) => readonly HookSpec[];

/** 缺省 hook 工厂：空 hook 组（baton 自身不带 CC 注入语义；agents 侧包装
 * 注入 defaultHookSpecs 后与原行为逐字一致）。 */
export const emptyHookSpecs: HookSpecFactory = () => [];
