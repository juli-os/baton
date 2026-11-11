# @juli-os/baton

juli-os 基础件：终端遥控器（零 npm 依赖）。

baton 只装遥控能力：tmux / herdr 双后端的会话遥控（建会话、发文本、抓 pane、杀会话）、提交确认与入队投递、PTY attach、正交后端工厂（terminal / hookSpecs / listSync / attach / bootCommand / applyEnv 六件随后端变化的事）。不含 juli 业务概念（CC hook 注入语义、派发管线、快照在 [@juli-os/agents](https://github.com/juli-os/agents)，它内部依赖本包并对外 re-export 保持接口不变）。

## 为什么需要它

遥控是纯能力，派发是业务。分家后（2026-11-12 架构调整第 6 步）：
- baton 谁都能用（只想遥控终端的人不必拖进派发语义）；
- agents 专注派发管线（dispatch / snapshot / hooks / skills），终端器件改依赖 baton；
- 新终端后端（第三种 workspace manager）只改 baton 的适配层，引擎与派发管线零改动。

hook 命令组（CC 注入语义）留在 agents：baton 的 backend 工厂收 `hookSpecs` 工厂注入，缺省空组——agents 包装注入自己的 `defaultHookSpecs` 后行为与原先逐字一致。

## 用法

```ts
import { createTmuxClient, createAgentBackend, createHerdrClient } from '@juli-os/baton';

const tmux = createTmuxClient({});                        // default socket（可选 socketPath）
await tmux.newSession('juli-reply', '/work');             // 建会话
const sent = await tmux.sendTextConfirmed('juli-reply', '任务文本');  // Result<SubmitStats>
const pane = await tmux.capturePane('juli-reply', 2000);  // Result<string>

const backend = createAgentBackend({ backend: 'herdr', herdrSession: 'juli' }); // tmux|herdr 正交工厂
await backend.terminal.newSession('juli-dev', '/work');   // 同一 TmuxClient 契约
```

接口返回 `Result`——错误是值不是异常，端口边界的调用方自己决定降级。

## CLI

```
baton list [--socket=/path]                  # 列 tmux 会话名（缺省 default socket）
baton capture --session=NAME [--lines=40]    # 抓会话 pane 尾部到 stdout
```

一条命令一个动作，全部调用包自己的导出函数。

## 文档

本仓文档被动生成：`npm run docs:gen`（README 镜像 + 架构图 + typedoc API），CI 校验生成物不漂移。

License: Apache-2.0
