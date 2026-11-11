**@juli-os/baton**

***

# @juli-os/baton

## Interfaces

- [AgentBackend](interfaces/AgentBackend.md)
- [AgentBackendOpts](interfaces/AgentBackendOpts.md)
- [FakeHerdr](interfaces/FakeHerdr.md)
- [HerdrAgentInfo](interfaces/HerdrAgentInfo.md)
- [HerdrClient](interfaces/HerdrClient.md)
- [HerdrClientOpts](interfaces/HerdrClientOpts.md)
- [HerdrManagedAgentStart](interfaces/HerdrManagedAgentStart.md)
- [HerdrWireResponse](interfaces/HerdrWireResponse.md)
- [HookSpec](interfaces/HookSpec.md)
- [PtyOpts](interfaces/PtyOpts.md)
- [PtySession](interfaces/PtySession.md)
- [SubmitStats](interfaces/SubmitStats.md)
- [TmuxClient](interfaces/TmuxClient.md)
- [TmuxSessionInfo](interfaces/TmuxSessionInfo.md)

## Type Aliases

- [AgentBackendKind](type-aliases/AgentBackendKind.md)
- [HookSpecFactory](type-aliases/HookSpecFactory.md)
- [TerminalKey](type-aliases/TerminalKey.md)

## Variables

- [DEFAULT\_PTY\_COLS](variables/DEFAULT_PTY_COLS.md)
- [DEFAULT\_PTY\_ROWS](variables/DEFAULT_PTY_ROWS.md)
- [emptyHookSpecs](variables/emptyHookSpecs.md)
- [HERDR\_BIN](variables/HERDR_BIN.md)
- [TMUX\_BIN](variables/TMUX_BIN.md)

## Functions

- [attachTmuxPty](functions/attachTmuxPty.md)
- [createAgentBackend](functions/createAgentBackend.md)
- [createHerdrClient](functions/createHerdrClient.md)
- [createPty](functions/createPty.md)
- [createTmuxClient](functions/createTmuxClient.md)
- [herdrAttach](functions/herdrAttach.md)
- [herdrAttachCommand](functions/herdrAttachCommand.md)
- [herdrBootCommand](functions/herdrBootCommand.md)
- [herdrHookSpecs](functions/herdrHookSpecs.md)
- [herdrListSync](functions/herdrListSync.md)
- [herdrRequest](functions/herdrRequest.md)
- [herdrSocketPath](functions/herdrSocketPath.md)
- [inputBoxState](functions/inputBoxState.md)
- [paneLabelOf](functions/paneLabelOf.md)
- [promptFingerprints](functions/promptFingerprints.md)
- [ptyAvailable](functions/ptyAvailable.md)
- [resolveHerdrBin](functions/resolveHerdrBin.md)
- [resolveTmuxBin](functions/resolveTmuxBin.md)
- [startFakeHerdr](functions/startFakeHerdr.md)
- [tmuxAttachCommand](functions/tmuxAttachCommand.md)
- [tmuxEnv](functions/tmuxEnv.md)
- [tmuxListSync](functions/tmuxListSync.md)
- [translateKey](functions/translateKey.md)
- [writeAgentEnvFile](functions/writeAgentEnvFile.md)
