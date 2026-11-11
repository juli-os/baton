[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / PtySession

# Interface: PtySession

Defined in: pty.ts:19

已起 PTY 的操控面：写 stdin、杀进程、等退出码。

## Properties

### exit

> `readonly` **exit**: `Promise`\<`number`\>

Defined in: pty.ts:22

## Methods

### kill()

> **kill**(): `void`

Defined in: pty.ts:21

#### Returns

`void`

***

### write()

> **write**(`data`): `void`

Defined in: pty.ts:20

#### Parameters

##### data

`string`

#### Returns

`void`
