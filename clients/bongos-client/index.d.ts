// GENERATED — TypeScript types for @bongos/client (task 1995; field-level
// request typing added in task 2050 / ADR 0118). DO NOT EDIT BY HAND.
export declare const API_VERSION: string;
export declare const DEFAULT_BASE_URL: string;

// Request-body + shared types, generated from the OpenAPI components.schemas.
export interface ApiErrorObject { code: string; message: string; details?: unknown }
export interface DeleteAgentsNameResponse { ok: boolean; deleted: unknown }
export interface DeleteBlockersIdLinkTaskIdResponse { ok: boolean; unlinked: boolean; released: unknown }
export interface DeleteConnectionsIdResponse { outcome: unknown }
export interface DeleteDependenciesResponse { ok: boolean }
export interface DeleteGovernmentAssignmentsBuilderIdRankKeyResponse { ok: boolean; builder_id: unknown; rank_key: unknown; removed: unknown }
export interface DeleteGovernmentRanksRankKeyPermissionsPermissionKeyResponse { ok: boolean; rank_key: unknown; permission_key: unknown; removed: unknown }
export interface DeleteGuildRequestsIdResponse { outcome: unknown }
export interface DeleteGuildsSlugMembersHandleResponse { outcome: unknown }
export interface DeleteGuildsSlugMembershipResponse { outcome: unknown }
export interface DeleteGuildsSlugResponse { outcome: unknown }
export interface DeleteInboxIdSparkResponse { idea: unknown; sparked: boolean; unchanged: boolean }
export interface DeleteMeFilterViewsIdResponse { page: unknown; views: unknown }
export interface DeleteMemoryFileResponse { deleted: boolean; builder_id: unknown; path: unknown }
export interface DeleteProvisioningInstancesIdEnvManifestVarIdResponse { ok: boolean; removed: boolean; message: unknown }
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
export interface GetArtistGateResponse { ok: boolean; mode: unknown; since: unknown; holds: boolean; truncated: unknown; reviews: unknown; halt: unknown }
export interface GetAuditLogResponse { rows: unknown; page: unknown }
export interface GetAuthWebAdmissionStatusResponse { admitted: boolean }
export interface GetAutonomyRunnersAllResponse { builders: unknown }
export interface GetAutonomyRunnersResponse { runners: unknown; none: unknown }
export interface GetAutonomyRunsResponse { routine: unknown; limit: unknown; runs: unknown }
export interface GetBackupStatusResponse { backup_dir: unknown; db_name: unknown; latest_dump: unknown; stale: unknown; age_hours: unknown; trigger_running: unknown }
export interface GetBlockersIdResponse { blocker: unknown }
export interface GetBlockersResponse { blockers: unknown; page: unknown }
export interface GetBuildersDirectoryResponse { builders: unknown }
export interface GetBuildersIdActiveClaimsResponse { builder_id: unknown; claims: unknown; stale_hours: unknown; stale_hours_source: unknown }
export interface GetBuildersIdActivityResponse { builder_id: unknown; section: unknown; role: unknown; rows: unknown; total: unknown }
export interface GetBuildersIdOnboardingResponse { builder_id: unknown; onboarding: unknown }
export interface GetBuildersIdProfileResponse { builder: unknown; shipped_count: unknown; recent_ships: unknown; achievements: unknown; roles: unknown; cross_project?: unknown; handle?: unknown }
export interface GetBuildersMePendingRankChangeResponse { change: unknown; greeting?: unknown }
export interface GetBuildersRosterResponse { builders: unknown; stale_hours: unknown; stale_hours_source: unknown }
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
export interface GetCoreUpdateResponse { ok: boolean; update: unknown }
export interface GetCoreUpgradesResponse { ok: boolean; running: unknown; limit: unknown; upgrades: unknown }
export interface GetDiscordChannelsPlanResponse { ok: boolean; guild_id: unknown; op_count: unknown; ops: unknown; warnings: unknown }
export interface GetDiscordChannelsSnapshotResponse { ok: boolean; guild_id: unknown; config: unknown; warnings: unknown }
export interface GetDoneWhenPendingReviewResponse { criteria: unknown; count: unknown }
export interface GetGithubRepoResponse { ok: boolean; repo: unknown; private_deployable: boolean }
export interface GetGithubReposResponse { repos: unknown }
export interface GetGoalTaskRelevancePendingResponse { flags: unknown; count: unknown }
export interface GetGoalsIdConflictsResponse { ok: boolean; goal_id: unknown; conflicts: unknown; cross_goals_considered: unknown }
export interface GetGoalsIdRequestsResponse { requests: unknown }
export interface GetGoalsIdResponse { goal: unknown; members: unknown; criteria: unknown; dependencies: unknown; criterionless_task_count: unknown; admitted: unknown; open_tasks: unknown }
export interface GetGoalsResponse { goals: unknown }
export interface GetGoalsRollupsResponse { rollups: unknown }
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
export interface GetLeaderboardResponse { leaderboard: unknown; page: unknown }
export interface GetLearningsResponse { learnings: unknown }
export interface GetMeAchievementsResponse { unlocked: unknown }
export interface GetMeCrossProjectResponse { hide_stats: boolean; profile_state: unknown; handle: unknown; display_name: unknown; bio: unknown; links: unknown; cross_project: unknown; account_visibility: unknown; recruiter_discoverable: unknown; recruiter_discoverable_effective: unknown }
export interface GetMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface GetMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface GetMeFilterViewsResponse { page: unknown; views: unknown }
export interface GetMeGuildEngagementsResponse { engagements: unknown; count: unknown }
export interface GetMeGuildRequestsResponse { incoming: unknown; outgoing: unknown; owner_incoming: unknown; incoming_count: unknown; outgoing_count: unknown; owner_incoming_count: unknown }
export interface GetMeGuildsResponse { guilds: unknown; count: unknown }
export interface GetMeRecentShipsResponse { ships: unknown }
export interface GetMeSessionsResponse { sessions: unknown }
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
export interface GetOverrideRequestsResponse { requests: unknown }
export interface GetPageNotesIdResponse { note: unknown; images: unknown; ideas: unknown }
export interface GetPageNotesIdeasResponse { page_path: unknown; ideas: unknown }
export interface GetPageNotesResponse { page_id: unknown; notes: unknown }
export interface GetProfilesHandleResponse { account: unknown; cross_project: unknown }
export interface GetProjectManageLinkResponse { ok: boolean; link: unknown }
export interface GetProjectSettingsResponse { rows: unknown }
export interface GetProjectsFeaturedResponse { projects: unknown; page: PageInfo }
export interface GetProjectsResponse { projects: unknown }
export interface GetProvisioningFleetResponse { instances: unknown; capacity: unknown }
export interface GetProvisioningGithubAppStatusResponse { ok: boolean; status: unknown; failure: unknown; ready: unknown; terminal: unknown; domain: unknown; instance_status: unknown; app_slug: unknown }
export interface GetProvisioningHealthResponse { module: unknown; ok: boolean; coreVersion: unknown }
export interface GetProvisioningInstancesIdEnvManifestResponse { instance: unknown; env_vars: unknown; environments: unknown; values_held: boolean; note: unknown }
export interface GetProvisioningInstancesIdInviteSuggestionsResponse { suggested: unknown; seeking: unknown; reason: unknown; unavailable?: unknown }
export interface GetProvisioningInstancesIdLookResponse { ok: boolean; look: unknown; options: unknown; logo_max_bytes: unknown }
export interface GetProvisioningInstancesIdRenderResponse { ok: boolean; app: unknown; env_vars: unknown; values_held: boolean }
export interface GetProvisioningInstancesIdResponse { instance: unknown; open_intent: unknown; github_app: unknown }
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
export interface GetPublicUptimeResponse { services: unknown }
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
export interface GetSessionsSearchResponse { sessions: unknown; count: unknown; total: unknown; totals: unknown; limit: unknown; offset: unknown; session_types: unknown }
export interface GetSoftwareUpdateResponse { ok: boolean; update: unknown; door: unknown; can_update: unknown }
export interface GetSpecialitiesIdDocumentsResponse { documents: unknown }
export interface GetSpecialitiesIdResponse { speciality: unknown }
export interface GetSpecialitiesIdSkillsResponse { speciality: unknown; adopted: boolean; enabled: unknown; skills: unknown }
export interface GetSpecialitiesInstalledSkillsResponse { skills: unknown }
export interface GetSpecialitiesOfferedResponse { suggestions: unknown }
export interface GetSpecialitiesResponse { specialities: unknown }
export interface GetSsoPubkeyResponse { alg: unknown; format: unknown; public_key_b64: unknown }
export interface GetStoreEntitlementsResponse { entitlements: unknown }
export interface GetStoreModulesKeyVersionsVersionHowtoResponse { module_key: unknown; title: unknown; version: unknown; published_at: unknown; delisted: unknown; markdown: unknown; artifact_url: unknown }
export interface GetStoreModulesLatestResponse { latest: unknown }
export interface GetTaskRecommendationsForMeResponse { recommendations: unknown; count: unknown }
export interface GetTaskRecommendationsMineResponse { recommendations: unknown; count: unknown }
export interface GetTasksClaimableResponse { claimable: unknown; claimable_total: unknown; active_claims: unknown }
export interface GetTasksIdCriteriaResponse { criteria: unknown }
export interface GetTasksIdDependenciesResponse { dependencies: unknown; dependents: unknown }
export interface GetTasksIdRecommendationsResponse { recommendations: unknown; count: unknown }
export interface GetTasksIdVisualsResponse { ok: boolean; task_id: unknown; slots: unknown }
export interface GetTasksNewcomerFloorResponse { disciplines: unknown }
export interface GetTasksPeerVotesFeedResponse { tasks: unknown; can_vote: unknown }
export interface GetTasksResponse { tasks: unknown }
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
export interface PatchBuildersIdRankRequest { rank: string }
export interface PatchBuildersIdRankResponse { builder: unknown; previous_rank: unknown; direction: unknown; credit_delta: unknown; broadcast: unknown }
export interface PatchBuildersIdStatusRequest { status: "active" | "inactive"; reason?: string }
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
export interface PatchMeCrossProjectRequest { hide_stats?: boolean; account_visibility?: string; recruiter_discoverable?: boolean }
export interface PatchMeCrossProjectResponse { hide_stats: boolean; account_visibility: unknown; recruiter_discoverable: unknown; recruiter_discoverable_effective: unknown }
export interface PatchMeDisciplinesRequest { preferred_disciplines: string[]; main_discipline?: string }
export interface PatchMeDisciplinesResponse { builder: unknown; onboarding: unknown }
export interface PatchMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface PatchMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface PatchMeFilterViewsIdRequest { page: string; name?: string; is_default?: boolean }
export interface PatchMeFilterViewsIdResponse { page: unknown; view: unknown; views: unknown }
export interface PatchMeHandleRequest { handle: string }
export interface PatchMeHandleResponse { handle: unknown; previous_handle: unknown }
export interface PatchMeProfileRequest { display_name?: unknown; bio?: unknown; links?: unknown }
export interface PatchMeProfileResponse { display_name: unknown; bio: unknown; links: unknown }
export interface PatchMeSkillPrefsResponse { prefs: unknown; effective: unknown; defaults: unknown; known_skills: unknown; allowed_models: unknown }
export interface PatchMeSoundPrefsResponse { prefs: unknown; effective: unknown; effective_map: unknown; volume: unknown; defaults: unknown; known_sounds: unknown }
export interface PatchPageNotesIdRequest { body_md: string }
export interface PatchPageNotesIdResponse { ok: boolean; updated_at: unknown }
export interface PatchProjectSettingsRotDaysRequest { days: number }
export interface PatchProjectSettingsRotDaysResponse { ok: boolean; rot_days: unknown; source: unknown; describe: unknown }
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
export interface PatchTasksIdRequest { kind?: string; discipline?: string; requires_rank?: string; module_key?: string; goal_id?: number; parent_task_id?: StringifiableId; parallel_safe?: unknown; newcomer_friendly?: boolean; xenos_claimable?: boolean; security_sensitive?: boolean; automation_tag?: string; needs_migration?: boolean; description?: string; title?: string; priority?: unknown; value_summary?: string; status?: unknown }
export interface PostAccessRequestsInviteRequest { github_login: string; note?: string }
export interface PostAccessRequestsInviteResponse { ok: boolean; already_invited?: boolean; github_login?: unknown; request?: unknown }
export interface PostAccessRequestsRequest { github_login: string; display_name?: string; note?: string }
export interface PostAccessRequestsResponse { ok: boolean; request?: unknown; already_pending?: boolean }
export interface PostAgentsNameDisableResponse { ok: boolean; agent: unknown }
export interface PostAgentsNameEnableResponse { ok: boolean; agent: unknown }
export interface PostAgentsNameInvokeRequest { input?: string }
export interface PostAgentsNameInvokeResponse { ok: boolean; run_id: unknown; poll: unknown; message: unknown }
export interface PostAgentsResponse { ok: boolean; agent: unknown }
export interface PostAuthBackchannelLogoutRequest { logout_token: string }
export interface PostAuthBackchannelLogoutResponse { ok: boolean }
export interface PostAuthCliTokenIssueResponse { ok: boolean; token: unknown; expires_at: unknown; builder_login: unknown; api_base: unknown; paste_command: unknown }
export interface PostAuthDeviceExchangeRequest { assertion: string }
export interface PostAuthDeviceExchangeResponse { token: unknown; builder: unknown }
export interface PostAuthDevicePollRequest { device_code: string }
export interface PostAuthDiscordUnlinkResponse { ok: boolean; unlinked: unknown }
export interface PostAuthLogoutResponse { ok: boolean }
export interface PostAuthRevokeAllRequest { builder_id?: StringifiableId }
export interface PostAuthRevokeAllResponse { ok: boolean; revoked: unknown }
export interface PostAuthRevokeRequest { session_id?: StringifiableId }
export interface PostAuthRevokeResponse { ok: boolean; revoked: unknown }
export interface PostAutonomyBuildersBuilderIdPauseRequest { paused: boolean; reason?: string }
export interface PostAutonomyFenceGoalsRequest { goal_id: StringifiableId; note?: string }
export interface PostAutonomyFenceGoalsResponse { goal: unknown }
export interface PostAutonomyFencePriorityRequest { goal_id?: StringifiableId }
export interface PostAutonomyFenceRequest { enabled: boolean; reason?: string }
export interface PostAutonomyHeartbeatRequest { host: string; pid?: number; started_at?: string; mode?: string; consecutive_failures?: number; last_event?: string; working_task_id?: number; working_goal_id?: number; head?: string; disk_head?: string; main_head?: string; claude_account?: string }
export interface PostAutonomyHeartbeatResponse { ok: boolean; heartbeat: unknown }
export interface PostBackupTriggerResponse { ok: boolean; message: unknown; started_at: unknown }
export interface PostBlockersIdLinkRequest { task_id: StringifiableId }
export interface PostBlockersIdLinkResponse { ok: boolean; blocked: unknown }
export interface PostBlockersIdResolveRequest { resolution_note?: string }
export interface PostBlockersRequest { title: string; body_md?: string; source?: string; source_ref?: string }
export interface PostBlockersResponse { skipped?: boolean; reason?: unknown; blocker?: unknown }
export interface PostClaimsBatchReleaseRequest { claim_ids: unknown[]; force?: boolean }
export interface PostClaimsBatchReleaseResponse { released: unknown; failures: unknown }
export interface PostClaimsBatchRequest { task_ids: unknown[]; worktree_name?: string; bind_session?: boolean }
export interface PostClaimsBatchResponse { claims: unknown }
export interface PostClaimsBatchValidateRequest { task_ids: unknown[] }
export interface PostClaimsIdReleaseOnBehalfRequest { reason: string }
export interface PostClaimsIdResolveRequest { outcome: "shipped" | "abandoned" | "partial"; notes_md?: string; value_summary?: string; verification?: Record<string, unknown>; force?: boolean; committed_files?: string[]; sandbox_review?: Record<string, unknown>; resolver_worktree?: string }
export interface PostClaimsRequest { task_id: StringifiableId; worktree_name?: string; head_sha?: string; bind_session?: boolean; enforce_touches?: boolean }
export interface PostClaimsResponse { claim: unknown; task: unknown; just_unlocked: unknown; overlap_warning: unknown; sibling_overlap_warning: unknown; reward: unknown }
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
export interface PostCopyDeskPagesPageIdSendBackRequest { note: string; task_id?: string }
export interface PostCopyDeskPagesPageIdSendBackResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; sent_back: unknown; pr: unknown; next: unknown }
export interface PostCopyDeskProposalsRequest { string_id: string; proposed_text: string; why: string; file?: string; line?: number; flag_id?: number }
export interface PostCopyDeskProposalsResponse { ok: boolean; task: unknown; created: boolean; patch?: unknown }
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
export interface PostFeedbackRequest { message: string; kind?: "bug" | "idea"; context?: unknown }
export interface PostFoundingPlanRequest { days?: Record<string, unknown>; passes?: number; advisors?: string; government?: string; expected_builders?: number; existing?: boolean }
export interface PostGithubRepoVisibilityRequest { repo: string; visibility: "public" | "private" }
export interface PostGithubRepoVisibilityResponse { ok: boolean; repo: unknown; private_deployable: boolean }
export interface PostGithubReposRequest { name: string }
export interface PostGithubReposResponse { repo: unknown }
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
export interface PostGoalsIdTasksRequest { title: string; description?: string; touches: string[]; est_minutes?: number; priority?: number; kind?: string; discipline?: string; value_summary?: string; parent_task_id?: number }
export interface PostGoalsIdTasksResponse { ok: boolean; task: unknown; goal_id: unknown; parent_task_id: unknown; credits_reward: unknown; requires_rank: unknown }
export interface PostGoalsIdTransferRequest { builder_id?: StringifiableId }
export interface PostGoalsIdTransferResponse { ok: boolean; goal: unknown; changed: boolean }
export interface PostGoalsReorderRequest { version_id: string; ordered_ids: number[] }
export interface PostGoalsReorderResponse { ok: boolean; goals: unknown }
export interface PostGoalsRequest { version_id: string; title: string; subtitle?: string; description?: string; scope_modules?: string[]; succeeds_goal_id?: number; category_id?: number; admit_reason?: string }
export interface PostGoalsResponse { ok: boolean; goal: unknown; succeeds_goal_id: unknown; category_advisory: unknown; admitted: unknown }
export interface PostGovernmentAssignmentsRequest { builder_id: number; rank_key: string }
export interface PostGovernmentBoardCharterRequest { form?: string; franchise?: string; council_rank?: string; pass_rule?: string; rationale_md?: string; acknowledge_self_removal?: boolean }
export interface PostGovernmentBoardCharterResponse { ok: boolean; amendment: unknown; item: unknown; reads_as: unknown }
export interface PostGovernmentBoardDecisionRulesRequest { rules: unknown[]; rationale_md?: string }
export interface PostGovernmentBoardDecisionRulesResponse { ok: boolean; amendment: unknown; item: unknown; rules: unknown }
export interface PostGovernmentBoardItemsItemIdVotesRequest { direction: string; reason_md?: string; section_key?: string }
export interface PostGovernmentBoardItemsItemIdWithdrawResponse { ok: boolean; item_closed: boolean; outcome: unknown; item: unknown }
export interface PostGovernmentBoardItemsRequest { subject_type: string; proposal: Record<string, unknown>; rationale_md?: string; acknowledge_self_removal?: boolean }
export interface PostGovernmentBoardItemsResponse { ok: boolean; amendment: unknown; item: unknown }
export interface PostGovernmentBoardMattersRequest { area: string; title: string; detail_md?: string; action?: Record<string, unknown> }
export interface PostGovernmentBoardMattersResponse { ok: boolean; matter: unknown; item: unknown; decided: unknown }
export interface PostGovernmentRankSetsApplyRequest { type?: string; headcount: number }
export interface PostGovernmentRankSetsApplyResponse { ok: boolean; type: unknown; size: unknown; created: unknown; skipped: unknown }
export interface PostGovernmentRanksRankKeyResetResponse { ok: boolean; rank_key: unknown; seeded_rank: unknown; permission_count: unknown }
export interface PostGovernmentRanksRequest { rank_key: string; label: string; description?: string }
export interface PostGovernmentRanksResponse { rank: unknown }
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
export interface PostMeAnthropicLinkRequest { anthropic_email: string; anthropic_user_id: string }
export interface PostMeAnthropicLinkResponse { linked: unknown }
export interface PostMeFilterViewsRequest { page: string; name: string; values: Record<string, unknown>; is_default?: boolean }
export interface PostMeFilterViewsResponse { page: unknown; view: unknown; views: unknown }
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
export interface PostModulesKeyEnableResponse { ok: boolean; key: unknown; enabled: unknown; effective: unknown; source: unknown; note: unknown }
export interface PostModulesKeySubmitRequest { signed_by?: string }
export interface PostModulesKeySubmitResponse { ok: boolean; submission: unknown }
export interface PostMyProjectsClientIdLeaveResponse { ok: boolean; left: unknown }
export interface PostMyProjectsInvitesClientIdDeclineResponse { ok: boolean; accepted: boolean }
export interface PostMyProjectsJoinRequest { origin: string; note?: string; guild?: string }
export interface PostMyProjectsJoinResponse { ok: boolean; status: unknown; project: unknown; message: unknown }
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
export interface PostProjectsInviteGuildRequest { client_id: string; guild: string }
export interface PostProjectsInviteGuildResponse { invited: boolean; guild: unknown; invites: unknown; count: unknown }
export interface PostProjectsInviteRequest { client_id: string; github_login: string }
export interface PostProjectsInviteResponse { invited: boolean; invite_url: unknown }
export interface PostProjectsProjectIdSpecialitiesRequest { name: string; discipline: string; summary?: string; contract_md?: string; visibility?: string; sellable?: boolean; skills?: string[] }
export interface PostProjectsProjectIdSpecialitiesResponse { speciality: unknown }
export interface PostProjectsRequest { origin: string; name: string; tagline?: string; description?: string; art_url?: string; type?: string; template?: string }
export interface PostProjectsResponse { project: unknown }
export interface PostProvisioningInstancesIdDemoRequest { outcome: string }
export interface PostProvisioningInstancesIdDemoResponse { ok: boolean; outcome: unknown; demo: unknown }
export interface PostProvisioningInstancesIdDisconnectRequest { confirm_slug: string }
export interface PostProvisioningInstancesIdDisconnectResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdDomainRequest { domain: string }
export interface PostProvisioningInstancesIdDomainResponse { ok: boolean; changed: boolean; queued: unknown; domain: unknown; message: unknown; replaced?: unknown }
export interface PostProvisioningInstancesIdEnvManifestRequest { name: string; description?: string; environments?: unknown[]; required?: boolean }
export interface PostProvisioningInstancesIdForceTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; superseded: unknown; message: unknown }
export interface PostProvisioningInstancesIdGithubAppRequest { account?: string }
export interface PostProvisioningInstancesIdGithubAppResponse { state: unknown; account: unknown; post_url: unknown; personal_url: unknown; org_url: unknown; org_login: unknown; manifest: unknown; redirect_url: unknown; expires_at: unknown }
export interface PostProvisioningInstancesIdRenderRequest { key: string; owner_id: string; mode: string; service_id?: string; web_plan?: string; db_plan?: string; region?: string; runtime?: string; build_command?: string; start_command?: string; database?: boolean }
export interface PostProvisioningInstancesIdRenderResponse { ok: boolean; queued: boolean; action: unknown; mode: unknown; with_setup: boolean; message: unknown }
export interface PostProvisioningInstancesIdRepoPrivateResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdRestartResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; superseded: unknown; message: unknown }
export interface PostProvisioningInstancesRequest { slug: string; target_ref?: string; hosting_shape?: string; domain?: string; no_address?: boolean; tier?: string; onboard_mode?: string; type?: string; description?: string; detail?: Record<string, unknown>; modules?: string[]; terms_acknowledged?: boolean; demo?: Record<string, unknown> }
export interface PostProvisioningPhysicsCheckRequest { description?: string; detail?: Record<string, unknown> }
export interface PostProvisioningPhysicsCheckResponse { stop: boolean; message: unknown; soft_limits: unknown }
export interface PostProvisioningRenderLookupRequest { key: string; owner_id?: string }
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
export interface PostSsoApplicantProfileRequest { client_id: string; client_secret: string; github_id: StringifiableId }
export interface PostSsoApplicantProfileResponse { profile: unknown; guild: unknown }
export interface PostSsoDevicePollRequest { device_code: string }
export interface PostSsoDeviceStartRequest { origin: string }
export interface PostSsoFeedbackRequest { client_id: string; client_secret: string; github_id: StringifiableId; message: string; kind?: string; context?: unknown }
export interface PostSsoInvitesClearRequest { client_id: string; client_secret: string; github_login: string }
export interface PostSsoInvitesNotifyRequest { client_id: string; client_secret: string; github_login: string }
export interface PostSsoMembershipCheckInRequest { client_id: string; client_secret: string; github_id: StringifiableId; github_login: string; display_name?: string; avatar_url?: string; membership_kind?: string }
export interface PostSsoMembershipCheckInResponse { ok: boolean }
export interface PostSsoTokenRequest { client_id: string; client_secret: string; code: string; redirect_uri: string }
export interface PostSsoTokenResponse { github_id: unknown; github_login: unknown; display_name: unknown; avatar_url: unknown }
export interface PostStoreModulesKeyAcquireRequest { version?: string }
export interface PostStoreModulesKeyAcquireResponse { ok: boolean; module_key: unknown; version: unknown; core_version: unknown; tarball_sha256: unknown; tree_sha256: unknown; tarball_bytes: unknown; channel: unknown; entitlement: unknown }
export interface PostStoreModulesKeyAcquiredRequest { version: string }
export interface PostStoreModulesKeyAcquiredResponse { ok: boolean; entitlement: unknown }
export interface PostStoreModulesKeyDelistRequest { reason?: string }
export interface PostStoreModulesKeyDelistResponse { ok: boolean; module_key: unknown; status: unknown; delisted_at: unknown }
export interface PostStoreModulesKeyVersionsResponse { ok: boolean; created_module: unknown; version: unknown }
export interface PostStoreModulesKeyVersionsVersionReassessRequest { reason?: string }
export interface PostStoreModulesKeyVersionsVersionReassessResponse { ok: boolean; queued: boolean; module_key: unknown; version: unknown; version_id: unknown }
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
export interface PostTasksRequest { version_id: string; title: string; description?: string; status?: string; touches?: string[]; est_minutes?: number; est_cost_usd?: number; manual_degree?: number; priority?: number; automation_tag?: string; credits_reward?: number; source?: string; source_ref?: string; value_summary?: string; kind?: string; discipline?: string; parallel_safe?: unknown; newcomer_friendly?: boolean; security_sensitive?: boolean; requires_rank?: string; auto_detect_touches?: boolean; criterion_ids?: unknown[]; module_key?: string; goal_id?: number }
export interface PostTasksResponse { task: unknown; needs_migration: unknown; criteria: unknown; idempotent: boolean }
export interface PostVersionsIdCloseRequest { reason?: string; dispositions?: Record<string, unknown> }
export interface PostVersionsIdCloseResponse { ok: boolean; version: unknown; applied: unknown; promoted: unknown; carried: unknown }
export interface PostVersionsIdDoneWhenRequest { criterion_id: string; criterion_md: string; goal_id?: number; sort_order?: number }
export interface PostVersionsIdDoneWhenResponse { ok: boolean; criterion: unknown }
export interface PostVersionsRequest { id: string; name: string; status?: string; done_when?: string; scope_doc_path?: string; criteria?: unknown[]; first_goal?: Record<string, unknown> }
export interface PostVersionsResponse { version: unknown; goal: unknown; criteria: unknown }
export interface PutAutonomyMeGoalsRequest { goal_ids: unknown }
export interface PutAutonomyMeGoalsResponse { goals: unknown }
export interface PutCopyDeskPagesPageIdDraftRequest { reading_hash: string; lines: unknown[] }
export interface PutCopyDeskPagesPageIdDraftResponse { ok: boolean; outcome: unknown; page_id: unknown; round: unknown; draft: unknown; counter: unknown }
export interface PutDoneWhenCriterionIdBackendOnlyRequest { backend_only: boolean }
export interface PutDoneWhenCriterionIdBackendOnlyResponse { ok: boolean; criterion_id: unknown; backend_only: unknown }
export interface PutGovernmentRanksRankKeyPermissionsPermissionKeyResponse { ok: boolean; rank_key: unknown; permission_key: unknown; granted: unknown }
export interface PutMingleOptInRequest { opted_in: boolean }
export interface PutMingleOptInResponse { opted_in: unknown; updated_at: unknown }
export interface PutMingleProjectRequest { enabled: boolean }
export interface PutProvisioningInstancesIdLogoRequest { image_b64: string; content_type: string }
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
  "analytics": {
    /** GET /analytics/builder/{id} — rank: any-builder */
    getAnalyticsBuilderId(args?: RequestArgs): Promise<ApiResponse>;
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
    /** POST /auth/device/exchange — rank: public */
    postAuthDeviceExchange(args: RequestArgs & { body: PostAuthDeviceExchangeRequest }): Promise<PostAuthDeviceExchangeResponse>;
    /** POST /auth/device/poll — rank: public */
    postAuthDevicePoll(args: RequestArgs & { body: PostAuthDevicePollRequest }): Promise<ApiResponse>;
    /** POST /auth/device/start — rank: public */
    postAuthDeviceStart(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/discord/callback — rank: any-builder */
    getAuthDiscordCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/discord/start — rank: any-builder */
    getAuthDiscordStart(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/discord/unlink — rank: any-builder */
    postAuthDiscordUnlink(args?: RequestArgs): Promise<PostAuthDiscordUnlinkResponse>;
    /** POST /auth/logout — rank: any-builder */
    postAuthLogout(args?: RequestArgs): Promise<PostAuthLogoutResponse>;
    /** POST /auth/revoke — rank: archon */
    postAuthRevoke(args?: RequestArgs & { body?: PostAuthRevokeRequest }): Promise<PostAuthRevokeResponse>;
    /** POST /auth/revoke-all — rank: archon */
    postAuthRevokeAll(args?: RequestArgs & { body?: PostAuthRevokeAllRequest }): Promise<PostAuthRevokeAllResponse>;
    /** GET /auth/web/admission-status — rank: public */
    getAuthWebAdmissionStatus(args?: RequestArgs): Promise<GetAuthWebAdmissionStatusResponse>;
    /** GET /auth/web/callback — rank: public */
    getAuthWebCallback(args?: RequestArgs): Promise<ApiResponse>;
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
    /** POST /autonomy/heartbeat — rank: any-builder */
    postAutonomyHeartbeat(args: RequestArgs & { body: PostAutonomyHeartbeatRequest }): Promise<PostAutonomyHeartbeatResponse>;
    /** PUT /autonomy/me/goals — rank: metic+archon */
    putAutonomyMeGoals(args: RequestArgs & { body: PutAutonomyMeGoalsRequest }): Promise<PutAutonomyMeGoalsResponse>;
    /** GET /autonomy/precheck — rank: metic+archon */
    getAutonomyPrecheck(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /autonomy/runners — rank: any-builder */
    getAutonomyRunners(args?: RequestArgs): Promise<GetAutonomyRunnersResponse>;
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
    /** GET /builders/{id}/onboarding — rank: public */
    getBuildersIdOnboarding(args?: RequestArgs): Promise<GetBuildersIdOnboardingResponse>;
    /** GET /builders/{id}/profile — rank: public */
    getBuildersIdProfile(args?: RequestArgs): Promise<GetBuildersIdProfileResponse>;
    /** PATCH /builders/{id}/rank — rank: archon */
    patchBuildersIdRank(args: RequestArgs & { body: PatchBuildersIdRankRequest }): Promise<PatchBuildersIdRankResponse>;
    /** PATCH /builders/{id}/status — rank: archon */
    patchBuildersIdStatus(args: RequestArgs & { body: PatchBuildersIdStatusRequest }): Promise<ApiResponse>;
    /** GET /builders/directory — rank: any-builder */
    getBuildersDirectory(args?: RequestArgs): Promise<GetBuildersDirectoryResponse>;
    /** GET /builders/me/pending-rank-change — rank: any-builder */
    getBuildersMePendingRankChange(args?: RequestArgs): Promise<GetBuildersMePendingRankChangeResponse>;
    /** GET /builders/roster — rank: metic+archon */
    getBuildersRoster(args?: RequestArgs): Promise<GetBuildersRosterResponse>;
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
    /** GET /community/leaderboard — rank: public */
    getCommunityLeaderboard(args?: RequestArgs): Promise<GetCommunityLeaderboardResponse>;
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
    /** GET /copy-desk/tally — rank: any-builder */
    getCopyDeskTally(args?: RequestArgs): Promise<ApiResponse>;
  };
  "coreUpdate": {
    /** GET /core-update — rank: archon */
    getCoreUpdate(args?: RequestArgs): Promise<GetCoreUpdateResponse>;
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
    /** POST /feedback — rank: any-builder */
    postFeedback(args: RequestArgs & { body: PostFeedbackRequest }): Promise<ApiResponse>;
  };
  "founding": {
    /** POST /founding/alive — rank: any-builder */
    postFoundingAlive(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/builders — rank: any-builder */
    getFoundingBuilders(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /founding/genesis — rank: any-builder */
    getFoundingGenesis(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /founding/plan — rank: any-builder */
    postFoundingPlan(args?: RequestArgs & { body?: PostFoundingPlanRequest }): Promise<ApiResponse>;
    /** POST /founding/stages/{stage}/close — rank: any-builder */
    postFoundingStagesStageClose(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /founding/start — rank: any-builder */
    postFoundingStart(args?: RequestArgs): Promise<ApiResponse>;
  };
  "gateApprovals": {
    /** GET /gate-approvals — rank: metic+archon */
    getGateApprovals(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /gate-approvals/{pr}/approve — rank: archon */
    postGateApprovalsPrApprove(args?: RequestArgs): Promise<ApiResponse>;
  };
  "github": {
    /** GET /github/repo — rank: any-builder */
    getGithubRepo(args?: RequestArgs): Promise<GetGithubRepoResponse>;
    /** POST /github/repo/visibility — rank: any-builder */
    postGithubRepoVisibility(args: RequestArgs & { body: PostGithubRepoVisibilityRequest }): Promise<PostGithubRepoVisibilityResponse>;
    /** GET /github/repos — rank: any-builder */
    getGithubRepos(args?: RequestArgs): Promise<GetGithubReposResponse>;
    /** POST /github/repos — rank: any-builder */
    postGithubRepos(args: RequestArgs & { body: PostGithubReposRequest }): Promise<PostGithubReposResponse>;
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
    /** GET /government/assignments — rank: archon */
    getGovernmentAssignments(args?: RequestArgs): Promise<GetGovernmentAssignmentsResponse>;
    /** POST /government/assignments — rank: archon */
    postGovernmentAssignments(args: RequestArgs & { body: PostGovernmentAssignmentsRequest }): Promise<ApiResponse>;
    /** DELETE /government/assignments/{builderId}/{rankKey} — rank: archon */
    deleteGovernmentAssignmentsBuilderIdRankKey(args?: RequestArgs): Promise<DeleteGovernmentAssignmentsBuilderIdRankKeyResponse>;
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
    /** POST /government/board/matters — rank: metic+archon */
    postGovernmentBoardMatters(args: RequestArgs & { body: PostGovernmentBoardMattersRequest }): Promise<PostGovernmentBoardMattersResponse>;
    /** GET /government/constitution — rank: any-builder */
    getGovernmentConstitution(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/docket — rank: any-builder */
    getGovernmentDocket(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /government/permissions — rank: archon */
    getGovernmentPermissions(args?: RequestArgs): Promise<GetGovernmentPermissionsResponse>;
    /** POST /government/rank-sets/apply — rank: archon */
    postGovernmentRankSetsApply(args: RequestArgs & { body: PostGovernmentRankSetsApplyRequest }): Promise<PostGovernmentRankSetsApplyResponse>;
    /** GET /government/ranks — rank: archon */
    getGovernmentRanks(args?: RequestArgs): Promise<GetGovernmentRanksResponse>;
    /** POST /government/ranks — rank: archon */
    postGovernmentRanks(args: RequestArgs & { body: PostGovernmentRanksRequest }): Promise<PostGovernmentRanksResponse>;
    /** DELETE /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon */
    deleteGovernmentRanksRankKeyPermissionsPermissionKey(args?: RequestArgs): Promise<DeleteGovernmentRanksRankKeyPermissionsPermissionKeyResponse>;
    /** PUT /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon */
    putGovernmentRanksRankKeyPermissionsPermissionKey(args?: RequestArgs): Promise<PutGovernmentRanksRankKeyPermissionsPermissionKeyResponse>;
    /** POST /government/ranks/{rankKey}/reset — rank: archon */
    postGovernmentRanksRankKeyReset(args?: RequestArgs): Promise<PostGovernmentRanksRankKeyResetResponse>;
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
  "me": {
    /** GET /me — rank: any-builder */
    getMe(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/achievements — rank: any-builder */
    getMeAchievements(args?: RequestArgs): Promise<GetMeAchievementsResponse>;
    /** POST /me/anthropic-link — rank: any-builder */
    postMeAnthropicLink(args: RequestArgs & { body: PostMeAnthropicLinkRequest }): Promise<PostMeAnthropicLinkResponse>;
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
    /** GET /me/guild-engagements — rank: any-builder */
    getMeGuildEngagements(args?: RequestArgs): Promise<GetMeGuildEngagementsResponse>;
    /** GET /me/guild-requests — rank: any-builder */
    getMeGuildRequests(args?: RequestArgs): Promise<GetMeGuildRequestsResponse>;
    /** GET /me/guilds — rank: any-builder */
    getMeGuilds(args?: RequestArgs): Promise<GetMeGuildsResponse>;
    /** PATCH /me/handle — rank: any-builder */
    patchMeHandle(args: RequestArgs & { body: PatchMeHandleRequest }): Promise<PatchMeHandleResponse>;
    /** GET /me/interaction — rank: any-builder */
    getMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/interaction — rank: any-builder */
    patchMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/model-allocation — rank: any-builder */
    getMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/model-allocation — rank: any-builder */
    patchMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
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
    /** POST /modules/{key}/submit — rank: metic+archon */
    postModulesKeySubmit(args?: RequestArgs & { body?: PostModulesKeySubmitRequest }): Promise<PostModulesKeySubmitResponse>;
    /** GET /modules/submissions — rank: metic+archon */
    getModulesSubmissions(args?: RequestArgs): Promise<GetModulesSubmissionsResponse>;
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
  };
  "profiles": {
    /** GET /profiles/{handle} — rank: public */
    getProfilesHandle(args?: RequestArgs): Promise<GetProfilesHandleResponse>;
  };
  "project": {
    /** GET /project/manage-link — rank: archon */
    getProjectManageLink(args?: RequestArgs): Promise<GetProjectManageLinkResponse>;
  };
  "projectSettings": {
    /** GET /project-settings — rank: metic+archon */
    getProjectSettings(args?: RequestArgs): Promise<GetProjectSettingsResponse>;
    /** PATCH /project-settings/rot-days — rank: metic+archon */
    patchProjectSettingsRotDays(args: RequestArgs & { body: PatchProjectSettingsRotDaysRequest }): Promise<PatchProjectSettingsRotDaysResponse>;
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
    /** GET /provisioning/fleet — rank: metic+archon */
    getProvisioningFleet(args?: RequestArgs): Promise<GetProvisioningFleetResponse>;
    /** GET /provisioning/fleet/cost-ledger — rank: metic+archon */
    getProvisioningFleetCostLedger(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/callback — rank: public */
    getProvisioningGithubAppCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/status — rank: public */
    getProvisioningGithubAppStatus(args?: RequestArgs): Promise<GetProvisioningGithubAppStatusResponse>;
    /** GET /provisioning/health — rank: public */
    getProvisioningHealth(args?: RequestArgs): Promise<GetProvisioningHealthResponse>;
    /** GET /provisioning/instances — rank: any-builder */
    getProvisioningInstances(args?: RequestArgs): Promise<GetProvisioningInstancesResponse>;
    /** POST /provisioning/instances — rank: any-builder */
    postProvisioningInstances(args: RequestArgs & { body: PostProvisioningInstancesRequest }): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id} — rank: any-builder */
    getProvisioningInstancesId(args?: RequestArgs): Promise<GetProvisioningInstancesIdResponse>;
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
    /** POST /provisioning/instances/{id}/repo-private — rank: any-builder */
    postProvisioningInstancesIdRepoPrivate(args?: RequestArgs): Promise<PostProvisioningInstancesIdRepoPrivateResponse>;
    /** POST /provisioning/instances/{id}/restart — rank: any-builder */
    postProvisioningInstancesIdRestart(args?: RequestArgs): Promise<PostProvisioningInstancesIdRestartResponse>;
    /** GET /provisioning/instances/{id}/settings — rank: any-builder */
    getProvisioningInstancesIdSettings(args?: RequestArgs): Promise<GetProvisioningInstancesIdSettingsResponse>;
    /** PATCH /provisioning/instances/{id}/settings — rank: any-builder */
    patchProvisioningInstancesIdSettings(args?: RequestArgs): Promise<PatchProvisioningInstancesIdSettingsResponse>;
    /** POST /provisioning/instances/{id}/teardown — rank: any-builder */
    postProvisioningInstancesIdTeardown(args?: RequestArgs): Promise<PostProvisioningInstancesIdTeardownResponse>;
    /** POST /provisioning/instances/{id}/update-channel — rank: archon */
    postProvisioningInstancesIdUpdateChannel(args?: RequestArgs): Promise<ApiResponse>;
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
    /** GET /public/uptime — rank: public */
    getPublicUptime(args?: RequestArgs): Promise<GetPublicUptimeResponse>;
    /** GET /public/versions — rank: public */
    getPublicVersions(args?: RequestArgs): Promise<GetPublicVersionsResponse>;
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
    /** GET /sessions/mine — rank: any-builder */
    getSessionsMine(args?: RequestArgs): Promise<GetSessionsMineResponse>;
    /** GET /sessions/search — rank: metic+archon */
    getSessionsSearch(args?: RequestArgs): Promise<GetSessionsSearchResponse>;
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
    /** POST /sso/invites/clear — rank: public */
    postSsoInvitesClear(args: RequestArgs & { body: PostSsoInvitesClearRequest }): Promise<ApiResponse>;
    /** POST /sso/invites/notify — rank: public */
    postSsoInvitesNotify(args: RequestArgs & { body: PostSsoInvitesNotifyRequest }): Promise<ApiResponse>;
    /** POST /sso/membership/check-in — rank: public */
    postSsoMembershipCheckIn(args: RequestArgs & { body: PostSsoMembershipCheckInRequest }): Promise<PostSsoMembershipCheckInResponse>;
    /** GET /sso/pubkey — rank: public */
    getSsoPubkey(args?: RequestArgs): Promise<GetSsoPubkeyResponse>;
    /** POST /sso/token — rank: public */
    postSsoToken(args: RequestArgs & { body: PostSsoTokenRequest }): Promise<PostSsoTokenResponse>;
  };
  "store": {
    /** GET /store/entitlements — rank: any-builder */
    getStoreEntitlements(args?: RequestArgs): Promise<GetStoreEntitlementsResponse>;
    /** POST /store/modules/{key}/acquire — rank: any-builder */
    postStoreModulesKeyAcquire(args?: RequestArgs & { body?: PostStoreModulesKeyAcquireRequest }): Promise<PostStoreModulesKeyAcquireResponse>;
    /** POST /store/modules/{key}/acquired — rank: any-builder */
    postStoreModulesKeyAcquired(args: RequestArgs & { body: PostStoreModulesKeyAcquiredRequest }): Promise<PostStoreModulesKeyAcquiredResponse>;
    /** POST /store/modules/{key}/delist — rank: metic+archon */
    postStoreModulesKeyDelist(args?: RequestArgs & { body?: PostStoreModulesKeyDelistRequest }): Promise<PostStoreModulesKeyDelistResponse>;
    /** GET /store/modules/{key}/entitlement — rank: any-builder */
    getStoreModulesKeyEntitlement(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /store/modules/{key}/versions — rank: metic+archon */
    postStoreModulesKeyVersions(args?: RequestArgs): Promise<PostStoreModulesKeyVersionsResponse>;
    /** GET /store/modules/{key}/versions/{version}/howto — rank: any-builder */
    getStoreModulesKeyVersionsVersionHowto(args?: RequestArgs): Promise<GetStoreModulesKeyVersionsVersionHowtoResponse>;
    /** POST /store/modules/{key}/versions/{version}/reassess — rank: metic+archon */
    postStoreModulesKeyVersionsVersionReassess(args?: RequestArgs & { body?: PostStoreModulesKeyVersionsVersionReassessRequest }): Promise<PostStoreModulesKeyVersionsVersionReassessResponse>;
    /** GET /store/modules/{key}/versions/{version}/tarball — rank: any-builder */
    getStoreModulesKeyVersionsVersionTarball(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /store/modules/latest — rank: any-builder */
    getStoreModulesLatest(args?: RequestArgs): Promise<GetStoreModulesLatestResponse>;
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
    /** POST /tasks/peer-votes/tally — rank: metic+archon */
    postTasksPeerVotesTally(args?: RequestArgs): Promise<ApiResponse>;
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
