[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrRequest

# Function: herdrRequest()

> **herdrRequest**(`socketPath`, `id`, `method`, `params`, `timeoutMs?`): `Promise`\<`Result`\<`Record`\<`string`, `unknown`\>, `Error`\>\>

Defined in: herdr.ts:90

单次 socket 调用：写一行、读到同 id 的第一行为止。连接失败归一为
`server_not_running` 错误码（供上层决定是否拉起 server 后重试）。

## Parameters

### socketPath

`string`

### id

`string`

### method

`string`

### params

`Record`\<`string`, `unknown`\>

### timeoutMs?

`number` = `8000`

## Returns

`Promise`\<`Result`\<`Record`\<`string`, `unknown`\>, `Error`\>\>
