[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / PtySession

# Interface: PtySession

Defined in: [pty.ts:19](https://github.com/juli-os/baton/blob/main/src/baton/pty.ts#L19)

已起 PTY 的操控面：写 stdin、杀进程、等退出码。

## Properties

### exit

> `readonly` **exit**: `Promise`\<`number`\>

Defined in: [pty.ts:22](https://github.com/juli-os/baton/blob/main/src/baton/pty.ts#L22)

## Methods

### kill()

> **kill**(): `void`

Defined in: [pty.ts:21](https://github.com/juli-os/baton/blob/main/src/baton/pty.ts#L21)

#### Returns

`void`

***

### write()

> **write**(`data`): `void`

Defined in: [pty.ts:20](https://github.com/juli-os/baton/blob/main/src/baton/pty.ts#L20)

#### Parameters

##### data

`string`

#### Returns

`void`
