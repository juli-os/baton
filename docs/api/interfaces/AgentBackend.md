[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / AgentBackend

# Interface: AgentBackend

Defined in: backend.ts:59

随终端基底变化的六件事的正交聚合面（引擎唯一消费的终端后端契约）。

## Properties

### describe

> `readonly` **describe**: `string`

Defined in: backend.ts:62

人读描述（warmup/诊断日志）：`tmux socket=default` / `herdr session=juli`。

***

### kind

> `readonly` **kind**: [`AgentBackendKind`](../type-aliases/AgentBackendKind.md)

Defined in: backend.ts:60

***

### terminal

> `readonly` **terminal**: [`TmuxClient`](TmuxClient.md)

Defined in: backend.ts:64

终端契约——派发/探测/快照管线的唯一消费面。

## Methods

### applyEnv()

> **applyEnv**(`vars`): `void`

Defined in: backend.ts:74

AI 段 env 注入（[key, value] 对）。

#### Parameters

##### vars

readonly (readonly \[`string`, `string`\])[]

#### Returns

`void`

***

### attach()

> **attach**(`session`, `opts`, `onData?`): `Promise`\<`Result`\<[`PtySession`](PtySession.md), `Error`\>\>

Defined in: backend.ts:70

web 终端 attach：会话不存在明确报错、不代建。

#### Parameters

##### session

`string`

##### opts

[`PtyOpts`](PtyOpts.md)

##### onData?

(`chunk`) => `void`

#### Returns

`Promise`\<`Result`\<[`PtySession`](PtySession.md), `Error`\>\>

***

### bootCommand()

> **bootCommand**(`base`, `session`): `string`

Defined in: backend.ts:72

引导命令包装：base=引擎选好的 claude 启动命令，session=目标会话名。

#### Parameters

##### base

`string`

##### session

`string`

#### Returns

`string`

***

### hookSpecs()

> **hookSpecs**(`hookJsPath`, `password`, `serviceUrl`): readonly [`HookSpec`](HookSpec.md)[]

Defined in: backend.ts:66

CC hook 命令组（installClaudeHooks 的入参）。

#### Parameters

##### hookJsPath

`string`

##### password

`string`

##### serviceUrl

`string`

#### Returns

readonly [`HookSpec`](HookSpec.md)[]

***

### listSync()

> **listSync**(): readonly `string`[]

Defined in: backend.ts:68

会话名单同步源（router listSync；失败/缺席归一空名单）。

#### Returns

readonly `string`[]
