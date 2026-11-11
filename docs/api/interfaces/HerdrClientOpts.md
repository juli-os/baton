[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / HerdrClientOpts

# Interface: HerdrClientOpts

Defined in: herdr.ts:141

herdr 客户端的构造项（namespace/租户/socket 覆盖/超时预算/测试注入位）。

## Properties

### autoStartServer?

> `readonly` `optional` **autoStartServer?**: `boolean`

Defined in: herdr.ts:154

socket 缺失时自动拉起 headless server（默认 true；测试可关）。

***

### env?

> `readonly` `optional` **env?**: () => `Readonly`\<`Record`\<`string`, `string`\>\>

Defined in: herdr.ts:152

新建 workspace 时随 tab.create 注入的 env（runtime 的 ai 段热注入面）。

#### Returns

`Readonly`\<`Record`\<`string`, `string`\>\>

***

### log?

> `readonly` `optional` **log?**: (`m`) => `void`

Defined in: herdr.ts:165

#### Parameters

##### m

`string`

#### Returns

`void`

***

### queuedConfirmMs?

> `readonly` `optional` **queuedConfirmMs?**: `number`

Defined in: herdr.ts:158

入队式投递的观察预算（默认 8s，对齐 L0 sendTextQueued）。

***

### requestMs?

> `readonly` `optional` **requestMs?**: `number`

Defined in: herdr.ts:160

单次 socket 请求超时。

***

### serverStartMs?

> `readonly` `optional` **serverStartMs?**: `number`

Defined in: herdr.ts:162

headless server 拉起等待预算。

***

### session?

> `readonly` `optional` **session?**: `string`

Defined in: herdr.ts:143

命名 session namespace（默认 'juli'）。

***

### sleep?

> `readonly` `optional` **sleep?**: (`ms`) => `Promise`\<`void`\>

Defined in: herdr.ts:164

测试注入的睡眠。

#### Parameters

##### ms

`number`

#### Returns

`Promise`\<`void`\>

***

### socketPath?

> `readonly` `optional` **socketPath?**: `string`

Defined in: herdr.ts:150

socket 路径覆盖（缺省 = 命名 session 的固定布局；测试指向 fake server）。

***

### submitConfirmMs?

> `readonly` `optional` **submitConfirmMs?**: `number`

Defined in: herdr.ts:156

提交确认总预算（默认 20s，对齐 L0 sendTextConfirmed）。

***

### tenant?

> `readonly` `optional` **tenant?**: `string`

Defined in: herdr.ts:148

租户 workspace 的 label（默认 'juli'）：映射模型 v2（2026-11-06）——
workspace=tenant（多租户预留位，今天单租户占一席）、tab=agent 会话
（label=会话名）、pane=终端本体。旧「workspace=会话」形状仅在迁移
窗口被 resolve/kill/list 的 legacy 兜底兼容。
