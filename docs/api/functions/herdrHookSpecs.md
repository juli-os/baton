[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrHookSpecs

# Function: herdrHookSpecs()

> **herdrHookSpecs**(`hookSpecs`, `hookJsPath`, `password?`, `serviceUrl?`): readonly [`HookSpec`](../interfaces/HookSpec.md)[]

Defined in: [herdr.ts:869](https://github.com/juli-os/baton/blob/main/src/baton/herdr.ts#L869)

CC hook 的 herdr 会话名解析：workspace 建 tab 时注入的 JULI_HERDR_SESSION
env（claude 进程及其 hook 子进程继承）。tmux 分枝用 display-message 运行
时反查；herdr 无对应反查面，env 是唯一稳定通道（server 重启丢 env 的恢复
态由 boot 命令的 JULI_HERDR_SESSION 前缀兜底）。非 juli 环境跑的 claude
（用户自己终端里）取到空串 → hook usage 失败静默退 0——与 tmux 分枝同形。
六事件表由调用方注入（agents 的 defaultHookSpecs，2026-11-04 R1 评审 #7
的「六事件表只此一处」不变），这里只贡献会话名表达式。

## Parameters

### hookSpecs

[`HookSpecFactory`](../type-aliases/HookSpecFactory.md)

### hookJsPath

`string`

### password?

`string` = `''`

### serviceUrl?

`string` = `''`

## Returns

readonly [`HookSpec`](../interfaces/HookSpec.md)[]
