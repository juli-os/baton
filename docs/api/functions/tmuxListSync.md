[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / tmuxListSync

# Function: tmuxListSync()

> **tmuxListSync**(`socketPath?`): readonly `string`[]

Defined in: [router.ts:10](https://github.com/juli-os/baton/blob/main/src/baton/router.ts#L10)

生产 listSync：tmux list-sessions（可选自定 socket）。异常归一空名单
（无 server / 无 tmux 与空会话同形，路由层以快照兜底）。

## Parameters

### socketPath?

`string`

## Returns

readonly `string`[]
