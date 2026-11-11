[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / FakeHerdr

# Interface: FakeHerdr

Defined in: herdr.ts:950

fake herdr server（契约测试用）：进程内 unix socket 上跑换行分隔 JSON，
记录收到的全部请求，按状态机应答 workspace/tab/pane 的最小闭环。

## Properties

### requests

> `readonly` **requests**: `object`[]

Defined in: herdr.ts:952

#### method

> **method**: `string`

#### params

> **params**: `Record`\<`string`, `unknown`\>

***

### socketPath

> `readonly` **socketPath**: `string`

Defined in: herdr.ts:951

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: herdr.ts:955

#### Returns

`Promise`\<`void`\>

***

### setReads()

> **setReads**(`texts`): `void`

Defined in: herdr.ts:954

脚本化 pane.read 输出（sendTextConfirmed 轮询的回放序列）。

#### Parameters

##### texts

readonly `string`[]

#### Returns

`void`
