[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrListSync

# Function: herdrListSync()

> **herdrListSync**(`session`, `bin?`): readonly `string`[]

Defined in: herdr.ts:846

生产 listSync：herdr workspace list（label 名单）。CLI 查询在 server 缺席
时干净报错不自动拉起（实测），异常归一空名单——与 tmuxListSync 同语义。

## Parameters

### session

`string`

### bin?

`string` = `HERDR_BIN`

## Returns

readonly `string`[]
