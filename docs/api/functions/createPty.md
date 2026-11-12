[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / createPty

# Function: createPty()

> **createPty**(`cmd`, `opts?`, `onData?`): [`PtySession`](../interfaces/PtySession.md)

Defined in: [pty.ts:31](https://github.com/juli-os/baton/blob/main/src/baton/pty.ts#L31)

以 /usr/bin/expect 分配伪终端运行命令，返回双向字节流的操控面。

## Parameters

### cmd

readonly `string`[]

### opts?

[`PtyOpts`](../interfaces/PtyOpts.md) = `{}`

### onData?

(`chunk`) => `void`

## Returns

[`PtySession`](../interfaces/PtySession.md)
