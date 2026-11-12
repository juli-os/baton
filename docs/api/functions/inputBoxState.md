[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / inputBoxState

# Function: inputBoxState()

> **inputBoxState**(`pane`, `tail`): `"cleared"` \| `"in-box"` \| `"absent"`

Defined in: [tmux.ts:95](https://github.com/juli-os/baton/blob/main/src/baton/tmux.ts#L95)

输入框状态：tail 在底部输入框区（未提交）；tail 下方出现空的 ❯ 行（已提交，
输入框重置）；两者都不在 pane（已提交滚出视野，或粘贴丢失——由调用方结合
「曾见指纹」区分）。

## Parameters

### pane

`string`

### tail

`string`

## Returns

`"cleared"` \| `"in-box"` \| `"absent"`
