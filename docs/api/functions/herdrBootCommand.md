[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrBootCommand

# Function: herdrBootCommand()

> **herdrBootCommand**(`base`, `envFile`, `session`): `string`

Defined in: [herdr.ts:943](https://github.com/juli-os/baton/blob/main/src/baton/herdr.ts#L943)

herdr 分枝的引导命令：source env 文件 + 会话名 env 前缀 + 原引导命令。
新建态走 tab env 已有这些变量（重复 export 幂等无害）；恢复态（server
重启 pane 复位裸 shell、env 全丢，实测）靠这行兜底——两条路同一形状。

## Parameters

### base

`string`

### envFile

`string`

### session

`string`

## Returns

`string`
