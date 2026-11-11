[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / AgentBackendOpts

# Interface: AgentBackendOpts

Defined in: backend.ts:34

后端工厂的构造项（基底选择/socket 与 namespace/终端覆盖位/hook 工厂注入）。

## Properties

### backend?

> `readonly` `optional` **backend?**: [`AgentBackendKind`](../type-aliases/AgentBackendKind.md)

Defined in: backend.ts:36

终端基底（默认 tmux——现状默认，零行为变化）。

***

### dataDir?

> `readonly` `optional` **dataDir?**: `string`

Defined in: backend.ts:44

env 文件落盘目录（引擎 data_dir；缺省 ~/.juli-service）。tmux 后端忽略。

***

### herdrSession?

> `readonly` `optional` **herdrSession?**: `string`

Defined in: backend.ts:40

herdr 命名 session namespace（默认 'juli'，与 tmux 专属 socket 同位的隔离位）。

***

### herdrSocketPath?

> `readonly` `optional` **herdrSocketPath?**: `string`

Defined in: backend.ts:42

herdr socket 路径覆盖（缺省=命名 session 固定布局；测试指向 fake server）。

***

### hookSpecs?

> `readonly` `optional` **hookSpecs?**: [`HookSpecFactory`](../type-aliases/HookSpecFactory.md)

Defined in: backend.ts:54

CC hook 命令组工厂（注入位）：tmux 分枝按工厂缺省会话名表达式调用、
herdr 分枝按 JULI_HERDR_SESSION 表达式调用（herdrHookSpecs）。缺省 =
空 hook 组——baton 不带 CC 注入语义；agents 侧包装注入自己的
defaultHookSpecs 后行为与原先逐字一致。

***

### log?

> `readonly` `optional` **log?**: (`m`) => `void`

Defined in: backend.ts:55

#### Parameters

##### m

`string`

#### Returns

`void`

***

### socketPath?

> `readonly` `optional` **socketPath?**: `string`

Defined in: backend.ts:38

tmux 专属 socket 路径（undefined=default socket）。

***

### terminal?

> `readonly` `optional` **terminal?**: [`TmuxClient`](TmuxClient.md)

Defined in: backend.ts:49

终端覆盖位（测试/嵌入接缝，与 runtime 的 seams.tmux 同一语义）：提供时
工厂不内建终端——产物 terminal、tmux 分枝的 applyEnv/attach 全走它，
绝不触碰真实 tmux。herdr 分枝仍构造内部 client（applyEnv 的 setEnv
落点），terminal 面返回覆盖值（该组合仅出现在测试，不同时配 herdr）。
