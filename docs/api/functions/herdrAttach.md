[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrAttach

# Function: herdrAttach()

> **herdrAttach**(`deps`): (`session`, `opts`, `onData?`) => `Promise`\<`Result`\<[`PtySession`](../interfaces/PtySession.md), `Error`\>\>

Defined in: [herdr.ts:887](https://github.com/juli-os/baton/blob/main/src/baton/herdr.ts#L887)

ptyhub 的 herdr attach 实现（形状对齐 L0 attachTmuxPty：不存在→明确
报错不代建；存在→起 PTY 跑 attach 命令）。

## Parameters

### deps

#### bin?

`string`

#### client

\{ `agentAtPaneOf`(`name`): `Promise`\<`string`\>; `hasSession`(`name`): `Promise`\<`boolean`\>; `paneIdOf`(`name`): `Promise`\<`string`\>; \}

#### client.agentAtPaneOf

(`name`) => `Promise`\<`string`\>

#### client.hasSession

(`name`) => `Promise`\<`boolean`\>

#### client.paneIdOf

(`name`) => `Promise`\<`string`\>

#### session

`string`

## Returns

(`session`, `opts`, `onData?`) => `Promise`\<`Result`\<[`PtySession`](../interfaces/PtySession.md), `Error`\>\>
