[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / HookSpecFactory

# Type Alias: HookSpecFactory

> **HookSpecFactory** = (`hookJsPath`, `password`, `serviceUrl`, `sessionExpr?`) => readonly [`HookSpec`](../interfaces/HookSpec.md)[]

Defined in: [hooks.ts:20](https://github.com/juli-os/baton/blob/main/src/baton/hooks.ts#L20)

hook 命令组的注入工厂：调用方（agents）传自己的 defaultHookSpecs——
sessionExpr 是「hook 进程内解析我在哪个会话」的 shell 表达式，随终端后端
变化（tmux=display-message 运行时反查；herdr=JULI_HERDR_SESSION env），
由 baton 的后端工厂按分支传入，缺省值由工厂自带。

## Parameters

### hookJsPath

`string`

### password

`string`

### serviceUrl

`string`

### sessionExpr?

`string`

## Returns

readonly [`HookSpec`](../interfaces/HookSpec.md)[]
