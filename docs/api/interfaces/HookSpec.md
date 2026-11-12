[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / HookSpec

# Interface: HookSpec

Defined in: [hooks.ts:7](https://github.com/juli-os/baton/blob/main/src/baton/hooks.ts#L7)

CC hook 命令组的一条（事件名 + 可选工具白名单 + 完整命令行）。

## Properties

### command

> `readonly` **command**: `string`

Defined in: [hooks.ts:13](https://github.com/juli-os/baton/blob/main/src/baton/hooks.ts#L13)

完整命令行（通常 = `node <dist>/cli/hook.js <verb> "$(会话名解析)" ...`）。

***

### event

> `readonly` **event**: `string`

Defined in: [hooks.ts:9](https://github.com/juli-os/baton/blob/main/src/baton/hooks.ts#L9)

CC hook 事件名（Stop / SessionStart / PermissionRequest / UserPromptSubmit / Notification / PostToolUse）。

***

### matcher?

> `readonly` `optional` **matcher?**: `string`

Defined in: [hooks.ts:11](https://github.com/juli-os/baton/blob/main/src/baton/hooks.ts#L11)

工具名白名单（正则 include 过滤，CC 官方机制）：省略=全量。
