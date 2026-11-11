[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / herdrAttachCommand

# Function: herdrAttachCommand()

> **herdrAttachCommand**(`session`, `bin?`): readonly `string`[]

Defined in: herdr.ts:882

herdr attach 命令：附着整个 namespace（TUI 全屏，xterm 完整承载）。
herdr 无单 pane 的 PTY attach 命令（agent attach 需已识别的 agent 在位，
裸 shell 期不可用）——web 终端从「单会话 pane」升格为「该 namespace 的
herdr TUI」，用户在 TUI 里切到目标 workspace。

## Parameters

### session

`string`

### bin?

`string` = `HERDR_BIN`

## Returns

readonly `string`[]
