[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / writeAgentEnvFile

# Function: writeAgentEnvFile()

> **writeAgentEnvFile**(`path`, `vars`): `void`

Defined in: [herdr.ts:932](https://github.com/juli-os/baton/blob/main/src/baton/herdr.ts#L932)

写 agent env 文件（0600）：runtime 的 ai 段热注入落盘，herdr 恢复态的
boot 命令 source 它把 env 灌回 shell（密钥不进 pane scrollback——pane 里
可见的只有 source 那一行文件路径）。

## Parameters

### path

`string`

### vars

`Readonly`\<`Record`\<`string`, `string`\>\>

## Returns

`void`
