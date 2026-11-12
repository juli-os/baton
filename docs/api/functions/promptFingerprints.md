[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / promptFingerprints

# Function: promptFingerprints()

> **promptFingerprints**(`text`): `object`

Defined in: [tmux.ts:84](https://github.com/juli-os/baton/blob/main/src/baton/tmux.ts#L84)

prompt 指纹对：首/末非空行各取前 40 字符——输入框判定锚（框内可见的是末行，
提交后对话记录可见的是首行）。

## Parameters

### text

`string`

## Returns

`object`

### head

> `readonly` **head**: `string`

### tail

> `readonly` **tail**: `string`
