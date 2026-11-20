// GENERATED — TypeScript types for @bongos/client (task 1995; field-level
// request typing added in task 2050 / ADR 0118). DO NOT EDIT BY HAND.
export declare const API_VERSION: string;
export declare const DEFAULT_BASE_URL: string;

// Request-body + shared types, generated from the OpenAPI components.schemas.
export interface ApiErrorObject { code: string; message: string; details?: unknown }
export interface DeleteAgentsNameResponse { ok: boolean; deleted: unknown }
export interface DeleteAiStudioKeysProviderResponse { key: unknown; removed: unknown }
export interface DeleteAutonomyRunnersHostResponse { removed: boolean; host: unknown; had_own_login: boolean }
export interface DeleteBlockersIdLinkTaskIdResponse { ok: boolean; unlinked: boolean; released: unknown }
export interface DeleteChatMessagesIdPinResponse { message_id: unknown; pinned: boolean }
export interface DeleteChatMessagesIdResponse { message: unknown }
export interface DeleteChatMutesBuilderIdResponse { builder_id: unknown; muted: boolean }
export interface DeleteChatOwnerResponse { chat_owner: unknown }
export interface DeleteConnectionsIdResponse { outcome: unknown }
export interface DeleteDependenciesResponse { ok: boolean }
export interface DeleteGovernmentAssignmentsBuilderIdRankKeyResponse { ok: boolean; builder_id: unknown; rank_key: unknown; removed: unknown }
export interface DeleteGovernmentRanksRankKeyPermissionsPermissionKeyResponse { ok: boolean; rank_key: unknown; permission_key: unknown; removed: unknown }
export interface DeleteGovernmentRanksRankKeyResponse { ok: boolean; rank_key: unknown; deleted: boolean }
export interface DeleteGuildRequestsIdResponse { outcome: unknown }
export interface DeleteGuildsSlugMembersHandleResponse { outcome: unknown }
export interface DeleteGuildsSlugMembershipResponse { outcome: unknown }
export interface DeleteGuildsSlugResponse { outcome: unknown }
export interface DeleteInboxIdSparkResponse { idea: unknown; sparked: boolean; unchanged: boolean }
export interface DeleteMeFilterViewsIdResponse { page: unknown; views: unknown }
export interface DeleteMeSignInMethodsProviderResponse { ok: boolean }
export interface DeleteMemoryFileResponse { deleted: boolean; builder_id: unknown; path: unknown }
export interface DeleteNotesIdResponse { ok: boolean }
export interface DeleteProvisioningInstancesIdEnvManifestVarIdResponse { ok: boolean; removed: boolean; message: unknown }
export interface DeleteProvisioningInstancesIdGrantsGrantIdResponse { ok: boolean; revoked: boolean }
export interface DeleteSpecialitiesIdDocumentsDocIdResponse { ok: boolean }
export interface DeleteTasksIdCriteriaCriterionIdResponse { ok: boolean; removed: unknown }
export interface DeleteTasksIdDependenciesDepIdResponse { ok: boolean; removed: unknown }
export interface DeleteTasksIdVisualResponse { ok: boolean; visual_url: unknown }
export interface DeleteTasksIdVisualsSlotResponse { ok: boolean; slot: unknown; visual_url: unknown }
export interface ErrorEnvelope { error: ApiErrorObject }
export interface GetAccessRequestsInvitesResponse { invites: unknown }
export interface GetAccessRequestsResponse { requests: unknown }
export interface GetAccessRequestsStatusResponse { github_login: unknown; status: unknown; admitted: unknown }
export interface GetAchievementsResponse { achievements: unknown }
export interface GetAgentRunsIdResponse { ok: boolean; run: unknown }
export interface GetAgentsNameResponse { ok: boolean; agent: unknown }
export interface GetAgentsResponse { ok: boolean; agents: unknown; counts: unknown; vocabulary: unknown }
export interface GetAiStudioBalanceResponse { payments: unknown; test_mode: boolean; price_multiplier: unknown; max_cost_micro: unknown; balance: unknown; ledger: unknown }
export interface GetAiStudioKeysResponse { storage_configured: unknown; keys: unknown }
export interface GetAiStudioRequestsIdResponse { request: unknown }
export interface GetAiStudioRequestsResponse { requests: unknown }
export interface GetAiStudioStatusResponse { ok: boolean; module: unknown; terms: unknown; adult: unknown }
export interface GetAiStudioTopupQuoteResponse { quote: unknown; min_micro: unknown; max_micro: unknown }
export interface GetArtistGateResponse { ok: boolean; mode: unknown; since: unknown; holds: boolean; truncated: unknown; reviews: unknown; halt: unknown }
export interface GetAuditLogResponse { rows: unknown; page: unknown }
export interface GetAuthWebAdmissionStatusResponse { admitted: boolean }
export interface GetAutonomyGoalRequestsResponse { requests: unknown }
export interface GetAutonomyMeGoalRequestsResponse { goal_ids: unknown }
export interface GetAutonomyRunnersAllResponse { builders: unknown }
export interface GetAutonomyRunnersResponse { runners: unknown; none: unknown }
export interface GetAutonomyRunsResponse { routine: unknown; limit: unknown; runs: unknown }
export interface GetBackupStatusResponse { backup_dir: unknown; db_name: unknown; latest_dump: unknown; stale: unknown; age_hours: unknown; trigger_running: unknown }
export interface GetBlockersIdResponse { blocker: unknown }
export interface GetBlockersResponse { blockers: unknown; page: unknown }
export interface GetBuildersCardStateResponse { builders: unknown }
export interface GetBuildersDirectoryResponse { builders: unknown }
export interface GetBuildersIdActiveClaimsResponse { builder_id: unknown; claims: unknown; stale_hours: unknown; stale_hours_source: unknown }
export interface GetBuildersIdActivityResponse { builder_id: unknown; section: unknown; role: unknown; rows: unknown; total: unknown }
export interface GetBuildersIdOnboardingResponse { builder_id: unknown; onboarding: unknown }
export interface GetBuildersIdProfileResponse { builder: unknown; shipped_count: unknown; recent_ships: unknown; achievements: unknown; roles: unknown; cross_project?: unknown; handle?: unknown }
export interface GetBuildersMePendingRankChangeResponse { change: unknown; greeting?: unknown }
export interface GetBuildersRosterResponse { builders: unknown; stale_hours: unknown; stale_hours_source: unknown }
export interface GetChatCardsSearchResponse { results: unknown }
export interface GetChatChannelsIdMembersResponse { members: unknown; member_count: unknown }
export interface GetChatChannelsResponse { channels: unknown; can_make_announcements: unknown }
export interface GetChatConversationsIdFilesResponse { files: unknown; max_bytes: unknown }
export interface GetChatConversationsIdMentionableResponse { builders: unknown }
export interface GetChatConversationsIdMessagesResponse { messages: unknown; history_days: unknown; history_floor: unknown }
export interface GetChatConversationsIdPinsResponse { pins: unknown }
export interface GetChatConversationsIdResponse { conversation: unknown }
export interface GetChatConversationsIdSeenResponse { seen_message_id: unknown }
export interface GetChatConversationsResponse { conversations: unknown }
export interface GetChatDirectResponse { conversations: unknown }
export interface GetChatGoalRoomsResponse { rooms: unknown }
export interface GetChatGoalsGoalIdRoomResponse { conversation: unknown }
export interface GetChatGroupsResponse { groups: unknown }
export interface GetChatLobbyResponse { conversation: unknown; member_count: unknown; joined_at: unknown }
export interface GetChatMentionsResponse { mentions: unknown }
export interface GetChatMessagesIdThreadResponse { root: unknown; replies: unknown }
export interface GetChatPeopleResponse { builders: unknown }
export interface GetChatPollsResponse { polls: unknown }
export interface GetChatPresenceResponse { me: unknown; people: unknown; beat_ms: unknown }
export interface GetChatSearchResponse { q: unknown; messages: unknown }
export interface GetChatSettingsResponse { history_days: unknown; source: unknown; invalid: unknown; default_history_days: unknown }
export interface GetChatUnreadResponse { total: unknown; silenced: unknown; conversations: unknown }
export interface GetCliCommandsResponse { version: unknown; groups: unknown }
export interface GetClosenessForMeResponse { closeness: unknown; count: unknown; returned: unknown }
export interface GetClosenessWeightsResponse { weights: unknown; window_days: unknown; note: unknown }
export interface GetClosenessWithBuilderIdResponse { closeness: unknown; why: unknown }
export interface GetCommunityLeaderboardResponse { window: unknown; since: unknown; discipline: unknown; count: unknown; results: unknown; page: unknown }
export interface GetCommunitySearchResponse { query: unknown; discipline: unknown; count: unknown; results: unknown; page: unknown }
export interface GetConnectionsDegreeHandleResponse { handle: unknown; degree: unknown; mutuals: unknown; mutual_count: unknown; truncated: unknown }
export interface GetConnectionsRequestsResponse { incoming: unknown; outgoing: unknown; incoming_count: unknown; outgoing_count: unknown }
export interface GetConnectionsResponse { connections: unknown; count: unknown }
export interface GetConnectionsSuggestionsResponse { suggestions: unknown; count: unknown }
export interface GetCopyDeskArtistsIdPagesResponse { rows: unknown; total: unknown; inventory_known: unknown; page: unknown }
export interface GetCoreUpdateResponse { ok: boolean; update: unknown; held: unknown; moved: unknown }
export interface GetCoreUpgradesResponse { ok: boolean; running: unknown; limit: unknown; upgrades: unknown }
export interface GetDiscordChannelsPlanResponse { ok: boolean; guild_id: unknown; op_count: unknown; ops: unknown; warnings: unknown }
export interface GetDiscordChannelsSnapshotResponse { ok: boolean; guild_id: unknown; config: unknown; warnings: unknown }
export interface GetDoneWhenPendingReviewResponse { criteria: unknown; count: unknown }
export interface GetFirstReadCatalogResponse { available: unknown; modules: unknown }
export interface GetFirstReadPromptResponse { schema: unknown; file: unknown; prompt: unknown; example: unknown; limits: unknown; catalog: unknown }
export interface GetFrontDoorGuideMineResponse { ok: boolean; conversation: unknown }
export interface GetGithubOrgsOrgResponse { org: unknown }
export interface GetGithubRepoResponse { ok: boolean; repo: unknown; private_deployable: boolean }
export interface GetGithubReposResponse { repos: unknown }
export interface GetGoalTaskRelevancePendingResponse { flags: unknown; count: unknown }
export interface GetGoalsIdConflictsResponse { ok: boolean; goal_id: unknown; conflicts: unknown; cross_goals_considered: unknown }
export interface GetGoalsIdRequestsResponse { requests: unknown }
export interface GetGoalsIdResponse { goal: unknown; members: unknown; criteria: unknown; dependencies: unknown; criterionless_task_count: unknown; admitted: unknown; open_tasks: unknown }
export interface GetGoalsResponse { goals: unknown }
export interface GetGoalsRollupsResponse { rollups: unknown }
export interface GetGovernmentAsksUnclearResponse { ok: boolean; matters: unknown }
export interface GetGovernmentAssignmentsResponse { assignments: unknown }
export interface GetGovernmentPermissionsResponse { permissions: unknown; principals: unknown }
export interface GetGovernmentRanksResponse { ranks: unknown }
export interface GetGradesByBuilderResponse { window_days: unknown; builders: unknown }
export interface GetGuildsResponse { order: unknown; count: unknown; results: unknown; page: unknown }
export interface GetGuildsSlugMembersResponse { guild: unknown; you: unknown; members: unknown; count: unknown }
export interface GetGuildsSlugRequestsResponse { incoming: unknown; outgoing: unknown; incoming_count: unknown; outgoing_count: unknown }
export interface GetGuildsSlugResponse { guild: unknown; members: unknown; size: unknown; totals: unknown }
export interface GetHealthzResponse { ok: boolean; auth_configured: unknown }
export interface GetHelpRequestsArchiveResponse { asked_of_you: unknown; asked_of_others: unknown; count: unknown; crafts: unknown }
export interface GetHelpRequestsForMeResponse { help_requests: unknown; count: unknown; crafts: unknown }
export interface GetHelpRequestsIdRepliesResponse { replies: unknown; count: unknown }
export interface GetHelpRequestsMineResponse { help_requests: unknown; count: unknown }
export interface GetHelpRequestsResponse { help_requests: unknown; count: unknown }
export interface GetInboxAwaitingNodResponse { awaiting: unknown; count: unknown }
export interface GetInboxByBuilderIdResponse { builder_id: unknown; ideas: unknown; total: unknown; limit: unknown; offset: unknown }
export interface GetInboxIdResponse { idea: unknown }
export interface GetInboxResponse { ideas: unknown; open_count: unknown }
export interface GetInboxRottingResponse { rows?: unknown; count?: unknown; scope?: unknown; timer?: unknown; cutoff?: unknown; ok?: boolean; tier?: unknown; id?: unknown; watered_at?: unknown }
export interface GetInboxSparksResponse { sparks: unknown; count: unknown }
export interface GetInboxTemplateResponse { template: unknown }
export interface GetInboxVotesResponse { votes: unknown }
export interface GetLeaderboardResponse { leaderboard: unknown; page: unknown }
export interface GetLearningsResponse { learnings: unknown }
export interface GetMarketWatchAskResponse { card: unknown }
export interface GetMeAchievementsResponse { unlocked: unknown }
export interface GetMeCrossProjectResponse { hide_stats: boolean; profile_state: unknown; handle: unknown; display_name: unknown; bio: unknown; links: unknown; cross_project: unknown; account_visibility: unknown; recruiter_discoverable: unknown; recruiter_discoverable_effective: unknown }
export interface GetMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface GetMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface GetMeFilterViewsResponse { page: unknown; views: unknown }
export interface GetMeGuildEngagementsResponse { engagements: unknown; count: unknown }
export interface GetMeGuildRequestsResponse { incoming: unknown; outgoing: unknown; owner_incoming: unknown; incoming_count: unknown; outgoing_count: unknown; owner_incoming_count: unknown }
export interface GetMeGuildsResponse { guilds: unknown; count: unknown }
export interface GetMePasskeysResponse { passkeys: unknown }
export interface GetMeRecentShipsResponse { ships: unknown; total: unknown }
export interface GetMeSessionsResponse { sessions: unknown }
export interface GetMeSignInMethodsResponse { methods: unknown; providers: unknown }
export interface GetMeSkillPrefsResponse { prefs: unknown; effective: unknown; defaults: unknown; known_skills: unknown; allowed_models: unknown }
export interface GetMeSoundPrefsResponse { prefs: unknown; effective: unknown; effective_map: unknown; volume: unknown; defaults: unknown; known_sounds: unknown }
export interface GetMeSpecialitiesResponse { adoptions: unknown }
export interface GetMemoryBfgBuildersBuilderIdFileResponse { builder_id: unknown; bfg_read: boolean; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryBfgBuildersBuilderIdFilesResponse { builder_id: unknown; bfg_read: boolean; count: unknown; files: unknown }
export interface GetMemoryBuildersBuilderIdFileResponse { builder_id: unknown; forensic: boolean; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryBuildersBuilderIdFilesResponse { builder_id: unknown; forensic: boolean; count: unknown; files: unknown }
export interface GetMemoryFileResponse { builder_id: unknown; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryFilesResponse { builder_id: unknown; count: unknown; files: unknown }
export interface GetMingleResponse { mingle: unknown; open_pairs: unknown; you: unknown; matching: unknown }
export interface GetModulesResponse { modules: unknown; scope: unknown; own_built: unknown; core_loaded: unknown; catalog: unknown; submit_pipeline_live: boolean }
export interface GetModulesSubmissionsResponse { submissions: unknown }
export interface GetMyProjectsInvitesResponse { invites: unknown }
export interface GetMyProjectsResponse { owned: unknown; building: unknown; applied: unknown }
export interface GetNotesResponse { count: unknown; groups: unknown; kinds: unknown }
export interface GetOverrideRequestsResponse { requests: unknown }
export interface GetPageNotesIdResponse { note: unknown; images: unknown; ideas: unknown }
export interface GetPageNotesIdeasResponse { page_path: unknown; ideas: unknown }
export interface GetPageNotesResponse { page_id: unknown; notes: unknown }
export interface GetPageNotesSiteResponse { notes: unknown }
export interface GetPayTermsResponse { pay_terms: unknown; funding_wall: unknown }
export interface GetPayTypeGatesResponse { gates: unknown }
export interface GetPayoutsApprovalsResponse { approvals: unknown }
export interface GetPayoutsBuilderPayoutsResponse { payouts: unknown; page: PageInfo }
export interface GetPayoutsGatesBuilderIdResponse { gate: unknown }
export interface GetPayoutsModuleSharesMineResponse { shares: unknown }
export interface GetPayoutsModuleSharesResponse { shares: unknown }
export interface GetPayoutsRulesResponse { rules: unknown }
export interface GetProfilesHandleResponse { account: unknown; cross_project: unknown }
export interface GetProjectManageLinkResponse { ok: boolean; link: unknown }
export interface GetProjectSettingsResponse { rows: unknown }
export interface GetProjectSettingsShipModeResponse { mode: unknown; chosen: unknown; source: unknown; sentence: unknown; choices: unknown; can_change: unknown }
export interface GetProjectsFeaturedResponse { projects: unknown; page: PageInfo }
export interface GetProjectsResponse { projects: unknown }
export interface GetProvisioningFleetResponse { instances: unknown; capacity: unknown }
export interface GetProvisioningGithubAppResumeResponse { ok: boolean; project: unknown }
export interface GetProvisioningGithubAppStatusResponse { ok: boolean; status: unknown; failure: unknown; ready: unknown; terminal: unknown; domain: unknown; instance_status: unknown; app_slug: unknown; checklist: unknown; install_url: unknown; repo: unknown; verifying: unknown; app_org: unknown; pick_up: unknown }
export interface GetProvisioningHealthResponse { module: unknown; ok: boolean; coreVersion: unknown }
export interface GetProvisioningInstancesIdEnvManifestResponse { instance: unknown; env_vars: unknown; environments: unknown; values_held: boolean; note: unknown }
export interface GetProvisioningInstancesIdGrantsResponse { grants: unknown; levels: unknown; limit: unknown }
export interface GetProvisioningInstancesIdInviteSuggestionsResponse { suggested: unknown; seeking: unknown; reason: unknown; unavailable?: unknown }
export interface GetProvisioningInstancesIdLookResponse { ok: boolean; look: unknown; options: unknown; logo_max_bytes: unknown }
export interface GetProvisioningInstancesIdRenderResponse { ok: boolean; app: unknown; sandbox: unknown; promote: unknown; env_vars: unknown; values_held: boolean }
export interface GetProvisioningInstancesIdSettingsResponse { ok: boolean; settings: unknown; planet: unknown; options: unknown }
export interface GetProvisioningInstancesResponse { instances: unknown }
export interface GetProvisioningOnboardPlanResponse { mode: unknown; steps: unknown }
export interface GetProvisioningRecommendationsResponse { recommendations: unknown }
export interface GetProvisioningSlugAvailableResponse { slug: unknown; available: unknown; reason: unknown; address: unknown }
export interface GetProvisioningStarterBundlesResponse { core: unknown; bundles: unknown; optional: unknown }
export interface GetPublicBlockersIdResponse { blocker: unknown }
export interface GetPublicBountyTableResponse { table: unknown; currency: unknown }
export interface GetPublicGradesResponse { window_days: unknown; rolling: unknown; trend: unknown; attempts: unknown; threshold: unknown; grader_version: unknown }
export interface GetPublicIdeasIdResponse { idea: unknown }
export interface GetPublicLeaderboardResponse { leaderboard: unknown; page: PageInfo }
export interface GetPublicProgressResponse { progress: unknown }
export interface GetPublicRecentShippedResponse { tasks: unknown; days: unknown; range: unknown }
export interface GetPublicRefIdsResponse { tasks: unknown; ideas: unknown; blockers: unknown }
export interface GetPublicRepoHealthResponse { window_days: unknown; latest: unknown; trend: unknown }
export interface GetPublicRepoInfoResponse { blob_base: unknown; tree_base: unknown; branch: unknown }
export interface GetPublicTasksIdResponse { task: unknown }
export interface GetPublicVersionsResponse { versions: unknown; page: PageInfo }
export interface GetRemovalProposalsResponse { pending: unknown; count: unknown }
export interface GetRenderDeployAppResponse { app: unknown }
export interface GetScoutingHandleResponse { sliver: unknown }
export interface GetScoutingResponse { builders: unknown; name_only: unknown }
export interface GetSecurityDocsResponse { docs: unknown }
export interface GetSecurityDocsSlugResponse { doc: unknown }
export interface GetSecurityReportsResponse { reports: unknown; bounty_table: unknown; statuses: unknown }
export interface GetSecurityScansResponse { scans: unknown }
export interface GetSessionsIdResponse { session: unknown }
export interface GetSessionsIdTranscriptResponse { transcript: unknown }
export interface GetSessionsMineResponse { sessions: unknown; count: unknown }
export interface GetSessionsScorecardResponse { window: unknown; rows: unknown }
export interface GetSessionsSearchResponse { sessions: unknown; count: unknown; total: unknown; totals: unknown; limit: unknown; offset: unknown; session_types: unknown }
export interface GetSoftwareUpdateResponse { ok: boolean; update: unknown; door: unknown; can_update: unknown; held: unknown; history: unknown }
export interface GetSpecialitiesIdDocumentsResponse { documents: unknown }
export interface GetSpecialitiesIdResponse { speciality: unknown }
export interface GetSpecialitiesIdSkillsResponse { speciality: unknown; adopted: boolean; enabled: unknown; skills: unknown }
export interface GetSpecialitiesInstalledSkillsResponse { skills: unknown }
export interface GetSpecialitiesOfferedResponse { suggestions: unknown }
export interface GetSpecialitiesResponse { specialities: unknown }
export interface GetSsoPubkeyResponse { alg: unknown; format: unknown; public_key_b64: unknown }
export interface GetStoreEntitlementsResponse { entitlements: unknown }
export interface GetStoreModulesKeyVersionsVersionHowtoResponse { module_key: unknown; title: unknown; version: unknown; published_at: unknown; delisted: unknown; markdown: unknown; artifact_url: unknown }
export interface GetStoreModulesLatestResponse { latest: unknown; withdrawn: unknown }
export interface GetStoreUsageReportingResponse { enabled: unknown }
export interface GetTaskRecommendationsForMeResponse { recommendations: unknown; count: unknown }
export interface GetTaskRecommendationsMineResponse { recommendations: unknown; count: unknown }
export interface GetTasksClaimableResponse { active_claims?: unknown; by_goal?: unknown; claimable_total?: unknown; claimable?: unknown }
export interface GetTasksIdCriteriaResponse { criteria: unknown }
export interface GetTasksIdDependenciesResponse { dependencies: unknown; dependents: unknown }
export interface GetTasksIdRecommendationsResponse { recommendations: unknown; count: unknown }
export interface GetTasksIdVisualsResponse { ok: boolean; task_id: unknown; slots: unknown }
export interface GetTasksNewcomerFloorResponse { disciplines: unknown }
export interface GetTasksPeerVotesFeedResponse { tasks: unknown; can_vote: unknown }
export interface GetTasksPeerVotesLookupResponse { votes: unknown }
export interface GetTasksResponse { tasks: unknown }
export interface GetUpdateStatusResponse { ok: boolean; running: unknown; updating: unknown; held: unknown }
export interface GetVersionsCloseSuggestionsResponse { suggestions: unknown }
export interface GetVersionsFocusResponse { focus_version_id: unknown; can_set: unknown }
export interface GetVersionsIdDoneWhenResponse { version_id: unknown; criteria: unknown; goals: unknown }
export interface GetVersionsProgressResponse { progress: unknown }
export interface GetVersionsResponse { versions: unknown; page: unknown }
export interface PageInfo { limit: number; offset: number; total?: number }
export interface PatchAccessRequestsIdRequest { status: string }
export interface PatchAccessRequestsIdResponse { ok: boolean; request: unknown; unchanged?: boolean }
export interface PatchAgentsNameResponse { ok: boolean; agent: unknown }
export interface PatchBuildersIdBudgetRequest { monthly_budget_usd?: unknown }
export interface PatchBuildersIdBudgetResponse { builder: unknown }
export interface PatchBuildersIdCapabilitiesRequest { server: boolean }
export interface PatchBuildersIdCapabilitiesResponse { builder: unknown }
export interface PatchBuildersIdCardRequirementRequest { require_card: boolean }
export interface PatchBuildersIdCardRequirementResponse { builder: unknown }
export interface PatchBuildersIdRankRequest { rank: string }
export interface PatchBuildersIdRankResponse { builder: unknown; previous_rank: unknown; direction: unknown; credit_delta: unknown; broadcast: unknown }
export interface PatchBuildersIdStatusRequest { status: "active" | "inactive"; reason?: string }
export interface PatchBuildersIdTesterRequest { is_tester: boolean }
export interface PatchBuildersIdTesterResponse { builder: unknown }
export interface PatchChatConversationsIdMembershipRequest { last_read_message_id?: StringifiableId; notify?: string }
export interface PatchChatConversationsIdMembershipResponse { last_read_message_id: unknown; notify: unknown }
export interface PatchChatMessagesIdRequest { body: string }
export interface PatchChatMessagesIdResponse { message: unknown }
export interface PatchChatSettingsRequest { history_days: unknown }
export interface PatchChatSettingsResponse { history_days: unknown; source: unknown; invalid: unknown; default_history_days: unknown }
export interface PatchDoneWhenCriterionIdRequest { criterion_md?: string; goal_id?: number }
export interface PatchDoneWhenCriterionIdResponse { ok: boolean; criterion: unknown; deltas: unknown; unchanged: unknown; achieved_goals: unknown }
export interface PatchGoalsIdMembersBuilderIdRequest { membership_kind: string }
export interface PatchGoalsIdMembersBuilderIdResponse { ok: boolean; member: unknown; changed: boolean }
export interface PatchGuildsSlugMembershipRequest { shown_publicly?: boolean; counted_in_totals?: unknown }
export interface PatchGuildsSlugRequest { name?: string; description?: string; visibility?: string }
export interface PatchGuildsSlugResponse { guild: unknown }
export interface PatchHelpRequestsIdRequest { status: "answered" | "withdrawn" | "open" }
export interface PatchHelpRequestsIdResponse { ok: boolean; help_request: unknown }
export interface PatchInboxIdBodyRequest { body_md: string }
export interface PatchInboxIdBodyResponse { ok: boolean; idea: unknown; delta: unknown; unchanged: unknown }
export interface PatchInboxIdRequest { status?: "open" | "promoted" | "discarded" | "merged"; kind?: string; promoted_to_task_id?: number; reviewed_at?: unknown; merged_into_idea_id?: number; triage_note?: string }
export interface PatchInboxIdResponse { idea: unknown }
export interface PatchMarketWatchSettingsRequest { enabled?: unknown; monthly_cap_usd?: unknown; cadence?: unknown }
export interface PatchMeCheckoutFreshnessRequest { behind: number; branch?: string; reason: string }
export interface PatchMeCheckoutFreshnessResponse { ok: boolean; checkout: unknown }
export interface PatchMeCoreMoveSeenRequest { id: string }
export interface PatchMeCoreMoveSeenResponse { ok: boolean; seen: unknown }
export interface PatchMeCrossProjectRequest { hide_stats?: boolean; account_visibility?: string; recruiter_discoverable?: boolean }
export interface PatchMeCrossProjectResponse { hide_stats: boolean; account_visibility: unknown; recruiter_discoverable: unknown; recruiter_discoverable_effective: unknown }
export interface PatchMeDisciplinesRequest { preferred_disciplines: string[]; main_discipline?: string }
export interface PatchMeDisciplinesResponse { builder: unknown; onboarding: unknown }
export interface PatchMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface PatchMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface PatchMeFilterViewsIdRequest { page: string; name?: string; is_default?: boolean }
export interface PatchMeFilterViewsIdResponse { page: unknown; view: unknown; views: unknown }
export interface PatchMeHallViewRequest { view: string }
export interface PatchMeHandleRequest { handle: string }
export interface PatchMeHandleResponse { handle: unknown; previous_handle: unknown }
export interface PatchMeProfileRequest { display_name?: unknown; bio?: unknown; links?: unknown }
export interface PatchMeProfileResponse { display_name: unknown; bio: unknown; links: unknown }
export interface PatchMeSkillPrefsResponse { prefs: unknown; effective: unknown; defaults: unknown; known_skills: unknown; allowed_models: unknown }
export interface PatchMeSoundPrefsResponse { prefs: unknown; effective: unknown; effective_map: unknown; volume: unknown; defaults: unknown; known_sounds: unknown }
export interface PatchNotesIdRequest { kind: string }
export interface PatchNotesIdResponse { ok: boolean; note: unknown }
export interface PatchPageNotesIdRequest { body_md: string }
export interface PatchPageNotesIdResponse { ok: boolean; updated_at: unknown }
export interface PatchProjectSettingsFundingWallRequest { mode: string }
export interface PatchProjectSettingsPayTermsRequest { terms: unknown }
export interface PatchProjectSettingsPayTermsResponse { ok: boolean; row: unknown }
export interface PatchProjectSettingsRotDaysRequest { days: number }
export interface PatchProjectSettingsRotDaysResponse { ok: boolean; rot_days: unknown; source: unknown; describe: unknown }
export interface PatchProjectSettingsShipModeRequest { mode: string }
export interface PatchProjectSettingsShipModeResponse { ok: boolean; mode: unknown; chosen: unknown; source: unknown; sentence: unknown }
export interface PatchProjectSettingsSpendCapRequest { usd?: unknown }
export interface PatchProjectSettingsSpendCapResponse { ok: boolean; on: unknown; usd: unknown; sentence: unknown }
export interface PatchProjectSettingsTweakAutopickupRequest { mode?: string; cap?: number; rank_caps?: Record<string, unknown> }
export interface PatchProjectsIdFeaturedRequest { featured: boolean }
export interface PatchProjectsIdFeaturedResponse { project: unknown }
export interface PatchProjectsIdStatusRequest { status: string }
export interface PatchProjectsIdStatusResponse { project: unknown }
export interface PatchProvisioningInstancesIdDetailRequest { description?: string; detail?: Record<string, unknown>; modules?: string[]; type?: string }
export interface PatchProvisioningInstancesIdDetailResponse { ok: boolean; description: unknown; detail: unknown; options: unknown; soft_limits: unknown; publish: unknown; modules: unknown; type: unknown }
export interface PatchProvisioningInstancesIdEnvManifestVarIdRequest { name?: string; description?: string; environments?: unknown[]; required?: boolean }
export interface PatchProvisioningInstancesIdEnvManifestVarIdResponse { ok: boolean; env_var: unknown; values_held: boolean }
export interface PatchProvisioningInstancesIdLookRequest { look?: string; night_tint?: string; accent?: string }
export interface PatchProvisioningInstancesIdSettingsResponse { ok: boolean; saved: unknown; planet: unknown; push: unknown }
export interface PatchSpecialitiesIdRequest { name?: string; summary?: string; contract_md?: string; visibility?: string; sellable?: boolean; skills?: string[] }
export interface PatchSpecialitiesIdResponse { speciality: unknown }
export interface PatchTaskRecommendationsIdRequest { status: "declined" | "withdrawn" }
export interface PatchTaskRecommendationsIdResponse { ok: boolean; recommendation: unknown }
export interface PatchTasksIdRequest { kind?: string; discipline?: string; requires_rank?: string; module_key?: string; goal_id?: number; parent_task_id?: StringifiableId; parallel_safe?: unknown; newcomer_friendly?: boolean; xenos_claimable?: boolean; security_sensitive?: boolean; automation_tag?: string; needs?: unknown; needs_migration?: boolean; description?: string; title?: string; priority?: unknown; value_summary?: string; status?: unknown; pay_terms?: unknown }
export interface PatchTasksIdShortNameRequest { short_name: string }
export interface PatchTasksIdShortNameResponse { task: unknown }
export interface PostAccessRequestsInviteRequest { github_login: string; note?: string }
export interface PostAccessRequestsInviteResponse { ok: boolean; already_invited?: boolean; github_login?: unknown; request?: unknown }
export interface PostAccessRequestsRequest { github_login: string; display_name?: string; note?: string }
export interface PostAccessRequestsResponse { ok: boolean; request?: unknown; already_pending?: boolean }
export interface PostAgentsNameDisableResponse { ok: boolean; agent: unknown }
export interface PostAgentsNameEnableResponse { ok: boolean; agent: unknown }
export interface PostAgentsNameInvokeRequest { input?: string }
export interface PostAgentsNameInvokeResponse { ok: boolean; run_id: unknown; poll: unknown; message: unknown }
export interface PostAgentsResponse { ok: boolean; agent: unknown }
export interface PostAiStudioRequestsRequest { prompt: string; file_ids: unknown[]; pay_with?: "own" | "ours" | "openrouter" | "gemini" }
export interface PostAiStudioRequestsResponse { request: unknown }
export interface PostAiStudioTopupRequest { amount_usd: number }
export interface PostAiStudioTopupResponse { topup: unknown; balance: unknown }
export interface PostAiStudioUploadsRequest { content_type: string; data: string; name?: string }
export interface PostAiStudioUploadsResponse { file: unknown }
export interface PostAuthBackchannelLogoutRequest { logout_token: string }
export interface PostAuthBackchannelLogoutResponse { ok: boolean }
export interface PostAuthCliTokenIssueResponse { ok: boolean; token: unknown; expires_at: unknown; builder_login: unknown; api_base: unknown; paste_command: unknown; paste_command_windows: unknown }
export interface PostAuthDeviceApproveRequest { user_code: string; decision: "approve" | "deny" }
export interface PostAuthDeviceExchangeRequest { assertion: string }
export interface PostAuthDeviceExchangeResponse { token: unknown; builder: unknown }
export interface PostAuthDevicePollRequest { device_code: string }
export interface PostAuthDeviceStartRequest { approve_in_browser?: boolean }
export interface PostAuthDiscordUnlinkResponse { ok: boolean; unlinked: unknown }
export interface PostAuthHubLeaveRequest { leave_token: string }
export interface PostAuthHubLeaveResponse { ok: boolean }
export interface PostAuthLogoutResponse { ok: boolean }
export interface PostAuthRevokeAllRequest { builder_id?: StringifiableId }
export interface PostAuthRevokeAllResponse { ok: boolean; revoked: unknown }
export interface PostAuthRevokeRequest { session_id?: StringifiableId }
export interface PostAuthRevokeResponse { ok: boolean; revoked: unknown }
export interface PostAuthRunnerCodeExchangeRequest { code: string }
export interface PostAuthRunnerCodeExchangeResponse { ok: boolean; token: unknown; session_id: unknown; builder_login: unknown; label: unknown; api_base: unknown }
export interface PostAuthRunnerCodeIssueRequest { label?: string }
export interface PostAuthRunnerCodeIssueResponse { ok: boolean; code: unknown; expires_at: unknown; api_base: unknown }
export interface PostAutonomyBuildersBuilderIdPauseRequest { paused: boolean; reason?: string }
export interface PostAutonomyFenceGoalsRequest { goal_id: StringifiableId; note?: string }
export interface PostAutonomyFenceGoalsResponse { goal: unknown }
export interface PostAutonomyFencePriorityRequest { goal_id?: StringifiableId }
export interface PostAutonomyFenceRequest { enabled: boolean; reason?: string }
export interface PostAutonomyGoalRequestsIdDecideRequest { approve: boolean }
export interface PostAutonomyGoalRequestsIdDecideResponse { request: unknown; goal?: unknown }
export interface PostAutonomyGoalsGoalIdRequestRequest { note?: string }
export interface PostAutonomyGoalsGoalIdRequestResponse { request: unknown }
export interface PostAutonomyHeartbeatRequest { host: string; pid?: number; started_at?: string; mode?: string; consecutive_failures?: number; last_event?: string; working_task_id?: number; working_goal_id?: number; head?: string; disk_head?: string; main_head?: string; claude_account?: string; hold_until?: number }
export interface PostAutonomyHeartbeatResponse { ok: boolean; heartbeat: unknown }
export interface PostAutonomyRunnersHostRunRequest { run: boolean }
export interface PostAutonomyRunnersHostRunResponse { host: unknown; run_requested: unknown; run_changed_at: unknown }
export interface PostBackupTriggerResponse { ok: boolean; message: unknown; started_at: unknown }
export interface PostBlockersIdLinkRequest { task_id: StringifiableId }
export interface PostBlockersIdLinkResponse { ok: boolean; blocked: unknown }
export interface PostBlockersIdResolveRequest { resolution_note?: string }
export interface PostBlockersRequest { title: string; body_md?: string; source?: string; source_ref?: string; ask?: Record<string, unknown>; checked?: string }
export interface PostBlockersResponse { skipped?: boolean; reason?: unknown; blocker?: unknown; ask?: unknown; ask_saved?: boolean }
export interface PostChatChannelsIdLeaveResponse { left: boolean; was_private: boolean }
export interface PostChatChannelsIdMembersRequest { builder_id: StringifiableId }
export interface PostChatConversationsIdFilesResponse { message: unknown }
export interface PostChatConversationsIdLeaveResponse { left: boolean; conversation_id: unknown }
export interface PostChatConversationsIdMembersRequest { builder_ids: unknown }
export interface PostChatConversationsIdMembersResponse { added: unknown; member_count: unknown }
export interface PostChatConversationsIdMessagesRequest { body: string }
export interface PostChatConversationsIdMessagesResponse { message: unknown }
export interface PostChatConversationsIdPollsRequest { question: string; options: unknown[] }
export interface PostChatConversationsIdPollsResponse { message: unknown; poll: unknown }
export interface PostChatConversationsIdTypingResponse { sent: boolean; ttl_ms: unknown }
export interface PostChatConversationsRequest { kind: string; name?: string; topic?: string; is_private?: boolean; owner_only_posting?: boolean; member_ids?: unknown }
export interface PostChatDirectRequest { builder_id: StringifiableId }
export interface PostChatGroupsRequest { member_ids: unknown; name?: string }
export interface PostChatGroupsResponse { conversation: unknown; member_count: unknown }
export interface PostChatMessagesIdPinResponse { message_id: unknown; pinned: boolean }
export interface PostChatMessagesIdReactionsRequest { emoji: string; on?: boolean }
export interface PostChatMessagesIdReactionsResponse { message_id: unknown; reactions: unknown }
export interface PostChatMessagesIdRemoveResponse { message: unknown }
export interface PostChatMessagesIdRepliesRequest { body: string; also_in_room?: boolean }
export interface PostChatMessagesIdRepliesResponse { message: unknown }
export interface PostChatMutesRequest { builder_id: StringifiableId; hours?: unknown }
export interface PostChatMutesResponse { mute: unknown }
export interface PostChatPollsMessageIdVoteRequest { option_id: StringifiableId }
export interface PostChatPollsMessageIdVoteResponse { poll: unknown }
export interface PostChatPresenceBeatRequest { idle?: boolean }
export interface PostChatPresenceBeatResponse { me: unknown; beat_ms: unknown }
export interface PostClaimsBatchReleaseRequest { claim_ids: unknown[]; force?: boolean }
export interface PostClaimsBatchReleaseResponse { released: unknown; failures: unknown }
export interface PostClaimsBatchRequest { task_ids: unknown[]; worktree_name?: string; bind_session?: boolean }
export interface PostClaimsBatchResponse { claims: unknown }
export interface PostClaimsBatchValidateRequest { task_ids: unknown[] }
export interface PostClaimsIdReleaseOnBehalfRequest { reason: string }
export interface PostClaimsIdResolveRequest { outcome: "shipped" | "abandoned" | "partial"; notes_md?: string; value_summary?: string; verification?: Record<string, unknown>; force?: boolean; committed_files?: string[]; sandbox_review?: Record<string, unknown>; resolver_worktree?: string }
export interface PostClaimsRequest { task_id: StringifiableId; worktree_name?: string; head_sha?: string; bind_session?: boolean; enforce_touches?: boolean; auto_pickup?: boolean }
export interface PostClaimsResponse { claim: unknown; task: unknown; just_unlocked: unknown; overlap_warning: unknown; sibling_overlap_warning: unknown; page_notice: unknown; reward: unknown }
export interface PostConnectionsIdAcceptResponse { status: unknown }
export interface PostConnectionsRequest { handle: string; note?: string }
export interface PostConnectionsResponse { status: unknown }
export interface PostCopyDeskFlagsIdCloseRequest { status: string; resolution_note: string; resolved_task_id?: number }
export interface PostCopyDeskFlagsIdCloseResponse { ok: boolean; flag: unknown }
export interface PostCopyDeskFlagsRequest { scope?: string; surface: string; string_id?: string; reason: string; kind?: string }
export interface PostCopyDeskFlagsResponse { ok: boolean; flag: unknown }
export interface PostCopyDeskPagesPageIdApproveRequest { task_id?: string }
export interface PostCopyDeskPagesPageIdApproveResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; status_after: unknown; land: unknown; next: unknown }
export interface PostCopyDeskPagesPageIdAsksRequest { reason: string }
export interface PostCopyDeskPagesPageIdDraftDocxResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; draft: unknown; counter: unknown; merge: unknown }
export interface PostCopyDeskPagesPageIdReleaseRequest { note: string; task_id?: string }
export interface PostCopyDeskPagesPageIdReleaseResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; released: unknown; pr: unknown }
export interface PostCopyDeskPagesPageIdSendBackRequest { note: string; task_id?: string }
export interface PostCopyDeskPagesPageIdSendBackResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; sent_back: unknown; pr: unknown; next: unknown }
export interface PostCopyDeskProposalsRequest { string_id: string; proposed_text: string; why: string; file?: string; line?: number; flag_id?: number }
export interface PostCopyDeskProposalsResponse { ok: boolean; task: unknown; created: boolean; patch?: unknown }
export interface PostCoreUpdateStartedRequest { to: string }
export interface PostCoreUpdateStartedResponse { ok: boolean; updating: unknown }
export interface PostCostRequest { task_id?: number; amount_usd: number; category: string; description?: string; source?: string; source_ref?: string; recorded_at?: string; fresh_input_usd?: number; cache_read_usd?: number; cache_write_usd?: number; output_usd?: number; builder_id?: number; skill_name?: string }
export interface PostCostResponse { skipped?: boolean; reason?: unknown; id?: unknown; recorded_at?: unknown }
export interface PostDependenciesResponse { ok: boolean; dependency: unknown }
export interface PostDiscordChannelsReconcileResponse { ok: boolean; applied: unknown; failed: unknown; total: unknown; warnings: unknown }
export interface PostDoneWhenCriterionIdSatisfyRequest { satisfied_by_task_id?: number; override_reason?: string }
export interface PostDoneWhenCriterionIdUatRecordingResponse { ok: boolean; recording: unknown; bytes: unknown }
export interface PostDoneWhenCriterionIdUatRequest { kind: string; recording?: string; live_attested?: boolean; note?: string }
export interface PostDoneWhenCriterionIdUatResponse { ok: boolean; signoff: unknown; criterion_closed: unknown; achieved_goals: unknown; closed_versions: unknown }
export interface PostDoneWhenCriterionIdUnsatisfyRequest { reason?: string }
export interface PostDoneWhenCriterionIdUnsatisfyResponse { criterion: unknown }
export interface PostFeedbackReceiptRequest { sha256: string; kind?: "bug" | "idea" }
export interface PostFeedbackReceiptResponse { ok: boolean; receipt: unknown; hub: unknown }
export interface PostFirstReadMapsIdAcceptRequest { all?: boolean; items?: string[] }
export interface PostFirstReadMapsIdDismissRequest { items: string[] }
export interface PostFirstReadMapsRequest { map: Record<string, unknown> }
export interface PostFirstReadMapsResponse { map_id: unknown; status: unknown; items: unknown; next: unknown }
export interface PostFoundingPlanRequest { days?: Record<string, unknown>; passes?: number; advisors?: string; government?: string; expected_builders?: number; existing?: boolean }
export interface PostFoundingWorkStageProposalsRequest { answers?: Record<string, unknown>; page?: string; link?: string; rationale?: string }
export interface PostFrontDoorGuideConversationsIdAttachRequest { token: string }
export interface PostFrontDoorGuideConversationsIdAttachResponse { ok: boolean; conversation: unknown }
export interface PostFrontDoorGuideConversationsIdMessagesRequest { token: string; text: string; website?: string; starting_point?: string }
export interface PostFrontDoorGuideConversationsIdPlanRequest { token: string; website?: string }
export interface PostFrontDoorGuideConversationsRequest { website?: string; starting_point?: string }
export interface PostGithubRepoInviteRequest { github_login: string; permission?: string }
export interface PostGithubRepoVisibilityRequest { repo: string; visibility: "public" | "private" }
export interface PostGithubRepoVisibilityResponse { ok: boolean; repo: unknown; private_deployable: boolean }
export interface PostGithubReposRequest { name: string; org?: string }
export interface PostGithubReposResponse { repo: unknown }
export interface PostGithubReposUploadRequest { name?: string; org?: string; into?: string; files?: unknown[] }
export interface PostGithubReposUploadResponse { repo: unknown; uploaded: unknown }
export interface PostGoalTaskRelevanceIdDecideRequest { decision: "confirmed_gaming" | "false_positive"; note?: string }
export interface PostGoalTaskRelevanceIdDecideResponse { ok: boolean; flag: unknown }
export interface PostGoalsIdArchiveRequest { reason?: string; dispositions?: Record<string, unknown> }
export interface PostGoalsIdArchiveResponse { ok: boolean; goal: unknown; applied: unknown }
export interface PostGoalsIdConflictsResolveRequest { action: string; note?: string; touches?: string[]; first_task_id?: StringifiableId; then_task_id?: StringifiableId; task_id?: StringifiableId }
export interface PostGoalsIdConflictsResolveResponse { ok: boolean; action: unknown; first_task_id?: unknown; then_task_id?: unknown; dependencies?: unknown; claim?: unknown; task_id?: unknown; touches?: unknown; requires_rank?: unknown }
export interface PostGoalsIdInvitationsReqIdRescindResponse { ok: boolean; request: unknown }
export interface PostGoalsIdInvitationsReqIdRespondRequest { action: string }
export interface PostGoalsIdInvitationsReqIdRespondResponse { ok: boolean; action: unknown; request: unknown; member?: unknown }
export interface PostGoalsIdInvitationsRequest { note?: string; builder_id?: StringifiableId }
export interface PostGoalsIdInvitationsResponse { ok: boolean; request: unknown }
export interface PostGoalsIdJoinResponse { ok: boolean; member: unknown }
export interface PostGoalsIdLeaveResponse { ok: boolean }
export interface PostGoalsIdMembersRequest { membership_kind?: string; builder_id?: StringifiableId }
export interface PostGoalsIdMembersResponse { ok: boolean; member: unknown }
export interface PostGoalsIdMoveRequest { version_id: string; admit_reason?: string }
export interface PostGoalsIdMoveResponse { ok: boolean; goal: unknown; from_version_id: unknown; to_version_id: unknown; moved_task_ids: unknown; moved_criterion_ids: unknown; admitted: unknown }
export interface PostGoalsIdReopenResponse { ok: boolean; goal: unknown }
export interface PostGoalsIdRequestsReqIdRespondRequest { action: string }
export interface PostGoalsIdRequestsReqIdRespondResponse { ok: boolean; action: unknown; request: unknown; member?: unknown }
export interface PostGoalsIdRequestsReqIdWithdrawResponse { ok: boolean; request: unknown }
export interface PostGoalsIdRequestsRequest { note?: string }
export interface PostGoalsIdRequestsResponse { ok: boolean; request: unknown }
export interface PostGoalsIdScopeRequest { add: string[] }
export interface PostGoalsIdScopeResponse { ok: boolean; goal: unknown }
export interface PostGoalsIdTasksRequest { title: string; description?: string; touches: string[]; est_minutes?: number; priority?: number; kind?: string; discipline?: string; value_summary?: string; parent_task_id?: number; needs?: unknown }
export interface PostGoalsIdTasksResponse { ok: boolean; task: unknown; goal_id: unknown; parent_task_id: unknown; credits_reward: unknown; requires_rank: unknown }
export interface PostGoalsIdTransferRequest { builder_id?: StringifiableId }
export interface PostGoalsIdTransferResponse { ok: boolean; goal: unknown; changed: boolean }
export interface PostGoalsReorderRequest { version_id: string; ordered_ids: number[] }
export interface PostGoalsReorderResponse { ok: boolean; goals: unknown }
export interface PostGoalsRequest { version_id: string; title: string; subtitle?: string; description?: string; scope_modules?: string[]; succeeds_goal_id?: number; category_id?: number; admit_reason?: string; spec_task?: boolean }
export interface PostGoalsResponse { ok: boolean; goal: unknown; succeeds_goal_id: unknown; category_advisory: unknown; admitted: unknown; spec_task: unknown }
export interface PostGovernmentAsksCheckResponse { ok: boolean; ask: unknown; question_words: unknown; rules: unknown }
export interface PostGovernmentAsksMatterIdPassRequest { seat: string }
export interface PostGovernmentAsksMatterIdPassResponse { ok: boolean; matter_id: unknown; ask: unknown; route: unknown }
export interface PostGovernmentAsksMatterIdUnclearRequest { note?: string }
export interface PostGovernmentAsksMatterIdUnclearResponse { ok: boolean; matter_id: unknown; flag: unknown }
export interface PostGovernmentAssignmentsRequest { builder_id: number; rank_key: string }
export interface PostGovernmentBoardCharterRequest { form?: string; franchise?: string; council_rank?: string; pass_rule?: string; window_minutes?: unknown; rationale_md?: string; acknowledge_self_removal?: boolean }
export interface PostGovernmentBoardCharterResponse { ok: boolean; amendment: unknown; item: unknown; reads_as: unknown; what_happens_next: unknown; decided: unknown }
export interface PostGovernmentBoardDecisionRulesRequest { rules: unknown[]; rationale_md?: string }
export interface PostGovernmentBoardDecisionRulesResponse { ok: boolean; amendment: unknown; item: unknown; rules: unknown; decided: unknown }
export interface PostGovernmentBoardItemsItemIdVotesRequest { direction: string; reason_md?: string; section_key?: string }
export interface PostGovernmentBoardItemsItemIdWithdrawResponse { ok: boolean; item_closed: boolean; outcome: unknown; item: unknown }
export interface PostGovernmentBoardItemsRequest { subject_type: string; proposal: Record<string, unknown>; rationale_md?: string; acknowledge_self_removal?: boolean }
export interface PostGovernmentBoardItemsResponse { ok: boolean; amendment: unknown; item: unknown; decided: unknown }
export interface PostGovernmentBoardLawsRequest { enact?: unknown[]; repeal?: unknown[]; rationale_md?: string }
export interface PostGovernmentBoardLawsResponse { ok: boolean; amendment: unknown; item: unknown; proposal: unknown; decided: unknown }
export interface PostGovernmentBoardMattersRequest { area: string; title: string; detail_md?: string; action?: Record<string, unknown> }
export interface PostGovernmentBoardMattersResponse { ok: boolean; matter: unknown; item: unknown; decided: unknown }
export interface PostGovernmentBoardPresetsRequest { preset: string }
export interface PostGovernmentBoardPresetsResponse { ok: boolean; preset: unknown; amendment: unknown; item: unknown; proposal: unknown; decided: unknown }
export interface PostGovernmentBuildoutsRequest { building: string; capsule: string; name?: string; line?: string }
export interface PostGovernmentBuildoutsResponse { ok: boolean; path: unknown; buildout?: unknown; rights: unknown; matter?: unknown; item?: unknown; decided?: unknown }
export interface PostGovernmentRankSetsApplyRequest { type?: string; headcount: number }
export interface PostGovernmentRankSetsApplyResponse { ok: boolean; type: unknown; size: unknown; created: unknown; skipped: unknown }
export interface PostGovernmentRanksRankKeyResetResponse { ok: boolean; rank_key: unknown; seeded_rank: unknown; permission_count: unknown }
export interface PostGovernmentRanksRequest { rank_key: string; label: string; description?: string }
export interface PostGovernmentRanksResponse { rank: unknown }
export interface PostGovernmentTreasuryBorrowsBorrowIdAnswerRequest { key: string }
export interface PostGovernmentTreasuryBorrowsBorrowIdAnswerResponse { ok: boolean; borrow: unknown }
export interface PostGuildRequestsIdAcceptRequest { visibility?: string; counted_in_totals?: unknown }
export interface PostGuildRequestsIdAcceptResponse { status: unknown }
export interface PostGuildsRequest { slug: string; name: string; description?: string; visibility: string }
export interface PostGuildsResponse { guild: unknown }
export interface PostGuildsSlugEngagementsRequest { origin: string }
export interface PostGuildsSlugEngagementsResponse { engagement: unknown }
export interface PostGuildsSlugInvitesRequest { handles: string[] }
export interface PostGuildsSlugInvitesResponse { results: unknown; count: unknown }
export interface PostGuildsSlugRequestsRequest { counted_in_totals?: unknown }
export interface PostGuildsSlugRequestsResponse { status: unknown }
export interface PostGuildsSlugTransferRequest { handle: string }
export interface PostGuildsSlugTransferResponse { outcome: unknown }
export interface PostHelpRequestsIdRepliesRequest { body: string }
export interface PostHelpRequestsIdRepliesResponse { ok: boolean; reply: unknown }
export interface PostHelpRequestsRequest { needs_craft?: string; needs_builder_id?: number; what_is_stuck: string; task_id?: number; goal_id?: number }
export interface PostHelpRequestsResponse { ok: boolean; help_request: unknown }
export interface PostInboxIdDevelopRequest { field_values: Record<string, unknown>; template_key?: string; recommendation?: string }
export interface PostInboxIdRatifyGoalRequest { target_version: string; scope_modules?: string[]; admit_reason?: string; notes_md?: string; success_criterion?: string }
export interface PostInboxIdRatifyRequest { notes_md?: string }
export interface PostInboxIdResubmitRequest { field_values: Record<string, unknown>; template_key?: string; recommendation?: string }
export interface PostInboxIdSparkResponse { idea: unknown; sparked: boolean; unchanged: boolean }
export interface PostInboxIdVoteRequest { vote: -1 | 0 | 1 }
export interface PostInboxPreviewLandingRequest { goal_id?: number; kind?: string; grade?: string }
export interface PostInboxRequest { title: string; body_md?: string; kind?: string; suggested_version?: string; suggested_priority?: number; goal_id?: number; grade?: string; template_key?: string; field_values?: Record<string, unknown>; recommendation?: string; filed_via?: string }
export interface PostInboxScoreRequest { field_values: Record<string, unknown>; template_key?: string }
export interface PostInboxScoreResponse { score: unknown; fields: unknown; template_key: unknown }
export interface PostLearningsRequest { title: string; body_md: string; tags?: string[]; related_files?: string[]; source?: string; source_ref?: string; task_id?: number }
export interface PostLearningsResponse { skipped?: boolean; reason?: unknown; learning?: unknown }
export interface PostLlmCacheLookupRequest { cache_key?: unknown; tokens_saved_est?: unknown }
export interface PostLlmCacheLookupResponse { hit: boolean; result: unknown }
export interface PostLlmCacheStoreRequest { spec?: unknown; result_stdout?: unknown; result_cost_usd?: unknown }
export interface PostLlmCacheStoreResponse { stored: boolean; result_cost_usd?: unknown }
export interface PostMarketWatchAskAnswerRequest { week_of?: string; picks?: unknown[]; names?: unknown[]; nothing?: boolean; builder_id?: number }
export interface PostMarketWatchProposalsIdDecideRequest { decision: "approve" | "decline" }
export interface PostMarketWatchProposalsIdVoteResponse { ok: boolean; matter_id: unknown; item_id: unknown }
export interface PostMarketWatchProposalsRequest { kind: string; reason?: string; item_id?: StringifiableId; dimension?: string; value?: unknown; url?: string; log_entry_id?: StringifiableId; takeaway?: string; wrong?: unknown; scout?: string; name?: string }
export interface PostMarketWatchProposalsResponse { proposal: unknown }
export interface PostMarketWatchRulesProposalsRequest { step: string; change: Record<string, unknown>; reason: string }
export interface PostMarketWatchRulesProposalsResponse { ok: boolean; proposal: unknown }
export interface PostMeAnthropicLinkRequest { anthropic_email: string; anthropic_user_id: string }
export interface PostMeAnthropicLinkResponse { linked: unknown }
export interface PostMeCashOutsRequest { amount_cents: unknown; instruction_id: StringifiableId }
export interface PostMeFilterViewsRequest { page: string; name: string; values: Record<string, unknown>; is_default?: boolean }
export interface PostMeFilterViewsResponse { page: unknown; view: unknown; views: unknown }
export interface PostMeGuardianCosignsRequest { approval_id?: StringifiableId; rule_id?: StringifiableId; run_key?: unknown }
export interface PostMeGuardianCosignsResponse { cosigns: unknown }
export interface PostMeHowtoReadRequest { steps?: unknown[]; all?: boolean; how?: string }
export interface PostMeHowtoResetRequest { steps?: unknown[]; all?: boolean }
export interface PostMePasskeysAuthenticateOptionsResponse { options: unknown }
export interface PostMePasskeysAuthenticateVerifyRequest { response?: unknown }
export interface PostMePasskeysAuthenticateVerifyResponse { ok: boolean; valid_for_seconds: unknown }
export interface PostMePasskeysRegisterOptionsResponse { options: unknown }
export interface PostMePasskeysRegisterVerifyRequest { response?: unknown; nickname?: unknown }
export interface PostMePasskeysRegisterVerifyResponse { ok: boolean; credential_id: unknown }
export interface PostMePasskeysRemoveRequest { credential_id?: StringifiableId }
export interface PostMePasskeysRemoveResponse { ok: boolean }
export interface PostMePasskeysRenameRequest { credential_id?: StringifiableId; nickname?: unknown }
export interface PostMePasskeysRenameResponse { ok: boolean }
export interface PostMePayoutAgeRequest { tier: unknown }
export interface PostMePayoutAgeResponse { record: unknown }
export interface PostMePayoutFreezesIdAppealRequest { statement: unknown }
export interface PostMePayoutFreezesIdAppealResponse { event: unknown }
export interface PostMeSessionsRevokeAllResponse { ok: boolean; revoked: unknown }
export interface PostMeSessionsRevokeRequest { session_id?: StringifiableId }
export interface PostMeSessionsRevokeResponse { ok: boolean; revoked: unknown }
export interface PostMemoryBuildersBuilderIdBfgWriteRequest { kind?: string; slug?: string; title?: string; body_md?: string; rationale?: string; karma_delta?: unknown }
export interface PostMemoryBuildersBuilderIdBfgWriteResponse { ok: boolean; builder_id: unknown; path: unknown; kind: unknown; author: unknown; audit_id: unknown; karma_id: unknown; sha256: unknown; byte_len: unknown; updated_at: unknown }
export interface PostMemorySyncRequest { files?: unknown[] }
export interface PostMinglePairsIdDecideRequest { decision: "accepted" | "declined" }
export interface PostMinglePairsIdDecideResponse { pair: unknown }
export interface PostMingleRoundRequest { limit?: number }
export interface PostMingleRoundResponse { paired: unknown; count: unknown; skipped: unknown }
export interface PostModulesKeyEnableRequest { enabled?: unknown }
export interface PostModulesKeyEnableResponse { ok: boolean; key: unknown; enabled: unknown; effective: unknown; source: unknown; restart_pending: unknown; note: unknown }
export interface PostModulesKeyGeneralOnlyRequest { general_only: boolean }
export interface PostModulesKeySubmitRequest { signed_by?: string }
export interface PostModulesKeySubmitResponse { ok: boolean; submission: unknown }
export interface PostModulesTestingRequest { tester: boolean }
export interface PostMyProjectsClientIdLeaveResponse { ok: boolean; left: unknown }
export interface PostMyProjectsInvitesClientIdDeclineResponse { ok: boolean; accepted: boolean }
export interface PostMyProjectsJoinRequest { origin: string; note?: string; guild?: string }
export interface PostMyProjectsJoinResponse { ok: boolean; status: unknown; project: unknown; message: unknown }
export interface PostNotesRequest { body: string; kind?: string; task_id?: number; goal_id?: number }
export interface PostNotesResponse { ok: boolean; note: unknown }
export interface PostNpmReleasePreviewRequest { version: string }
export interface PostNpmReleaseReleaseRequest { version: string }
export interface PostOverrideRequestsIdDecideRequest { decision: string; note?: string }
export interface PostPageNotesIdImagesRequest { content_type: string; data: string; name?: string }
export interface PostPageNotesIdImagesResponse { image: unknown }
export interface PostPageNotesIdSubmitResponse { ok: boolean; status: unknown; note_id: unknown }
export interface PostPageNotesIdeasRequest { page_id: string; page_path?: string; page_title?: string; body_md: string }
export interface PostPageNotesIdeasResponse { ideas: unknown; split_by: unknown }
export interface PostPageNotesRequest { page_id: string; page_path?: string; page_title?: string }
export interface PostPageNotesResponse { note: unknown; images: unknown }
export interface PostPayoutsAgeRecordsRequest { builder_id: StringifiableId; tier: unknown }
export interface PostPayoutsAgeRecordsResponse { record: unknown }
export interface PostPayoutsApproveRequest { recipient_id?: StringifiableId; amount_cents?: unknown; currency?: unknown; note?: unknown }
export interface PostPayoutsApproveResponse { approval: unknown }
export interface PostPayoutsBuilderPayoutsRequest { approval_id: StringifiableId; task_id: StringifiableId }
export interface PostPayoutsFreezesIdDecideRequest { decision: unknown; statement: unknown }
export interface PostPayoutsFreezesIdDecideResponse { event: unknown }
export interface PostPayoutsFreezesRequest { builder_id: StringifiableId; notice_text: unknown; owed_cents?: unknown }
export interface PostPayoutsFreezesResponse { freeze: unknown }
export interface PostPayoutsGuardiansRequest { builder_id: StringifiableId; guardian_id: StringifiableId; guardian_account?: unknown; active: unknown }
export interface PostPayoutsGuardiansResponse { record: unknown }
export interface PostPayoutsModuleSalesRequest { processor_sale_ref: unknown }
export interface PostPayoutsModuleSharesIdPayRequest { approval_id: StringifiableId }
export interface PostPayoutsModuleSplitsModuleKeyRequest { seller_id: StringifiableId; seller_bps: unknown; contributors_bps: unknown; credit_row_kinds?: unknown }
export interface PostPayoutsModuleSplitsModuleKeyResponse { rule: unknown }
export interface PostPayoutsNdasRequest { builder_id: StringifiableId; status: unknown; nda_version: unknown; reference?: unknown }
export interface PostPayoutsNdasResponse { record: unknown }
export interface PostPayoutsRulesIdNarrowRequest { terms: unknown; note?: unknown }
export interface PostPayoutsRulesIdNarrowResponse { approval: unknown }
export interface PostPayoutsRulesIdRevokeRequest { note?: unknown }
export interface PostPayoutsRulesIdRevokeResponse { approval: unknown }
export interface PostPayoutsRulesIdRunsRequest { run_key?: unknown; payouts?: unknown; note?: unknown }
export interface PostPayoutsRulesIdRunsResponse { approval: unknown; pays_from: unknown }
export interface PostPayoutsRulesIdRunsRunKeyHoldRequest { note?: unknown }
export interface PostPayoutsRulesIdRunsRunKeyHoldResponse { approval: unknown }
export interface PostPayoutsRulesRequest { terms: unknown; note?: unknown }
export interface PostPayoutsRulesResponse { approval: unknown }
export interface PostPayoutsScreeningsRequest { builder_id: StringifiableId; result: unknown; reference?: unknown; valid_days?: unknown }
export interface PostPayoutsScreeningsResponse { record: unknown }
export interface PostPayoutsTaxDetailsRequest { builder_id: StringifiableId; status: unknown; reference?: unknown }
export interface PostPayoutsTaxDetailsResponse { record: unknown }
export interface PostProcessorWebhookResponse { ok: boolean; handled: boolean; status?: unknown; already?: boolean }
export interface PostProjectsInviteGuildRequest { client_id: string; guild: string }
export interface PostProjectsInviteGuildResponse { invited: boolean; guild: unknown; invites: unknown; count: unknown }
export interface PostProjectsInviteRequest { client_id: string; github_login: string }
export interface PostProjectsInviteResponse { invited: boolean; invite_url: unknown }
export interface PostProjectsProjectIdSpecialitiesRequest { name: string; discipline: string; summary?: string; contract_md?: string; visibility?: string; sellable?: boolean; skills?: string[] }
export interface PostProjectsProjectIdSpecialitiesResponse { speciality: unknown }
export interface PostProjectsRequest { origin: string; name: string; tagline?: string; description?: string; art_url?: string; type?: string; template?: string }
export interface PostProjectsResponse { project: unknown }
export interface PostProvisioningCreationDocFileRequest { details: Record<string, unknown>; page_rows?: unknown[]; plan?: Record<string, unknown> }
export interface PostProvisioningCreationDocReadRequest { file_b64: string }
export interface PostProvisioningCreationDocRequest { details: Record<string, unknown>; page_rows?: unknown[]; plan?: Record<string, unknown> }
export interface PostProvisioningCreationDocResponse { ok: boolean; document: unknown; problems: unknown }
export interface PostProvisioningInstancesIdDemoRequest { outcome: string }
export interface PostProvisioningInstancesIdDemoResponse { ok: boolean; outcome: unknown; demo: unknown }
export interface PostProvisioningInstancesIdDisconnectRequest { confirm_slug: string }
export interface PostProvisioningInstancesIdDisconnectResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdDomainRequest { domain: string }
export interface PostProvisioningInstancesIdDomainResponse { ok: boolean; changed: boolean; queued: unknown; domain: unknown; message: unknown; replaced?: unknown }
export interface PostProvisioningInstancesIdEnvManifestRequest { name: string; description?: string; environments?: unknown[]; required?: boolean }
export interface PostProvisioningInstancesIdForceTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; superseded: unknown; message: unknown }
export interface PostProvisioningInstancesIdGithubAppRequest { account?: string; org?: string }
export interface PostProvisioningInstancesIdGithubAppResponse { state: unknown; account: unknown; post_url: unknown; personal_url: unknown; org_url: unknown; org_login: unknown; manifest: unknown; redirect_url: unknown; expires_at: unknown }
export interface PostProvisioningInstancesIdGrantsRequest { github_login: string }
export interface PostProvisioningInstancesIdRenderPromoteLookRequest { key: string }
export interface PostProvisioningInstancesIdRenderPromoteRequest { key: string; commit_id: string; expect_live_commit?: string }
export interface PostProvisioningInstancesIdRenderPromoteResponse { ok: boolean; queued: boolean; action: unknown; message: unknown }
export interface PostProvisioningInstancesIdRenderRequest { key: string; owner_id: string; mode: string; service_id?: string; web_plan?: string; db_plan?: string; region?: string; runtime?: string; build_command?: string; start_command?: string; database?: boolean }
export interface PostProvisioningInstancesIdRenderResponse { ok: boolean; queued: boolean; action: unknown; mode: unknown; with_setup: boolean; message: unknown }
export interface PostProvisioningInstancesIdRenderSandboxDatabaseRequest { choice: string; key?: string }
export interface PostProvisioningInstancesIdRenderSandboxDatabaseResponse { ok: boolean; queued: boolean; choice: unknown; message: unknown }
export interface PostProvisioningInstancesIdRenderSandboxRequest { key: string }
export interface PostProvisioningInstancesIdRenderSandboxResponse { ok: boolean; queued: boolean; action: unknown; sandbox: boolean; message: unknown }
export interface PostProvisioningInstancesIdRepoPrivateResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdRestartResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; superseded: unknown; sandbox_key_lent: unknown; message: unknown }
export interface PostProvisioningInstancesIdUpdateSubscriptionRequest { subscribed: boolean }
export interface PostProvisioningInstancesIdUpdateSubscriptionResponse { ok: boolean; update_subscribed: unknown; previous: unknown; changed: unknown }
export interface PostProvisioningInstancesRequest { slug: string; target_ref?: string; hosting_shape?: string; domain?: string; no_address?: boolean; tier?: string; onboard_mode?: string; type?: string; description?: string; detail?: Record<string, unknown>; modules?: string[]; terms_acknowledged?: boolean; demo?: Record<string, unknown>; ship_mode?: "auto" | "manual"; genesis?: boolean; test?: boolean; from_guide?: boolean; accepted_document?: Record<string, unknown> }
export interface PostProvisioningPhysicsCheckRequest { description?: string; detail?: Record<string, unknown> }
export interface PostProvisioningPhysicsCheckResponse { stop: boolean; message: unknown; soft_limits: unknown }
export interface PostProvisioningRenderLookupRequest { key: string; owner_id?: string }
export interface PostRaiseEditRequest { copy?: Record<string, unknown>; settings?: Record<string, unknown> }
export interface PostRaiseEditResponse { ok: boolean; changed: unknown }
export interface PostRaiseEnterRequest { name?: string; linkedin?: string; password?: string }
export interface PostRaiseInterestRequest { amount: number }
export interface PostRaiseInterestResponse { ok: boolean }
export interface PostRemovalProposalsIdDecideRequest { verdict: string; note?: string }
export interface PostRenderDeployActRequest { action?: string; deployId?: string; confirm?: unknown; expectLiveDeployId?: unknown }
export interface PostRenderDeployActResponse { ok: boolean; action: unknown; started: unknown; render: unknown }
export interface PostSearchMarkRequest { chunk_id?: StringifiableId; useful?: unknown }
export interface PostSearchRequest { expand?: unknown; q?: string; source_kind?: string; limit?: unknown }
export interface PostSearchResponse { expand?: unknown; chunk?: unknown; query?: unknown; count?: unknown; total_full_tokens?: unknown; results?: unknown; corpus?: unknown }
export interface PostSecurityDocsRequest { slug: string; title: string; content_md: string }
export interface PostSecurityDocsResponse { ok: boolean; doc: unknown }
export interface PostSecurityReportsIdConfirmRequest { drachmae_awarded?: unknown }
export interface PostSecurityReportsIdConfirmResponse { report: unknown }
export interface PostSecurityReportsIdDisputeResponse { report: unknown }
export interface PostSecurityReportsIdFixResponse { report: unknown }
export interface PostSecurityReportsIdLinkFixRequest { task_id: StringifiableId }
export interface PostSecurityReportsIdLinkFixResponse { report: unknown }
export interface PostSecurityReportsRequest { target: string; severity: string; title: string; description?: string; repro_steps_md?: string }
export interface PostSecurityReportsResponse { ok: boolean; report: unknown; bounty_table: unknown }
export interface PostSecurityScansRequest { target_url: string; artifact_kind: string; resolved_sha?: string; content_hash?: string; file_count?: number; total_bytes?: number; tier: string; verdict?: string; completion: string; abort_code?: string; findings_critical?: number; findings_high?: number; findings_medium?: number; findings_low?: number; findings_summary?: unknown[]; action_taken?: string; engine_version: string }
export interface PostSecurityScansResponse { ok: boolean; scan: unknown }
export interface PostSessionOptimizeRequest { mode?: string; time_budget_min?: unknown; max_parallel?: unknown }
export interface PostSessionsCaptureEventsRequest { events: unknown[] }
export interface PostSessionsCaptureEventsResponse { received: unknown; stored: unknown }
export interface PostSessionsRequest { session_id: string; task_ids?: number[]; total_tokens?: number; duration_seconds?: number; started_at?: string; ended_at?: string; detail?: unknown[]; metrics?: Record<string, unknown>; model_usage?: Record<string, unknown> }
export interface PostSessionsResponse { skipped?: boolean; reason?: unknown; session?: unknown; token_reward?: unknown }
export interface PostSpecialitiesIdAbandonResponse { ok: boolean; was_active: unknown }
export interface PostSpecialitiesIdAdoptResponse { adoption: unknown }
export interface PostSpecialitiesIdDocumentsRequest { title: string; body_md: string; source?: string }
export interface PostSpecialitiesIdDocumentsResponse { skipped?: boolean; reason?: unknown; document?: unknown }
export interface PostSpecialitiesIdOfferResponse { speciality: unknown }
export interface PostSpecialitiesIdUnofferResponse { speciality: unknown }
export interface PostSpecialitiesRequest { name: string; discipline: string; summary?: string; contract_md?: string; visibility?: string; sellable?: boolean; skills?: string[] }
export interface PostSpecialitiesResponse { speciality: unknown }
export interface PostSsoActivityRollupRequest { client_id: string; client_secret: string; github_id: StringifiableId; credits?: number; tasks_shipped?: number; karma?: number; rank?: string; disciplines?: unknown; recent_ships?: unknown; crafts?: unknown }
export interface PostSsoActivityRollupResponse { ok: boolean }
export interface PostSsoAppStatusRequest { client_id: string; client_secret: string }
export interface PostSsoAppStatusResponse { ok: boolean; known: boolean; app: unknown; sandbox: unknown }
export interface PostSsoApplicantProfileRequest { client_id: string; client_secret: string; github_id: StringifiableId }
export interface PostSsoApplicantProfileResponse { profile: unknown; guild: unknown }
export interface PostSsoDevicePollRequest { device_code: string }
export interface PostSsoDeviceStartRequest { origin: string }
export interface PostSsoFeedbackDirectRequest { origin: string; receipt: string; message: string; kind?: string; context?: unknown }
export interface PostSsoFeedbackDirectResponse { ok: boolean; accepted: boolean }
export interface PostSsoFeedbackRequest { client_id: string; client_secret: string; github_id: StringifiableId; message: string; kind?: string; context?: unknown }
export interface PostSsoInvitesClearRequest { client_id: string; client_secret: string; github_login: string }
export interface PostSsoInvitesNotifyRequest { client_id: string; client_secret: string; github_login: string }
export interface PostSsoMembershipCheckInRequest { client_id: string; client_secret: string; github_id: StringifiableId; github_login: string; display_name?: string; avatar_url?: string; membership_kind?: string }
export interface PostSsoMembershipCheckInResponse { ok: boolean }
export interface PostSsoMembershipOffboardRequest { client_id: string; client_secret: string; github_id: string }
export interface PostSsoMembershipOffboardResponse { ok: boolean }
export interface PostSsoTokenRequest { client_id: string; client_secret: string; code: string; redirect_uri: string }
export interface PostSsoTokenResponse { github_id: unknown; github_login: unknown; display_name: unknown; avatar_url: unknown }
export interface PostStoreModulesKeyAcquireRequest { version?: string }
export interface PostStoreModulesKeyAcquireResponse { ok: boolean; module_key: unknown; version: unknown; core_version: unknown; tarball_sha256: unknown; tree_sha256: unknown; tarball_bytes: unknown; channel: unknown; entitlement: unknown }
export interface PostStoreModulesKeyAcquiredRequest { version: string }
export interface PostStoreModulesKeyAcquiredResponse { ok: boolean; entitlement: unknown }
export interface PostStoreModulesKeyDelistRequest { reason?: string }
export interface PostStoreModulesKeyDelistResponse { ok: boolean; module_key: unknown; status: unknown; delisted_at: unknown }
export interface PostStoreModulesKeyPriceRequest { cents?: number }
export interface PostStoreModulesKeyPriceResponse { ok: boolean; module_key: unknown; previous: unknown; price: unknown }
export interface PostStoreModulesKeyVersionsResponse { ok: boolean; created_module: unknown; version: unknown; channel: unknown; category: unknown }
export interface PostStoreModulesKeyVersionsVersionErrorCountRequest { day: string; count: number }
export interface PostStoreModulesKeyVersionsVersionInstallReportRequest { ok: boolean; error_code?: string }
export interface PostStoreModulesKeyVersionsVersionReassessRequest { reason?: string }
export interface PostStoreModulesKeyVersionsVersionReassessResponse { ok: boolean; queued: boolean; module_key: unknown; version: unknown; version_id: unknown }
export interface PostStoreModulesKeyVersionsVersionReleaseRequest { reason?: string }
export interface PostStoreModulesKeyVersionsVersionReleaseResponse { ok: boolean; module_key: unknown; version: unknown; channel: unknown; reason: unknown }
export interface PostStoreModulesKeyVersionsVersionWithdrawRequest { reason?: string }
export interface PostStoreModulesKeyVersionsVersionWithdrawResponse { ok: boolean; module_key: unknown; version: unknown; channel: unknown; reason: unknown }
export interface PostStoreSubcategoriesIdApproveRequest { label?: string; sub_key?: string }
export interface PostStoreSubcategoriesIdMergeRequest { into?: unknown }
export interface PostStoreUsageReportingRequest { enabled: boolean }
export interface PostStoreUsageReportingResponse { ok: boolean; enabled: unknown }
export interface PostTaskRecommendationsRequest { task_id: number; recommended_to: number; reason: string }
export interface PostTaskRecommendationsResponse { ok: boolean; recommendation: unknown }
export interface PostTasksIdAttestGateRequest { head_sha: string }
export interface PostTasksIdAttestGateResponse { ok: boolean; attested: unknown; reason: unknown; tip_recorded: unknown }
export interface PostTasksIdConfirmRequest { verified?: unknown }
export interface PostTasksIdCriteriaRequest { criterion_ids?: unknown[]; criterion_id?: StringifiableId }
export interface PostTasksIdCriteriaResponse { ok: boolean; added: unknown; criteria: unknown }
export interface PostTasksIdDemoteResponse { ok: boolean }
export interface PostTasksIdDependenciesRequest { depends_on_task_ids?: unknown[]; depends_on_task_id?: StringifiableId }
export interface PostTasksIdDependenciesResponse { ok: boolean; added: unknown; dependencies: unknown }
export interface PostTasksIdGradeRequest { subagent_output?: unknown; signals?: Record<string, unknown>; committed_files?: string[]; diff_hash?: string }
export interface PostTasksIdMergeRequest { into_task_id: number; reason?: string }
export interface PostTasksIdOverrideRequestRequest { rationale: string }
export interface PostTasksIdOverrideRequestResponse { ok: boolean; request: unknown }
export interface PostTasksIdPublishBranchRequest { branch: string; head_sha: string; bundle_b64: string; value_summary?: string }
export interface PostTasksIdShipResponse { ok: boolean; task: unknown }
export interface PostTasksIdVisualRequest { image_b64: string; content_type: string; alt?: string }
export interface PostTasksIdVisualResponse { ok: boolean; visual_url: unknown; visual_alt: unknown; bytes: unknown }
export interface PostTasksIdVisualsSlotRequest { image_b64: string; content_type: string; alt?: string }
export interface PostTasksIdVisualsSlotResponse { ok: boolean; slot: unknown; visual_url: unknown; visual_alt: unknown; bytes: unknown }
export interface PostTasksIdVoteRequest { vote: -1 | 0 | 1 }
export interface PostTasksIdVoteResponse { ok: boolean; task_id: unknown; my_vote: unknown; net_votes: unknown; total_votes: unknown }
export interface PostTasksNewcomerRestockResponse { ok: boolean; stamped: unknown; results: unknown }
export interface PostTasksRequest { version_id: string; title: string; description?: string; status?: string; touches?: string[]; est_minutes?: number; est_cost_usd?: number; manual_degree?: number; priority?: number; automation_tag?: string; credits_reward?: number; source?: string; source_ref?: string; value_summary?: string; kind?: string; discipline?: string; parallel_safe?: unknown; newcomer_friendly?: boolean; security_sensitive?: boolean; requires_rank?: string; needs?: unknown; auto_detect_touches?: boolean; criterion_ids?: unknown[]; module_key?: string; goal_id?: number }
export interface PostTasksResponse { task: unknown; needs_migration: unknown; criteria: unknown; idempotent: boolean }
export interface PostVersionsIdCloseRequest { reason?: string; dispositions?: Record<string, unknown> }
export interface PostVersionsIdCloseResponse { ok: boolean; version: unknown; applied: unknown; promoted: unknown; carried: unknown }
export interface PostVersionsIdDoneWhenRequest { criterion_id: string; criterion_md: string; goal_id?: number; sort_order?: number }
export interface PostVersionsIdDoneWhenResponse { ok: boolean; criterion: unknown }
export interface PostVersionsRequest { id: string; name: string; status?: string; done_when?: string; scope_doc_path?: string; criteria?: unknown[]; first_goal?: Record<string, unknown> }
export interface PostVersionsResponse { version: unknown; goal: unknown; criteria: unknown }
export interface PutAiStudioKeysProviderRequest { key: string }
export interface PutAiStudioKeysProviderResponse { key: unknown }
export interface PutAutonomyMeGoalsRequest { goal_ids: unknown }
export interface PutAutonomyMeGoalsResponse { goals: unknown }
export interface PutChatOwnerRequest { builder_id: StringifiableId }
export interface PutChatOwnerResponse { chat_owner: unknown }
export interface PutChatPresenceStatusRequest { mode?: string; text?: unknown }
export interface PutChatPresenceStatusResponse { me: unknown }
export interface PutCopyDeskPagesPageIdDraftRequest { reading_hash: string; lines: unknown[] }
export interface PutCopyDeskPagesPageIdDraftResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; draft: unknown; counter: unknown }
export interface PutDoneWhenCriterionIdBackendOnlyRequest { backend_only: boolean }
export interface PutDoneWhenCriterionIdBackendOnlyResponse { ok: boolean; criterion_id: unknown; backend_only: unknown }
export interface PutFoundingEnabledRequest { enabled?: boolean }
export interface PutFoundingFactsRequest { facts: Record<string, unknown> }
export interface PutFoundingWorkStageAnswersQuestionRequest { state?: string; text?: string; origin?: string; if_empty?: boolean }
export interface PutFoundingWorkStageDoorRequest { door: string }
export interface PutFoundingWorkStageLinkRequest { url?: string }
export interface PutFoundingWorkStagePageRequest { page?: string }
export interface PutGovernmentAsksMatterIdResponse { ok: boolean; matter_id: unknown; ask: unknown }
export interface PutGovernmentRanksRankKeyPermissionsPermissionKeyResponse { ok: boolean; rank_key: unknown; permission_key: unknown; granted: unknown }
export interface PutGovernmentTreasuryPotsGoalIdRequest { budget_usd?: unknown }
export interface PutMarketWatchSettingsKeyRequest { key: string }
export interface PutMeAssumedCharacterRequest { role?: string }
export interface PutMeAssumedCharacterResponse { assumed_character: unknown }
export interface PutMeCharacterRequest { character?: string }
export interface PutMeCharacterResponse { character: unknown }
export interface PutMingleOptInRequest { opted_in: boolean }
export interface PutMingleOptInResponse { opted_in: unknown; updated_at: unknown }
export interface PutMingleProjectRequest { enabled: boolean }
export interface PutPayTypeGatesPayTypeRequirementRequest { state?: unknown; evidence_ref?: unknown; acknowledged?: unknown }
export interface PutPayTypeGatesPayTypeRequirementResponse { ok: boolean; gate: unknown }
export interface PutProvisioningInstancesIdLogoRequest { image_b64: string; content_type: string }
export interface PutProvisioningInstancesIdShipPointsRequest { ship_points: (Record<string, unknown>)[] }
export interface PutProvisioningInstancesIdShipPointsResponse { ok: boolean; ship_points: unknown }
export interface PutRenderDeployAppRequest { ownerId?: string; serviceId?: string }
export interface PutRenderDeployAppResponse { app: unknown }
export interface PutSessionsSidTranscriptRequest { turns: unknown[]; truncated?: boolean }
export interface PutSessionsSidTranscriptResponse { transcript: unknown }
export interface PutSpecialitiesIdSkillsRequest { enabled_skills: string[] }
export interface PutSpecialitiesIdSkillsResponse { adoption: unknown }
export interface PutTasksIdDependenciesRequest { depends_on_task_ids: unknown[] }
export interface PutTasksIdDependenciesResponse { ok: boolean; written: unknown; dependencies: unknown }
export interface PutVersionsFocusRequest { version_id?: string }
export interface PutVersionsFocusResponse { ok: boolean; focus_version_id: unknown }
export type StringifiableId = number | string;

// The fallback response type: a route whose res.json({…}) shape could not be
// statically proven (a bare value, a spread, a computed key) returns this instead
// of a named <OperationId>Response interface. Assignable both ways; cast at the call site.
export type ApiResponse = any;
export declare class ApiError extends Error { status: number; code?: string; details?: unknown }
export interface ClientOptions { baseUrl?: string; token?: string; credentials?: RequestCredentials; cache?: RequestCache; fetch?: typeof fetch; throwOnError?: boolean }
export interface RequestArgs { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string>; cache?: RequestCache; [pathParam: string]: unknown }
// With throwOnError:false every method resolves to this instead of throwing on non-2xx.
export interface Result<T = ApiResponse> { status: number; ok: boolean; data: T }
export interface BongosClient {
  /** Generic escape hatch for a path with no generated method. */
  request(method: string, path: string, opts?: { query?: RequestArgs['query']; body?: unknown; headers?: Record<string, string>; cache?: RequestCache; hasBody?: boolean }): Promise<ApiResponse>;
  "accessRequests": {
    /** GET /access-requests — rank: archon */
    getAccessRequests(args?: RequestArgs): Promise<GetAccessRequestsResponse>;
    /** POST /access-requests — rank: public */
    postAccessRequests(args: RequestArgs & { body: PostAccessRequestsRequest }): Promise<PostAccessRequestsResponse>;
    /** PATCH /access-requests/{id} — rank: archon */
    patchAccessRequestsId(args: RequestArgs & { body: PatchAccessRequestsIdRequest }): Promise<PatchAccessRequestsIdResponse>;
    /** POST /access-requests/invite — rank: archon */
    postAccessRequestsInvite(args: RequestArgs & { body: PostAccessRequestsInviteRequest }): Promise<PostAccessRequestsInviteResponse>;
    /** GET /access-requests/invites — rank: archon */
    getAccessRequestsInvites(args?: RequestArgs): Promise<GetAccessRequestsInvitesResponse>;
    /** GET /access-requests/status — rank: public */
    getAccessRequestsStatus(args?: RequestArgs): Promise<GetAccessRequestsStatusResponse>;
  };
  "achievements": {
    /** GET /achievements — rank: any-builder */
    getAchievements(args?: RequestArgs): Promise<GetAchievementsResponse>;
  };
  "agentRuns": {
    /** GET /agent-runs/{id} — rank: any-builder */
    getAgentRunsId(args?: RequestArgs): Promise<GetAgentRunsIdResponse>;
  };
  "agents": {
    /** GET /agents — rank: any-builder */
    getAgents(args?: RequestArgs): Promise<GetAgentsResponse>;
    /** POST /agents — rank: metic+archon */
    postAgents(args?: RequestArgs): Promise<PostAgentsResponse>;
    /** DELETE /agents/{name} — rank: metic+archon */
    deleteAgentsName(args?: RequestArgs): Promise<DeleteAgentsNameResponse>;
    /** GET /agents/{name} — rank: any-builder */
    getAgentsName(args?: RequestArgs): Promise<GetAgentsNameResponse>;
    /** PATCH /agents/{name} — rank: metic+archon */
    patchAgentsName(args?: RequestArgs): Promise<PatchAgentsNameResponse>;
    /** POST /agents/{name}/disable — rank: metic+archon */
    postAgentsNameDisable(args?: RequestArgs): Promise<PostAgentsNameDisableResponse>;
    /** POST /agents/{name}/enable — rank: metic+archon */
    postAgentsNameEnable(args?: RequestArgs): Promise<PostAgentsNameEnableResponse>;
    /** POST /agents/{name}/invoke — rank: any-builder */
    postAgentsNameInvoke(args?: RequestArgs & { body?: PostAgentsNameInvokeRequest }): Promise<PostAgentsNameInvokeResponse>;
  };
  "aiStudio": {
    /** GET /ai-studio/balance — rank: any-builder */
    getAiStudioBalance(args?: RequestArgs): Promise<GetAiStudioBalanceResponse>;
    /** GET /ai-studio/files/{id} — rank: any-builder */
    getAiStudioFilesId(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /ai-studio/keys — rank: any-builder */
    getAiStudioKeys(args?: RequestArgs): Promise<GetAiStudioKeysResponse>;
    /** DELETE /ai-studio/keys/{provider} — rank: any-builder */
    deleteAiStudioKeysProvider(args?: RequestArgs): Promise<DeleteAiStudioKeysProviderResponse>;
    /** PUT /ai-studio/keys/{provider} — rank: any-builder */
    putAiStudioKeysProvider(args: RequestArgs & { body: PutAiStudioKeysProviderRequest }): Promise<PutAiStudioKeysProviderResponse>;
    /** GET /ai-studio/requests — rank: any-builder */
    getAiStudioRequests(args?: RequestArgs): Promise<GetAiStudioRequestsResponse>;
    /** POST /ai-studio/requests — rank: any-builder */
    postAiStudioRequests(args: RequestArgs & { body: PostAiStudioRequestsRequest }): Promise<PostAiStudioRequestsResponse>;
    /** GET /ai-studio/requests/{id} — rank: any-builder */
    getAiStudioRequestsId(args?: RequestArgs): Promise<GetAiStudioRequestsIdResponse>;
    /** GET /ai-studio/status — rank: any-builder */
    getAiStudioStatus(args?: RequestArgs): Promise<GetAiStudioStatusResponse>;
    /** POST /ai-studio/topup — rank: any-builder */
    postAiStudioTopup(args: RequestArgs & { body: PostAiStudioTopupRequest }): Promise<PostAiStudioTopupResponse>;
    /** GET /ai-studio/topup/quote — rank: any-builder */
    getAiStudioTopupQuote(args?: RequestArgs): Promise<GetAiStudioTopupQuoteResponse>;
    /** POST /ai-studio/uploads — rank: any-builder */
    postAiStudioUploads(args: RequestArgs & { body: PostAiStudioUploadsRequest }): Promise<PostAiStudioUploadsResponse>;
  };
  "analytics": {
    /** GET /analytics/builder/{id} — rank: any-builder */
    getAnalyticsBuilderId(args?: RequestArgs): Promise<ApiResponse>;
  };
  "appHost": {
    /** GET /app-host — rank: any-builder */
    getAppHost(args?: RequestArgs): Promise<ApiResponse>;
  };
  "artistGate": {
    /** GET /artist-gate — rank: any-builder */
    getArtistGate(args?: RequestArgs): Promise<GetArtistGateResponse>;
  };
  "auditLog": {
    /** GET /audit-log — rank: metic+archon */
    getAuditLog(args?: RequestArgs): Promise<GetAuditLogResponse>;
  };
  "auth": {
    /** POST /auth/backchannel-logout — rank: public */
    postAuthBackchannelLogout(args: RequestArgs & { body: PostAuthBackchannelLogoutRequest }): Promise<PostAuthBackchannelLogoutResponse>;
    /** POST /auth/cli-token/issue — rank: any-builder */
    postAuthCliTokenIssue(args?: RequestArgs): Promise<PostAuthCliTokenIssueResponse>;
    /** GET /auth/device — rank: public */
    getAuthDevice(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/device/approve — rank: any-builder */
    postAuthDeviceApprove(args: RequestArgs & { body: PostAuthDeviceApproveRequest }): Promise<ApiResponse>;
    /** POST /auth/device/exchange — rank: public */
    postAuthDeviceExchange(args: RequestArgs & { body: PostAuthDeviceExchangeRequest }): Promise<PostAuthDeviceExchangeResponse>;
    /** POST /auth/device/poll — rank: public */
    postAuthDevicePoll(args: RequestArgs & { body: PostAuthDevicePollRequest }): Promise<ApiResponse>;
    /** POST /auth/device/start — rank: public */
    postAuthDeviceStart(args?: RequestArgs & { body?: PostAuthDeviceStartRequest }): Promise<ApiResponse>;
    /** GET /auth/discord/callback — rank: any-builder */
    getAuthDiscordCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/discord/start — rank: any-builder */
    getAuthDiscordStart(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/discord/unlink — rank: any-builder */
    postAuthDiscordUnlink(args?: RequestArgs): Promise<PostAuthDiscordUnlinkResponse>;
    /** GET /auth/google/callback — rank: public */
    getAuthGoogleCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/google/start — rank: public */
    getAuthGoogleStart(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/hub-leave — rank: public */
    postAuthHubLeave(args: RequestArgs & { body: PostAuthHubLeaveRequest }): Promise<PostAuthHubLeaveResponse>;
    /** GET /auth/link/github/start — rank: public */
    getAuthLinkGithubStart(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/logout — rank: any-builder */
    postAuthLogout(args?: RequestArgs): Promise<PostAuthLogoutResponse>;
    /** POST /auth/revoke — rank: archon */
    postAuthRevoke(args?: RequestArgs & { body?: PostAuthRevokeRequest }): Promise<PostAuthRevokeResponse>;
    /** POST /auth/revoke-all — rank: archon */
    postAuthRevokeAll(args?: RequestArgs & { body?: PostAuthRevokeAllRequest }): Promise<PostAuthRevokeAllResponse>;
    /** POST /auth/runner-code/exchange — rank: public */
    postAuthRunnerCodeExchange(args: RequestArgs & { body: PostAuthRunnerCodeExchangeRequest }): Promise<PostAuthRunnerCodeExchangeResponse>;
    /** POST /auth/runner-code/issue — rank: metic+archon */
    postAuthRunnerCodeIssue(args?: RequestArgs & { body?: PostAuthRunnerCodeIssueRequest }): Promise<PostAuthRunnerCodeIssueResponse>;
    /** GET /auth/web/admission-status — rank: public */
    getAuthWebAdmissionStatus(args?: RequestArgs): Promise<GetAuthWebAdmissionStatusResponse>;
    /** GET /auth/web/callback — rank: public */
    getAuthWebCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/web/callback/link — rank: public */
    getAuthWebCallbackLink(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/web/handoff — rank: public */
    getAuthWebHandoff(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/web/start — rank: public */
    getAuthWebStart(args?: RequestArgs): Promise<ApiResponse>;
  };
  "autonomy": {
    /** POST /autonomy/builders/{builderId}/pause — rank: archon */
    postAutonomyBuildersBuilderIdPause(args: RequestArgs & { body: PostAutonomyBuildersBuilderIdPauseRequest }): Promise<ApiResponse>;
    /** GET /autonomy/fence — rank: any-builder */
    getAutonomyFence(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /autonomy/fence — rank: archon */
    postAutonomyFence(args: RequestArgs & { body: PostAutonomyFenceRequest }): Promise<ApiResponse>;
    /** POST /autonomy/fence/goals — rank: archon */
    postAutonomyFenceGoals(args: RequestArgs & { body: PostAutonomyFenceGoalsRequest }): Promise<PostAutonomyFenceGoalsResponse>;
    /** DELETE /autonomy/fence/goals/{goalId} — rank: archon */
    deleteAutonomyFenceGoalsGoalId(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /autonomy/fence/priority — rank: archon */
    postAutonomyFencePriority(args?: RequestArgs & { body?: PostAutonomyFencePriorityRequest }): Promise<ApiResponse>;
    /** GET /autonomy/goal-requests — rank: archon */
    getAutonomyGoalRequests(args?: RequestArgs): Promise<GetAutonomyGoalRequestsResponse>;
    /** POST /autonomy/goal-requests/{id}/decide — rank: archon */
    postAutonomyGoalRequestsIdDecide(args: RequestArgs & { body: PostAutonomyGoalRequestsIdDecideRequest }): Promise<PostAutonomyGoalRequestsIdDecideResponse>;
    /** POST /autonomy/goals/{goalId}/request — rank: metic+archon */
    postAutonomyGoalsGoalIdRequest(args?: RequestArgs & { body?: PostAutonomyGoalsGoalIdRequestRequest }): Promise<PostAutonomyGoalsGoalIdRequestResponse>;
    /** POST /autonomy/heartbeat — rank: any-builder */
    postAutonomyHeartbeat(args: RequestArgs & { body: PostAutonomyHeartbeatRequest }): Promise<PostAutonomyHeartbeatResponse>;
    /** GET /autonomy/me/goal-requests — rank: metic+archon */
    getAutonomyMeGoalRequests(args?: RequestArgs): Promise<GetAutonomyMeGoalRequestsResponse>;
    /** PUT /autonomy/me/goals — rank: metic+archon */
    putAutonomyMeGoals(args: RequestArgs & { body: PutAutonomyMeGoalsRequest }): Promise<PutAutonomyMeGoalsResponse>;
    /** GET /autonomy/me/goals/{goalId}/stats — rank: metic+archon */
    getAutonomyMeGoalsGoalIdStats(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /autonomy/precheck — rank: metic+archon */
    getAutonomyPrecheck(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /autonomy/runner-setup.ps1 — rank: public */
    getAutonomyRunnerSetupPs1(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /autonomy/runner-setup.sh — rank: public */
    getAutonomyRunnerSetupSh(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /autonomy/runners — rank: any-builder */
    getAutonomyRunners(args?: RequestArgs): Promise<GetAutonomyRunnersResponse>;
    /** DELETE /autonomy/runners/{host} — rank: any-builder */
    deleteAutonomyRunnersHost(args?: RequestArgs): Promise<DeleteAutonomyRunnersHostResponse>;
    /** POST /autonomy/runners/{host}/run — rank: metic+archon */
    postAutonomyRunnersHostRun(args: RequestArgs & { body: PostAutonomyRunnersHostRunRequest }): Promise<PostAutonomyRunnersHostRunResponse>;
    /** GET /autonomy/runners/all — rank: archon */
    getAutonomyRunnersAll(args?: RequestArgs): Promise<GetAutonomyRunnersAllResponse>;
    /** GET /autonomy/runs — rank: metic+archon */
    getAutonomyRuns(args?: RequestArgs): Promise<GetAutonomyRunsResponse>;
  };
  "backup": {
    /** GET /backup/status — rank: metic+archon */
    getBackupStatus(args?: RequestArgs): Promise<GetBackupStatusResponse>;
    /** POST /backup/trigger — rank: metic+archon */
    postBackupTrigger(args?: RequestArgs): Promise<PostBackupTriggerResponse>;
  };
  "balances": {
    /** POST /balances/fund-project — rank: any-builder */
    postBalancesFundProject(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /balances/me — rank: any-builder */
    getBalancesMe(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /balances/pay — rank: any-builder */
    postBalancesPay(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /balances/project — rank: any-builder */
    getBalancesProject(args?: RequestArgs): Promise<ApiResponse>;
  };
  "blockers": {
    /** GET /blockers — rank: public */
    getBlockers(args?: RequestArgs): Promise<GetBlockersResponse>;
    /** POST /blockers — rank: any-builder */
    postBlockers(args: RequestArgs & { body: PostBlockersRequest }): Promise<PostBlockersResponse>;
    /** GET /blockers/{id} — rank: any-builder */
    getBlockersId(args?: RequestArgs): Promise<GetBlockersIdResponse>;
    /** POST /blockers/{id}/link — rank: metic+archon */
    postBlockersIdLink(args: RequestArgs & { body: PostBlockersIdLinkRequest }): Promise<PostBlockersIdLinkResponse>;
    /** DELETE /blockers/{id}/link/{taskId} — rank: metic+archon */
    deleteBlockersIdLinkTaskId(args?: RequestArgs): Promise<DeleteBlockersIdLinkTaskIdResponse>;
    /** POST /blockers/{id}/resolve — rank: metic+archon */
    postBlockersIdResolve(args?: RequestArgs & { body?: PostBlockersIdResolveRequest }): Promise<ApiResponse>;
  };
  "bugAttachments": {
    /** GET /bug-attachments/{name} — rank: any-builder */
    getBugAttachmentsName(args?: RequestArgs): Promise<ApiResponse>;
  };
  "builders": {
    /** GET /builders/{builderId}/credits — rank: metic+archon */
    getBuildersBuilderIdCredits(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /builders/{builderId}/earnings — rank: any-builder */
    getBuildersBuilderIdEarnings(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /builders/{id}/active-claims — rank: metic+archon */
    getBuildersIdActiveClaims(args?: RequestArgs): Promise<GetBuildersIdActiveClaimsResponse>;
    /** GET /builders/{id}/activity — rank: any-builder */
    getBuildersIdActivity(args?: RequestArgs): Promise<GetBuildersIdActivityResponse>;
    /** PATCH /builders/{id}/budget — rank: metic+archon */
    patchBuildersIdBudget(args?: RequestArgs & { body?: PatchBuildersIdBudgetRequest }): Promise<PatchBuildersIdBudgetResponse>;
    /** PATCH /builders/{id}/capabilities — rank: archon */
    patchBuildersIdCapabilities(args: RequestArgs & { body: PatchBuildersIdCapabilitiesRequest }): Promise<PatchBuildersIdCapabilitiesResponse>;
    /** PATCH /builders/{id}/card-requirement — rank: archon */
    patchBuildersIdCardRequirement(args: RequestArgs & { body: PatchBuildersIdCardRequirementRequest }): Promise<PatchBuildersIdCardRequirementResponse>;
    /** GET /builders/{id}/onboarding — rank: public */
    getBuildersIdOnboarding(args?: RequestArgs): Promise<GetBuildersIdOnboardingResponse>;
    /** GET /builders/{id}/profile — rank: public */
    getBuildersIdProfile(args?: RequestArgs): Promise<GetBuildersIdProfileResponse>;
    /** PATCH /builders/{id}/rank — rank: archon */
    patchBuildersIdRank(args: RequestArgs & { body: PatchBuildersIdRankRequest }): Promise<PatchBuildersIdRankResponse>;
    /** PATCH /builders/{id}/status — rank: archon */
    patchBuildersIdStatus(args: RequestArgs & { body: PatchBuildersIdStatusRequest }): Promise<ApiResponse>;
    /** PATCH /builders/{id}/tester — rank: archon */
    patchBuildersIdTester(args: RequestArgs & { body: PatchBuildersIdTesterRequest }): Promise<PatchBuildersIdTesterResponse>;
    /** GET /builders/card-state — rank: archon */
    getBuildersCardState(args?: RequestArgs): Promise<GetBuildersCardStateResponse>;
    /** GET /builders/directory — rank: any-builder */
    getBuildersDirectory(args?: RequestArgs): Promise<GetBuildersDirectoryResponse>;
    /** GET /builders/me/pending-rank-change — rank: any-builder */
    getBuildersMePendingRankChange(args?: RequestArgs): Promise<GetBuildersMePendingRankChangeResponse>;
    /** GET /builders/roster — rank: metic+archon */
    getBuildersRoster(args?: RequestArgs): Promise<GetBuildersRosterResponse>;
  };
  "chat": {
    /** GET /chat/cards — rank: any-builder */
    getChatCards(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /chat/cards/search — rank: any-builder */
    getChatCardsSearch(args?: RequestArgs): Promise<GetChatCardsSearchResponse>;
    /** GET /chat/channels — rank: any-builder */
    getChatChannels(args?: RequestArgs): Promise<GetChatChannelsResponse>;
    /** POST /chat/channels/{id}/join — rank: any-builder */
    postChatChannelsIdJoin(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /chat/channels/{id}/leave — rank: any-builder */
    postChatChannelsIdLeave(args?: RequestArgs): Promise<PostChatChannelsIdLeaveResponse>;
    /** GET /chat/channels/{id}/members — rank: any-builder */
    getChatChannelsIdMembers(args?: RequestArgs): Promise<GetChatChannelsIdMembersResponse>;
    /** POST /chat/channels/{id}/members — rank: any-builder */
    postChatChannelsIdMembers(args: RequestArgs & { body: PostChatChannelsIdMembersRequest }): Promise<ApiResponse>;
    /** GET /chat/conversations — rank: any-builder */
    getChatConversations(args?: RequestArgs): Promise<GetChatConversationsResponse>;
    /** POST /chat/conversations — rank: any-builder */
    postChatConversations(args: RequestArgs & { body: PostChatConversationsRequest }): Promise<ApiResponse>;
    /** GET /chat/conversations/{id} — rank: any-builder */
    getChatConversationsId(args?: RequestArgs): Promise<GetChatConversationsIdResponse>;
    /** GET /chat/conversations/{id}/files — rank: any-builder */
    getChatConversationsIdFiles(args?: RequestArgs): Promise<GetChatConversationsIdFilesResponse>;
    /** POST /chat/conversations/{id}/files — rank: any-builder */
    postChatConversationsIdFiles(args?: RequestArgs): Promise<PostChatConversationsIdFilesResponse>;
    /** POST /chat/conversations/{id}/leave — rank: any-builder */
    postChatConversationsIdLeave(args?: RequestArgs): Promise<PostChatConversationsIdLeaveResponse>;
    /** POST /chat/conversations/{id}/members — rank: any-builder */
    postChatConversationsIdMembers(args: RequestArgs & { body: PostChatConversationsIdMembersRequest }): Promise<PostChatConversationsIdMembersResponse>;
    /** PATCH /chat/conversations/{id}/membership — rank: any-builder */
    patchChatConversationsIdMembership(args?: RequestArgs & { body?: PatchChatConversationsIdMembershipRequest }): Promise<PatchChatConversationsIdMembershipResponse>;
    /** GET /chat/conversations/{id}/mentionable — rank: any-builder */
    getChatConversationsIdMentionable(args?: RequestArgs): Promise<GetChatConversationsIdMentionableResponse>;
    /** GET /chat/conversations/{id}/messages — rank: any-builder */
    getChatConversationsIdMessages(args?: RequestArgs): Promise<GetChatConversationsIdMessagesResponse>;
    /** POST /chat/conversations/{id}/messages — rank: any-builder */
    postChatConversationsIdMessages(args: RequestArgs & { body: PostChatConversationsIdMessagesRequest }): Promise<PostChatConversationsIdMessagesResponse>;
    /** GET /chat/conversations/{id}/pins — rank: any-builder */
    getChatConversationsIdPins(args?: RequestArgs): Promise<GetChatConversationsIdPinsResponse>;
    /** POST /chat/conversations/{id}/polls — rank: any-builder */
    postChatConversationsIdPolls(args: RequestArgs & { body: PostChatConversationsIdPollsRequest }): Promise<PostChatConversationsIdPollsResponse>;
    /** GET /chat/conversations/{id}/seen — rank: any-builder */
    getChatConversationsIdSeen(args?: RequestArgs): Promise<GetChatConversationsIdSeenResponse>;
    /** POST /chat/conversations/{id}/typing — rank: any-builder */
    postChatConversationsIdTyping(args?: RequestArgs): Promise<PostChatConversationsIdTypingResponse>;
    /** GET /chat/direct — rank: any-builder */
    getChatDirect(args?: RequestArgs): Promise<GetChatDirectResponse>;
    /** POST /chat/direct — rank: any-builder */
    postChatDirect(args: RequestArgs & { body: PostChatDirectRequest }): Promise<ApiResponse>;
    /** GET /chat/files/{id} — rank: any-builder */
    getChatFilesId(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /chat/goal-rooms — rank: any-builder */
    getChatGoalRooms(args?: RequestArgs): Promise<GetChatGoalRoomsResponse>;
    /** GET /chat/goals/{goalId}/room — rank: any-builder */
    getChatGoalsGoalIdRoom(args?: RequestArgs): Promise<GetChatGoalsGoalIdRoomResponse>;
    /** GET /chat/groups — rank: any-builder */
    getChatGroups(args?: RequestArgs): Promise<GetChatGroupsResponse>;
    /** POST /chat/groups — rank: any-builder */
    postChatGroups(args: RequestArgs & { body: PostChatGroupsRequest }): Promise<PostChatGroupsResponse>;
    /** GET /chat/lobby — rank: any-builder */
    getChatLobby(args?: RequestArgs): Promise<GetChatLobbyResponse>;
    /** GET /chat/mentions — rank: any-builder */
    getChatMentions(args?: RequestArgs): Promise<GetChatMentionsResponse>;
    /** DELETE /chat/messages/{id} — rank: any-builder */
    deleteChatMessagesId(args?: RequestArgs): Promise<DeleteChatMessagesIdResponse>;
    /** PATCH /chat/messages/{id} — rank: any-builder */
    patchChatMessagesId(args: RequestArgs & { body: PatchChatMessagesIdRequest }): Promise<PatchChatMessagesIdResponse>;
    /** DELETE /chat/messages/{id}/pin — rank: any-builder */
    deleteChatMessagesIdPin(args?: RequestArgs): Promise<DeleteChatMessagesIdPinResponse>;
    /** POST /chat/messages/{id}/pin — rank: any-builder */
    postChatMessagesIdPin(args?: RequestArgs): Promise<PostChatMessagesIdPinResponse>;
    /** POST /chat/messages/{id}/reactions — rank: any-builder */
    postChatMessagesIdReactions(args: RequestArgs & { body: PostChatMessagesIdReactionsRequest }): Promise<PostChatMessagesIdReactionsResponse>;
    /** POST /chat/messages/{id}/remove — rank: any-builder */
    postChatMessagesIdRemove(args?: RequestArgs): Promise<PostChatMessagesIdRemoveResponse>;
    /** POST /chat/messages/{id}/replies — rank: any-builder */
    postChatMessagesIdReplies(args: RequestArgs & { body: PostChatMessagesIdRepliesRequest }): Promise<PostChatMessagesIdRepliesResponse>;
    /** GET /chat/messages/{id}/thread — rank: any-builder */
    getChatMessagesIdThread(args?: RequestArgs): Promise<GetChatMessagesIdThreadResponse>;
    /** GET /chat/moderation — rank: any-builder */
    getChatModeration(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /chat/mutes — rank: any-builder */
    postChatMutes(args: RequestArgs & { body: PostChatMutesRequest }): Promise<PostChatMutesResponse>;
    /** DELETE /chat/mutes/{builderId} — rank: any-builder */
    deleteChatMutesBuilderId(args?: RequestArgs): Promise<DeleteChatMutesBuilderIdResponse>;
    /** DELETE /chat/owner — rank: any-builder */
    deleteChatOwner(args?: RequestArgs): Promise<DeleteChatOwnerResponse>;
    /** PUT /chat/owner — rank: any-builder */
    putChatOwner(args: RequestArgs & { body: PutChatOwnerRequest }): Promise<PutChatOwnerResponse>;
    /** GET /chat/people — rank: any-builder */
    getChatPeople(args?: RequestArgs): Promise<GetChatPeopleResponse>;
    /** GET /chat/polls — rank: any-builder */
    getChatPolls(args?: RequestArgs): Promise<GetChatPollsResponse>;
    /** POST /chat/polls/{messageId}/vote — rank: any-builder */
    postChatPollsMessageIdVote(args: RequestArgs & { body: PostChatPollsMessageIdVoteRequest }): Promise<PostChatPollsMessageIdVoteResponse>;
    /** GET /chat/presence — rank: any-builder */
    getChatPresence(args?: RequestArgs): Promise<GetChatPresenceResponse>;
    /** POST /chat/presence/beat — rank: any-builder */
    postChatPresenceBeat(args?: RequestArgs & { body?: PostChatPresenceBeatRequest }): Promise<PostChatPresenceBeatResponse>;
    /** PUT /chat/presence/status — rank: any-builder */
    putChatPresenceStatus(args?: RequestArgs & { body?: PutChatPresenceStatusRequest }): Promise<PutChatPresenceStatusResponse>;
    /** GET /chat/search — rank: any-builder */
    getChatSearch(args?: RequestArgs): Promise<GetChatSearchResponse>;
    /** GET /chat/settings — rank: any-builder */
    getChatSettings(args?: RequestArgs): Promise<GetChatSettingsResponse>;
    /** PATCH /chat/settings — rank: metic+archon */
    patchChatSettings(args: RequestArgs & { body: PatchChatSettingsRequest }): Promise<PatchChatSettingsResponse>;
    /** GET /chat/unread — rank: any-builder */
    getChatUnread(args?: RequestArgs): Promise<GetChatUnreadResponse>;
  };
  "claims": {
    /** POST /claims — rank: any-builder */
    postClaims(args: RequestArgs & { body: PostClaimsRequest }): Promise<PostClaimsResponse>;
    /** POST /claims/{id}/release-on-behalf — rank: metic+archon */
    postClaimsIdReleaseOnBehalf(args: RequestArgs & { body: PostClaimsIdReleaseOnBehalfRequest }): Promise<ApiResponse>;
    /** POST /claims/{id}/resolve — rank: any-builder */
    postClaimsIdResolve(args: RequestArgs & { body: PostClaimsIdResolveRequest }): Promise<ApiResponse>;
    /** POST /claims/batch — rank: any-builder */
    postClaimsBatch(args: RequestArgs & { body: PostClaimsBatchRequest }): Promise<PostClaimsBatchResponse>;
    /** POST /claims/batch/release — rank: any-builder */
    postClaimsBatchRelease(args: RequestArgs & { body: PostClaimsBatchReleaseRequest }): Promise<PostClaimsBatchReleaseResponse>;
    /** POST /claims/batch/validate — rank: any-builder */
    postClaimsBatchValidate(args: RequestArgs & { body: PostClaimsBatchValidateRequest }): Promise<ApiResponse>;
  };
  "cli": {
    /** GET /cli/commands — rank: any-builder */
    getCliCommands(args?: RequestArgs): Promise<GetCliCommandsResponse>;
  };
  "closeness": {
    /** GET /closeness/for-me — rank: any-builder */
    getClosenessForMe(args?: RequestArgs): Promise<GetClosenessForMeResponse>;
    /** GET /closeness/weights — rank: any-builder */
    getClosenessWeights(args?: RequestArgs): Promise<GetClosenessWeightsResponse>;
    /** GET /closeness/with/{builderId} — rank: any-builder */
    getClosenessWithBuilderId(args?: RequestArgs): Promise<GetClosenessWithBuilderIdResponse>;
  };
  "community": {
    /** GET /community/builder-of-the-week — rank: public */
    getCommunityBuilderOfTheWeek(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /community/crowns — rank: public */
    getCommunityCrowns(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /community/leaderboard — rank: public */
    getCommunityLeaderboard(args?: RequestArgs): Promise<GetCommunityLeaderboardResponse>;
    /** GET /community/movers — rank: public */
    getCommunityMovers(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /community/search — rank: public */
    getCommunitySearch(args?: RequestArgs): Promise<GetCommunitySearchResponse>;
  };
  "connections": {
    /** GET /connections — rank: any-builder */
    getConnections(args?: RequestArgs): Promise<GetConnectionsResponse>;
    /** POST /connections — rank: any-builder */
    postConnections(args: RequestArgs & { body: PostConnectionsRequest }): Promise<PostConnectionsResponse>;
    /** DELETE /connections/{id} — rank: any-builder */
    deleteConnectionsId(args?: RequestArgs): Promise<DeleteConnectionsIdResponse>;
    /** POST /connections/{id}/accept — rank: any-builder */
    postConnectionsIdAccept(args?: RequestArgs): Promise<PostConnectionsIdAcceptResponse>;
    /** POST /connections/{id}/decline — rank: any-builder */
    postConnectionsIdDecline(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /connections/degree/{handle} — rank: any-builder */
    getConnectionsDegreeHandle(args?: RequestArgs): Promise<GetConnectionsDegreeHandleResponse>;
    /** GET /connections/requests — rank: any-builder */
    getConnectionsRequests(args?: RequestArgs): Promise<GetConnectionsRequestsResponse>;
    /** GET /connections/suggestions — rank: any-builder */
    getConnectionsSuggestions(args?: RequestArgs): Promise<GetConnectionsSuggestionsResponse>;
  };
  "copyDesk": {
    /** GET /copy-desk/approvals — rank: any-builder */
    getCopyDeskApprovals(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/artists/{id}/pages — rank: any-builder */
    getCopyDeskArtistsIdPages(args?: RequestArgs): Promise<GetCopyDeskArtistsIdPagesResponse>;
    /** POST /copy-desk/flags — rank: any-builder */
    postCopyDeskFlags(args: RequestArgs & { body: PostCopyDeskFlagsRequest }): Promise<PostCopyDeskFlagsResponse>;
    /** POST /copy-desk/flags/{id}/close — rank: any-builder */
    postCopyDeskFlagsIdClose(args: RequestArgs & { body: PostCopyDeskFlagsIdCloseRequest }): Promise<PostCopyDeskFlagsIdCloseResponse>;
    /** GET /copy-desk/next — rank: any-builder */
    getCopyDeskNext(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/pages — rank: any-builder */
    getCopyDeskPages(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/pages/{pageId} — rank: any-builder */
    getCopyDeskPagesPageId(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /copy-desk/pages/{pageId}/approve — rank: any-builder */
    postCopyDeskPagesPageIdApprove(args?: RequestArgs & { body?: PostCopyDeskPagesPageIdApproveRequest }): Promise<PostCopyDeskPagesPageIdApproveResponse>;
    /** POST /copy-desk/pages/{pageId}/asks — rank: any-builder */
    postCopyDeskPagesPageIdAsks(args: RequestArgs & { body: PostCopyDeskPagesPageIdAsksRequest }): Promise<ApiResponse>;
    /** POST /copy-desk/pages/{pageId}/claim — rank: any-builder */
    postCopyDeskPagesPageIdClaim(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/pages/{pageId}/draft — rank: any-builder */
    getCopyDeskPagesPageIdDraft(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /copy-desk/pages/{pageId}/draft — rank: any-builder */
    putCopyDeskPagesPageIdDraft(args: RequestArgs & { body: PutCopyDeskPagesPageIdDraftRequest }): Promise<PutCopyDeskPagesPageIdDraftResponse>;
    /** GET /copy-desk/pages/{pageId}/draft.docx — rank: any-builder */
    getCopyDeskPagesPageIdDraftDocx(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /copy-desk/pages/{pageId}/draft.docx — rank: any-builder */
    postCopyDeskPagesPageIdDraftDocx(args?: RequestArgs): Promise<PostCopyDeskPagesPageIdDraftDocxResponse>;
    /** POST /copy-desk/pages/{pageId}/release — rank: metic+archon */
    postCopyDeskPagesPageIdRelease(args: RequestArgs & { body: PostCopyDeskPagesPageIdReleaseRequest }): Promise<PostCopyDeskPagesPageIdReleaseResponse>;
    /** POST /copy-desk/pages/{pageId}/send-back — rank: any-builder */
    postCopyDeskPagesPageIdSendBack(args: RequestArgs & { body: PostCopyDeskPagesPageIdSendBackRequest }): Promise<PostCopyDeskPagesPageIdSendBackResponse>;
    /** POST /copy-desk/pages/{pageId}/submit — rank: any-builder */
    postCopyDeskPagesPageIdSubmit(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /copy-desk/proposals — rank: any-builder */
    postCopyDeskProposals(args: RequestArgs & { body: PostCopyDeskProposalsRequest }): Promise<PostCopyDeskProposalsResponse>;
    /** GET /copy-desk/queue — rank: any-builder */
    getCopyDeskQueue(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/strings — rank: any-builder */
    getCopyDeskStrings(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/studio — rank: any-builder */
    getCopyDeskStudio(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /copy-desk/tally — rank: any-builder */
    getCopyDeskTally(args?: RequestArgs): Promise<ApiResponse>;
  };
  "coreUpdate": {
    /** GET /core-update — rank: archon */
    getCoreUpdate(args?: RequestArgs): Promise<GetCoreUpdateResponse>;
    /** POST /core-update/started — rank: archon */
    postCoreUpdateStarted(args: RequestArgs & { body: PostCoreUpdateStartedRequest }): Promise<PostCoreUpdateStartedResponse>;
  };
  "coreUpgrades": {
    /** GET /core-upgrades — rank: archon */
    getCoreUpgrades(args?: RequestArgs): Promise<GetCoreUpgradesResponse>;
  };
  "cost": {
    /** POST /cost — rank: any-builder */
    postCost(args: RequestArgs & { body: PostCostRequest }): Promise<PostCostResponse>;
  };
  "criterionUats": {
    /** GET /criterion-uats/recordings/{name} — rank: any-builder */
    getCriterionUatsRecordingsName(args?: RequestArgs): Promise<ApiResponse>;
  };
  "dependencies": {
    /** DELETE /dependencies — rank: archon */
    deleteDependencies(args?: RequestArgs): Promise<DeleteDependenciesResponse>;
    /** POST /dependencies — rank: archon */
    postDependencies(args?: RequestArgs): Promise<PostDependenciesResponse>;
  };
  "discord": {
    /** GET /discord/channels/plan — rank: metic+archon */
    getDiscordChannelsPlan(args?: RequestArgs): Promise<GetDiscordChannelsPlanResponse>;
    /** POST /discord/channels/reconcile — rank: metic+archon */
    postDiscordChannelsReconcile(args?: RequestArgs): Promise<PostDiscordChannelsReconcileResponse>;
    /** GET /discord/channels/snapshot — rank: metic+archon */
    getDiscordChannelsSnapshot(args?: RequestArgs): Promise<GetDiscordChannelsSnapshotResponse>;
  };
  "doneWhen": {
    /** PATCH /done-when/{criterionId} — rank: metic+archon */
    patchDoneWhenCriterionId(args?: RequestArgs & { body?: PatchDoneWhenCriterionIdRequest }): Promise<PatchDoneWhenCriterionIdResponse>;
    /** PUT /done-when/{criterionId}/backend-only — rank: metic+archon */
    putDoneWhenCriterionIdBackendOnly(args: RequestArgs & { body: PutDoneWhenCriterionIdBackendOnlyRequest }): Promise<PutDoneWhenCriterionIdBackendOnlyResponse>;
    /** POST /done-when/{criterionId}/satisfy — rank: metic+archon */
    postDoneWhenCriterionIdSatisfy(args?: RequestArgs & { body?: PostDoneWhenCriterionIdSatisfyRequest }): Promise<ApiResponse>;
    /** GET /done-when/{criterionId}/uat — rank: any-builder */
    getDoneWhenCriterionIdUat(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /done-when/{criterionId}/uat — rank: metic+archon */
    postDoneWhenCriterionIdUat(args: RequestArgs & { body: PostDoneWhenCriterionIdUatRequest }): Promise<PostDoneWhenCriterionIdUatResponse>;
    /** POST /done-when/{criterionId}/uat/recording — rank: metic+archon */
    postDoneWhenCriterionIdUatRecording(args?: RequestArgs): Promise<PostDoneWhenCriterionIdUatRecordingResponse>;
    /** POST /done-when/{criterionId}/unsatisfy — rank: metic+archon */
    postDoneWhenCriterionIdUnsatisfy(args?: RequestArgs & { body?: PostDoneWhenCriterionIdUnsatisfyRequest }): Promise<PostDoneWhenCriterionIdUnsatisfyResponse>;
    /** GET /done-when/pending-review — rank: metic+archon */
    getDoneWhenPendingReview(args?: RequestArgs): Promise<GetDoneWhenPendingReviewResponse>;
  };
  "feedback": {
    /** POST /feedback/receipt — rank: any-builder */
    postFeedbackReceipt(args: RequestArgs & { body: PostFeedbackReceiptRequest }): Promise<PostFeedbackReceiptResponse>;
    /** GET /feedback/receipt/{id} — rank: public */
    getFeedbackReceiptId(args?: RequestArgs): Promise<ApiResponse>;
  };
  "firstRead": {
    /** GET /first-read/catalog — rank: any-builder */
    getFirstReadCatalog(args?: RequestArgs): Promise<GetFirstReadCatalogResponse>;
    /** POST /first-read/maps — rank: metic+archon */
    postFirstReadMaps(args: RequestArgs & { body: PostFirstReadMapsRequest }): Promise<PostFirstReadMapsResponse>;
    /** GET /first-read/maps/{id} — rank: metic+archon */
    getFirstReadMapsId(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /first-read/maps/{id}/accept — rank: metic+archon */
    postFirstReadMapsIdAccept(args?: RequestArgs & { body?: PostFirstReadMapsIdAcceptRequest }): Promise<ApiResponse>;
    /** POST /first-read/maps/{id}/dismiss — rank: metic+archon */
    postFirstReadMapsIdDismiss(args: RequestArgs & { body: PostFirstReadMapsIdDismissRequest }): Promise<ApiResponse>;
    /** POST /first-read/maps/{id}/reject — rank: metic+archon */
    postFirstReadMapsIdReject(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /first-read/prompt — rank: any-builder */
    getFirstReadPrompt(args?: RequestArgs): Promise<GetFirstReadPromptResponse>;
  };
  "founding": {
    /** POST /founding/alive — rank: any-builder */
    postFoundingAlive(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/builders — rank: any-builder */
    getFoundingBuilders(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/context — rank: any-builder */
    getFoundingContext(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /founding/enabled — rank: any-builder */
    putFoundingEnabled(args?: RequestArgs & { body?: PutFoundingEnabledRequest }): Promise<ApiResponse>;
    /** GET /founding/facts — rank: any-builder */
    getFoundingFacts(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /founding/facts — rank: any-builder */
    putFoundingFacts(args: RequestArgs & { body: PutFoundingFactsRequest }): Promise<ApiResponse>;
    /** GET /founding/genesis — rank: any-builder */
    getFoundingGenesis(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/legalize/options — rank: any-builder */
    getFoundingLegalizeOptions(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /founding/plan — rank: any-builder */
    postFoundingPlan(args?: RequestArgs & { body?: PostFoundingPlanRequest }): Promise<ApiResponse>;
    /** POST /founding/skip — rank: any-builder */
    postFoundingSkip(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /founding/stages/{stage}/close — rank: any-builder */
    postFoundingStagesStageClose(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /founding/start — rank: any-builder */
    postFoundingStart(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/work — rank: any-builder */
    getFoundingWork(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/work/{stage} — rank: any-builder */
    getFoundingWorkStage(args?: RequestArgs): Promise<ApiResponse>;
    /** DELETE /founding/work/{stage}/answers/{question} — rank: any-builder */
    deleteFoundingWorkStageAnswersQuestion(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /founding/work/{stage}/answers/{question} — rank: any-builder */
    putFoundingWorkStageAnswersQuestion(args?: RequestArgs & { body?: PutFoundingWorkStageAnswersQuestionRequest }): Promise<ApiResponse>;
    /** GET /founding/work/{stage}/answers/{question}/history — rank: any-builder */
    getFoundingWorkStageAnswersQuestionHistory(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/work/{stage}/assist — rank: any-builder */
    getFoundingWorkStageAssist(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/work/{stage}/document — rank: any-builder */
    getFoundingWorkStageDocument(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /founding/work/{stage}/door — rank: any-builder */
    putFoundingWorkStageDoor(args: RequestArgs & { body: PutFoundingWorkStageDoorRequest }): Promise<ApiResponse>;
    /** PUT /founding/work/{stage}/link — rank: any-builder */
    putFoundingWorkStageLink(args?: RequestArgs & { body?: PutFoundingWorkStageLinkRequest }): Promise<ApiResponse>;
    /** PUT /founding/work/{stage}/page — rank: any-builder */
    putFoundingWorkStagePage(args?: RequestArgs & { body?: PutFoundingWorkStagePageRequest }): Promise<ApiResponse>;
    /** POST /founding/work/{stage}/proposals — rank: any-builder */
    postFoundingWorkStageProposals(args?: RequestArgs & { body?: PostFoundingWorkStageProposalsRequest }): Promise<ApiResponse>;
  };
  "frontDoorGuide": {
    /** POST /front-door-guide/conversations — rank: public */
    postFrontDoorGuideConversations(args?: RequestArgs & { body?: PostFrontDoorGuideConversationsRequest }): Promise<ApiResponse>;
    /** GET /front-door-guide/conversations/{id} — rank: public */
    getFrontDoorGuideConversationsId(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /front-door-guide/conversations/{id}/attach — rank: any-builder */
    postFrontDoorGuideConversationsIdAttach(args: RequestArgs & { body: PostFrontDoorGuideConversationsIdAttachRequest }): Promise<PostFrontDoorGuideConversationsIdAttachResponse>;
    /** POST /front-door-guide/conversations/{id}/messages — rank: public */
    postFrontDoorGuideConversationsIdMessages(args: RequestArgs & { body: PostFrontDoorGuideConversationsIdMessagesRequest }): Promise<ApiResponse>;
    /** POST /front-door-guide/conversations/{id}/plan — rank: public */
    postFrontDoorGuideConversationsIdPlan(args: RequestArgs & { body: PostFrontDoorGuideConversationsIdPlanRequest }): Promise<ApiResponse>;
    /** GET /front-door-guide/mine — rank: any-builder */
    getFrontDoorGuideMine(args?: RequestArgs): Promise<GetFrontDoorGuideMineResponse>;
    /** GET /front-door-guide/mine/handoff.md — rank: any-builder */
    getFrontDoorGuideMineHandoffMd(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /front-door-guide/status — rank: public */
    getFrontDoorGuideStatus(args?: RequestArgs): Promise<ApiResponse>;
  };
  "github": {
    /** GET /github/orgs — rank: any-builder */
    getGithubOrgs(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /github/orgs/{org} — rank: any-builder */
    getGithubOrgsOrg(args?: RequestArgs): Promise<GetGithubOrgsOrgResponse>;
    /** GET /github/repo — rank: any-builder */
    getGithubRepo(args?: RequestArgs): Promise<GetGithubRepoResponse>;
    /** GET /github/repo-invite — rank: archon */
    getGithubRepoInvite(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /github/repo-invite — rank: archon */
    postGithubRepoInvite(args: RequestArgs & { body: PostGithubRepoInviteRequest }): Promise<ApiResponse>;
    /** POST /github/repo/visibility — rank: any-builder */
    postGithubRepoVisibility(args: RequestArgs & { body: PostGithubRepoVisibilityRequest }): Promise<PostGithubRepoVisibilityResponse>;
    /** GET /github/repos — rank: any-builder */
    getGithubRepos(args?: RequestArgs): Promise<GetGithubReposResponse>;
    /** POST /github/repos — rank: any-builder */
    postGithubRepos(args: RequestArgs & { body: PostGithubReposRequest }): Promise<PostGithubReposResponse>;
    /** POST /github/repos/upload — rank: any-builder */
    postGithubReposUpload(args?: RequestArgs & { body?: PostGithubReposUploadRequest }): Promise<PostGithubReposUploadResponse>;
  };
  "goalTaskRelevance": {
    /** POST /goal-task-relevance/{id}/decide — rank: metic+archon */
    postGoalTaskRelevanceIdDecide(args: RequestArgs & { body: PostGoalTaskRelevanceIdDecideRequest }): Promise<PostGoalTaskRelevanceIdDecideResponse>;
    /** GET /goal-task-relevance/pending — rank: metic+archon */
    getGoalTaskRelevancePending(args?: RequestArgs): Promise<GetGoalTaskRelevancePendingResponse>;
  };
  "goals": {
    /** GET /goals — rank: any-builder */
    getGoals(args?: RequestArgs): Promise<GetGoalsResponse>;
    /** POST /goals — rank: metic+archon */
    postGoals(args: RequestArgs & { body: PostGoalsRequest }): Promise<PostGoalsResponse>;
    /** GET /goals/{id} — rank: any-builder */
    getGoalsId(args?: RequestArgs): Promise<GetGoalsIdResponse>;
    /** PATCH /goals/{id} — rank: any-builder */
    patchGoalsId(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /goals/{id}/accepting-requests — rank: any-builder */
    patchGoalsIdAcceptingRequests(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/{id}/archive — rank: metic+archon */
    postGoalsIdArchive(args?: RequestArgs & { body?: PostGoalsIdArchiveRequest }): Promise<PostGoalsIdArchiveResponse>;
    /** PATCH /goals/{id}/category — rank: any-builder */
    patchGoalsIdCategory(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /goals/{id}/conflicts — rank: any-builder */
    getGoalsIdConflicts(args?: RequestArgs): Promise<GetGoalsIdConflictsResponse>;
    /** POST /goals/{id}/conflicts/resolve — rank: any-builder */
    postGoalsIdConflictsResolve(args: RequestArgs & { body: PostGoalsIdConflictsResolveRequest }): Promise<PostGoalsIdConflictsResolveResponse>;
    /** GET /goals/{id}/dependency-forest — rank: any-builder */
    getGoalsIdDependencyForest(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/{id}/invitations — rank: any-builder */
    postGoalsIdInvitations(args?: RequestArgs & { body?: PostGoalsIdInvitationsRequest }): Promise<PostGoalsIdInvitationsResponse>;
    /** POST /goals/{id}/invitations/{reqId}/rescind — rank: any-builder */
    postGoalsIdInvitationsReqIdRescind(args?: RequestArgs): Promise<PostGoalsIdInvitationsReqIdRescindResponse>;
    /** POST /goals/{id}/invitations/{reqId}/respond — rank: any-builder */
    postGoalsIdInvitationsReqIdRespond(args: RequestArgs & { body: PostGoalsIdInvitationsReqIdRespondRequest }): Promise<PostGoalsIdInvitationsReqIdRespondResponse>;
    /** POST /goals/{id}/join — rank: any-builder */
    postGoalsIdJoin(args?: RequestArgs): Promise<PostGoalsIdJoinResponse>;
    /** POST /goals/{id}/leave — rank: any-builder */
    postGoalsIdLeave(args?: RequestArgs): Promise<PostGoalsIdLeaveResponse>;
    /** POST /goals/{id}/members — rank: any-builder */
    postGoalsIdMembers(args?: RequestArgs & { body?: PostGoalsIdMembersRequest }): Promise<PostGoalsIdMembersResponse>;
    /** PATCH /goals/{id}/members/{builderId} — rank: any-builder */
    patchGoalsIdMembersBuilderId(args: RequestArgs & { body: PatchGoalsIdMembersBuilderIdRequest }): Promise<PatchGoalsIdMembersBuilderIdResponse>;
    /** POST /goals/{id}/move — rank: archon */
    postGoalsIdMove(args: RequestArgs & { body: PostGoalsIdMoveRequest }): Promise<PostGoalsIdMoveResponse>;
    /** POST /goals/{id}/reopen — rank: metic+archon */
    postGoalsIdReopen(args?: RequestArgs): Promise<PostGoalsIdReopenResponse>;
    /** GET /goals/{id}/requests — rank: any-builder */
    getGoalsIdRequests(args?: RequestArgs): Promise<GetGoalsIdRequestsResponse>;
    /** POST /goals/{id}/requests — rank: any-builder */
    postGoalsIdRequests(args?: RequestArgs & { body?: PostGoalsIdRequestsRequest }): Promise<PostGoalsIdRequestsResponse>;
    /** POST /goals/{id}/requests/{reqId}/respond — rank: any-builder */
    postGoalsIdRequestsReqIdRespond(args: RequestArgs & { body: PostGoalsIdRequestsReqIdRespondRequest }): Promise<PostGoalsIdRequestsReqIdRespondResponse>;
    /** POST /goals/{id}/requests/{reqId}/withdraw — rank: any-builder */
    postGoalsIdRequestsReqIdWithdraw(args?: RequestArgs): Promise<PostGoalsIdRequestsReqIdWithdrawResponse>;
    /** POST /goals/{id}/scope — rank: metic+archon */
    postGoalsIdScope(args: RequestArgs & { body: PostGoalsIdScopeRequest }): Promise<PostGoalsIdScopeResponse>;
    /** GET /goals/{id}/suggest-criteria — rank: any-builder */
    getGoalsIdSuggestCriteria(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/{id}/tasks — rank: any-builder */
    postGoalsIdTasks(args: RequestArgs & { body: PostGoalsIdTasksRequest }): Promise<PostGoalsIdTasksResponse>;
    /** POST /goals/{id}/transfer — rank: any-builder */
    postGoalsIdTransfer(args?: RequestArgs & { body?: PostGoalsIdTransferRequest }): Promise<PostGoalsIdTransferResponse>;
    /** PATCH /goals/{id}/visibility — rank: any-builder */
    patchGoalsIdVisibility(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/{id}/water — rank: any-builder */
    postGoalsIdWater(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /goals/graph — rank: any-builder */
    getGoalsGraph(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /goals/inbox — rank: any-builder */
    getGoalsInbox(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/reorder — rank: metic+archon */
    postGoalsReorder(args: RequestArgs & { body: PostGoalsReorderRequest }): Promise<PostGoalsReorderResponse>;
    /** GET /goals/rollups — rank: any-builder */
    getGoalsRollups(args?: RequestArgs): Promise<GetGoalsRollupsResponse>;
    /** GET /goals/suggestions — rank: any-builder */
    getGoalsSuggestions(args?: RequestArgs): Promise<ApiResponse>;
  };
  "government": {
    /** GET /government/access — rank: any-builder */
    getGovernmentAccess(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/access/{accessKey}/holders — rank: archon */
    postGovernmentAccessAccessKeyHolders(args?: RequestArgs): Promise<ApiResponse>;
    /** DELETE /government/access/{accessKey}/holders/{builderId} — rank: archon */
    deleteGovernmentAccessAccessKeyHoldersBuilderId(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /government/asks/{matterId} — rank: any-builder */
    putGovernmentAsksMatterId(args?: RequestArgs): Promise<PutGovernmentAsksMatterIdResponse>;
    /** POST /government/asks/{matterId}/pass — rank: any-builder */
    postGovernmentAsksMatterIdPass(args: RequestArgs & { body: PostGovernmentAsksMatterIdPassRequest }): Promise<PostGovernmentAsksMatterIdPassResponse>;
    /** POST /government/asks/{matterId}/unclear — rank: any-builder */
    postGovernmentAsksMatterIdUnclear(args?: RequestArgs & { body?: PostGovernmentAsksMatterIdUnclearRequest }): Promise<PostGovernmentAsksMatterIdUnclearResponse>;
    /** POST /government/asks/check — rank: any-builder */
    postGovernmentAsksCheck(args?: RequestArgs): Promise<PostGovernmentAsksCheckResponse>;
    /** GET /government/asks/unclear — rank: any-builder */
    getGovernmentAsksUnclear(args?: RequestArgs): Promise<GetGovernmentAsksUnclearResponse>;
    /** GET /government/assignments — rank: archon */
    getGovernmentAssignments(args?: RequestArgs): Promise<GetGovernmentAssignmentsResponse>;
    /** POST /government/assignments — rank: archon */
    postGovernmentAssignments(args: RequestArgs & { body: PostGovernmentAssignmentsRequest }): Promise<ApiResponse>;
    /** DELETE /government/assignments/{builderId}/{rankKey} — rank: archon */
    deleteGovernmentAssignmentsBuilderIdRankKey(args?: RequestArgs): Promise<DeleteGovernmentAssignmentsBuilderIdRankKeyResponse>;
    /** GET /government/blockers/for-me — rank: any-builder */
    getGovernmentBlockersForMe(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/blockers/people — rank: any-builder */
    getGovernmentBlockersPeople(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/board/charter — rank: metic+archon */
    postGovernmentBoardCharter(args?: RequestArgs & { body?: PostGovernmentBoardCharterRequest }): Promise<PostGovernmentBoardCharterResponse>;
    /** POST /government/board/decision-rules — rank: metic+archon */
    postGovernmentBoardDecisionRules(args: RequestArgs & { body: PostGovernmentBoardDecisionRulesRequest }): Promise<PostGovernmentBoardDecisionRulesResponse>;
    /** GET /government/board/genesis-stages — rank: any-builder */
    getGovernmentBoardGenesisStages(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/board/items — rank: any-builder */
    getGovernmentBoardItems(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/board/items — rank: metic+archon */
    postGovernmentBoardItems(args: RequestArgs & { body: PostGovernmentBoardItemsRequest }): Promise<PostGovernmentBoardItemsResponse>;
    /** POST /government/board/items/{itemId}/votes — rank: any-builder */
    postGovernmentBoardItemsItemIdVotes(args: RequestArgs & { body: PostGovernmentBoardItemsItemIdVotesRequest }): Promise<ApiResponse>;
    /** POST /government/board/items/{itemId}/withdraw — rank: metic+archon */
    postGovernmentBoardItemsItemIdWithdraw(args?: RequestArgs): Promise<PostGovernmentBoardItemsItemIdWithdrawResponse>;
    /** POST /government/board/laws — rank: metic+archon */
    postGovernmentBoardLaws(args?: RequestArgs & { body?: PostGovernmentBoardLawsRequest }): Promise<PostGovernmentBoardLawsResponse>;
    /** POST /government/board/matters — rank: metic+archon */
    postGovernmentBoardMatters(args: RequestArgs & { body: PostGovernmentBoardMattersRequest }): Promise<PostGovernmentBoardMattersResponse>;
    /** POST /government/board/presets — rank: metic+archon */
    postGovernmentBoardPresets(args: RequestArgs & { body: PostGovernmentBoardPresetsRequest }): Promise<PostGovernmentBoardPresetsResponse>;
    /** POST /government/buildouts — rank: any-builder */
    postGovernmentBuildouts(args: RequestArgs & { body: PostGovernmentBuildoutsRequest }): Promise<PostGovernmentBuildoutsResponse>;
    /** GET /government/constitution — rank: any-builder */
    getGovernmentConstitution(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/constitution/reapply — rank: archon */
    postGovernmentConstitutionReapply(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/counts — rank: any-builder */
    getGovernmentCounts(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/docket — rank: any-builder */
    getGovernmentDocket(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/laws — rank: any-builder */
    getGovernmentLaws(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/leads — rank: any-builder */
    getGovernmentLeads(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/permissions — rank: archon */
    getGovernmentPermissions(args?: RequestArgs): Promise<GetGovernmentPermissionsResponse>;
    /** GET /government/presets — rank: any-builder */
    getGovernmentPresets(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/rank-sets/apply — rank: archon */
    postGovernmentRankSetsApply(args: RequestArgs & { body: PostGovernmentRankSetsApplyRequest }): Promise<PostGovernmentRankSetsApplyResponse>;
    /** GET /government/ranks — rank: archon */
    getGovernmentRanks(args?: RequestArgs): Promise<GetGovernmentRanksResponse>;
    /** POST /government/ranks — rank: archon */
    postGovernmentRanks(args: RequestArgs & { body: PostGovernmentRanksRequest }): Promise<PostGovernmentRanksResponse>;
    /** DELETE /government/ranks/{rankKey} — rank: archon */
    deleteGovernmentRanksRankKey(args?: RequestArgs): Promise<DeleteGovernmentRanksRankKeyResponse>;
    /** DELETE /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon */
    deleteGovernmentRanksRankKeyPermissionsPermissionKey(args?: RequestArgs): Promise<DeleteGovernmentRanksRankKeyPermissionsPermissionKeyResponse>;
    /** PUT /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon */
    putGovernmentRanksRankKeyPermissionsPermissionKey(args?: RequestArgs): Promise<PutGovernmentRanksRankKeyPermissionsPermissionKeyResponse>;
    /** POST /government/ranks/{rankKey}/reset — rank: archon */
    postGovernmentRanksRankKeyReset(args?: RequestArgs): Promise<PostGovernmentRanksRankKeyResetResponse>;
    /** GET /government/treasury — rank: any-builder */
    getGovernmentTreasury(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /government/treasury/borrows/{borrowId}/answer — rank: any-builder */
    postGovernmentTreasuryBorrowsBorrowIdAnswer(args: RequestArgs & { body: PostGovernmentTreasuryBorrowsBorrowIdAnswerRequest }): Promise<PostGovernmentTreasuryBorrowsBorrowIdAnswerResponse>;
    /** PUT /government/treasury/pots/{goalId} — rank: any-builder */
    putGovernmentTreasuryPotsGoalId(args?: RequestArgs & { body?: PutGovernmentTreasuryPotsGoalIdRequest }): Promise<ApiResponse>;
  };
  "grades": {
    /** GET /grades/by-builder — rank: metic+archon */
    getGradesByBuilder(args?: RequestArgs): Promise<GetGradesByBuilderResponse>;
  };
  "guildRequests": {
    /** DELETE /guild-requests/{id} — rank: any-builder */
    deleteGuildRequestsId(args?: RequestArgs): Promise<DeleteGuildRequestsIdResponse>;
    /** POST /guild-requests/{id}/accept — rank: any-builder */
    postGuildRequestsIdAccept(args?: RequestArgs & { body?: PostGuildRequestsIdAcceptRequest }): Promise<PostGuildRequestsIdAcceptResponse>;
    /** POST /guild-requests/{id}/decline — rank: any-builder */
    postGuildRequestsIdDecline(args?: RequestArgs): Promise<ApiResponse>;
  };
  "guilds": {
    /** GET /guilds — rank: public */
    getGuilds(args?: RequestArgs): Promise<GetGuildsResponse>;
    /** POST /guilds — rank: any-builder */
    postGuilds(args: RequestArgs & { body: PostGuildsRequest }): Promise<PostGuildsResponse>;
    /** DELETE /guilds/{slug} — rank: any-builder */
    deleteGuildsSlug(args?: RequestArgs): Promise<DeleteGuildsSlugResponse>;
    /** GET /guilds/{slug} — rank: public */
    getGuildsSlug(args?: RequestArgs): Promise<GetGuildsSlugResponse>;
    /** PATCH /guilds/{slug} — rank: any-builder */
    patchGuildsSlug(args?: RequestArgs & { body?: PatchGuildsSlugRequest }): Promise<PatchGuildsSlugResponse>;
    /** POST /guilds/{slug}/engagements — rank: any-builder */
    postGuildsSlugEngagements(args: RequestArgs & { body: PostGuildsSlugEngagementsRequest }): Promise<PostGuildsSlugEngagementsResponse>;
    /** POST /guilds/{slug}/invites — rank: any-builder */
    postGuildsSlugInvites(args: RequestArgs & { body: PostGuildsSlugInvitesRequest }): Promise<PostGuildsSlugInvitesResponse>;
    /** GET /guilds/{slug}/members — rank: any-builder */
    getGuildsSlugMembers(args?: RequestArgs): Promise<GetGuildsSlugMembersResponse>;
    /** DELETE /guilds/{slug}/members/{handle} — rank: any-builder */
    deleteGuildsSlugMembersHandle(args?: RequestArgs): Promise<DeleteGuildsSlugMembersHandleResponse>;
    /** DELETE /guilds/{slug}/membership — rank: any-builder */
    deleteGuildsSlugMembership(args?: RequestArgs): Promise<DeleteGuildsSlugMembershipResponse>;
    /** PATCH /guilds/{slug}/membership — rank: any-builder */
    patchGuildsSlugMembership(args?: RequestArgs & { body?: PatchGuildsSlugMembershipRequest }): Promise<ApiResponse>;
    /** GET /guilds/{slug}/requests — rank: any-builder */
    getGuildsSlugRequests(args?: RequestArgs): Promise<GetGuildsSlugRequestsResponse>;
    /** POST /guilds/{slug}/requests — rank: any-builder */
    postGuildsSlugRequests(args?: RequestArgs & { body?: PostGuildsSlugRequestsRequest }): Promise<PostGuildsSlugRequestsResponse>;
    /** POST /guilds/{slug}/transfer — rank: any-builder */
    postGuildsSlugTransfer(args: RequestArgs & { body: PostGuildsSlugTransferRequest }): Promise<PostGuildsSlugTransferResponse>;
  };
  "healthz": {
    /** GET /healthz — rank: public */
    getHealthz(args?: RequestArgs): Promise<GetHealthzResponse>;
  };
  "helpRequests": {
    /** GET /help-requests — rank: any-builder */
    getHelpRequests(args?: RequestArgs): Promise<GetHelpRequestsResponse>;
    /** POST /help-requests — rank: any-builder */
    postHelpRequests(args: RequestArgs & { body: PostHelpRequestsRequest }): Promise<PostHelpRequestsResponse>;
    /** PATCH /help-requests/{id} — rank: any-builder */
    patchHelpRequestsId(args: RequestArgs & { body: PatchHelpRequestsIdRequest }): Promise<PatchHelpRequestsIdResponse>;
    /** GET /help-requests/{id}/replies — rank: any-builder */
    getHelpRequestsIdReplies(args?: RequestArgs): Promise<GetHelpRequestsIdRepliesResponse>;
    /** POST /help-requests/{id}/replies — rank: any-builder */
    postHelpRequestsIdReplies(args: RequestArgs & { body: PostHelpRequestsIdRepliesRequest }): Promise<PostHelpRequestsIdRepliesResponse>;
    /** GET /help-requests/archive — rank: any-builder */
    getHelpRequestsArchive(args?: RequestArgs): Promise<GetHelpRequestsArchiveResponse>;
    /** GET /help-requests/for-me — rank: any-builder */
    getHelpRequestsForMe(args?: RequestArgs): Promise<GetHelpRequestsForMeResponse>;
    /** GET /help-requests/mine — rank: any-builder */
    getHelpRequestsMine(args?: RequestArgs): Promise<GetHelpRequestsMineResponse>;
  };
  "home": {
    /** GET /home/city — rank: any-builder */
    getHomeCity(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /home/gallery — rank: any-builder */
    getHomeGallery(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /home/gallery/{id}/heart — rank: any-builder */
    putHomeGalleryIdHeart(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /home/studio/works — rank: any-builder */
    getHomeStudioWorks(args?: RequestArgs): Promise<ApiResponse>;
  };
  "inbox": {
    /** GET /inbox — rank: any-builder */
    getInbox(args?: RequestArgs): Promise<GetInboxResponse>;
    /** POST /inbox — rank: any-builder */
    postInbox(args: RequestArgs & { body: PostInboxRequest }): Promise<ApiResponse>;
    /** GET /inbox/{id} — rank: any-builder */
    getInboxId(args?: RequestArgs): Promise<GetInboxIdResponse>;
    /** PATCH /inbox/{id} — rank: metic+archon */
    patchInboxId(args?: RequestArgs & { body?: PatchInboxIdRequest }): Promise<PatchInboxIdResponse>;
    /** PATCH /inbox/{id}/body — rank: any-builder */
    patchInboxIdBody(args: RequestArgs & { body: PatchInboxIdBodyRequest }): Promise<PatchInboxIdBodyResponse>;
    /** POST /inbox/{id}/develop — rank: any-builder */
    postInboxIdDevelop(args: RequestArgs & { body: PostInboxIdDevelopRequest }): Promise<ApiResponse>;
    /** POST /inbox/{id}/ratify — rank: metic+archon */
    postInboxIdRatify(args?: RequestArgs & { body?: PostInboxIdRatifyRequest }): Promise<ApiResponse>;
    /** POST /inbox/{id}/ratify-goal — rank: metic+archon */
    postInboxIdRatifyGoal(args: RequestArgs & { body: PostInboxIdRatifyGoalRequest }): Promise<ApiResponse>;
    /** POST /inbox/{id}/resubmit — rank: any-builder */
    postInboxIdResubmit(args: RequestArgs & { body: PostInboxIdResubmitRequest }): Promise<ApiResponse>;
    /** DELETE /inbox/{id}/spark — rank: any-builder */
    deleteInboxIdSpark(args?: RequestArgs): Promise<DeleteInboxIdSparkResponse>;
    /** POST /inbox/{id}/spark — rank: any-builder */
    postInboxIdSpark(args?: RequestArgs): Promise<PostInboxIdSparkResponse>;
    /** POST /inbox/{id}/vote — rank: metic+archon */
    postInboxIdVote(args: RequestArgs & { body: PostInboxIdVoteRequest }): Promise<ApiResponse>;
    /** GET /inbox/awaiting-nod — rank: metic+archon */
    getInboxAwaitingNod(args?: RequestArgs): Promise<GetInboxAwaitingNodResponse>;
    /** GET /inbox/by-builder/{id} — rank: any-builder */
    getInboxByBuilderId(args?: RequestArgs): Promise<GetInboxByBuilderIdResponse>;
    /** POST /inbox/preview-landing — rank: any-builder */
    postInboxPreviewLanding(args?: RequestArgs & { body?: PostInboxPreviewLandingRequest }): Promise<ApiResponse>;
    /** GET /inbox/rotting — rank: any-builder */
    getInboxRotting(args?: RequestArgs): Promise<GetInboxRottingResponse>;
    /** POST /inbox/score — rank: any-builder */
    postInboxScore(args: RequestArgs & { body: PostInboxScoreRequest }): Promise<PostInboxScoreResponse>;
    /** GET /inbox/sparks — rank: any-builder */
    getInboxSparks(args?: RequestArgs): Promise<GetInboxSparksResponse>;
    /** GET /inbox/template — rank: any-builder */
    getInboxTemplate(args?: RequestArgs): Promise<GetInboxTemplateResponse>;
    /** GET /inbox/votes — rank: any-builder */
    getInboxVotes(args?: RequestArgs): Promise<GetInboxVotesResponse>;
  };
  "instance": {
    /** GET /instance — rank: public */
    getInstance(args?: RequestArgs): Promise<ApiResponse>;
  };
  "leaderboard": {
    /** GET /leaderboard — rank: public */
    getLeaderboard(args?: RequestArgs): Promise<GetLeaderboardResponse>;
  };
  "learnings": {
    /** GET /learnings — rank: any-builder */
    getLearnings(args?: RequestArgs): Promise<GetLearningsResponse>;
    /** POST /learnings — rank: any-builder */
    postLearnings(args: RequestArgs & { body: PostLearningsRequest }): Promise<PostLearningsResponse>;
  };
  "live": {
    /** GET /live — rank: any-builder */
    getLive(args?: RequestArgs): Promise<ApiResponse>;
  };
  "llmCache": {
    /** POST /llm-cache/lookup — rank: metic+archon */
    postLlmCacheLookup(args?: RequestArgs & { body?: PostLlmCacheLookupRequest }): Promise<PostLlmCacheLookupResponse>;
    /** POST /llm-cache/store — rank: metic+archon */
    postLlmCacheStore(args?: RequestArgs & { body?: PostLlmCacheStoreRequest }): Promise<PostLlmCacheStoreResponse>;
  };
  "marketWatch": {
    /** GET /market-watch/ask — rank: any-builder */
    getMarketWatchAsk(args?: RequestArgs): Promise<GetMarketWatchAskResponse>;
    /** POST /market-watch/ask/answer — rank: any-builder */
    postMarketWatchAskAnswer(args?: RequestArgs & { body?: PostMarketWatchAskAnswerRequest }): Promise<ApiResponse>;
    /** GET /market-watch/home — rank: any-builder */
    getMarketWatchHome(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /market-watch/items/{id} — rank: any-builder */
    getMarketWatchItemsId(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /market-watch/proposals — rank: any-builder */
    postMarketWatchProposals(args: RequestArgs & { body: PostMarketWatchProposalsRequest }): Promise<PostMarketWatchProposalsResponse>;
    /** POST /market-watch/proposals/{id}/decide — rank: any-builder */
    postMarketWatchProposalsIdDecide(args: RequestArgs & { body: PostMarketWatchProposalsIdDecideRequest }): Promise<ApiResponse>;
    /** POST /market-watch/proposals/{id}/vote — rank: metic+archon */
    postMarketWatchProposalsIdVote(args?: RequestArgs): Promise<PostMarketWatchProposalsIdVoteResponse>;
    /** GET /market-watch/rules — rank: any-builder */
    getMarketWatchRules(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /market-watch/rules/proposals — rank: any-builder */
    postMarketWatchRulesProposals(args: RequestArgs & { body: PostMarketWatchRulesProposalsRequest }): Promise<PostMarketWatchRulesProposalsResponse>;
    /** GET /market-watch/settings — rank: metic+archon */
    getMarketWatchSettings(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /market-watch/settings — rank: metic+archon */
    patchMarketWatchSettings(args?: RequestArgs & { body?: PatchMarketWatchSettingsRequest }): Promise<ApiResponse>;
    /** DELETE /market-watch/settings/key — rank: metic+archon */
    deleteMarketWatchSettingsKey(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /market-watch/settings/key — rank: metic+archon */
    putMarketWatchSettingsKey(args: RequestArgs & { body: PutMarketWatchSettingsKeyRequest }): Promise<ApiResponse>;
  };
  "me": {
    /** GET /me — rank: any-builder */
    getMe(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/achievements — rank: any-builder */
    getMeAchievements(args?: RequestArgs): Promise<GetMeAchievementsResponse>;
    /** POST /me/anthropic-link — rank: any-builder */
    postMeAnthropicLink(args: RequestArgs & { body: PostMeAnthropicLinkRequest }): Promise<PostMeAnthropicLinkResponse>;
    /** PUT /me/assumed-character — rank: any-builder */
    putMeAssumedCharacter(args?: RequestArgs & { body?: PutMeAssumedCharacterRequest }): Promise<PutMeAssumedCharacterResponse>;
    /** GET /me/cash-outs — rank: any-builder */
    getMeCashOuts(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /me/cash-outs — rank: any-builder */
    postMeCashOuts(args: RequestArgs & { body: PostMeCashOutsRequest }): Promise<ApiResponse>;
    /** POST /me/cash-outs/{id}/cancel — rank: any-builder */
    postMeCashOutsIdCancel(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /me/cash-outs/{id}/retry — rank: any-builder */
    postMeCashOutsIdRetry(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /me/character — rank: any-builder */
    putMeCharacter(args?: RequestArgs & { body?: PutMeCharacterRequest }): Promise<PutMeCharacterResponse>;
    /** PATCH /me/checkout-freshness — rank: any-builder */
    patchMeCheckoutFreshness(args: RequestArgs & { body: PatchMeCheckoutFreshnessRequest }): Promise<PatchMeCheckoutFreshnessResponse>;
    /** PATCH /me/core-move-seen — rank: any-builder */
    patchMeCoreMoveSeen(args: RequestArgs & { body: PatchMeCoreMoveSeenRequest }): Promise<PatchMeCoreMoveSeenResponse>;
    /** GET /me/credits — rank: any-builder */
    getMeCredits(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/cross-project — rank: any-builder */
    getMeCrossProject(args?: RequestArgs): Promise<GetMeCrossProjectResponse>;
    /** PATCH /me/cross-project — rank: any-builder */
    patchMeCrossProject(args?: RequestArgs & { body?: PatchMeCrossProjectRequest }): Promise<PatchMeCrossProjectResponse>;
    /** PATCH /me/disciplines — rank: any-builder */
    patchMeDisciplines(args: RequestArgs & { body: PatchMeDisciplinesRequest }): Promise<PatchMeDisciplinesResponse>;
    /** GET /me/display-name — rank: any-builder */
    getMeDisplayName(args?: RequestArgs): Promise<GetMeDisplayNameResponse>;
    /** PATCH /me/display-name — rank: any-builder */
    patchMeDisplayName(args?: RequestArgs): Promise<PatchMeDisplayNameResponse>;
    /** GET /me/event-sound-prefs — rank: any-builder */
    getMeEventSoundPrefs(args?: RequestArgs): Promise<GetMeEventSoundPrefsResponse>;
    /** PATCH /me/event-sound-prefs — rank: any-builder */
    patchMeEventSoundPrefs(args?: RequestArgs): Promise<PatchMeEventSoundPrefsResponse>;
    /** GET /me/filter-views — rank: any-builder */
    getMeFilterViews(args?: RequestArgs): Promise<GetMeFilterViewsResponse>;
    /** POST /me/filter-views — rank: any-builder */
    postMeFilterViews(args: RequestArgs & { body: PostMeFilterViewsRequest }): Promise<PostMeFilterViewsResponse>;
    /** DELETE /me/filter-views/{id} — rank: any-builder */
    deleteMeFilterViewsId(args?: RequestArgs): Promise<DeleteMeFilterViewsIdResponse>;
    /** PATCH /me/filter-views/{id} — rank: any-builder */
    patchMeFilterViewsId(args: RequestArgs & { body: PatchMeFilterViewsIdRequest }): Promise<PatchMeFilterViewsIdResponse>;
    /** POST /me/guardian-cosigns — rank: any-builder */
    postMeGuardianCosigns(args?: RequestArgs & { body?: PostMeGuardianCosignsRequest }): Promise<PostMeGuardianCosignsResponse>;
    /** GET /me/guild-engagements — rank: any-builder */
    getMeGuildEngagements(args?: RequestArgs): Promise<GetMeGuildEngagementsResponse>;
    /** GET /me/guild-requests — rank: any-builder */
    getMeGuildRequests(args?: RequestArgs): Promise<GetMeGuildRequestsResponse>;
    /** GET /me/guilds — rank: any-builder */
    getMeGuilds(args?: RequestArgs): Promise<GetMeGuildsResponse>;
    /** GET /me/hall-view — rank: any-builder */
    getMeHallView(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/hall-view — rank: any-builder */
    patchMeHallView(args: RequestArgs & { body: PatchMeHallViewRequest }): Promise<ApiResponse>;
    /** PATCH /me/handle — rank: any-builder */
    patchMeHandle(args: RequestArgs & { body: PatchMeHandleRequest }): Promise<PatchMeHandleResponse>;
    /** GET /me/howto — rank: any-builder */
    getMeHowto(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /me/howto/read — rank: any-builder */
    postMeHowtoRead(args?: RequestArgs & { body?: PostMeHowtoReadRequest }): Promise<ApiResponse>;
    /** POST /me/howto/reset — rank: any-builder */
    postMeHowtoReset(args?: RequestArgs & { body?: PostMeHowtoResetRequest }): Promise<ApiResponse>;
    /** GET /me/interaction — rank: any-builder */
    getMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/interaction — rank: any-builder */
    patchMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/model-allocation — rank: any-builder */
    getMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/model-allocation — rank: any-builder */
    patchMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/passkeys — rank: any-builder */
    getMePasskeys(args?: RequestArgs): Promise<GetMePasskeysResponse>;
    /** POST /me/passkeys/authenticate/options — rank: any-builder */
    postMePasskeysAuthenticateOptions(args?: RequestArgs): Promise<PostMePasskeysAuthenticateOptionsResponse>;
    /** POST /me/passkeys/authenticate/verify — rank: any-builder */
    postMePasskeysAuthenticateVerify(args?: RequestArgs & { body?: PostMePasskeysAuthenticateVerifyRequest }): Promise<PostMePasskeysAuthenticateVerifyResponse>;
    /** GET /me/passkeys/browser.js — rank: any-builder */
    getMePasskeysBrowserJs(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /me/passkeys/register/options — rank: any-builder */
    postMePasskeysRegisterOptions(args?: RequestArgs): Promise<PostMePasskeysRegisterOptionsResponse>;
    /** POST /me/passkeys/register/verify — rank: any-builder */
    postMePasskeysRegisterVerify(args?: RequestArgs & { body?: PostMePasskeysRegisterVerifyRequest }): Promise<PostMePasskeysRegisterVerifyResponse>;
    /** POST /me/passkeys/remove — rank: any-builder */
    postMePasskeysRemove(args?: RequestArgs & { body?: PostMePasskeysRemoveRequest }): Promise<PostMePasskeysRemoveResponse>;
    /** POST /me/passkeys/rename — rank: any-builder */
    postMePasskeysRename(args?: RequestArgs & { body?: PostMePasskeysRenameRequest }): Promise<PostMePasskeysRenameResponse>;
    /** POST /me/payout-age — rank: any-builder */
    postMePayoutAge(args: RequestArgs & { body: PostMePayoutAgeRequest }): Promise<PostMePayoutAgeResponse>;
    /** POST /me/payout-freezes/{id}/appeal — rank: any-builder */
    postMePayoutFreezesIdAppeal(args: RequestArgs & { body: PostMePayoutFreezesIdAppealRequest }): Promise<PostMePayoutFreezesIdAppealResponse>;
    /** GET /me/payouts — rank: any-builder */
    getMePayouts(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/profile — rank: any-builder */
    patchMeProfile(args?: RequestArgs & { body?: PatchMeProfileRequest }): Promise<PatchMeProfileResponse>;
    /** GET /me/profile-nudge — rank: any-builder */
    getMeProfileNudge(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/profile-nudge — rank: any-builder */
    patchMeProfileNudge(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/recent-ships — rank: any-builder */
    getMeRecentShips(args?: RequestArgs): Promise<GetMeRecentShipsResponse>;
    /** GET /me/render — rank: any-builder */
    getMeRender(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/render — rank: any-builder */
    patchMeRender(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/sessions — rank: any-builder */
    getMeSessions(args?: RequestArgs): Promise<GetMeSessionsResponse>;
    /** POST /me/sessions/revoke — rank: any-builder */
    postMeSessionsRevoke(args?: RequestArgs & { body?: PostMeSessionsRevokeRequest }): Promise<PostMeSessionsRevokeResponse>;
    /** POST /me/sessions/revoke-all — rank: any-builder */
    postMeSessionsRevokeAll(args?: RequestArgs): Promise<PostMeSessionsRevokeAllResponse>;
    /** GET /me/sign-in-methods — rank: any-builder */
    getMeSignInMethods(args?: RequestArgs): Promise<GetMeSignInMethodsResponse>;
    /** DELETE /me/sign-in-methods/{provider} — rank: any-builder */
    deleteMeSignInMethodsProvider(args?: RequestArgs): Promise<DeleteMeSignInMethodsProviderResponse>;
    /** GET /me/skill-prefs — rank: any-builder */
    getMeSkillPrefs(args?: RequestArgs): Promise<GetMeSkillPrefsResponse>;
    /** PATCH /me/skill-prefs — rank: any-builder */
    patchMeSkillPrefs(args?: RequestArgs): Promise<PatchMeSkillPrefsResponse>;
    /** GET /me/sound-prefs — rank: any-builder */
    getMeSoundPrefs(args?: RequestArgs): Promise<GetMeSoundPrefsResponse>;
    /** PATCH /me/sound-prefs — rank: any-builder */
    patchMeSoundPrefs(args?: RequestArgs): Promise<PatchMeSoundPrefsResponse>;
    /** GET /me/specialities — rank: any-builder */
    getMeSpecialities(args?: RequestArgs): Promise<GetMeSpecialitiesResponse>;
    /** GET /me/wandering — rank: any-builder */
    getMeWandering(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/wandering — rank: any-builder */
    patchMeWandering(args?: RequestArgs): Promise<ApiResponse>;
  };
  "memory": {
    /** GET /memory/bfg/builders/{builderId}/file — rank: bfg-principal */
    getMemoryBfgBuildersBuilderIdFile(args?: RequestArgs): Promise<GetMemoryBfgBuildersBuilderIdFileResponse>;
    /** GET /memory/bfg/builders/{builderId}/files — rank: bfg-principal */
    getMemoryBfgBuildersBuilderIdFiles(args?: RequestArgs): Promise<GetMemoryBfgBuildersBuilderIdFilesResponse>;
    /** POST /memory/builders/{builderId}/bfg-write — rank: bfg-principal */
    postMemoryBuildersBuilderIdBfgWrite(args?: RequestArgs & { body?: PostMemoryBuildersBuilderIdBfgWriteRequest }): Promise<PostMemoryBuildersBuilderIdBfgWriteResponse>;
    /** GET /memory/builders/{builderId}/file — rank: metic+archon */
    getMemoryBuildersBuilderIdFile(args?: RequestArgs): Promise<GetMemoryBuildersBuilderIdFileResponse>;
    /** GET /memory/builders/{builderId}/files — rank: metic+archon */
    getMemoryBuildersBuilderIdFiles(args?: RequestArgs): Promise<GetMemoryBuildersBuilderIdFilesResponse>;
    /** DELETE /memory/file — rank: any-builder */
    deleteMemoryFile(args?: RequestArgs): Promise<DeleteMemoryFileResponse>;
    /** GET /memory/file — rank: any-builder */
    getMemoryFile(args?: RequestArgs): Promise<GetMemoryFileResponse>;
    /** GET /memory/files — rank: any-builder */
    getMemoryFiles(args?: RequestArgs): Promise<GetMemoryFilesResponse>;
    /** POST /memory/sync — rank: any-builder */
    postMemorySync(args?: RequestArgs & { body?: PostMemorySyncRequest }): Promise<ApiResponse>;
  };
  "mingle": {
    /** GET /mingle — rank: any-builder */
    getMingle(args?: RequestArgs): Promise<GetMingleResponse>;
    /** PUT /mingle/opt-in — rank: any-builder */
    putMingleOptIn(args: RequestArgs & { body: PutMingleOptInRequest }): Promise<PutMingleOptInResponse>;
    /** POST /mingle/pairs/{id}/decide — rank: any-builder */
    postMinglePairsIdDecide(args: RequestArgs & { body: PostMinglePairsIdDecideRequest }): Promise<PostMinglePairsIdDecideResponse>;
    /** PUT /mingle/project — rank: metic+archon */
    putMingleProject(args: RequestArgs & { body: PutMingleProjectRequest }): Promise<ApiResponse>;
    /** POST /mingle/round — rank: metic+archon */
    postMingleRound(args?: RequestArgs & { body?: PostMingleRoundRequest }): Promise<PostMingleRoundResponse>;
  };
  "modules": {
    /** GET /modules — rank: any-builder */
    getModules(args?: RequestArgs): Promise<GetModulesResponse>;
    /** POST /modules/{key}/enable — rank: metic+archon */
    postModulesKeyEnable(args?: RequestArgs & { body?: PostModulesKeyEnableRequest }): Promise<PostModulesKeyEnableResponse>;
    /** POST /modules/{key}/general-only — rank: metic+archon */
    postModulesKeyGeneralOnly(args: RequestArgs & { body: PostModulesKeyGeneralOnlyRequest }): Promise<ApiResponse>;
    /** POST /modules/{key}/submit — rank: metic+archon */
    postModulesKeySubmit(args?: RequestArgs & { body?: PostModulesKeySubmitRequest }): Promise<PostModulesKeySubmitResponse>;
    /** GET /modules/submissions — rank: metic+archon */
    getModulesSubmissions(args?: RequestArgs): Promise<GetModulesSubmissionsResponse>;
    /** GET /modules/testing — rank: any-builder */
    getModulesTesting(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /modules/testing — rank: metic+archon */
    postModulesTesting(args: RequestArgs & { body: PostModulesTestingRequest }): Promise<ApiResponse>;
  };
  "moving": {
    /** GET /moving — rank: any-builder */
    getMoving(args?: RequestArgs): Promise<ApiResponse>;
  };
  "myProjects": {
    /** GET /my-projects — rank: any-builder */
    getMyProjects(args?: RequestArgs): Promise<GetMyProjectsResponse>;
    /** POST /my-projects/{clientId}/leave — rank: any-builder */
    postMyProjectsClientIdLeave(args?: RequestArgs): Promise<PostMyProjectsClientIdLeaveResponse>;
    /** GET /my-projects/invites — rank: any-builder */
    getMyProjectsInvites(args?: RequestArgs): Promise<GetMyProjectsInvitesResponse>;
    /** POST /my-projects/invites/{clientId}/decline — rank: any-builder */
    postMyProjectsInvitesClientIdDecline(args?: RequestArgs): Promise<PostMyProjectsInvitesClientIdDeclineResponse>;
    /** POST /my-projects/join — rank: any-builder */
    postMyProjectsJoin(args: RequestArgs & { body: PostMyProjectsJoinRequest }): Promise<PostMyProjectsJoinResponse>;
  };
  "notes": {
    /** GET /notes — rank: any-builder */
    getNotes(args?: RequestArgs): Promise<GetNotesResponse>;
    /** POST /notes — rank: any-builder */
    postNotes(args: RequestArgs & { body: PostNotesRequest }): Promise<PostNotesResponse>;
    /** DELETE /notes/{id} — rank: any-builder */
    deleteNotesId(args?: RequestArgs): Promise<DeleteNotesIdResponse>;
    /** PATCH /notes/{id} — rank: any-builder */
    patchNotesId(args: RequestArgs & { body: PatchNotesIdRequest }): Promise<PatchNotesIdResponse>;
  };
  "npmRelease": {
    /** DELETE /npm-release/preview — rank: any-builder */
    deleteNpmReleasePreview(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /npm-release/preview — rank: any-builder */
    getNpmReleasePreview(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /npm-release/preview — rank: any-builder */
    postNpmReleasePreview(args: RequestArgs & { body: PostNpmReleasePreviewRequest }): Promise<ApiResponse>;
    /** GET /npm-release/preview/enter — rank: any-builder */
    getNpmReleasePreviewEnter(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /npm-release/preview/exit — rank: any-builder */
    getNpmReleasePreviewExit(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /npm-release/release — rank: archon */
    postNpmReleaseRelease(args: RequestArgs & { body: PostNpmReleaseReleaseRequest }): Promise<ApiResponse>;
    /** GET /npm-release/task/{id} — rank: any-builder */
    getNpmReleaseTaskId(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /npm-release/work — rank: archon */
    getNpmReleaseWork(args?: RequestArgs): Promise<ApiResponse>;
  };
  "overrideRequests": {
    /** GET /override-requests — rank: metic+archon */
    getOverrideRequests(args?: RequestArgs): Promise<GetOverrideRequestsResponse>;
    /** POST /override-requests/{id}/decide — rank: metic+archon */
    postOverrideRequestsIdDecide(args: RequestArgs & { body: PostOverrideRequestsIdDecideRequest }): Promise<ApiResponse>;
  };
  "pageNotes": {
    /** GET /page-notes — rank: any-builder */
    getPageNotes(args?: RequestArgs): Promise<GetPageNotesResponse>;
    /** POST /page-notes — rank: any-builder */
    postPageNotes(args: RequestArgs & { body: PostPageNotesRequest }): Promise<PostPageNotesResponse>;
    /** GET /page-notes/{id} — rank: any-builder */
    getPageNotesId(args?: RequestArgs): Promise<GetPageNotesIdResponse>;
    /** PATCH /page-notes/{id} — rank: any-builder */
    patchPageNotesId(args: RequestArgs & { body: PatchPageNotesIdRequest }): Promise<PatchPageNotesIdResponse>;
    /** POST /page-notes/{id}/images — rank: any-builder */
    postPageNotesIdImages(args: RequestArgs & { body: PostPageNotesIdImagesRequest }): Promise<PostPageNotesIdImagesResponse>;
    /** POST /page-notes/{id}/submit — rank: any-builder */
    postPageNotesIdSubmit(args?: RequestArgs): Promise<PostPageNotesIdSubmitResponse>;
    /** GET /page-notes/ideas — rank: any-builder */
    getPageNotesIdeas(args?: RequestArgs): Promise<GetPageNotesIdeasResponse>;
    /** POST /page-notes/ideas — rank: any-builder */
    postPageNotesIdeas(args: RequestArgs & { body: PostPageNotesIdeasRequest }): Promise<PostPageNotesIdeasResponse>;
    /** GET /page-notes/images/{id} — rank: any-builder */
    getPageNotesImagesId(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /page-notes/site — rank: any-builder */
    getPageNotesSite(args?: RequestArgs): Promise<GetPageNotesSiteResponse>;
  };
  "payTerms": {
    /** GET /pay-terms — rank: any-builder */
    getPayTerms(args?: RequestArgs): Promise<GetPayTermsResponse>;
  };
  "payTypeGates": {
    /** GET /pay-type-gates — rank: any-builder */
    getPayTypeGates(args?: RequestArgs): Promise<GetPayTypeGatesResponse>;
    /** PUT /pay-type-gates/{payType}/{requirement} — rank: archon */
    putPayTypeGatesPayTypeRequirement(args?: RequestArgs & { body?: PutPayTypeGatesPayTypeRequirementRequest }): Promise<PutPayTypeGatesPayTypeRequirementResponse>;
  };
  "payouts": {
    /** POST /payouts/age-records — rank: archon */
    postPayoutsAgeRecords(args: RequestArgs & { body: PostPayoutsAgeRecordsRequest }): Promise<PostPayoutsAgeRecordsResponse>;
    /** GET /payouts/approvals — rank: archon */
    getPayoutsApprovals(args?: RequestArgs): Promise<GetPayoutsApprovalsResponse>;
    /** POST /payouts/approve — rank: archon */
    postPayoutsApprove(args?: RequestArgs & { body?: PostPayoutsApproveRequest }): Promise<PostPayoutsApproveResponse>;
    /** GET /payouts/builder-payouts — rank: archon */
    getPayoutsBuilderPayouts(args?: RequestArgs): Promise<GetPayoutsBuilderPayoutsResponse>;
    /** POST /payouts/builder-payouts — rank: archon */
    postPayoutsBuilderPayouts(args: RequestArgs & { body: PostPayoutsBuilderPayoutsRequest }): Promise<ApiResponse>;
    /** POST /payouts/contracts — rank: archon */
    postPayoutsContracts(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /payouts/freezes — rank: archon */
    postPayoutsFreezes(args: RequestArgs & { body: PostPayoutsFreezesRequest }): Promise<PostPayoutsFreezesResponse>;
    /** POST /payouts/freezes/{id}/decide — rank: archon */
    postPayoutsFreezesIdDecide(args: RequestArgs & { body: PostPayoutsFreezesIdDecideRequest }): Promise<PostPayoutsFreezesIdDecideResponse>;
    /** GET /payouts/gates/{builderId} — rank: archon */
    getPayoutsGatesBuilderId(args?: RequestArgs): Promise<GetPayoutsGatesBuilderIdResponse>;
    /** POST /payouts/grants — rank: archon */
    postPayoutsGrants(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /payouts/guardians — rank: archon */
    postPayoutsGuardians(args: RequestArgs & { body: PostPayoutsGuardiansRequest }): Promise<PostPayoutsGuardiansResponse>;
    /** POST /payouts/module-sales — rank: archon */
    postPayoutsModuleSales(args: RequestArgs & { body: PostPayoutsModuleSalesRequest }): Promise<ApiResponse>;
    /** GET /payouts/module-shares — rank: archon */
    getPayoutsModuleShares(args?: RequestArgs): Promise<GetPayoutsModuleSharesResponse>;
    /** POST /payouts/module-shares/{id}/pay — rank: archon */
    postPayoutsModuleSharesIdPay(args: RequestArgs & { body: PostPayoutsModuleSharesIdPayRequest }): Promise<ApiResponse>;
    /** GET /payouts/module-shares/mine — rank: any-builder */
    getPayoutsModuleSharesMine(args?: RequestArgs): Promise<GetPayoutsModuleSharesMineResponse>;
    /** GET /payouts/module-splits/{moduleKey} — rank: archon */
    getPayoutsModuleSplitsModuleKey(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /payouts/module-splits/{moduleKey} — rank: archon */
    postPayoutsModuleSplitsModuleKey(args: RequestArgs & { body: PostPayoutsModuleSplitsModuleKeyRequest }): Promise<PostPayoutsModuleSplitsModuleKeyResponse>;
    /** POST /payouts/ndas — rank: archon */
    postPayoutsNdas(args: RequestArgs & { body: PostPayoutsNdasRequest }): Promise<PostPayoutsNdasResponse>;
    /** GET /payouts/rules — rank: archon */
    getPayoutsRules(args?: RequestArgs): Promise<GetPayoutsRulesResponse>;
    /** POST /payouts/rules — rank: archon */
    postPayoutsRules(args: RequestArgs & { body: PostPayoutsRulesRequest }): Promise<PostPayoutsRulesResponse>;
    /** POST /payouts/rules/{id}/narrow — rank: archon */
    postPayoutsRulesIdNarrow(args: RequestArgs & { body: PostPayoutsRulesIdNarrowRequest }): Promise<PostPayoutsRulesIdNarrowResponse>;
    /** POST /payouts/rules/{id}/revoke — rank: archon */
    postPayoutsRulesIdRevoke(args?: RequestArgs & { body?: PostPayoutsRulesIdRevokeRequest }): Promise<PostPayoutsRulesIdRevokeResponse>;
    /** POST /payouts/rules/{id}/runs — rank: archon */
    postPayoutsRulesIdRuns(args?: RequestArgs & { body?: PostPayoutsRulesIdRunsRequest }): Promise<PostPayoutsRulesIdRunsResponse>;
    /** POST /payouts/rules/{id}/runs/{runKey}/hold — rank: archon */
    postPayoutsRulesIdRunsRunKeyHold(args?: RequestArgs & { body?: PostPayoutsRulesIdRunsRunKeyHoldRequest }): Promise<PostPayoutsRulesIdRunsRunKeyHoldResponse>;
    /** POST /payouts/screenings — rank: archon */
    postPayoutsScreenings(args: RequestArgs & { body: PostPayoutsScreeningsRequest }): Promise<PostPayoutsScreeningsResponse>;
    /** POST /payouts/tax-details — rank: archon */
    postPayoutsTaxDetails(args: RequestArgs & { body: PostPayoutsTaxDetailsRequest }): Promise<PostPayoutsTaxDetailsResponse>;
  };
  "processor": {
    /** POST /processor/webhook — rank: public */
    postProcessorWebhook(args?: RequestArgs): Promise<PostProcessorWebhookResponse>;
  };
  "profiles": {
    /** GET /profiles/{handle} — rank: public */
    getProfilesHandle(args?: RequestArgs): Promise<GetProfilesHandleResponse>;
  };
  "project": {
    /** GET /project/manage-link — rank: archon */
    getProjectManageLink(args?: RequestArgs): Promise<GetProjectManageLinkResponse>;
  };
  "projectAccount": {
    /** GET /project-account — rank: archon */
    getProjectAccount(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /project-account/ledger-checks — rank: archon */
    getProjectAccountLedgerChecks(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /project-account/outflow — rank: archon */
    getProjectAccountOutflow(args?: RequestArgs): Promise<ApiResponse>;
  };
  "projectSettings": {
    /** GET /project-settings — rank: metic+archon */
    getProjectSettings(args?: RequestArgs): Promise<GetProjectSettingsResponse>;
    /** GET /project-settings/funding-wall — rank: any-builder */
    getProjectSettingsFundingWall(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /project-settings/funding-wall — rank: metic+archon */
    patchProjectSettingsFundingWall(args: RequestArgs & { body: PatchProjectSettingsFundingWallRequest }): Promise<ApiResponse>;
    /** PATCH /project-settings/pay-terms — rank: metic+archon */
    patchProjectSettingsPayTerms(args: RequestArgs & { body: PatchProjectSettingsPayTermsRequest }): Promise<PatchProjectSettingsPayTermsResponse>;
    /** PATCH /project-settings/rot-days — rank: metic+archon */
    patchProjectSettingsRotDays(args: RequestArgs & { body: PatchProjectSettingsRotDaysRequest }): Promise<PatchProjectSettingsRotDaysResponse>;
    /** GET /project-settings/ship-mode — rank: any-builder */
    getProjectSettingsShipMode(args?: RequestArgs): Promise<GetProjectSettingsShipModeResponse>;
    /** PATCH /project-settings/ship-mode — rank: metic+archon */
    patchProjectSettingsShipMode(args: RequestArgs & { body: PatchProjectSettingsShipModeRequest }): Promise<PatchProjectSettingsShipModeResponse>;
    /** PATCH /project-settings/spend-cap — rank: metic+archon */
    patchProjectSettingsSpendCap(args?: RequestArgs & { body?: PatchProjectSettingsSpendCapRequest }): Promise<PatchProjectSettingsSpendCapResponse>;
    /** GET /project-settings/tweak-autopickup — rank: any-builder */
    getProjectSettingsTweakAutopickup(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /project-settings/tweak-autopickup — rank: metic+archon */
    patchProjectSettingsTweakAutopickup(args?: RequestArgs & { body?: PatchProjectSettingsTweakAutopickupRequest }): Promise<ApiResponse>;
  };
  "projects": {
    /** GET /projects — rank: metic+archon */
    getProjects(args?: RequestArgs): Promise<GetProjectsResponse>;
    /** POST /projects — rank: metic+archon */
    postProjects(args: RequestArgs & { body: PostProjectsRequest }): Promise<PostProjectsResponse>;
    /** PATCH /projects/{id}/featured — rank: metic+archon */
    patchProjectsIdFeatured(args: RequestArgs & { body: PatchProjectsIdFeaturedRequest }): Promise<PatchProjectsIdFeaturedResponse>;
    /** PATCH /projects/{id}/status — rank: metic+archon */
    patchProjectsIdStatus(args: RequestArgs & { body: PatchProjectsIdStatusRequest }): Promise<PatchProjectsIdStatusResponse>;
    /** POST /projects/{projectId}/specialities — rank: any-builder */
    postProjectsProjectIdSpecialities(args: RequestArgs & { body: PostProjectsProjectIdSpecialitiesRequest }): Promise<PostProjectsProjectIdSpecialitiesResponse>;
    /** GET /projects/featured — rank: public */
    getProjectsFeatured(args?: RequestArgs): Promise<GetProjectsFeaturedResponse>;
    /** POST /projects/invite — rank: metic+archon */
    postProjectsInvite(args: RequestArgs & { body: PostProjectsInviteRequest }): Promise<PostProjectsInviteResponse>;
    /** POST /projects/invite-guild — rank: metic+archon */
    postProjectsInviteGuild(args: RequestArgs & { body: PostProjectsInviteGuildRequest }): Promise<PostProjectsInviteGuildResponse>;
  };
  "provisioning": {
    /** GET /provisioning/control-plane — rank: archon */
    getProvisioningControlPlane(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /provisioning/creation-doc — rank: any-builder */
    postProvisioningCreationDoc(args: RequestArgs & { body: PostProvisioningCreationDocRequest }): Promise<PostProvisioningCreationDocResponse>;
    /** POST /provisioning/creation-doc/file — rank: any-builder */
    postProvisioningCreationDocFile(args: RequestArgs & { body: PostProvisioningCreationDocFileRequest }): Promise<ApiResponse>;
    /** POST /provisioning/creation-doc/read — rank: any-builder */
    postProvisioningCreationDocRead(args: RequestArgs & { body: PostProvisioningCreationDocReadRequest }): Promise<ApiResponse>;
    /** GET /provisioning/fleet — rank: metic+archon */
    getProvisioningFleet(args?: RequestArgs): Promise<GetProvisioningFleetResponse>;
    /** GET /provisioning/fleet/cost-ledger — rank: metic+archon */
    getProvisioningFleetCostLedger(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/callback — rank: public */
    getProvisioningGithubAppCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/resume — rank: any-builder */
    getProvisioningGithubAppResume(args?: RequestArgs): Promise<GetProvisioningGithubAppResumeResponse>;
    /** GET /provisioning/github-app/return — rank: public */
    getProvisioningGithubAppReturn(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/setup — rank: public */
    getProvisioningGithubAppSetup(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/status — rank: public */
    getProvisioningGithubAppStatus(args?: RequestArgs): Promise<GetProvisioningGithubAppStatusResponse>;
    /** GET /provisioning/health — rank: public */
    getProvisioningHealth(args?: RequestArgs): Promise<GetProvisioningHealthResponse>;
    /** GET /provisioning/instances — rank: any-builder */
    getProvisioningInstances(args?: RequestArgs): Promise<GetProvisioningInstancesResponse>;
    /** POST /provisioning/instances — rank: any-builder */
    postProvisioningInstances(args: RequestArgs & { body: PostProvisioningInstancesRequest }): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id} — rank: any-builder */
    getProvisioningInstancesId(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id}/core-upgrade — rank: archon */
    getProvisioningInstancesIdCoreUpgrade(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /provisioning/instances/{id}/core-upgrade — rank: archon */
    postProvisioningInstancesIdCoreUpgrade(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /provisioning/instances/{id}/demo — rank: any-builder */
    postProvisioningInstancesIdDemo(args: RequestArgs & { body: PostProvisioningInstancesIdDemoRequest }): Promise<PostProvisioningInstancesIdDemoResponse>;
    /** PATCH /provisioning/instances/{id}/detail — rank: any-builder */
    patchProvisioningInstancesIdDetail(args?: RequestArgs & { body?: PatchProvisioningInstancesIdDetailRequest }): Promise<PatchProvisioningInstancesIdDetailResponse>;
    /** POST /provisioning/instances/{id}/disconnect — rank: any-builder */
    postProvisioningInstancesIdDisconnect(args: RequestArgs & { body: PostProvisioningInstancesIdDisconnectRequest }): Promise<PostProvisioningInstancesIdDisconnectResponse>;
    /** POST /provisioning/instances/{id}/domain — rank: any-builder */
    postProvisioningInstancesIdDomain(args: RequestArgs & { body: PostProvisioningInstancesIdDomainRequest }): Promise<PostProvisioningInstancesIdDomainResponse>;
    /** GET /provisioning/instances/{id}/env-manifest — rank: any-builder */
    getProvisioningInstancesIdEnvManifest(args?: RequestArgs): Promise<GetProvisioningInstancesIdEnvManifestResponse>;
    /** POST /provisioning/instances/{id}/env-manifest — rank: any-builder */
    postProvisioningInstancesIdEnvManifest(args: RequestArgs & { body: PostProvisioningInstancesIdEnvManifestRequest }): Promise<ApiResponse>;
    /** DELETE /provisioning/instances/{id}/env-manifest/{varId} — rank: any-builder */
    deleteProvisioningInstancesIdEnvManifestVarId(args?: RequestArgs): Promise<DeleteProvisioningInstancesIdEnvManifestVarIdResponse>;
    /** PATCH /provisioning/instances/{id}/env-manifest/{varId} — rank: any-builder */
    patchProvisioningInstancesIdEnvManifestVarId(args?: RequestArgs & { body?: PatchProvisioningInstancesIdEnvManifestVarIdRequest }): Promise<PatchProvisioningInstancesIdEnvManifestVarIdResponse>;
    /** POST /provisioning/instances/{id}/force-teardown — rank: metic+archon */
    postProvisioningInstancesIdForceTeardown(args?: RequestArgs): Promise<PostProvisioningInstancesIdForceTeardownResponse>;
    /** POST /provisioning/instances/{id}/github-app — rank: any-builder */
    postProvisioningInstancesIdGithubApp(args?: RequestArgs & { body?: PostProvisioningInstancesIdGithubAppRequest }): Promise<PostProvisioningInstancesIdGithubAppResponse>;
    /** POST /provisioning/instances/{id}/github-app/pick-up — rank: any-builder */
    postProvisioningInstancesIdGithubAppPickUp(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id}/grants — rank: any-builder */
    getProvisioningInstancesIdGrants(args?: RequestArgs): Promise<GetProvisioningInstancesIdGrantsResponse>;
    /** POST /provisioning/instances/{id}/grants — rank: any-builder */
    postProvisioningInstancesIdGrants(args: RequestArgs & { body: PostProvisioningInstancesIdGrantsRequest }): Promise<ApiResponse>;
    /** DELETE /provisioning/instances/{id}/grants/{grantId} — rank: any-builder */
    deleteProvisioningInstancesIdGrantsGrantId(args?: RequestArgs): Promise<DeleteProvisioningInstancesIdGrantsGrantIdResponse>;
    /** GET /provisioning/instances/{id}/invite-suggestions — rank: any-builder */
    getProvisioningInstancesIdInviteSuggestions(args?: RequestArgs): Promise<GetProvisioningInstancesIdInviteSuggestionsResponse>;
    /** DELETE /provisioning/instances/{id}/logo — rank: any-builder */
    deleteProvisioningInstancesIdLogo(args?: RequestArgs): Promise<ApiResponse>;
    /** PUT /provisioning/instances/{id}/logo — rank: any-builder */
    putProvisioningInstancesIdLogo(args: RequestArgs & { body: PutProvisioningInstancesIdLogoRequest }): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id}/look — rank: any-builder */
    getProvisioningInstancesIdLook(args?: RequestArgs): Promise<GetProvisioningInstancesIdLookResponse>;
    /** PATCH /provisioning/instances/{id}/look — rank: any-builder */
    patchProvisioningInstancesIdLook(args?: RequestArgs & { body?: PatchProvisioningInstancesIdLookRequest }): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id}/render — rank: any-builder */
    getProvisioningInstancesIdRender(args?: RequestArgs): Promise<GetProvisioningInstancesIdRenderResponse>;
    /** POST /provisioning/instances/{id}/render — rank: any-builder */
    postProvisioningInstancesIdRender(args: RequestArgs & { body: PostProvisioningInstancesIdRenderRequest }): Promise<PostProvisioningInstancesIdRenderResponse>;
    /** POST /provisioning/instances/{id}/render/promote — rank: any-builder */
    postProvisioningInstancesIdRenderPromote(args: RequestArgs & { body: PostProvisioningInstancesIdRenderPromoteRequest }): Promise<PostProvisioningInstancesIdRenderPromoteResponse>;
    /** POST /provisioning/instances/{id}/render/promote/look — rank: any-builder */
    postProvisioningInstancesIdRenderPromoteLook(args: RequestArgs & { body: PostProvisioningInstancesIdRenderPromoteLookRequest }): Promise<ApiResponse>;
    /** POST /provisioning/instances/{id}/render/sandbox — rank: any-builder */
    postProvisioningInstancesIdRenderSandbox(args: RequestArgs & { body: PostProvisioningInstancesIdRenderSandboxRequest }): Promise<PostProvisioningInstancesIdRenderSandboxResponse>;
    /** POST /provisioning/instances/{id}/render/sandbox/database — rank: any-builder */
    postProvisioningInstancesIdRenderSandboxDatabase(args: RequestArgs & { body: PostProvisioningInstancesIdRenderSandboxDatabaseRequest }): Promise<PostProvisioningInstancesIdRenderSandboxDatabaseResponse>;
    /** POST /provisioning/instances/{id}/repo-private — rank: any-builder */
    postProvisioningInstancesIdRepoPrivate(args?: RequestArgs): Promise<PostProvisioningInstancesIdRepoPrivateResponse>;
    /** POST /provisioning/instances/{id}/restart — rank: any-builder */
    postProvisioningInstancesIdRestart(args?: RequestArgs): Promise<PostProvisioningInstancesIdRestartResponse>;
    /** GET /provisioning/instances/{id}/settings — rank: any-builder */
    getProvisioningInstancesIdSettings(args?: RequestArgs): Promise<GetProvisioningInstancesIdSettingsResponse>;
    /** PATCH /provisioning/instances/{id}/settings — rank: any-builder */
    patchProvisioningInstancesIdSettings(args?: RequestArgs): Promise<PatchProvisioningInstancesIdSettingsResponse>;
    /** PUT /provisioning/instances/{id}/ship-points — rank: any-builder */
    putProvisioningInstancesIdShipPoints(args: RequestArgs & { body: PutProvisioningInstancesIdShipPointsRequest }): Promise<PutProvisioningInstancesIdShipPointsResponse>;
    /** POST /provisioning/instances/{id}/teardown — rank: any-builder */
    postProvisioningInstancesIdTeardown(args?: RequestArgs): Promise<PostProvisioningInstancesIdTeardownResponse>;
    /** POST /provisioning/instances/{id}/update-channel — rank: archon */
    postProvisioningInstancesIdUpdateChannel(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /provisioning/instances/{id}/update-subscription — rank: metic+archon */
    postProvisioningInstancesIdUpdateSubscription(args: RequestArgs & { body: PostProvisioningInstancesIdUpdateSubscriptionRequest }): Promise<PostProvisioningInstancesIdUpdateSubscriptionResponse>;
    /** GET /provisioning/logos/{file} — rank: public */
    getProvisioningLogosFile(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/onboard-plan — rank: public */
    getProvisioningOnboardPlan(args?: RequestArgs): Promise<GetProvisioningOnboardPlanResponse>;
    /** POST /provisioning/physics-check — rank: any-builder */
    postProvisioningPhysicsCheck(args?: RequestArgs & { body?: PostProvisioningPhysicsCheckRequest }): Promise<PostProvisioningPhysicsCheckResponse>;
    /** GET /provisioning/recommendations — rank: public */
    getProvisioningRecommendations(args?: RequestArgs): Promise<GetProvisioningRecommendationsResponse>;
    /** POST /provisioning/render/lookup — rank: any-builder */
    postProvisioningRenderLookup(args: RequestArgs & { body: PostProvisioningRenderLookupRequest }): Promise<ApiResponse>;
    /** GET /provisioning/slug-available — rank: any-builder */
    getProvisioningSlugAvailable(args?: RequestArgs): Promise<GetProvisioningSlugAvailableResponse>;
    /** GET /provisioning/starter-bundles — rank: public */
    getProvisioningStarterBundles(args?: RequestArgs): Promise<GetProvisioningStarterBundlesResponse>;
    /** GET /provisioning/tls-check — rank: public */
    getProvisioningTlsCheck(args?: RequestArgs): Promise<ApiResponse>;
  };
  "public": {
    /** GET /public/analytics/ecosystem — rank: public */
    getPublicAnalyticsEcosystem(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/blockers/{id} — rank: public */
    getPublicBlockersId(args?: RequestArgs): Promise<GetPublicBlockersIdResponse>;
    /** GET /public/bounty-table — rank: public */
    getPublicBountyTable(args?: RequestArgs): Promise<GetPublicBountyTableResponse>;
    /** GET /public/branding — rank: public */
    getPublicBranding(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/cost-summary — rank: public */
    getPublicCostSummary(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/estimation-drift — rank: public */
    getPublicEstimationDrift(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/grades — rank: public */
    getPublicGrades(args?: RequestArgs): Promise<GetPublicGradesResponse>;
    /** GET /public/ideas/{id} — rank: public */
    getPublicIdeasId(args?: RequestArgs): Promise<GetPublicIdeasIdResponse>;
    /** GET /public/leaderboard — rank: public */
    getPublicLeaderboard(args?: RequestArgs): Promise<GetPublicLeaderboardResponse>;
    /** GET /public/modules — rank: public */
    getPublicModules(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/progress — rank: public */
    getPublicProgress(args?: RequestArgs): Promise<GetPublicProgressResponse>;
    /** GET /public/recent-shipped — rank: public */
    getPublicRecentShipped(args?: RequestArgs): Promise<GetPublicRecentShippedResponse>;
    /** GET /public/ref-ids — rank: public */
    getPublicRefIds(args?: RequestArgs): Promise<GetPublicRefIdsResponse>;
    /** GET /public/repo-health — rank: public */
    getPublicRepoHealth(args?: RequestArgs): Promise<GetPublicRepoHealthResponse>;
    /** GET /public/repo-info — rank: public */
    getPublicRepoInfo(args?: RequestArgs): Promise<GetPublicRepoInfoResponse>;
    /** GET /public/tasks/{id} — rank: public */
    getPublicTasksId(args?: RequestArgs): Promise<GetPublicTasksIdResponse>;
    /** GET /public/versions — rank: public */
    getPublicVersions(args?: RequestArgs): Promise<GetPublicVersionsResponse>;
  };
  "raise": {
    /** POST /raise/edit — rank: any-builder */
    postRaiseEdit(args?: RequestArgs & { body?: PostRaiseEditRequest }): Promise<PostRaiseEditResponse>;
    /** POST /raise/enter — rank: public */
    postRaiseEnter(args?: RequestArgs & { body?: PostRaiseEnterRequest }): Promise<ApiResponse>;
    /** POST /raise/interest — rank: public */
    postRaiseInterest(args: RequestArgs & { body: PostRaiseInterestRequest }): Promise<PostRaiseInterestResponse>;
  };
  "removalProposals": {
    /** GET /removal-proposals — rank: metic+archon */
    getRemovalProposals(args?: RequestArgs): Promise<GetRemovalProposalsResponse>;
    /** POST /removal-proposals/{id}/decide — rank: metic+archon */
    postRemovalProposalsIdDecide(args: RequestArgs & { body: PostRemovalProposalsIdDecideRequest }): Promise<ApiResponse>;
  };
  "renderDeploy": {
    /** POST /render-deploy/act — rank: archon */
    postRenderDeployAct(args?: RequestArgs & { body?: PostRenderDeployActRequest }): Promise<PostRenderDeployActResponse>;
    /** GET /render-deploy/app — rank: archon */
    getRenderDeployApp(args?: RequestArgs): Promise<GetRenderDeployAppResponse>;
    /** PUT /render-deploy/app — rank: archon */
    putRenderDeployApp(args?: RequestArgs & { body?: PutRenderDeployAppRequest }): Promise<PutRenderDeployAppResponse>;
    /** GET /render-deploy/history — rank: archon */
    getRenderDeployHistory(args?: RequestArgs): Promise<ApiResponse>;
  };
  "scouting": {
    /** GET /scouting — rank: metic+archon */
    getScouting(args?: RequestArgs): Promise<GetScoutingResponse>;
    /** GET /scouting/{handle} — rank: archon */
    getScoutingHandle(args?: RequestArgs): Promise<GetScoutingHandleResponse>;
  };
  "search": {
    /** POST /search — rank: any-builder */
    postSearch(args?: RequestArgs & { body?: PostSearchRequest }): Promise<PostSearchResponse>;
    /** POST /search/mark — rank: any-builder */
    postSearchMark(args?: RequestArgs & { body?: PostSearchMarkRequest }): Promise<ApiResponse>;
  };
  "security": {
    /** GET /security/adr — rank: metic+archon */
    getSecurityAdr(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /security/docs — rank: metic+archon */
    getSecurityDocs(args?: RequestArgs): Promise<GetSecurityDocsResponse>;
    /** POST /security/docs — rank: metic+archon */
    postSecurityDocs(args: RequestArgs & { body: PostSecurityDocsRequest }): Promise<PostSecurityDocsResponse>;
    /** GET /security/docs/{slug} — rank: metic+archon */
    getSecurityDocsSlug(args?: RequestArgs): Promise<GetSecurityDocsSlugResponse>;
    /** GET /security/reports — rank: metic+archon */
    getSecurityReports(args?: RequestArgs): Promise<GetSecurityReportsResponse>;
    /** POST /security/reports — rank: metic+archon */
    postSecurityReports(args: RequestArgs & { body: PostSecurityReportsRequest }): Promise<PostSecurityReportsResponse>;
    /** POST /security/reports/{id}/confirm — rank: metic+archon */
    postSecurityReportsIdConfirm(args?: RequestArgs & { body?: PostSecurityReportsIdConfirmRequest }): Promise<PostSecurityReportsIdConfirmResponse>;
    /** POST /security/reports/{id}/dispute — rank: metic+archon */
    postSecurityReportsIdDispute(args?: RequestArgs): Promise<PostSecurityReportsIdDisputeResponse>;
    /** POST /security/reports/{id}/fix — rank: metic+archon */
    postSecurityReportsIdFix(args?: RequestArgs): Promise<PostSecurityReportsIdFixResponse>;
    /** POST /security/reports/{id}/link-fix — rank: metic+archon */
    postSecurityReportsIdLinkFix(args: RequestArgs & { body: PostSecurityReportsIdLinkFixRequest }): Promise<PostSecurityReportsIdLinkFixResponse>;
    /** GET /security/scans — rank: any-builder */
    getSecurityScans(args?: RequestArgs): Promise<GetSecurityScansResponse>;
    /** POST /security/scans — rank: metic+archon */
    postSecurityScans(args: RequestArgs & { body: PostSecurityScansRequest }): Promise<PostSecurityScansResponse>;
  };
  "session": {
    /** POST /session/optimize — rank: any-builder */
    postSessionOptimize(args?: RequestArgs & { body?: PostSessionOptimizeRequest }): Promise<ApiResponse>;
  };
  "sessions": {
    /** POST /sessions — rank: any-builder */
    postSessions(args: RequestArgs & { body: PostSessionsRequest }): Promise<PostSessionsResponse>;
    /** GET /sessions/{id} — rank: any-builder */
    getSessionsId(args?: RequestArgs): Promise<GetSessionsIdResponse>;
    /** GET /sessions/{id}/transcript — rank: any-builder */
    getSessionsIdTranscript(args?: RequestArgs): Promise<GetSessionsIdTranscriptResponse>;
    /** PUT /sessions/{sid}/transcript — rank: any-builder */
    putSessionsSidTranscript(args: RequestArgs & { body: PutSessionsSidTranscriptRequest }): Promise<PutSessionsSidTranscriptResponse>;
    /** POST /sessions/capture-events — rank: any-builder */
    postSessionsCaptureEvents(args: RequestArgs & { body: PostSessionsCaptureEventsRequest }): Promise<PostSessionsCaptureEventsResponse>;
    /** GET /sessions/capture-health — rank: metic+archon */
    getSessionsCaptureHealth(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sessions/capture-health/mine — rank: any-builder */
    getSessionsCaptureHealthMine(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sessions/dynamics — rank: metic+archon */
    getSessionsDynamics(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sessions/mine — rank: any-builder */
    getSessionsMine(args?: RequestArgs): Promise<GetSessionsMineResponse>;
    /** GET /sessions/reports — rank: metic+archon */
    getSessionsReports(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /sessions/reports — rank: metic+archon */
    postSessionsReports(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sessions/scorecard — rank: metic+archon */
    getSessionsScorecard(args?: RequestArgs): Promise<GetSessionsScorecardResponse>;
    /** GET /sessions/search — rank: metic+archon */
    getSessionsSearch(args?: RequestArgs): Promise<GetSessionsSearchResponse>;
    /** GET /sessions/task-link-coverage — rank: metic+archon */
    getSessionsTaskLinkCoverage(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sessions/upload-health — rank: metic+archon */
    getSessionsUploadHealth(args?: RequestArgs): Promise<ApiResponse>;
  };
  "sky": {
    /** GET /sky — rank: any-builder */
    getSky(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /sky/mine — rank: any-builder */
    getSkyMine(args?: RequestArgs): Promise<ApiResponse>;
  };
  "softwareUpdate": {
    /** GET /software-update — rank: any-builder */
    getSoftwareUpdate(args?: RequestArgs): Promise<GetSoftwareUpdateResponse>;
  };
  "specialities": {
    /** GET /specialities — rank: any-builder */
    getSpecialities(args?: RequestArgs): Promise<GetSpecialitiesResponse>;
    /** POST /specialities — rank: any-builder */
    postSpecialities(args: RequestArgs & { body: PostSpecialitiesRequest }): Promise<PostSpecialitiesResponse>;
    /** GET /specialities/{id} — rank: any-builder */
    getSpecialitiesId(args?: RequestArgs): Promise<GetSpecialitiesIdResponse>;
    /** PATCH /specialities/{id} — rank: any-builder */
    patchSpecialitiesId(args?: RequestArgs & { body?: PatchSpecialitiesIdRequest }): Promise<PatchSpecialitiesIdResponse>;
    /** POST /specialities/{id}/abandon — rank: any-builder */
    postSpecialitiesIdAbandon(args?: RequestArgs): Promise<PostSpecialitiesIdAbandonResponse>;
    /** POST /specialities/{id}/adopt — rank: any-builder */
    postSpecialitiesIdAdopt(args?: RequestArgs): Promise<PostSpecialitiesIdAdoptResponse>;
    /** GET /specialities/{id}/documents — rank: any-builder */
    getSpecialitiesIdDocuments(args?: RequestArgs): Promise<GetSpecialitiesIdDocumentsResponse>;
    /** POST /specialities/{id}/documents — rank: any-builder */
    postSpecialitiesIdDocuments(args: RequestArgs & { body: PostSpecialitiesIdDocumentsRequest }): Promise<PostSpecialitiesIdDocumentsResponse>;
    /** DELETE /specialities/{id}/documents/{docId} — rank: any-builder */
    deleteSpecialitiesIdDocumentsDocId(args?: RequestArgs): Promise<DeleteSpecialitiesIdDocumentsDocIdResponse>;
    /** POST /specialities/{id}/offer — rank: metic+archon */
    postSpecialitiesIdOffer(args?: RequestArgs): Promise<PostSpecialitiesIdOfferResponse>;
    /** GET /specialities/{id}/skills — rank: any-builder */
    getSpecialitiesIdSkills(args?: RequestArgs): Promise<GetSpecialitiesIdSkillsResponse>;
    /** PUT /specialities/{id}/skills — rank: any-builder */
    putSpecialitiesIdSkills(args: RequestArgs & { body: PutSpecialitiesIdSkillsRequest }): Promise<PutSpecialitiesIdSkillsResponse>;
    /** POST /specialities/{id}/unoffer — rank: metic+archon */
    postSpecialitiesIdUnoffer(args?: RequestArgs): Promise<PostSpecialitiesIdUnofferResponse>;
    /** GET /specialities/installed-skills — rank: any-builder */
    getSpecialitiesInstalledSkills(args?: RequestArgs): Promise<GetSpecialitiesInstalledSkillsResponse>;
    /** GET /specialities/offered — rank: any-builder */
    getSpecialitiesOffered(args?: RequestArgs): Promise<GetSpecialitiesOfferedResponse>;
  };
  "sso": {
    /** POST /sso/activity/rollup — rank: public */
    postSsoActivityRollup(args: RequestArgs & { body: PostSsoActivityRollupRequest }): Promise<PostSsoActivityRollupResponse>;
    /** POST /sso/app-status — rank: public */
    postSsoAppStatus(args: RequestArgs & { body: PostSsoAppStatusRequest }): Promise<PostSsoAppStatusResponse>;
    /** POST /sso/applicant-profile — rank: public */
    postSsoApplicantProfile(args: RequestArgs & { body: PostSsoApplicantProfileRequest }): Promise<PostSsoApplicantProfileResponse>;
    /** GET /sso/authorize — rank: public */
    getSsoAuthorize(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /sso/device/poll — rank: public */
    postSsoDevicePoll(args: RequestArgs & { body: PostSsoDevicePollRequest }): Promise<ApiResponse>;
    /** POST /sso/device/start — rank: public */
    postSsoDeviceStart(args: RequestArgs & { body: PostSsoDeviceStartRequest }): Promise<ApiResponse>;
    /** POST /sso/feedback — rank: public */
    postSsoFeedback(args: RequestArgs & { body: PostSsoFeedbackRequest }): Promise<ApiResponse>;
    /** POST /sso/feedback/direct — rank: public */
    postSsoFeedbackDirect(args: RequestArgs & { body: PostSsoFeedbackDirectRequest }): Promise<PostSsoFeedbackDirectResponse>;
    /** POST /sso/invites/clear — rank: public */
    postSsoInvitesClear(args: RequestArgs & { body: PostSsoInvitesClearRequest }): Promise<ApiResponse>;
    /** POST /sso/invites/notify — rank: public */
    postSsoInvitesNotify(args: RequestArgs & { body: PostSsoInvitesNotifyRequest }): Promise<ApiResponse>;
    /** POST /sso/membership/check-in — rank: public */
    postSsoMembershipCheckIn(args: RequestArgs & { body: PostSsoMembershipCheckInRequest }): Promise<PostSsoMembershipCheckInResponse>;
    /** POST /sso/membership/offboard — rank: public */
    postSsoMembershipOffboard(args: RequestArgs & { body: PostSsoMembershipOffboardRequest }): Promise<PostSsoMembershipOffboardResponse>;
    /** GET /sso/pubkey — rank: public */
    getSsoPubkey(args?: RequestArgs): Promise<GetSsoPubkeyResponse>;
    /** POST /sso/token — rank: public */
    postSsoToken(args: RequestArgs & { body: PostSsoTokenRequest }): Promise<PostSsoTokenResponse>;
  };
  "store": {
    /** GET /store/entitlements — rank: any-builder */
    getStoreEntitlements(args?: RequestArgs): Promise<GetStoreEntitlementsResponse>;
    /** GET /store/modules — rank: any-builder */
    getStoreModules(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/modules/{key}/acquire — rank: any-builder */
    postStoreModulesKeyAcquire(args?: RequestArgs & { body?: PostStoreModulesKeyAcquireRequest }): Promise<PostStoreModulesKeyAcquireResponse>;
    /** POST /store/modules/{key}/acquired — rank: any-builder */
    postStoreModulesKeyAcquired(args: RequestArgs & { body: PostStoreModulesKeyAcquiredRequest }): Promise<PostStoreModulesKeyAcquiredResponse>;
    /** POST /store/modules/{key}/delist — rank: metic+archon */
    postStoreModulesKeyDelist(args?: RequestArgs & { body?: PostStoreModulesKeyDelistRequest }): Promise<PostStoreModulesKeyDelistResponse>;
    /** GET /store/modules/{key}/entitlement — rank: any-builder */
    getStoreModulesKeyEntitlement(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /store/modules/{key}/listing — rank: any-builder */
    getStoreModulesKeyListing(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/modules/{key}/price — rank: metic+archon */
    postStoreModulesKeyPrice(args?: RequestArgs & { body?: PostStoreModulesKeyPriceRequest }): Promise<PostStoreModulesKeyPriceResponse>;
    /** POST /store/modules/{key}/versions — rank: metic+archon */
    postStoreModulesKeyVersions(args?: RequestArgs): Promise<PostStoreModulesKeyVersionsResponse>;
    /** GET /store/modules/{key}/versions/{version}/channel — rank: any-builder */
    getStoreModulesKeyVersionsVersionChannel(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/modules/{key}/versions/{version}/error-count — rank: any-builder */
    postStoreModulesKeyVersionsVersionErrorCount(args: RequestArgs & { body: PostStoreModulesKeyVersionsVersionErrorCountRequest }): Promise<ApiResponse>;
    /** GET /store/modules/{key}/versions/{version}/howto — rank: any-builder */
    getStoreModulesKeyVersionsVersionHowto(args?: RequestArgs): Promise<GetStoreModulesKeyVersionsVersionHowtoResponse>;
    /** POST /store/modules/{key}/versions/{version}/install-report — rank: any-builder */
    postStoreModulesKeyVersionsVersionInstallReport(args: RequestArgs & { body: PostStoreModulesKeyVersionsVersionInstallReportRequest }): Promise<ApiResponse>;
    /** POST /store/modules/{key}/versions/{version}/reassess — rank: metic+archon */
    postStoreModulesKeyVersionsVersionReassess(args?: RequestArgs & { body?: PostStoreModulesKeyVersionsVersionReassessRequest }): Promise<PostStoreModulesKeyVersionsVersionReassessResponse>;
    /** POST /store/modules/{key}/versions/{version}/release — rank: metic+archon */
    postStoreModulesKeyVersionsVersionRelease(args?: RequestArgs & { body?: PostStoreModulesKeyVersionsVersionReleaseRequest }): Promise<PostStoreModulesKeyVersionsVersionReleaseResponse>;
    /** GET /store/modules/{key}/versions/{version}/tarball — rank: any-builder */
    getStoreModulesKeyVersionsVersionTarball(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/modules/{key}/versions/{version}/withdraw — rank: metic+archon */
    postStoreModulesKeyVersionsVersionWithdraw(args?: RequestArgs & { body?: PostStoreModulesKeyVersionsVersionWithdrawRequest }): Promise<PostStoreModulesKeyVersionsVersionWithdrawResponse>;
    /** GET /store/modules/latest — rank: any-builder */
    getStoreModulesLatest(args?: RequestArgs): Promise<GetStoreModulesLatestResponse>;
    /** GET /store/subcategories — rank: any-builder */
    getStoreSubcategories(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/subcategories/{id}/approve — rank: metic+archon */
    postStoreSubcategoriesIdApprove(args?: RequestArgs & { body?: PostStoreSubcategoriesIdApproveRequest }): Promise<ApiResponse>;
    /** POST /store/subcategories/{id}/merge — rank: metic+archon */
    postStoreSubcategoriesIdMerge(args?: RequestArgs & { body?: PostStoreSubcategoriesIdMergeRequest }): Promise<ApiResponse>;
    /** GET /store/subcategories/queue — rank: metic+archon */
    getStoreSubcategoriesQueue(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /store/usage-reporting — rank: any-builder */
    getStoreUsageReporting(args?: RequestArgs): Promise<GetStoreUsageReportingResponse>;
    /** POST /store/usage-reporting — rank: any-builder */
    postStoreUsageReporting(args: RequestArgs & { body: PostStoreUsageReportingRequest }): Promise<PostStoreUsageReportingResponse>;
  };
  "taskRecommendations": {
    /** POST /task-recommendations — rank: any-builder */
    postTaskRecommendations(args: RequestArgs & { body: PostTaskRecommendationsRequest }): Promise<PostTaskRecommendationsResponse>;
    /** PATCH /task-recommendations/{id} — rank: any-builder */
    patchTaskRecommendationsId(args: RequestArgs & { body: PatchTaskRecommendationsIdRequest }): Promise<PatchTaskRecommendationsIdResponse>;
    /** GET /task-recommendations/for-me — rank: any-builder */
    getTaskRecommendationsForMe(args?: RequestArgs): Promise<GetTaskRecommendationsForMeResponse>;
    /** GET /task-recommendations/mine — rank: any-builder */
    getTaskRecommendationsMine(args?: RequestArgs): Promise<GetTaskRecommendationsMineResponse>;
  };
  "taskVisuals": {
    /** GET /task-visuals/{name} — rank: public */
    getTaskVisualsName(args?: RequestArgs): Promise<ApiResponse>;
  };
  "tasks": {
    /** GET /tasks — rank: any-builder */
    getTasks(args?: RequestArgs): Promise<GetTasksResponse>;
    /** POST /tasks — rank: metic+archon */
    postTasks(args: RequestArgs & { body: PostTasksRequest }): Promise<PostTasksResponse>;
    /** GET /tasks/{id} — rank: any-builder */
    getTasksId(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /tasks/{id} — rank: metic+archon */
    patchTasksId(args?: RequestArgs & { body?: PatchTasksIdRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/abandon — rank: any-builder */
    postTasksIdAbandon(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /tasks/{id}/attest-gate — rank: any-builder */
    postTasksIdAttestGate(args: RequestArgs & { body: PostTasksIdAttestGateRequest }): Promise<PostTasksIdAttestGateResponse>;
    /** POST /tasks/{id}/confirm — rank: any-builder */
    postTasksIdConfirm(args?: RequestArgs & { body?: PostTasksIdConfirmRequest }): Promise<ApiResponse>;
    /** GET /tasks/{id}/criteria — rank: any-builder */
    getTasksIdCriteria(args?: RequestArgs): Promise<GetTasksIdCriteriaResponse>;
    /** POST /tasks/{id}/criteria — rank: metic+archon */
    postTasksIdCriteria(args?: RequestArgs & { body?: PostTasksIdCriteriaRequest }): Promise<PostTasksIdCriteriaResponse>;
    /** DELETE /tasks/{id}/criteria/{criterionId} — rank: metic+archon */
    deleteTasksIdCriteriaCriterionId(args?: RequestArgs): Promise<DeleteTasksIdCriteriaCriterionIdResponse>;
    /** POST /tasks/{id}/demote — rank: metic+archon */
    postTasksIdDemote(args?: RequestArgs): Promise<PostTasksIdDemoteResponse>;
    /** GET /tasks/{id}/dependencies — rank: any-builder */
    getTasksIdDependencies(args?: RequestArgs): Promise<GetTasksIdDependenciesResponse>;
    /** POST /tasks/{id}/dependencies — rank: metic+archon */
    postTasksIdDependencies(args?: RequestArgs & { body?: PostTasksIdDependenciesRequest }): Promise<PostTasksIdDependenciesResponse>;
    /** PUT /tasks/{id}/dependencies — rank: metic+archon */
    putTasksIdDependencies(args: RequestArgs & { body: PutTasksIdDependenciesRequest }): Promise<PutTasksIdDependenciesResponse>;
    /** DELETE /tasks/{id}/dependencies/{depId} — rank: metic+archon */
    deleteTasksIdDependenciesDepId(args?: RequestArgs): Promise<DeleteTasksIdDependenciesDepIdResponse>;
    /** POST /tasks/{id}/grade — rank: any-builder */
    postTasksIdGrade(args?: RequestArgs & { body?: PostTasksIdGradeRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/merge — rank: metic+archon */
    postTasksIdMerge(args: RequestArgs & { body: PostTasksIdMergeRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/override-request — rank: any-builder */
    postTasksIdOverrideRequest(args: RequestArgs & { body: PostTasksIdOverrideRequestRequest }): Promise<PostTasksIdOverrideRequestResponse>;
    /** POST /tasks/{id}/promote — rank: metic+archon */
    postTasksIdPromote(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /tasks/{id}/publish-branch — rank: any-builder */
    postTasksIdPublishBranch(args: RequestArgs & { body: PostTasksIdPublishBranchRequest }): Promise<ApiResponse>;
    /** GET /tasks/{id}/publish-status — rank: any-builder */
    getTasksIdPublishStatus(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /tasks/{id}/recommendations — rank: any-builder */
    getTasksIdRecommendations(args?: RequestArgs): Promise<GetTasksIdRecommendationsResponse>;
    /** POST /tasks/{id}/ship — rank: any-builder */
    postTasksIdShip(args?: RequestArgs): Promise<PostTasksIdShipResponse>;
    /** PATCH /tasks/{id}/short-name — rank: any-builder */
    patchTasksIdShortName(args: RequestArgs & { body: PatchTasksIdShortNameRequest }): Promise<PatchTasksIdShortNameResponse>;
    /** DELETE /tasks/{id}/visual — rank: any-builder */
    deleteTasksIdVisual(args?: RequestArgs): Promise<DeleteTasksIdVisualResponse>;
    /** POST /tasks/{id}/visual — rank: any-builder */
    postTasksIdVisual(args: RequestArgs & { body: PostTasksIdVisualRequest }): Promise<PostTasksIdVisualResponse>;
    /** GET /tasks/{id}/visuals — rank: any-builder */
    getTasksIdVisuals(args?: RequestArgs): Promise<GetTasksIdVisualsResponse>;
    /** DELETE /tasks/{id}/visuals/{slot} — rank: any-builder */
    deleteTasksIdVisualsSlot(args?: RequestArgs): Promise<DeleteTasksIdVisualsSlotResponse>;
    /** POST /tasks/{id}/visuals/{slot} — rank: any-builder */
    postTasksIdVisualsSlot(args: RequestArgs & { body: PostTasksIdVisualsSlotRequest }): Promise<PostTasksIdVisualsSlotResponse>;
    /** POST /tasks/{id}/vote — rank: metic+archon */
    postTasksIdVote(args: RequestArgs & { body: PostTasksIdVoteRequest }): Promise<PostTasksIdVoteResponse>;
    /** POST /tasks/{id}/water — rank: any-builder */
    postTasksIdWater(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /tasks/claimable — rank: any-builder */
    getTasksClaimable(args?: RequestArgs): Promise<GetTasksClaimableResponse>;
    /** GET /tasks/newcomer-floor — rank: any-builder */
    getTasksNewcomerFloor(args?: RequestArgs): Promise<GetTasksNewcomerFloorResponse>;
    /** POST /tasks/newcomer-restock — rank: metic+archon */
    postTasksNewcomerRestock(args?: RequestArgs): Promise<PostTasksNewcomerRestockResponse>;
    /** GET /tasks/peer-votes/feed — rank: any-builder */
    getTasksPeerVotesFeed(args?: RequestArgs): Promise<GetTasksPeerVotesFeedResponse>;
    /** GET /tasks/peer-votes/lookup — rank: any-builder */
    getTasksPeerVotesLookup(args?: RequestArgs): Promise<GetTasksPeerVotesLookupResponse>;
    /** POST /tasks/peer-votes/tally — rank: metic+archon */
    postTasksPeerVotesTally(args?: RequestArgs): Promise<ApiResponse>;
  };
  "updateStatus": {
    /** GET /update-status — rank: any-builder */
    getUpdateStatus(args?: RequestArgs): Promise<GetUpdateStatusResponse>;
  };
  "versions": {
    /** GET /versions — rank: public */
    getVersions(args?: RequestArgs): Promise<GetVersionsResponse>;
    /** POST /versions — rank: archon */
    postVersions(args: RequestArgs & { body: PostVersionsRequest }): Promise<PostVersionsResponse>;
    /** POST /versions/{id}/close — rank: archon */
    postVersionsIdClose(args?: RequestArgs & { body?: PostVersionsIdCloseRequest }): Promise<PostVersionsIdCloseResponse>;
    /** GET /versions/{id}/done-when — rank: public */
    getVersionsIdDoneWhen(args?: RequestArgs): Promise<GetVersionsIdDoneWhenResponse>;
    /** POST /versions/{id}/done-when — rank: metic+archon */
    postVersionsIdDoneWhen(args: RequestArgs & { body: PostVersionsIdDoneWhenRequest }): Promise<PostVersionsIdDoneWhenResponse>;
    /** GET /versions/{id}/progress — rank: public */
    getVersionsIdProgress(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /versions/close-suggestions — rank: public */
    getVersionsCloseSuggestions(args?: RequestArgs): Promise<GetVersionsCloseSuggestionsResponse>;
    /** GET /versions/focus — rank: any-builder */
    getVersionsFocus(args?: RequestArgs): Promise<GetVersionsFocusResponse>;
    /** PUT /versions/focus — rank: archon */
    putVersionsFocus(args?: RequestArgs & { body?: PutVersionsFocusRequest }): Promise<PutVersionsFocusResponse>;
    /** GET /versions/progress — rank: public */
    getVersionsProgress(args?: RequestArgs): Promise<GetVersionsProgressResponse>;
  };
  "workCategories": {
    /** GET /work-categories — rank: any-builder */
    getWorkCategories(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /work-categories — rank: metic+archon */
    postWorkCategories(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /work-categories/{id} — rank: metic+archon */
    patchWorkCategoriesId(args?: RequestArgs): Promise<ApiResponse>;
  };
}
export declare function createClient(opts?: ClientOptions): BongosClient;
export default createClient;
