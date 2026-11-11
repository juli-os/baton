// baton facade — 终端遥控器（@juli-os/baton）的唯一公开面。
// 遥控器件：tmux/herdr 双后端的会话遥控（建/发/抓/杀/附着）、正交后端工厂、
// 会话名单同步、hook 命令组的形状契约。不含 juli 业务概念（CC hook 注入
// 语义、派发管线、快照在 @juli-os/agents，它内部依赖本包并对外 re-export
// 保持接口不变）。
// 为什么独立成包（2026-11-12 第 6 步）：遥控是纯能力，派发是业务——分层后
// agents 内部改依赖 baton，对外面经 re-export 不变。
export {
  resolveTmuxBin, TMUX_BIN, tmuxEnv, promptFingerprints, inputBoxState, createTmuxClient,
  type TmuxSessionInfo, type SubmitStats, type TmuxClient, type TerminalKey,
} from './baton/tmux.ts';
export {
  createPty, tmuxAttachCommand, attachTmuxPty, ptyAvailable,
  DEFAULT_PTY_COLS, DEFAULT_PTY_ROWS, type PtyOpts, type PtySession,
} from './baton/pty.ts';
export {
  resolveHerdrBin, HERDR_BIN, herdrSocketPath, paneLabelOf,
  type HerdrWireResponse, herdrRequest, type HerdrClientOpts,
  type HerdrClient, type HerdrManagedAgentStart, type HerdrAgentInfo,
  createHerdrClient, translateKey, herdrListSync, herdrHookSpecs,
  herdrAttachCommand, herdrAttach, writeAgentEnvFile, herdrBootCommand,
  type FakeHerdr, startFakeHerdr,
} from './baton/herdr.ts';
export {
  createAgentBackend, type AgentBackendKind, type AgentBackendOpts, type AgentBackend,
} from './baton/backend.ts';
export { tmuxListSync } from './baton/router.ts';
export { type HookSpec, type HookSpecFactory, emptyHookSpecs } from './baton/hooks.ts';
