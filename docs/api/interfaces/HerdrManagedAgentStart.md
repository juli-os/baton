[**@juli-os/baton**](../index.md)

***

[@juli-os/baton](../index.md) / HerdrManagedAgentStart

# Interface: HerdrManagedAgentStart

Defined in: herdr.ts:192

agent.start 入参（herdr AgentStartParams 直译；name 规则=小写字母开头、
仅小写/数字/'-'/'_'、≤32 字符，kind 必须 herdr detect 名单内——两样都由
herdr 侧校验，这里不重复实现，错误原文透传可诊断）。

## Properties

### args?

> `readonly` `optional` **args?**: readonly `string`[]

Defined in: herdr.ts:196

透传给 agent CLI 的参数（如 zcode 的 --cwd/--resume）。

***

### kind

> `readonly` **kind**: `string`

Defined in: herdr.ts:194

***

### name

> `readonly` **name**: `string`

Defined in: herdr.ts:193

***

### shellSettleMs?

> `readonly` `optional` **shellSettleMs?**: `number`

Defined in: herdr.ts:202

pane shell 落回提示符的等待预算毫秒（新建 workspace 的 zsh 还在跑
启动文件时，herdr 侧 shell-idle 检查会先回 agent_pane_busy——本层按
此预算重试；缺省 15s）。

***

### timeoutMs?

> `readonly` `optional` **timeoutMs?**: `number`

Defined in: herdr.ts:198

启动就绪等待预算毫秒（>3000 且 ≤300000，缺省 herdr 30s）。
