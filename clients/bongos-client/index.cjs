// @bongos/client (CommonJS build) — GENERATED from index.mjs by
// scripts/bongos/gen-api-client.js. DO NOT EDIT BY HAND. Same behavior as the ESM
// build; only the module bindings differ. For require()-based consumers.
// @bongos/client — GENERATED from the OpenAPI spec by
// scripts/bongos/gen-api-client.js (task 1995 / ADR 0118). DO NOT EDIT BY HAND —
// regenerate on spec change. Zero deps; uses the platform fetch.
'use strict';

const API_VERSION = "v1";
const DEFAULT_BASE_URL = "/api/bongos/v1";

// The one error shape (ADR 0116). A non-2xx response rejects with this.
class ApiError extends Error {
  constructor(status, body) {
    const env = body && body.error;
    super((env && (env.message || env.code)) || ('HTTP ' + status));
    this.name = 'ApiError';
    this.status = status;
    this.code = env && env.code;
    this.details = env && env.details;
  }
}

function buildPath(template, args) {
  return template.replace(/\{(\w+)\}/g, (_, k) => {
    if (args[k] == null) throw new Error('missing path param: ' + k);
    return encodeURIComponent(args[k]);
  });
}

function qs(query) {
  if (!query) return '';
  const parts = [];
  for (const [k, v] of Object.entries(query)) {
    if (v == null) continue;
    parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
  }
  return parts.length ? '?' + parts.join('&') : '';
}

// createClient({ baseUrl, token, fetch, throwOnError }) — baseUrl defaults to the
// versioned same-origin base (/api/bongos/v1). Pass an absolute baseUrl for an
// external caller. token → Authorization: Bearer. fetch defaults to the platform
// fetch. throwOnError (default true): a non-2xx rejects with ApiError and a 2xx
// resolves to the parsed body. Set throwOnError:false for the internal-CLI
// contract — every call resolves to { status, ok, data } and never throws on HTTP
// status (network errors still reject), so status-inspecting callers port 1:1.
// credentials: forwarded to fetch as `credentials` (e.g. 'same-origin' / 'include')
// so a same-origin BROWSER page can authenticate by session COOKIE instead of a
// Bearer token — the hall/status web pages use this (task 1996 / R09).
function createClient(opts = {}) {
  // An explicit baseUrl:'' means "paths are already absolute" — honored (not
  // treated as unset), so a caller that passes full same-origin paths (e.g. the
  // hall's fetch wrappers, task 1996) routes them through unchanged.
  const baseUrl = (opts.baseUrl != null ? opts.baseUrl : DEFAULT_BASE_URL).replace(/\/$/, '');
  const token = opts.token || null;
  const credentials = opts.credentials || null;
  const cache = opts.cache || null; // forwarded to fetch (e.g. 'no-store' for the public status page)
  const doFetch = opts.fetch || (typeof fetch !== 'undefined' ? fetch : null);
  const throwOnError = opts.throwOnError !== false;
  if (!doFetch) throw new Error('no fetch available — pass opts.fetch');
  async function request(method, template, spec, args) {
    args = args || {};
    const url = baseUrl + buildPath(template, args) + qs(args.query);
    const headers = Object.assign({}, args.headers);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const init = { method, headers };
    if (credentials) init.credentials = credentials;
    if (args.cache || cache) init.cache = args.cache || cache;
    if (spec.hasBody && args.body !== undefined) {
      headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(args.body);
    }
    const res = await doFetch(url, init);
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = null; }
    if (!res.ok && throwOnError) throw new ApiError(res.status, data);
    return throwOnError ? data : { status: res.status, ok: res.ok, data };
  }
  return {
    // Generic escape hatch for a path with no generated method (an undocumented
    // route or a non-API URL). request(method, path, { query, body, headers }).
    // Honors the same throwOnError mode. `path` is relative to baseUrl.
    request: (method, path, o) => { o = o || {}; return request(method, path, { hasBody: o.hasBody != null ? o.hasBody : o.body !== undefined }, o); },
    "accessRequests": {
      // GET /access-requests — rank: archon — GET /access-requests
      getAccessRequests: (args) => request("GET", "/access-requests", { hasBody: false }, args),
      // POST /access-requests — rank: public — POST /access-requests
      postAccessRequests: (args) => request("POST", "/access-requests", { hasBody: true }, args),
      // PATCH /access-requests/{id} — rank: archon — PATCH /access-requests/:id
      patchAccessRequestsId: (args) => request("PATCH", "/access-requests/{id}", { hasBody: true }, args),
      // POST /access-requests/invite — rank: archon — POST /access-requests/invite
      postAccessRequestsInvite: (args) => request("POST", "/access-requests/invite", { hasBody: true }, args),
      // GET /access-requests/invites — rank: archon — GET /access-requests/invites
      getAccessRequestsInvites: (args) => request("GET", "/access-requests/invites", { hasBody: false }, args),
      // GET /access-requests/status — rank: public — GET /access-requests/status
      getAccessRequestsStatus: (args) => request("GET", "/access-requests/status", { hasBody: false }, args),
    },
    "achievements": {
      // GET /achievements — rank: any-builder — GET /achievements
      getAchievements: (args) => request("GET", "/achievements", { hasBody: false }, args),
    },
    "agentRuns": {
      // GET /agent-runs/{id} — rank: any-builder — GET /agent-runs/:id
      getAgentRunsId: (args) => request("GET", "/agent-runs/{id}", { hasBody: false }, args),
    },
    "agents": {
      // GET /agents — rank: any-builder — GET /agents
      getAgents: (args) => request("GET", "/agents", { hasBody: false }, args),
      // POST /agents — rank: metic+archon — POST /agents
      postAgents: (args) => request("POST", "/agents", { hasBody: true }, args),
      // DELETE /agents/{name} — rank: metic+archon — DELETE /agents/:name
      deleteAgentsName: (args) => request("DELETE", "/agents/{name}", { hasBody: false }, args),
      // GET /agents/{name} — rank: any-builder — GET /agents/:name
      getAgentsName: (args) => request("GET", "/agents/{name}", { hasBody: false }, args),
      // PATCH /agents/{name} — rank: metic+archon — PATCH /agents/:name
      patchAgentsName: (args) => request("PATCH", "/agents/{name}", { hasBody: true }, args),
      // POST /agents/{name}/disable — rank: metic+archon — POST /agents/:name/disable
      postAgentsNameDisable: (args) => request("POST", "/agents/{name}/disable", { hasBody: true }, args),
      // POST /agents/{name}/enable — rank: metic+archon — POST /agents/:name/enable
      postAgentsNameEnable: (args) => request("POST", "/agents/{name}/enable", { hasBody: true }, args),
      // POST /agents/{name}/invoke — rank: any-builder — POST /agents/:name/invoke
      postAgentsNameInvoke: (args) => request("POST", "/agents/{name}/invoke", { hasBody: true }, args),
    },
    "aiStudio": {
      // GET /ai-studio/balance — rank: any-builder — GET /ai-studio/balance
      getAiStudioBalance: (args) => request("GET", "/ai-studio/balance", { hasBody: false }, args),
      // GET /ai-studio/files/{id} — rank: any-builder — GET /ai-studio/files/:id
      getAiStudioFilesId: (args) => request("GET", "/ai-studio/files/{id}", { hasBody: false }, args),
      // GET /ai-studio/keys — rank: any-builder — GET /ai-studio/keys
      getAiStudioKeys: (args) => request("GET", "/ai-studio/keys", { hasBody: false }, args),
      // DELETE /ai-studio/keys/{provider} — rank: any-builder — DELETE /ai-studio/keys/:provider
      deleteAiStudioKeysProvider: (args) => request("DELETE", "/ai-studio/keys/{provider}", { hasBody: false }, args),
      // PUT /ai-studio/keys/{provider} — rank: any-builder — PUT /ai-studio/keys/:provider
      putAiStudioKeysProvider: (args) => request("PUT", "/ai-studio/keys/{provider}", { hasBody: true }, args),
      // GET /ai-studio/requests — rank: any-builder — GET /ai-studio/requests
      getAiStudioRequests: (args) => request("GET", "/ai-studio/requests", { hasBody: false }, args),
      // POST /ai-studio/requests — rank: any-builder — POST /ai-studio/requests
      postAiStudioRequests: (args) => request("POST", "/ai-studio/requests", { hasBody: true }, args),
      // GET /ai-studio/requests/{id} — rank: any-builder — GET /ai-studio/requests/:id
      getAiStudioRequestsId: (args) => request("GET", "/ai-studio/requests/{id}", { hasBody: false }, args),
      // GET /ai-studio/status — rank: any-builder — GET /ai-studio/status
      getAiStudioStatus: (args) => request("GET", "/ai-studio/status", { hasBody: false }, args),
      // POST /ai-studio/topup — rank: any-builder — POST /ai-studio/topup
      postAiStudioTopup: (args) => request("POST", "/ai-studio/topup", { hasBody: true }, args),
      // GET /ai-studio/topup/quote — rank: any-builder — GET /ai-studio/topup/quote
      getAiStudioTopupQuote: (args) => request("GET", "/ai-studio/topup/quote", { hasBody: false }, args),
      // POST /ai-studio/uploads — rank: any-builder — POST /ai-studio/uploads
      postAiStudioUploads: (args) => request("POST", "/ai-studio/uploads", { hasBody: true }, args),
    },
    "analytics": {
      // GET /analytics/builder/{id} — rank: any-builder — GET /analytics/builder/:id
      getAnalyticsBuilderId: (args) => request("GET", "/analytics/builder/{id}", { hasBody: false }, args),
    },
    "appHost": {
      // GET /app-host — rank: any-builder — GET /app-host
      getAppHost: (args) => request("GET", "/app-host", { hasBody: false }, args),
    },
    "artistGate": {
      // GET /artist-gate — rank: any-builder — GET /artist-gate
      getArtistGate: (args) => request("GET", "/artist-gate", { hasBody: false }, args),
    },
    "auditLog": {
      // GET /audit-log — rank: metic+archon — GET /audit-log
      getAuditLog: (args) => request("GET", "/audit-log", { hasBody: false }, args),
    },
    "auth": {
      // POST /auth/backchannel-logout — rank: public — POST /auth/backchannel-logout
      postAuthBackchannelLogout: (args) => request("POST", "/auth/backchannel-logout", { hasBody: true }, args),
      // POST /auth/cli-token/issue — rank: any-builder — POST /auth/cli-token/issue
      postAuthCliTokenIssue: (args) => request("POST", "/auth/cli-token/issue", { hasBody: true }, args),
      // GET /auth/device — rank: public — GET /auth/device
      getAuthDevice: (args) => request("GET", "/auth/device", { hasBody: false }, args),
      // POST /auth/device/approve — rank: any-builder — POST /auth/device/approve
      postAuthDeviceApprove: (args) => request("POST", "/auth/device/approve", { hasBody: true }, args),
      // POST /auth/device/exchange — rank: public — POST /auth/device/exchange
      postAuthDeviceExchange: (args) => request("POST", "/auth/device/exchange", { hasBody: true }, args),
      // POST /auth/device/poll — rank: public — POST /auth/device/poll
      postAuthDevicePoll: (args) => request("POST", "/auth/device/poll", { hasBody: true }, args),
      // POST /auth/device/start — rank: public — POST /auth/device/start
      postAuthDeviceStart: (args) => request("POST", "/auth/device/start", { hasBody: true }, args),
      // GET /auth/discord/callback — rank: any-builder — GET /auth/discord/callback
      getAuthDiscordCallback: (args) => request("GET", "/auth/discord/callback", { hasBody: false }, args),
      // GET /auth/discord/start — rank: any-builder — GET /auth/discord/start
      getAuthDiscordStart: (args) => request("GET", "/auth/discord/start", { hasBody: false }, args),
      // POST /auth/discord/unlink — rank: any-builder — POST /auth/discord/unlink
      postAuthDiscordUnlink: (args) => request("POST", "/auth/discord/unlink", { hasBody: true }, args),
      // GET /auth/google/callback — rank: public — GET /auth/google/callback
      getAuthGoogleCallback: (args) => request("GET", "/auth/google/callback", { hasBody: false }, args),
      // GET /auth/google/start — rank: public — GET /auth/google/start
      getAuthGoogleStart: (args) => request("GET", "/auth/google/start", { hasBody: false }, args),
      // POST /auth/hub-leave — rank: public — POST /auth/hub-leave
      postAuthHubLeave: (args) => request("POST", "/auth/hub-leave", { hasBody: true }, args),
      // GET /auth/link/github/start — rank: public — GET /auth/link/github/start
      getAuthLinkGithubStart: (args) => request("GET", "/auth/link/github/start", { hasBody: false }, args),
      // POST /auth/logout — rank: any-builder — POST /auth/logout
      postAuthLogout: (args) => request("POST", "/auth/logout", { hasBody: true }, args),
      // POST /auth/revoke — rank: archon — POST /auth/revoke
      postAuthRevoke: (args) => request("POST", "/auth/revoke", { hasBody: true }, args),
      // POST /auth/revoke-all — rank: archon — POST /auth/revoke-all
      postAuthRevokeAll: (args) => request("POST", "/auth/revoke-all", { hasBody: true }, args),
      // POST /auth/runner-code/exchange — rank: public — POST /auth/runner-code/exchange
      postAuthRunnerCodeExchange: (args) => request("POST", "/auth/runner-code/exchange", { hasBody: true }, args),
      // POST /auth/runner-code/issue — rank: metic+archon — POST /auth/runner-code/issue
      postAuthRunnerCodeIssue: (args) => request("POST", "/auth/runner-code/issue", { hasBody: true }, args),
      // GET /auth/web/admission-status — rank: public — GET /auth/web/admission-status
      getAuthWebAdmissionStatus: (args) => request("GET", "/auth/web/admission-status", { hasBody: false }, args),
      // GET /auth/web/callback — rank: public — GET /auth/web/callback
      getAuthWebCallback: (args) => request("GET", "/auth/web/callback", { hasBody: false }, args),
      // GET /auth/web/callback/link — rank: public — GET /auth/web/callback/link
      getAuthWebCallbackLink: (args) => request("GET", "/auth/web/callback/link", { hasBody: false }, args),
      // GET /auth/web/handoff — rank: public — GET /auth/web/handoff
      getAuthWebHandoff: (args) => request("GET", "/auth/web/handoff", { hasBody: false }, args),
      // GET /auth/web/start — rank: public — GET /auth/web/start
      getAuthWebStart: (args) => request("GET", "/auth/web/start", { hasBody: false }, args),
    },
    "autonomy": {
      // POST /autonomy/builders/{builderId}/pause — rank: archon — POST /autonomy/builders/:builderId/pause
      postAutonomyBuildersBuilderIdPause: (args) => request("POST", "/autonomy/builders/{builderId}/pause", { hasBody: true }, args),
      // GET /autonomy/fence — rank: any-builder — GET /autonomy/fence
      getAutonomyFence: (args) => request("GET", "/autonomy/fence", { hasBody: false }, args),
      // POST /autonomy/fence — rank: archon — POST /autonomy/fence
      postAutonomyFence: (args) => request("POST", "/autonomy/fence", { hasBody: true }, args),
      // POST /autonomy/fence/goals — rank: archon — POST /autonomy/fence/goals
      postAutonomyFenceGoals: (args) => request("POST", "/autonomy/fence/goals", { hasBody: true }, args),
      // DELETE /autonomy/fence/goals/{goalId} — rank: archon — DELETE /autonomy/fence/goals/:goalId
      deleteAutonomyFenceGoalsGoalId: (args) => request("DELETE", "/autonomy/fence/goals/{goalId}", { hasBody: false }, args),
      // POST /autonomy/fence/priority — rank: archon — POST /autonomy/fence/priority
      postAutonomyFencePriority: (args) => request("POST", "/autonomy/fence/priority", { hasBody: true }, args),
      // GET /autonomy/goal-requests — rank: archon — GET /autonomy/goal-requests
      getAutonomyGoalRequests: (args) => request("GET", "/autonomy/goal-requests", { hasBody: false }, args),
      // POST /autonomy/goal-requests/{id}/decide — rank: archon — POST /autonomy/goal-requests/:id/decide
      postAutonomyGoalRequestsIdDecide: (args) => request("POST", "/autonomy/goal-requests/{id}/decide", { hasBody: true }, args),
      // POST /autonomy/goals/{goalId}/request — rank: metic+archon — POST /autonomy/goals/:goalId/request
      postAutonomyGoalsGoalIdRequest: (args) => request("POST", "/autonomy/goals/{goalId}/request", { hasBody: true }, args),
      // POST /autonomy/heartbeat — rank: any-builder — POST /autonomy/heartbeat
      postAutonomyHeartbeat: (args) => request("POST", "/autonomy/heartbeat", { hasBody: true }, args),
      // GET /autonomy/me/goal-requests — rank: metic+archon — GET /autonomy/me/goal-requests
      getAutonomyMeGoalRequests: (args) => request("GET", "/autonomy/me/goal-requests", { hasBody: false }, args),
      // PUT /autonomy/me/goals — rank: metic+archon — PUT /autonomy/me/goals
      putAutonomyMeGoals: (args) => request("PUT", "/autonomy/me/goals", { hasBody: true }, args),
      // GET /autonomy/me/goals/{goalId}/stats — rank: metic+archon — GET /autonomy/me/goals/:goalId/stats
      getAutonomyMeGoalsGoalIdStats: (args) => request("GET", "/autonomy/me/goals/{goalId}/stats", { hasBody: false }, args),
      // GET /autonomy/precheck — rank: metic+archon — GET /autonomy/precheck
      getAutonomyPrecheck: (args) => request("GET", "/autonomy/precheck", { hasBody: false }, args),
      // GET /autonomy/runner-setup.ps1 — rank: public — GET /autonomy/runner-setup.ps1
      getAutonomyRunnerSetupPs1: (args) => request("GET", "/autonomy/runner-setup.ps1", { hasBody: false }, args),
      // GET /autonomy/runner-setup.sh — rank: public — GET /autonomy/runner-setup.sh
      getAutonomyRunnerSetupSh: (args) => request("GET", "/autonomy/runner-setup.sh", { hasBody: false }, args),
      // GET /autonomy/runners — rank: any-builder — GET /autonomy/runners
      getAutonomyRunners: (args) => request("GET", "/autonomy/runners", { hasBody: false }, args),
      // DELETE /autonomy/runners/{host} — rank: any-builder — DELETE /autonomy/runners/:host
      deleteAutonomyRunnersHost: (args) => request("DELETE", "/autonomy/runners/{host}", { hasBody: false }, args),
      // POST /autonomy/runners/{host}/run — rank: metic+archon — POST /autonomy/runners/:host/run
      postAutonomyRunnersHostRun: (args) => request("POST", "/autonomy/runners/{host}/run", { hasBody: true }, args),
      // GET /autonomy/runners/all — rank: archon — GET /autonomy/runners/all
      getAutonomyRunnersAll: (args) => request("GET", "/autonomy/runners/all", { hasBody: false }, args),
      // GET /autonomy/runs — rank: metic+archon — GET /autonomy/runs
      getAutonomyRuns: (args) => request("GET", "/autonomy/runs", { hasBody: false }, args),
    },
    "backup": {
      // GET /backup/status — rank: metic+archon — GET /backup/status
      getBackupStatus: (args) => request("GET", "/backup/status", { hasBody: false }, args),
      // POST /backup/trigger — rank: metic+archon — POST /backup/trigger
      postBackupTrigger: (args) => request("POST", "/backup/trigger", { hasBody: true }, args),
    },
    "balances": {
      // POST /balances/fund-project — rank: any-builder — POST /balances/fund-project
      postBalancesFundProject: (args) => request("POST", "/balances/fund-project", { hasBody: true }, args),
      // GET /balances/me — rank: any-builder — GET /balances/me
      getBalancesMe: (args) => request("GET", "/balances/me", { hasBody: false }, args),
      // POST /balances/pay — rank: any-builder — POST /balances/pay
      postBalancesPay: (args) => request("POST", "/balances/pay", { hasBody: true }, args),
      // GET /balances/project — rank: any-builder — GET /balances/project
      getBalancesProject: (args) => request("GET", "/balances/project", { hasBody: false }, args),
    },
    "blockers": {
      // GET /blockers — rank: public — GET /blockers
      getBlockers: (args) => request("GET", "/blockers", { hasBody: false }, args),
      // POST /blockers — rank: any-builder — POST /blockers
      postBlockers: (args) => request("POST", "/blockers", { hasBody: true }, args),
      // GET /blockers/{id} — rank: any-builder — GET /blockers/:id
      getBlockersId: (args) => request("GET", "/blockers/{id}", { hasBody: false }, args),
      // POST /blockers/{id}/link — rank: metic+archon — POST /blockers/:id/link
      postBlockersIdLink: (args) => request("POST", "/blockers/{id}/link", { hasBody: true }, args),
      // DELETE /blockers/{id}/link/{taskId} — rank: metic+archon — DELETE /blockers/:id/link/:taskId
      deleteBlockersIdLinkTaskId: (args) => request("DELETE", "/blockers/{id}/link/{taskId}", { hasBody: false }, args),
      // POST /blockers/{id}/resolve — rank: metic+archon — POST /blockers/:id/resolve
      postBlockersIdResolve: (args) => request("POST", "/blockers/{id}/resolve", { hasBody: true }, args),
    },
    "bugAttachments": {
      // GET /bug-attachments/{name} — rank: any-builder — GET /bug-attachments/:name
      getBugAttachmentsName: (args) => request("GET", "/bug-attachments/{name}", { hasBody: false }, args),
    },
    "builders": {
      // GET /builders/{builderId}/credits — rank: metic+archon — GET /builders/:builderId/credits
      getBuildersBuilderIdCredits: (args) => request("GET", "/builders/{builderId}/credits", { hasBody: false }, args),
      // GET /builders/{builderId}/earnings — rank: any-builder — GET /builders/:builderId/earnings
      getBuildersBuilderIdEarnings: (args) => request("GET", "/builders/{builderId}/earnings", { hasBody: false }, args),
      // GET /builders/{id}/active-claims — rank: metic+archon — GET /builders/:id/active-claims
      getBuildersIdActiveClaims: (args) => request("GET", "/builders/{id}/active-claims", { hasBody: false }, args),
      // GET /builders/{id}/activity — rank: any-builder — GET /builders/:id/activity
      getBuildersIdActivity: (args) => request("GET", "/builders/{id}/activity", { hasBody: false }, args),
      // PATCH /builders/{id}/budget — rank: metic+archon — PATCH /builders/:id/budget
      patchBuildersIdBudget: (args) => request("PATCH", "/builders/{id}/budget", { hasBody: true }, args),
      // PATCH /builders/{id}/capabilities — rank: archon — PATCH /builders/:id/capabilities
      patchBuildersIdCapabilities: (args) => request("PATCH", "/builders/{id}/capabilities", { hasBody: true }, args),
      // PATCH /builders/{id}/card-requirement — rank: archon — PATCH /builders/:id/card-requirement
      patchBuildersIdCardRequirement: (args) => request("PATCH", "/builders/{id}/card-requirement", { hasBody: true }, args),
      // GET /builders/{id}/onboarding — rank: public — GET /builders/:id/onboarding
      getBuildersIdOnboarding: (args) => request("GET", "/builders/{id}/onboarding", { hasBody: false }, args),
      // GET /builders/{id}/profile — rank: public — GET /builders/:id/profile
      getBuildersIdProfile: (args) => request("GET", "/builders/{id}/profile", { hasBody: false }, args),
      // PATCH /builders/{id}/rank — rank: archon — PATCH /builders/:id/rank
      patchBuildersIdRank: (args) => request("PATCH", "/builders/{id}/rank", { hasBody: true }, args),
      // PATCH /builders/{id}/status — rank: archon — PATCH /builders/:id/status
      patchBuildersIdStatus: (args) => request("PATCH", "/builders/{id}/status", { hasBody: true }, args),
      // PATCH /builders/{id}/tester — rank: archon — PATCH /builders/:id/tester
      patchBuildersIdTester: (args) => request("PATCH", "/builders/{id}/tester", { hasBody: true }, args),
      // GET /builders/card-state — rank: archon — GET /builders/card-state
      getBuildersCardState: (args) => request("GET", "/builders/card-state", { hasBody: false }, args),
      // GET /builders/directory — rank: any-builder — GET /builders/directory
      getBuildersDirectory: (args) => request("GET", "/builders/directory", { hasBody: false }, args),
      // GET /builders/me/pending-rank-change — rank: any-builder — GET /builders/me/pending-rank-change
      getBuildersMePendingRankChange: (args) => request("GET", "/builders/me/pending-rank-change", { hasBody: false }, args),
      // GET /builders/roster — rank: metic+archon — GET /builders/roster
      getBuildersRoster: (args) => request("GET", "/builders/roster", { hasBody: false }, args),
    },
    "chat": {
      // GET /chat/cards — rank: any-builder — GET /chat/cards
      getChatCards: (args) => request("GET", "/chat/cards", { hasBody: false }, args),
      // GET /chat/cards/search — rank: any-builder — GET /chat/cards/search
      getChatCardsSearch: (args) => request("GET", "/chat/cards/search", { hasBody: false }, args),
      // GET /chat/channels — rank: any-builder — GET /chat/channels
      getChatChannels: (args) => request("GET", "/chat/channels", { hasBody: false }, args),
      // POST /chat/channels/{id}/join — rank: any-builder — POST /chat/channels/:id/join
      postChatChannelsIdJoin: (args) => request("POST", "/chat/channels/{id}/join", { hasBody: true }, args),
      // POST /chat/channels/{id}/leave — rank: any-builder — POST /chat/channels/:id/leave
      postChatChannelsIdLeave: (args) => request("POST", "/chat/channels/{id}/leave", { hasBody: true }, args),
      // GET /chat/channels/{id}/members — rank: any-builder — GET /chat/channels/:id/members
      getChatChannelsIdMembers: (args) => request("GET", "/chat/channels/{id}/members", { hasBody: false }, args),
      // POST /chat/channels/{id}/members — rank: any-builder — POST /chat/channels/:id/members
      postChatChannelsIdMembers: (args) => request("POST", "/chat/channels/{id}/members", { hasBody: true }, args),
      // GET /chat/conversations — rank: any-builder — GET /chat/conversations
      getChatConversations: (args) => request("GET", "/chat/conversations", { hasBody: false }, args),
      // POST /chat/conversations — rank: any-builder — POST /chat/conversations
      postChatConversations: (args) => request("POST", "/chat/conversations", { hasBody: true }, args),
      // GET /chat/conversations/{id} — rank: any-builder — GET /chat/conversations/:id
      getChatConversationsId: (args) => request("GET", "/chat/conversations/{id}", { hasBody: false }, args),
      // GET /chat/conversations/{id}/files — rank: any-builder — GET /chat/conversations/:id/files
      getChatConversationsIdFiles: (args) => request("GET", "/chat/conversations/{id}/files", { hasBody: false }, args),
      // POST /chat/conversations/{id}/files — rank: any-builder — POST /chat/conversations/:id/files
      postChatConversationsIdFiles: (args) => request("POST", "/chat/conversations/{id}/files", { hasBody: true }, args),
      // POST /chat/conversations/{id}/leave — rank: any-builder — POST /chat/conversations/:id/leave
      postChatConversationsIdLeave: (args) => request("POST", "/chat/conversations/{id}/leave", { hasBody: true }, args),
      // POST /chat/conversations/{id}/members — rank: any-builder — POST /chat/conversations/:id/members
      postChatConversationsIdMembers: (args) => request("POST", "/chat/conversations/{id}/members", { hasBody: true }, args),
      // PATCH /chat/conversations/{id}/membership — rank: any-builder — PATCH /chat/conversations/:id/membership
      patchChatConversationsIdMembership: (args) => request("PATCH", "/chat/conversations/{id}/membership", { hasBody: true }, args),
      // GET /chat/conversations/{id}/mentionable — rank: any-builder — GET /chat/conversations/:id/mentionable
      getChatConversationsIdMentionable: (args) => request("GET", "/chat/conversations/{id}/mentionable", { hasBody: false }, args),
      // GET /chat/conversations/{id}/messages — rank: any-builder — GET /chat/conversations/:id/messages
      getChatConversationsIdMessages: (args) => request("GET", "/chat/conversations/{id}/messages", { hasBody: false }, args),
      // POST /chat/conversations/{id}/messages — rank: any-builder — POST /chat/conversations/:id/messages
      postChatConversationsIdMessages: (args) => request("POST", "/chat/conversations/{id}/messages", { hasBody: true }, args),
      // GET /chat/conversations/{id}/pins — rank: any-builder — GET /chat/conversations/:id/pins
      getChatConversationsIdPins: (args) => request("GET", "/chat/conversations/{id}/pins", { hasBody: false }, args),
      // POST /chat/conversations/{id}/polls — rank: any-builder — POST /chat/conversations/:id/polls
      postChatConversationsIdPolls: (args) => request("POST", "/chat/conversations/{id}/polls", { hasBody: true }, args),
      // GET /chat/conversations/{id}/seen — rank: any-builder — GET /chat/conversations/:id/seen
      getChatConversationsIdSeen: (args) => request("GET", "/chat/conversations/{id}/seen", { hasBody: false }, args),
      // POST /chat/conversations/{id}/typing — rank: any-builder — POST /chat/conversations/:id/typing
      postChatConversationsIdTyping: (args) => request("POST", "/chat/conversations/{id}/typing", { hasBody: true }, args),
      // GET /chat/direct — rank: any-builder — GET /chat/direct
      getChatDirect: (args) => request("GET", "/chat/direct", { hasBody: false }, args),
      // POST /chat/direct — rank: any-builder — POST /chat/direct
      postChatDirect: (args) => request("POST", "/chat/direct", { hasBody: true }, args),
      // GET /chat/files/{id} — rank: any-builder — GET /chat/files/:id
      getChatFilesId: (args) => request("GET", "/chat/files/{id}", { hasBody: false }, args),
      // GET /chat/goal-rooms — rank: any-builder — GET /chat/goal-rooms
      getChatGoalRooms: (args) => request("GET", "/chat/goal-rooms", { hasBody: false }, args),
      // GET /chat/goals/{goalId}/room — rank: any-builder — GET /chat/goals/:goalId/room
      getChatGoalsGoalIdRoom: (args) => request("GET", "/chat/goals/{goalId}/room", { hasBody: false }, args),
      // GET /chat/groups — rank: any-builder — GET /chat/groups
      getChatGroups: (args) => request("GET", "/chat/groups", { hasBody: false }, args),
      // POST /chat/groups — rank: any-builder — POST /chat/groups
      postChatGroups: (args) => request("POST", "/chat/groups", { hasBody: true }, args),
      // GET /chat/lobby — rank: any-builder — GET /chat/lobby
      getChatLobby: (args) => request("GET", "/chat/lobby", { hasBody: false }, args),
      // GET /chat/mentions — rank: any-builder — GET /chat/mentions
      getChatMentions: (args) => request("GET", "/chat/mentions", { hasBody: false }, args),
      // DELETE /chat/messages/{id} — rank: any-builder — DELETE /chat/messages/:id
      deleteChatMessagesId: (args) => request("DELETE", "/chat/messages/{id}", { hasBody: false }, args),
      // PATCH /chat/messages/{id} — rank: any-builder — PATCH /chat/messages/:id
      patchChatMessagesId: (args) => request("PATCH", "/chat/messages/{id}", { hasBody: true }, args),
      // DELETE /chat/messages/{id}/pin — rank: any-builder — DELETE /chat/messages/:id/pin
      deleteChatMessagesIdPin: (args) => request("DELETE", "/chat/messages/{id}/pin", { hasBody: false }, args),
      // POST /chat/messages/{id}/pin — rank: any-builder — POST /chat/messages/:id/pin
      postChatMessagesIdPin: (args) => request("POST", "/chat/messages/{id}/pin", { hasBody: true }, args),
      // POST /chat/messages/{id}/reactions — rank: any-builder — POST /chat/messages/:id/reactions
      postChatMessagesIdReactions: (args) => request("POST", "/chat/messages/{id}/reactions", { hasBody: true }, args),
      // POST /chat/messages/{id}/remove — rank: any-builder — POST /chat/messages/:id/remove
      postChatMessagesIdRemove: (args) => request("POST", "/chat/messages/{id}/remove", { hasBody: true }, args),
      // POST /chat/messages/{id}/replies — rank: any-builder — POST /chat/messages/:id/replies
      postChatMessagesIdReplies: (args) => request("POST", "/chat/messages/{id}/replies", { hasBody: true }, args),
      // GET /chat/messages/{id}/thread — rank: any-builder — GET /chat/messages/:id/thread
      getChatMessagesIdThread: (args) => request("GET", "/chat/messages/{id}/thread", { hasBody: false }, args),
      // GET /chat/moderation — rank: any-builder — GET /chat/moderation
      getChatModeration: (args) => request("GET", "/chat/moderation", { hasBody: false }, args),
      // POST /chat/mutes — rank: any-builder — POST /chat/mutes
      postChatMutes: (args) => request("POST", "/chat/mutes", { hasBody: true }, args),
      // DELETE /chat/mutes/{builderId} — rank: any-builder — DELETE /chat/mutes/:builderId
      deleteChatMutesBuilderId: (args) => request("DELETE", "/chat/mutes/{builderId}", { hasBody: false }, args),
      // DELETE /chat/owner — rank: any-builder — DELETE /chat/owner
      deleteChatOwner: (args) => request("DELETE", "/chat/owner", { hasBody: false }, args),
      // PUT /chat/owner — rank: any-builder — PUT /chat/owner
      putChatOwner: (args) => request("PUT", "/chat/owner", { hasBody: true }, args),
      // GET /chat/people — rank: any-builder — GET /chat/people
      getChatPeople: (args) => request("GET", "/chat/people", { hasBody: false }, args),
      // GET /chat/polls — rank: any-builder — GET /chat/polls
      getChatPolls: (args) => request("GET", "/chat/polls", { hasBody: false }, args),
      // POST /chat/polls/{messageId}/vote — rank: any-builder — POST /chat/polls/:messageId/vote
      postChatPollsMessageIdVote: (args) => request("POST", "/chat/polls/{messageId}/vote", { hasBody: true }, args),
      // GET /chat/presence — rank: any-builder — GET /chat/presence
      getChatPresence: (args) => request("GET", "/chat/presence", { hasBody: false }, args),
      // POST /chat/presence/beat — rank: any-builder — POST /chat/presence/beat
      postChatPresenceBeat: (args) => request("POST", "/chat/presence/beat", { hasBody: true }, args),
      // PUT /chat/presence/status — rank: any-builder — PUT /chat/presence/status
      putChatPresenceStatus: (args) => request("PUT", "/chat/presence/status", { hasBody: true }, args),
      // GET /chat/search — rank: any-builder — GET /chat/search
      getChatSearch: (args) => request("GET", "/chat/search", { hasBody: false }, args),
      // GET /chat/settings — rank: any-builder — GET /chat/settings
      getChatSettings: (args) => request("GET", "/chat/settings", { hasBody: false }, args),
      // PATCH /chat/settings — rank: metic+archon — PATCH /chat/settings
      patchChatSettings: (args) => request("PATCH", "/chat/settings", { hasBody: true }, args),
      // GET /chat/unread — rank: any-builder — GET /chat/unread
      getChatUnread: (args) => request("GET", "/chat/unread", { hasBody: false }, args),
    },
    "claims": {
      // POST /claims — rank: any-builder — POST /claims
      postClaims: (args) => request("POST", "/claims", { hasBody: true }, args),
      // POST /claims/{id}/release-on-behalf — rank: metic+archon — POST /claims/:id/release-on-behalf
      postClaimsIdReleaseOnBehalf: (args) => request("POST", "/claims/{id}/release-on-behalf", { hasBody: true }, args),
      // POST /claims/{id}/resolve — rank: any-builder — POST /claims/:id/resolve
      postClaimsIdResolve: (args) => request("POST", "/claims/{id}/resolve", { hasBody: true }, args),
      // POST /claims/batch — rank: any-builder — POST /claims/batch
      postClaimsBatch: (args) => request("POST", "/claims/batch", { hasBody: true }, args),
      // POST /claims/batch/release — rank: any-builder — POST /claims/batch/release
      postClaimsBatchRelease: (args) => request("POST", "/claims/batch/release", { hasBody: true }, args),
      // POST /claims/batch/validate — rank: any-builder — POST /claims/batch/validate
      postClaimsBatchValidate: (args) => request("POST", "/claims/batch/validate", { hasBody: true }, args),
    },
    "cli": {
      // GET /cli/commands — rank: any-builder — GET /cli/commands
      getCliCommands: (args) => request("GET", "/cli/commands", { hasBody: false }, args),
    },
    "closeness": {
      // GET /closeness/for-me — rank: any-builder — GET /closeness/for-me
      getClosenessForMe: (args) => request("GET", "/closeness/for-me", { hasBody: false }, args),
      // GET /closeness/weights — rank: any-builder — GET /closeness/weights
      getClosenessWeights: (args) => request("GET", "/closeness/weights", { hasBody: false }, args),
      // GET /closeness/with/{builderId} — rank: any-builder — GET /closeness/with/:builderId
      getClosenessWithBuilderId: (args) => request("GET", "/closeness/with/{builderId}", { hasBody: false }, args),
    },
    "community": {
      // GET /community/builder-of-the-week — rank: public — GET /community/builder-of-the-week
      getCommunityBuilderOfTheWeek: (args) => request("GET", "/community/builder-of-the-week", { hasBody: false }, args),
      // GET /community/crowns — rank: public — GET /community/crowns
      getCommunityCrowns: (args) => request("GET", "/community/crowns", { hasBody: false }, args),
      // GET /community/leaderboard — rank: public — GET /community/leaderboard
      getCommunityLeaderboard: (args) => request("GET", "/community/leaderboard", { hasBody: false }, args),
      // GET /community/movers — rank: public — GET /community/movers
      getCommunityMovers: (args) => request("GET", "/community/movers", { hasBody: false }, args),
      // GET /community/search — rank: public — GET /community/search
      getCommunitySearch: (args) => request("GET", "/community/search", { hasBody: false }, args),
    },
    "connections": {
      // GET /connections — rank: any-builder — GET /connections
      getConnections: (args) => request("GET", "/connections", { hasBody: false }, args),
      // POST /connections — rank: any-builder — POST /connections
      postConnections: (args) => request("POST", "/connections", { hasBody: true }, args),
      // DELETE /connections/{id} — rank: any-builder — DELETE /connections/:id
      deleteConnectionsId: (args) => request("DELETE", "/connections/{id}", { hasBody: false }, args),
      // POST /connections/{id}/accept — rank: any-builder — POST /connections/:id/accept
      postConnectionsIdAccept: (args) => request("POST", "/connections/{id}/accept", { hasBody: true }, args),
      // POST /connections/{id}/decline — rank: any-builder — POST /connections/:id/decline
      postConnectionsIdDecline: (args) => request("POST", "/connections/{id}/decline", { hasBody: true }, args),
      // GET /connections/degree/{handle} — rank: any-builder — GET /connections/degree/:handle
      getConnectionsDegreeHandle: (args) => request("GET", "/connections/degree/{handle}", { hasBody: false }, args),
      // GET /connections/requests — rank: any-builder — GET /connections/requests
      getConnectionsRequests: (args) => request("GET", "/connections/requests", { hasBody: false }, args),
      // GET /connections/suggestions — rank: any-builder — GET /connections/suggestions
      getConnectionsSuggestions: (args) => request("GET", "/connections/suggestions", { hasBody: false }, args),
    },
    "copyDesk": {
      // GET /copy-desk/approvals — rank: any-builder — GET /copy-desk/approvals
      getCopyDeskApprovals: (args) => request("GET", "/copy-desk/approvals", { hasBody: false }, args),
      // GET /copy-desk/artists/{id}/pages — rank: any-builder — GET /copy-desk/artists/:id/pages
      getCopyDeskArtistsIdPages: (args) => request("GET", "/copy-desk/artists/{id}/pages", { hasBody: false }, args),
      // POST /copy-desk/flags — rank: any-builder — POST /copy-desk/flags
      postCopyDeskFlags: (args) => request("POST", "/copy-desk/flags", { hasBody: true }, args),
      // POST /copy-desk/flags/{id}/close — rank: any-builder — POST /copy-desk/flags/:id/close
      postCopyDeskFlagsIdClose: (args) => request("POST", "/copy-desk/flags/{id}/close", { hasBody: true }, args),
      // GET /copy-desk/next — rank: any-builder — GET /copy-desk/next
      getCopyDeskNext: (args) => request("GET", "/copy-desk/next", { hasBody: false }, args),
      // GET /copy-desk/pages — rank: any-builder — GET /copy-desk/pages
      getCopyDeskPages: (args) => request("GET", "/copy-desk/pages", { hasBody: false }, args),
      // GET /copy-desk/pages/{pageId} — rank: any-builder — GET /copy-desk/pages/:pageId
      getCopyDeskPagesPageId: (args) => request("GET", "/copy-desk/pages/{pageId}", { hasBody: false }, args),
      // POST /copy-desk/pages/{pageId}/approve — rank: any-builder — POST /copy-desk/pages/:pageId/approve
      postCopyDeskPagesPageIdApprove: (args) => request("POST", "/copy-desk/pages/{pageId}/approve", { hasBody: true }, args),
      // POST /copy-desk/pages/{pageId}/asks — rank: any-builder — POST /copy-desk/pages/:pageId/asks
      postCopyDeskPagesPageIdAsks: (args) => request("POST", "/copy-desk/pages/{pageId}/asks", { hasBody: true }, args),
      // POST /copy-desk/pages/{pageId}/claim — rank: any-builder — POST /copy-desk/pages/:pageId/claim
      postCopyDeskPagesPageIdClaim: (args) => request("POST", "/copy-desk/pages/{pageId}/claim", { hasBody: true }, args),
      // GET /copy-desk/pages/{pageId}/draft — rank: any-builder — GET /copy-desk/pages/:pageId/draft
      getCopyDeskPagesPageIdDraft: (args) => request("GET", "/copy-desk/pages/{pageId}/draft", { hasBody: false }, args),
      // PUT /copy-desk/pages/{pageId}/draft — rank: any-builder — PUT /copy-desk/pages/:pageId/draft
      putCopyDeskPagesPageIdDraft: (args) => request("PUT", "/copy-desk/pages/{pageId}/draft", { hasBody: true }, args),
      // GET /copy-desk/pages/{pageId}/draft.docx — rank: any-builder — GET /copy-desk/pages/:pageId/draft.docx
      getCopyDeskPagesPageIdDraftDocx: (args) => request("GET", "/copy-desk/pages/{pageId}/draft.docx", { hasBody: false }, args),
      // POST /copy-desk/pages/{pageId}/draft.docx — rank: any-builder — POST /copy-desk/pages/:pageId/draft.docx
      postCopyDeskPagesPageIdDraftDocx: (args) => request("POST", "/copy-desk/pages/{pageId}/draft.docx", { hasBody: true }, args),
      // POST /copy-desk/pages/{pageId}/release — rank: metic+archon — POST /copy-desk/pages/:pageId/release
      postCopyDeskPagesPageIdRelease: (args) => request("POST", "/copy-desk/pages/{pageId}/release", { hasBody: true }, args),
      // POST /copy-desk/pages/{pageId}/send-back — rank: any-builder — POST /copy-desk/pages/:pageId/send-back
      postCopyDeskPagesPageIdSendBack: (args) => request("POST", "/copy-desk/pages/{pageId}/send-back", { hasBody: true }, args),
      // POST /copy-desk/pages/{pageId}/submit — rank: any-builder — POST /copy-desk/pages/:pageId/submit
      postCopyDeskPagesPageIdSubmit: (args) => request("POST", "/copy-desk/pages/{pageId}/submit", { hasBody: true }, args),
      // POST /copy-desk/proposals — rank: any-builder — POST /copy-desk/proposals
      postCopyDeskProposals: (args) => request("POST", "/copy-desk/proposals", { hasBody: true }, args),
      // GET /copy-desk/queue — rank: any-builder — GET /copy-desk/queue
      getCopyDeskQueue: (args) => request("GET", "/copy-desk/queue", { hasBody: false }, args),
      // GET /copy-desk/strings — rank: any-builder — GET /copy-desk/strings
      getCopyDeskStrings: (args) => request("GET", "/copy-desk/strings", { hasBody: false }, args),
      // GET /copy-desk/studio — rank: any-builder — GET /copy-desk/studio
      getCopyDeskStudio: (args) => request("GET", "/copy-desk/studio", { hasBody: false }, args),
      // GET /copy-desk/tally — rank: any-builder — GET /copy-desk/tally
      getCopyDeskTally: (args) => request("GET", "/copy-desk/tally", { hasBody: false }, args),
    },
    "coreUpdate": {
      // GET /core-update — rank: archon — GET /core-update
      getCoreUpdate: (args) => request("GET", "/core-update", { hasBody: false }, args),
      // POST /core-update/started — rank: archon — POST /core-update/started
      postCoreUpdateStarted: (args) => request("POST", "/core-update/started", { hasBody: true }, args),
    },
    "coreUpgrades": {
      // GET /core-upgrades — rank: archon — GET /core-upgrades
      getCoreUpgrades: (args) => request("GET", "/core-upgrades", { hasBody: false }, args),
    },
    "cost": {
      // POST /cost — rank: any-builder — POST /cost
      postCost: (args) => request("POST", "/cost", { hasBody: true }, args),
    },
    "criterionUats": {
      // GET /criterion-uats/recordings/{name} — rank: any-builder — GET /criterion-uats/recordings/:name
      getCriterionUatsRecordingsName: (args) => request("GET", "/criterion-uats/recordings/{name}", { hasBody: false }, args),
    },
    "dependencies": {
      // DELETE /dependencies — rank: archon — DELETE /dependencies
      deleteDependencies: (args) => request("DELETE", "/dependencies", { hasBody: false }, args),
      // POST /dependencies — rank: archon — POST /dependencies
      postDependencies: (args) => request("POST", "/dependencies", { hasBody: true }, args),
    },
    "discord": {
      // GET /discord/channels/plan — rank: metic+archon — GET /discord/channels/plan
      getDiscordChannelsPlan: (args) => request("GET", "/discord/channels/plan", { hasBody: false }, args),
      // POST /discord/channels/reconcile — rank: metic+archon — POST /discord/channels/reconcile
      postDiscordChannelsReconcile: (args) => request("POST", "/discord/channels/reconcile", { hasBody: true }, args),
      // GET /discord/channels/snapshot — rank: metic+archon — GET /discord/channels/snapshot
      getDiscordChannelsSnapshot: (args) => request("GET", "/discord/channels/snapshot", { hasBody: false }, args),
    },
    "doneWhen": {
      // PATCH /done-when/{criterionId} — rank: metic+archon — PATCH /done-when/:criterionId
      patchDoneWhenCriterionId: (args) => request("PATCH", "/done-when/{criterionId}", { hasBody: true }, args),
      // PUT /done-when/{criterionId}/backend-only — rank: metic+archon — PUT /done-when/:criterionId/backend-only
      putDoneWhenCriterionIdBackendOnly: (args) => request("PUT", "/done-when/{criterionId}/backend-only", { hasBody: true }, args),
      // POST /done-when/{criterionId}/satisfy — rank: metic+archon — POST /done-when/:criterionId/satisfy
      postDoneWhenCriterionIdSatisfy: (args) => request("POST", "/done-when/{criterionId}/satisfy", { hasBody: true }, args),
      // GET /done-when/{criterionId}/uat — rank: any-builder — GET /done-when/:criterionId/uat
      getDoneWhenCriterionIdUat: (args) => request("GET", "/done-when/{criterionId}/uat", { hasBody: false }, args),
      // POST /done-when/{criterionId}/uat — rank: metic+archon — POST /done-when/:criterionId/uat
      postDoneWhenCriterionIdUat: (args) => request("POST", "/done-when/{criterionId}/uat", { hasBody: true }, args),
      // POST /done-when/{criterionId}/uat/recording — rank: metic+archon — POST /done-when/:criterionId/uat/recording
      postDoneWhenCriterionIdUatRecording: (args) => request("POST", "/done-when/{criterionId}/uat/recording", { hasBody: true }, args),
      // POST /done-when/{criterionId}/unsatisfy — rank: metic+archon — POST /done-when/:criterionId/unsatisfy
      postDoneWhenCriterionIdUnsatisfy: (args) => request("POST", "/done-when/{criterionId}/unsatisfy", { hasBody: true }, args),
      // GET /done-when/pending-review — rank: metic+archon — GET /done-when/pending-review
      getDoneWhenPendingReview: (args) => request("GET", "/done-when/pending-review", { hasBody: false }, args),
    },
    "feedback": {
      // POST /feedback/receipt — rank: any-builder — POST /feedback/receipt
      postFeedbackReceipt: (args) => request("POST", "/feedback/receipt", { hasBody: true }, args),
      // GET /feedback/receipt/{id} — rank: public — GET /feedback/receipt/:id
      getFeedbackReceiptId: (args) => request("GET", "/feedback/receipt/{id}", { hasBody: false }, args),
    },
    "firstRead": {
      // GET /first-read/catalog — rank: any-builder — GET /first-read/catalog
      getFirstReadCatalog: (args) => request("GET", "/first-read/catalog", { hasBody: false }, args),
      // POST /first-read/maps — rank: metic+archon — POST /first-read/maps
      postFirstReadMaps: (args) => request("POST", "/first-read/maps", { hasBody: true }, args),
      // GET /first-read/maps/{id} — rank: metic+archon — GET /first-read/maps/:id
      getFirstReadMapsId: (args) => request("GET", "/first-read/maps/{id}", { hasBody: false }, args),
      // POST /first-read/maps/{id}/accept — rank: metic+archon — POST /first-read/maps/:id/accept
      postFirstReadMapsIdAccept: (args) => request("POST", "/first-read/maps/{id}/accept", { hasBody: true }, args),
      // POST /first-read/maps/{id}/dismiss — rank: metic+archon — POST /first-read/maps/:id/dismiss
      postFirstReadMapsIdDismiss: (args) => request("POST", "/first-read/maps/{id}/dismiss", { hasBody: true }, args),
      // POST /first-read/maps/{id}/reject — rank: metic+archon — POST /first-read/maps/:id/reject
      postFirstReadMapsIdReject: (args) => request("POST", "/first-read/maps/{id}/reject", { hasBody: true }, args),
      // GET /first-read/prompt — rank: any-builder — GET /first-read/prompt
      getFirstReadPrompt: (args) => request("GET", "/first-read/prompt", { hasBody: false }, args),
    },
    "founding": {
      // POST /founding/alive — rank: any-builder — POST /founding/alive
      postFoundingAlive: (args) => request("POST", "/founding/alive", { hasBody: true }, args),
      // GET /founding/builders — rank: any-builder — GET /founding/builders
      getFoundingBuilders: (args) => request("GET", "/founding/builders", { hasBody: false }, args),
      // GET /founding/context — rank: any-builder — GET /founding/context
      getFoundingContext: (args) => request("GET", "/founding/context", { hasBody: false }, args),
      // PUT /founding/enabled — rank: any-builder — PUT /founding/enabled
      putFoundingEnabled: (args) => request("PUT", "/founding/enabled", { hasBody: true }, args),
      // GET /founding/facts — rank: any-builder — GET /founding/facts
      getFoundingFacts: (args) => request("GET", "/founding/facts", { hasBody: false }, args),
      // PUT /founding/facts — rank: any-builder — PUT /founding/facts
      putFoundingFacts: (args) => request("PUT", "/founding/facts", { hasBody: true }, args),
      // GET /founding/genesis — rank: any-builder — GET /founding/genesis
      getFoundingGenesis: (args) => request("GET", "/founding/genesis", { hasBody: false }, args),
      // GET /founding/legalize/options — rank: any-builder — GET /founding/legalize/options
      getFoundingLegalizeOptions: (args) => request("GET", "/founding/legalize/options", { hasBody: false }, args),
      // POST /founding/plan — rank: any-builder — POST /founding/plan
      postFoundingPlan: (args) => request("POST", "/founding/plan", { hasBody: true }, args),
      // POST /founding/skip — rank: any-builder — POST /founding/skip
      postFoundingSkip: (args) => request("POST", "/founding/skip", { hasBody: true }, args),
      // POST /founding/stages/{stage}/close — rank: any-builder — POST /founding/stages/:stage/close
      postFoundingStagesStageClose: (args) => request("POST", "/founding/stages/{stage}/close", { hasBody: true }, args),
      // POST /founding/start — rank: any-builder — POST /founding/start
      postFoundingStart: (args) => request("POST", "/founding/start", { hasBody: true }, args),
      // GET /founding/work — rank: any-builder — GET /founding/work
      getFoundingWork: (args) => request("GET", "/founding/work", { hasBody: false }, args),
      // GET /founding/work/{stage} — rank: any-builder — GET /founding/work/:stage
      getFoundingWorkStage: (args) => request("GET", "/founding/work/{stage}", { hasBody: false }, args),
      // DELETE /founding/work/{stage}/answers/{question} — rank: any-builder — DELETE /founding/work/:stage/answers/:question
      deleteFoundingWorkStageAnswersQuestion: (args) => request("DELETE", "/founding/work/{stage}/answers/{question}", { hasBody: false }, args),
      // PUT /founding/work/{stage}/answers/{question} — rank: any-builder — PUT /founding/work/:stage/answers/:question
      putFoundingWorkStageAnswersQuestion: (args) => request("PUT", "/founding/work/{stage}/answers/{question}", { hasBody: true }, args),
      // GET /founding/work/{stage}/answers/{question}/history — rank: any-builder — GET /founding/work/:stage/answers/:question/history
      getFoundingWorkStageAnswersQuestionHistory: (args) => request("GET", "/founding/work/{stage}/answers/{question}/history", { hasBody: false }, args),
      // GET /founding/work/{stage}/assist — rank: any-builder — GET /founding/work/:stage/assist
      getFoundingWorkStageAssist: (args) => request("GET", "/founding/work/{stage}/assist", { hasBody: false }, args),
      // GET /founding/work/{stage}/document — rank: any-builder — GET /founding/work/:stage/document
      getFoundingWorkStageDocument: (args) => request("GET", "/founding/work/{stage}/document", { hasBody: false }, args),
      // PUT /founding/work/{stage}/door — rank: any-builder — PUT /founding/work/:stage/door
      putFoundingWorkStageDoor: (args) => request("PUT", "/founding/work/{stage}/door", { hasBody: true }, args),
      // PUT /founding/work/{stage}/link — rank: any-builder — PUT /founding/work/:stage/link
      putFoundingWorkStageLink: (args) => request("PUT", "/founding/work/{stage}/link", { hasBody: true }, args),
      // PUT /founding/work/{stage}/page — rank: any-builder — PUT /founding/work/:stage/page
      putFoundingWorkStagePage: (args) => request("PUT", "/founding/work/{stage}/page", { hasBody: true }, args),
      // POST /founding/work/{stage}/proposals — rank: any-builder — POST /founding/work/:stage/proposals
      postFoundingWorkStageProposals: (args) => request("POST", "/founding/work/{stage}/proposals", { hasBody: true }, args),
    },
    "frontDoorGuide": {
      // POST /front-door-guide/conversations — rank: public — POST /front-door-guide/conversations
      postFrontDoorGuideConversations: (args) => request("POST", "/front-door-guide/conversations", { hasBody: true }, args),
      // GET /front-door-guide/conversations/{id} — rank: public — GET /front-door-guide/conversations/:id
      getFrontDoorGuideConversationsId: (args) => request("GET", "/front-door-guide/conversations/{id}", { hasBody: false }, args),
      // POST /front-door-guide/conversations/{id}/attach — rank: any-builder — POST /front-door-guide/conversations/:id/attach
      postFrontDoorGuideConversationsIdAttach: (args) => request("POST", "/front-door-guide/conversations/{id}/attach", { hasBody: true }, args),
      // POST /front-door-guide/conversations/{id}/messages — rank: public — POST /front-door-guide/conversations/:id/messages
      postFrontDoorGuideConversationsIdMessages: (args) => request("POST", "/front-door-guide/conversations/{id}/messages", { hasBody: true }, args),
      // POST /front-door-guide/conversations/{id}/plan — rank: public — POST /front-door-guide/conversations/:id/plan
      postFrontDoorGuideConversationsIdPlan: (args) => request("POST", "/front-door-guide/conversations/{id}/plan", { hasBody: true }, args),
      // GET /front-door-guide/mine — rank: any-builder — GET /front-door-guide/mine
      getFrontDoorGuideMine: (args) => request("GET", "/front-door-guide/mine", { hasBody: false }, args),
      // GET /front-door-guide/mine/handoff.md — rank: any-builder — GET /front-door-guide/mine/handoff.md
      getFrontDoorGuideMineHandoffMd: (args) => request("GET", "/front-door-guide/mine/handoff.md", { hasBody: false }, args),
      // GET /front-door-guide/status — rank: public — GET /front-door-guide/status
      getFrontDoorGuideStatus: (args) => request("GET", "/front-door-guide/status", { hasBody: false }, args),
    },
    "github": {
      // GET /github/orgs — rank: any-builder — GET /github/orgs
      getGithubOrgs: (args) => request("GET", "/github/orgs", { hasBody: false }, args),
      // GET /github/orgs/{org} — rank: any-builder — GET /github/orgs/:org
      getGithubOrgsOrg: (args) => request("GET", "/github/orgs/{org}", { hasBody: false }, args),
      // GET /github/repo — rank: any-builder — GET /github/repo
      getGithubRepo: (args) => request("GET", "/github/repo", { hasBody: false }, args),
      // GET /github/repo-invite — rank: archon — GET /github/repo-invite
      getGithubRepoInvite: (args) => request("GET", "/github/repo-invite", { hasBody: false }, args),
      // POST /github/repo-invite — rank: archon — POST /github/repo-invite
      postGithubRepoInvite: (args) => request("POST", "/github/repo-invite", { hasBody: true }, args),
      // POST /github/repo/visibility — rank: any-builder — POST /github/repo/visibility
      postGithubRepoVisibility: (args) => request("POST", "/github/repo/visibility", { hasBody: true }, args),
      // GET /github/repos — rank: any-builder — GET /github/repos
      getGithubRepos: (args) => request("GET", "/github/repos", { hasBody: false }, args),
      // POST /github/repos — rank: any-builder — POST /github/repos
      postGithubRepos: (args) => request("POST", "/github/repos", { hasBody: true }, args),
      // POST /github/repos/upload — rank: any-builder — POST /github/repos/upload
      postGithubReposUpload: (args) => request("POST", "/github/repos/upload", { hasBody: true }, args),
    },
    "goalTaskRelevance": {
      // POST /goal-task-relevance/{id}/decide — rank: metic+archon — POST /goal-task-relevance/:id/decide
      postGoalTaskRelevanceIdDecide: (args) => request("POST", "/goal-task-relevance/{id}/decide", { hasBody: true }, args),
      // GET /goal-task-relevance/pending — rank: metic+archon — GET /goal-task-relevance/pending
      getGoalTaskRelevancePending: (args) => request("GET", "/goal-task-relevance/pending", { hasBody: false }, args),
    },
    "goals": {
      // GET /goals — rank: any-builder — GET /goals
      getGoals: (args) => request("GET", "/goals", { hasBody: false }, args),
      // POST /goals — rank: metic+archon — POST /goals
      postGoals: (args) => request("POST", "/goals", { hasBody: true }, args),
      // GET /goals/{id} — rank: any-builder — GET /goals/:id
      getGoalsId: (args) => request("GET", "/goals/{id}", { hasBody: false }, args),
      // PATCH /goals/{id} — rank: any-builder — PATCH /goals/:id
      patchGoalsId: (args) => request("PATCH", "/goals/{id}", { hasBody: true }, args),
      // PATCH /goals/{id}/accepting-requests — rank: any-builder — PATCH /goals/:id/accepting-requests
      patchGoalsIdAcceptingRequests: (args) => request("PATCH", "/goals/{id}/accepting-requests", { hasBody: true }, args),
      // POST /goals/{id}/archive — rank: metic+archon — POST /goals/:id/archive
      postGoalsIdArchive: (args) => request("POST", "/goals/{id}/archive", { hasBody: true }, args),
      // PATCH /goals/{id}/category — rank: any-builder — PATCH /goals/:id/category
      patchGoalsIdCategory: (args) => request("PATCH", "/goals/{id}/category", { hasBody: true }, args),
      // GET /goals/{id}/conflicts — rank: any-builder — GET /goals/:id/conflicts
      getGoalsIdConflicts: (args) => request("GET", "/goals/{id}/conflicts", { hasBody: false }, args),
      // POST /goals/{id}/conflicts/resolve — rank: any-builder — POST /goals/:id/conflicts/resolve
      postGoalsIdConflictsResolve: (args) => request("POST", "/goals/{id}/conflicts/resolve", { hasBody: true }, args),
      // GET /goals/{id}/dependency-forest — rank: any-builder — GET /goals/:id/dependency-forest
      getGoalsIdDependencyForest: (args) => request("GET", "/goals/{id}/dependency-forest", { hasBody: false }, args),
      // POST /goals/{id}/invitations — rank: any-builder — POST /goals/:id/invitations
      postGoalsIdInvitations: (args) => request("POST", "/goals/{id}/invitations", { hasBody: true }, args),
      // POST /goals/{id}/invitations/{reqId}/rescind — rank: any-builder — POST /goals/:id/invitations/:reqId/rescind
      postGoalsIdInvitationsReqIdRescind: (args) => request("POST", "/goals/{id}/invitations/{reqId}/rescind", { hasBody: true }, args),
      // POST /goals/{id}/invitations/{reqId}/respond — rank: any-builder — POST /goals/:id/invitations/:reqId/respond
      postGoalsIdInvitationsReqIdRespond: (args) => request("POST", "/goals/{id}/invitations/{reqId}/respond", { hasBody: true }, args),
      // POST /goals/{id}/join — rank: any-builder — POST /goals/:id/join
      postGoalsIdJoin: (args) => request("POST", "/goals/{id}/join", { hasBody: true }, args),
      // POST /goals/{id}/leave — rank: any-builder — POST /goals/:id/leave
      postGoalsIdLeave: (args) => request("POST", "/goals/{id}/leave", { hasBody: true }, args),
      // POST /goals/{id}/members — rank: any-builder — POST /goals/:id/members
      postGoalsIdMembers: (args) => request("POST", "/goals/{id}/members", { hasBody: true }, args),
      // PATCH /goals/{id}/members/{builderId} — rank: any-builder — PATCH /goals/:id/members/:builderId
      patchGoalsIdMembersBuilderId: (args) => request("PATCH", "/goals/{id}/members/{builderId}", { hasBody: true }, args),
      // POST /goals/{id}/move — rank: archon — POST /goals/:id/move
      postGoalsIdMove: (args) => request("POST", "/goals/{id}/move", { hasBody: true }, args),
      // POST /goals/{id}/reopen — rank: metic+archon — POST /goals/:id/reopen
      postGoalsIdReopen: (args) => request("POST", "/goals/{id}/reopen", { hasBody: true }, args),
      // GET /goals/{id}/requests — rank: any-builder — GET /goals/:id/requests
      getGoalsIdRequests: (args) => request("GET", "/goals/{id}/requests", { hasBody: false }, args),
      // POST /goals/{id}/requests — rank: any-builder — POST /goals/:id/requests
      postGoalsIdRequests: (args) => request("POST", "/goals/{id}/requests", { hasBody: true }, args),
      // POST /goals/{id}/requests/{reqId}/respond — rank: any-builder — POST /goals/:id/requests/:reqId/respond
      postGoalsIdRequestsReqIdRespond: (args) => request("POST", "/goals/{id}/requests/{reqId}/respond", { hasBody: true }, args),
      // POST /goals/{id}/requests/{reqId}/withdraw — rank: any-builder — POST /goals/:id/requests/:reqId/withdraw
      postGoalsIdRequestsReqIdWithdraw: (args) => request("POST", "/goals/{id}/requests/{reqId}/withdraw", { hasBody: true }, args),
      // POST /goals/{id}/scope — rank: metic+archon — POST /goals/:id/scope
      postGoalsIdScope: (args) => request("POST", "/goals/{id}/scope", { hasBody: true }, args),
      // GET /goals/{id}/suggest-criteria — rank: any-builder — GET /goals/:id/suggest-criteria
      getGoalsIdSuggestCriteria: (args) => request("GET", "/goals/{id}/suggest-criteria", { hasBody: false }, args),
      // POST /goals/{id}/tasks — rank: any-builder — POST /goals/:id/tasks
      postGoalsIdTasks: (args) => request("POST", "/goals/{id}/tasks", { hasBody: true }, args),
      // POST /goals/{id}/transfer — rank: any-builder — POST /goals/:id/transfer
      postGoalsIdTransfer: (args) => request("POST", "/goals/{id}/transfer", { hasBody: true }, args),
      // PATCH /goals/{id}/visibility — rank: any-builder — PATCH /goals/:id/visibility
      patchGoalsIdVisibility: (args) => request("PATCH", "/goals/{id}/visibility", { hasBody: true }, args),
      // POST /goals/{id}/water — rank: any-builder — POST /goals/:id/water
      postGoalsIdWater: (args) => request("POST", "/goals/{id}/water", { hasBody: true }, args),
      // GET /goals/graph — rank: any-builder — GET /goals/graph
      getGoalsGraph: (args) => request("GET", "/goals/graph", { hasBody: false }, args),
      // GET /goals/inbox — rank: any-builder — GET /goals/inbox
      getGoalsInbox: (args) => request("GET", "/goals/inbox", { hasBody: false }, args),
      // POST /goals/reorder — rank: metic+archon — POST /goals/reorder
      postGoalsReorder: (args) => request("POST", "/goals/reorder", { hasBody: true }, args),
      // GET /goals/rollups — rank: any-builder — GET /goals/rollups
      getGoalsRollups: (args) => request("GET", "/goals/rollups", { hasBody: false }, args),
      // GET /goals/suggestions — rank: any-builder — GET /goals/suggestions
      getGoalsSuggestions: (args) => request("GET", "/goals/suggestions", { hasBody: false }, args),
    },
    "government": {
      // GET /government/access — rank: any-builder — GET /government/access
      getGovernmentAccess: (args) => request("GET", "/government/access", { hasBody: false }, args),
      // POST /government/access/{accessKey}/holders — rank: archon — POST /government/access/:accessKey/holders
      postGovernmentAccessAccessKeyHolders: (args) => request("POST", "/government/access/{accessKey}/holders", { hasBody: true }, args),
      // DELETE /government/access/{accessKey}/holders/{builderId} — rank: archon — DELETE /government/access/:accessKey/holders/:builderId
      deleteGovernmentAccessAccessKeyHoldersBuilderId: (args) => request("DELETE", "/government/access/{accessKey}/holders/{builderId}", { hasBody: false }, args),
      // PUT /government/asks/{matterId} — rank: any-builder — PUT /government/asks/:matterId
      putGovernmentAsksMatterId: (args) => request("PUT", "/government/asks/{matterId}", { hasBody: true }, args),
      // POST /government/asks/{matterId}/pass — rank: any-builder — POST /government/asks/:matterId/pass
      postGovernmentAsksMatterIdPass: (args) => request("POST", "/government/asks/{matterId}/pass", { hasBody: true }, args),
      // POST /government/asks/{matterId}/unclear — rank: any-builder — POST /government/asks/:matterId/unclear
      postGovernmentAsksMatterIdUnclear: (args) => request("POST", "/government/asks/{matterId}/unclear", { hasBody: true }, args),
      // POST /government/asks/check — rank: any-builder — POST /government/asks/check
      postGovernmentAsksCheck: (args) => request("POST", "/government/asks/check", { hasBody: true }, args),
      // GET /government/asks/unclear — rank: any-builder — GET /government/asks/unclear
      getGovernmentAsksUnclear: (args) => request("GET", "/government/asks/unclear", { hasBody: false }, args),
      // GET /government/assignments — rank: archon — GET /government/assignments
      getGovernmentAssignments: (args) => request("GET", "/government/assignments", { hasBody: false }, args),
      // POST /government/assignments — rank: archon — POST /government/assignments
      postGovernmentAssignments: (args) => request("POST", "/government/assignments", { hasBody: true }, args),
      // DELETE /government/assignments/{builderId}/{rankKey} — rank: archon — DELETE /government/assignments/:builderId/:rankKey
      deleteGovernmentAssignmentsBuilderIdRankKey: (args) => request("DELETE", "/government/assignments/{builderId}/{rankKey}", { hasBody: false }, args),
      // GET /government/blockers/for-me — rank: any-builder — GET /government/blockers/for-me
      getGovernmentBlockersForMe: (args) => request("GET", "/government/blockers/for-me", { hasBody: false }, args),
      // GET /government/blockers/people — rank: any-builder — GET /government/blockers/people
      getGovernmentBlockersPeople: (args) => request("GET", "/government/blockers/people", { hasBody: false }, args),
      // POST /government/board/charter — rank: metic+archon — POST /government/board/charter
      postGovernmentBoardCharter: (args) => request("POST", "/government/board/charter", { hasBody: true }, args),
      // POST /government/board/decision-rules — rank: metic+archon — POST /government/board/decision-rules
      postGovernmentBoardDecisionRules: (args) => request("POST", "/government/board/decision-rules", { hasBody: true }, args),
      // GET /government/board/genesis-stages — rank: any-builder — GET /government/board/genesis-stages
      getGovernmentBoardGenesisStages: (args) => request("GET", "/government/board/genesis-stages", { hasBody: false }, args),
      // GET /government/board/items — rank: any-builder — GET /government/board/items
      getGovernmentBoardItems: (args) => request("GET", "/government/board/items", { hasBody: false }, args),
      // POST /government/board/items — rank: metic+archon — POST /government/board/items
      postGovernmentBoardItems: (args) => request("POST", "/government/board/items", { hasBody: true }, args),
      // POST /government/board/items/{itemId}/votes — rank: any-builder — POST /government/board/items/:itemId/votes
      postGovernmentBoardItemsItemIdVotes: (args) => request("POST", "/government/board/items/{itemId}/votes", { hasBody: true }, args),
      // POST /government/board/items/{itemId}/withdraw — rank: metic+archon — POST /government/board/items/:itemId/withdraw
      postGovernmentBoardItemsItemIdWithdraw: (args) => request("POST", "/government/board/items/{itemId}/withdraw", { hasBody: true }, args),
      // POST /government/board/laws — rank: metic+archon — POST /government/board/laws
      postGovernmentBoardLaws: (args) => request("POST", "/government/board/laws", { hasBody: true }, args),
      // POST /government/board/matters — rank: metic+archon — POST /government/board/matters
      postGovernmentBoardMatters: (args) => request("POST", "/government/board/matters", { hasBody: true }, args),
      // POST /government/board/presets — rank: metic+archon — POST /government/board/presets
      postGovernmentBoardPresets: (args) => request("POST", "/government/board/presets", { hasBody: true }, args),
      // POST /government/buildouts — rank: any-builder — POST /government/buildouts
      postGovernmentBuildouts: (args) => request("POST", "/government/buildouts", { hasBody: true }, args),
      // GET /government/constitution — rank: any-builder — GET /government/constitution
      getGovernmentConstitution: (args) => request("GET", "/government/constitution", { hasBody: false }, args),
      // POST /government/constitution/reapply — rank: archon — POST /government/constitution/reapply
      postGovernmentConstitutionReapply: (args) => request("POST", "/government/constitution/reapply", { hasBody: true }, args),
      // GET /government/counts — rank: any-builder — GET /government/counts
      getGovernmentCounts: (args) => request("GET", "/government/counts", { hasBody: false }, args),
      // GET /government/docket — rank: any-builder — GET /government/docket
      getGovernmentDocket: (args) => request("GET", "/government/docket", { hasBody: false }, args),
      // GET /government/laws — rank: any-builder — GET /government/laws
      getGovernmentLaws: (args) => request("GET", "/government/laws", { hasBody: false }, args),
      // GET /government/leads — rank: any-builder — GET /government/leads
      getGovernmentLeads: (args) => request("GET", "/government/leads", { hasBody: false }, args),
      // GET /government/permissions — rank: archon — GET /government/permissions
      getGovernmentPermissions: (args) => request("GET", "/government/permissions", { hasBody: false }, args),
      // GET /government/presets — rank: any-builder — GET /government/presets
      getGovernmentPresets: (args) => request("GET", "/government/presets", { hasBody: false }, args),
      // POST /government/rank-sets/apply — rank: archon — POST /government/rank-sets/apply
      postGovernmentRankSetsApply: (args) => request("POST", "/government/rank-sets/apply", { hasBody: true }, args),
      // GET /government/ranks — rank: archon — GET /government/ranks
      getGovernmentRanks: (args) => request("GET", "/government/ranks", { hasBody: false }, args),
      // POST /government/ranks — rank: archon — POST /government/ranks
      postGovernmentRanks: (args) => request("POST", "/government/ranks", { hasBody: true }, args),
      // DELETE /government/ranks/{rankKey} — rank: archon — DELETE /government/ranks/:rankKey
      deleteGovernmentRanksRankKey: (args) => request("DELETE", "/government/ranks/{rankKey}", { hasBody: false }, args),
      // DELETE /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon — DELETE /government/ranks/:rankKey/permissions/:permissionKey
      deleteGovernmentRanksRankKeyPermissionsPermissionKey: (args) => request("DELETE", "/government/ranks/{rankKey}/permissions/{permissionKey}", { hasBody: false }, args),
      // PUT /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon — PUT /government/ranks/:rankKey/permissions/:permissionKey
      putGovernmentRanksRankKeyPermissionsPermissionKey: (args) => request("PUT", "/government/ranks/{rankKey}/permissions/{permissionKey}", { hasBody: true }, args),
      // POST /government/ranks/{rankKey}/reset — rank: archon — POST /government/ranks/:rankKey/reset
      postGovernmentRanksRankKeyReset: (args) => request("POST", "/government/ranks/{rankKey}/reset", { hasBody: true }, args),
      // GET /government/treasury — rank: any-builder — GET /government/treasury
      getGovernmentTreasury: (args) => request("GET", "/government/treasury", { hasBody: false }, args),
      // POST /government/treasury/borrows/{borrowId}/answer — rank: any-builder — POST /government/treasury/borrows/:borrowId/answer
      postGovernmentTreasuryBorrowsBorrowIdAnswer: (args) => request("POST", "/government/treasury/borrows/{borrowId}/answer", { hasBody: true }, args),
      // PUT /government/treasury/pots/{goalId} — rank: any-builder — PUT /government/treasury/pots/:goalId
      putGovernmentTreasuryPotsGoalId: (args) => request("PUT", "/government/treasury/pots/{goalId}", { hasBody: true }, args),
    },
    "grades": {
      // GET /grades/by-builder — rank: metic+archon — GET /grades/by-builder
      getGradesByBuilder: (args) => request("GET", "/grades/by-builder", { hasBody: false }, args),
    },
    "guildRequests": {
      // DELETE /guild-requests/{id} — rank: any-builder — DELETE /guild-requests/:id
      deleteGuildRequestsId: (args) => request("DELETE", "/guild-requests/{id}", { hasBody: false }, args),
      // POST /guild-requests/{id}/accept — rank: any-builder — POST /guild-requests/:id/accept
      postGuildRequestsIdAccept: (args) => request("POST", "/guild-requests/{id}/accept", { hasBody: true }, args),
      // POST /guild-requests/{id}/decline — rank: any-builder — POST /guild-requests/:id/decline
      postGuildRequestsIdDecline: (args) => request("POST", "/guild-requests/{id}/decline", { hasBody: true }, args),
    },
    "guilds": {
      // GET /guilds — rank: public — GET /guilds
      getGuilds: (args) => request("GET", "/guilds", { hasBody: false }, args),
      // POST /guilds — rank: any-builder — POST /guilds
      postGuilds: (args) => request("POST", "/guilds", { hasBody: true }, args),
      // DELETE /guilds/{slug} — rank: any-builder — DELETE /guilds/:slug
      deleteGuildsSlug: (args) => request("DELETE", "/guilds/{slug}", { hasBody: false }, args),
      // GET /guilds/{slug} — rank: public — GET /guilds/:slug
      getGuildsSlug: (args) => request("GET", "/guilds/{slug}", { hasBody: false }, args),
      // PATCH /guilds/{slug} — rank: any-builder — PATCH /guilds/:slug
      patchGuildsSlug: (args) => request("PATCH", "/guilds/{slug}", { hasBody: true }, args),
      // POST /guilds/{slug}/engagements — rank: any-builder — POST /guilds/:slug/engagements
      postGuildsSlugEngagements: (args) => request("POST", "/guilds/{slug}/engagements", { hasBody: true }, args),
      // POST /guilds/{slug}/invites — rank: any-builder — POST /guilds/:slug/invites
      postGuildsSlugInvites: (args) => request("POST", "/guilds/{slug}/invites", { hasBody: true }, args),
      // GET /guilds/{slug}/members — rank: any-builder — GET /guilds/:slug/members
      getGuildsSlugMembers: (args) => request("GET", "/guilds/{slug}/members", { hasBody: false }, args),
      // DELETE /guilds/{slug}/members/{handle} — rank: any-builder — DELETE /guilds/:slug/members/:handle
      deleteGuildsSlugMembersHandle: (args) => request("DELETE", "/guilds/{slug}/members/{handle}", { hasBody: false }, args),
      // DELETE /guilds/{slug}/membership — rank: any-builder — DELETE /guilds/:slug/membership
      deleteGuildsSlugMembership: (args) => request("DELETE", "/guilds/{slug}/membership", { hasBody: false }, args),
      // PATCH /guilds/{slug}/membership — rank: any-builder — PATCH /guilds/:slug/membership
      patchGuildsSlugMembership: (args) => request("PATCH", "/guilds/{slug}/membership", { hasBody: true }, args),
      // GET /guilds/{slug}/requests — rank: any-builder — GET /guilds/:slug/requests
      getGuildsSlugRequests: (args) => request("GET", "/guilds/{slug}/requests", { hasBody: false }, args),
      // POST /guilds/{slug}/requests — rank: any-builder — POST /guilds/:slug/requests
      postGuildsSlugRequests: (args) => request("POST", "/guilds/{slug}/requests", { hasBody: true }, args),
      // POST /guilds/{slug}/transfer — rank: any-builder — POST /guilds/:slug/transfer
      postGuildsSlugTransfer: (args) => request("POST", "/guilds/{slug}/transfer", { hasBody: true }, args),
    },
    "healthz": {
      // GET /healthz — rank: public — GET /healthz
      getHealthz: (args) => request("GET", "/healthz", { hasBody: false }, args),
    },
    "helpRequests": {
      // GET /help-requests — rank: any-builder — GET /help-requests
      getHelpRequests: (args) => request("GET", "/help-requests", { hasBody: false }, args),
      // POST /help-requests — rank: any-builder — POST /help-requests
      postHelpRequests: (args) => request("POST", "/help-requests", { hasBody: true }, args),
      // PATCH /help-requests/{id} — rank: any-builder — PATCH /help-requests/:id
      patchHelpRequestsId: (args) => request("PATCH", "/help-requests/{id}", { hasBody: true }, args),
      // GET /help-requests/{id}/replies — rank: any-builder — GET /help-requests/:id/replies
      getHelpRequestsIdReplies: (args) => request("GET", "/help-requests/{id}/replies", { hasBody: false }, args),
      // POST /help-requests/{id}/replies — rank: any-builder — POST /help-requests/:id/replies
      postHelpRequestsIdReplies: (args) => request("POST", "/help-requests/{id}/replies", { hasBody: true }, args),
      // GET /help-requests/archive — rank: any-builder — GET /help-requests/archive
      getHelpRequestsArchive: (args) => request("GET", "/help-requests/archive", { hasBody: false }, args),
      // GET /help-requests/for-me — rank: any-builder — GET /help-requests/for-me
      getHelpRequestsForMe: (args) => request("GET", "/help-requests/for-me", { hasBody: false }, args),
      // GET /help-requests/mine — rank: any-builder — GET /help-requests/mine
      getHelpRequestsMine: (args) => request("GET", "/help-requests/mine", { hasBody: false }, args),
    },
    "home": {
      // GET /home/city — rank: any-builder — GET /home/city
      getHomeCity: (args) => request("GET", "/home/city", { hasBody: false }, args),
      // GET /home/gallery — rank: any-builder — GET /home/gallery
      getHomeGallery: (args) => request("GET", "/home/gallery", { hasBody: false }, args),
      // PUT /home/gallery/{id}/heart — rank: any-builder — PUT /home/gallery/:id/heart
      putHomeGalleryIdHeart: (args) => request("PUT", "/home/gallery/{id}/heart", { hasBody: true }, args),
      // GET /home/studio/works — rank: any-builder — GET /home/studio/works
      getHomeStudioWorks: (args) => request("GET", "/home/studio/works", { hasBody: false }, args),
    },
    "inbox": {
      // GET /inbox — rank: any-builder — GET /inbox
      getInbox: (args) => request("GET", "/inbox", { hasBody: false }, args),
      // POST /inbox — rank: any-builder — POST /inbox
      postInbox: (args) => request("POST", "/inbox", { hasBody: true }, args),
      // GET /inbox/{id} — rank: any-builder — GET /inbox/:id
      getInboxId: (args) => request("GET", "/inbox/{id}", { hasBody: false }, args),
      // PATCH /inbox/{id} — rank: metic+archon — PATCH /inbox/:id
      patchInboxId: (args) => request("PATCH", "/inbox/{id}", { hasBody: true }, args),
      // PATCH /inbox/{id}/body — rank: any-builder — PATCH /inbox/:id/body
      patchInboxIdBody: (args) => request("PATCH", "/inbox/{id}/body", { hasBody: true }, args),
      // POST /inbox/{id}/develop — rank: any-builder — POST /inbox/:id/develop
      postInboxIdDevelop: (args) => request("POST", "/inbox/{id}/develop", { hasBody: true }, args),
      // POST /inbox/{id}/ratify — rank: metic+archon — POST /inbox/:id/ratify
      postInboxIdRatify: (args) => request("POST", "/inbox/{id}/ratify", { hasBody: true }, args),
      // POST /inbox/{id}/ratify-goal — rank: metic+archon — POST /inbox/:id/ratify-goal
      postInboxIdRatifyGoal: (args) => request("POST", "/inbox/{id}/ratify-goal", { hasBody: true }, args),
      // POST /inbox/{id}/resubmit — rank: any-builder — POST /inbox/:id/resubmit
      postInboxIdResubmit: (args) => request("POST", "/inbox/{id}/resubmit", { hasBody: true }, args),
      // DELETE /inbox/{id}/spark — rank: any-builder — DELETE /inbox/:id/spark
      deleteInboxIdSpark: (args) => request("DELETE", "/inbox/{id}/spark", { hasBody: false }, args),
      // POST /inbox/{id}/spark — rank: any-builder — POST /inbox/:id/spark
      postInboxIdSpark: (args) => request("POST", "/inbox/{id}/spark", { hasBody: true }, args),
      // POST /inbox/{id}/vote — rank: metic+archon — POST /inbox/:id/vote
      postInboxIdVote: (args) => request("POST", "/inbox/{id}/vote", { hasBody: true }, args),
      // GET /inbox/awaiting-nod — rank: metic+archon — GET /inbox/awaiting-nod
      getInboxAwaitingNod: (args) => request("GET", "/inbox/awaiting-nod", { hasBody: false }, args),
      // GET /inbox/by-builder/{id} — rank: any-builder — GET /inbox/by-builder/:id
      getInboxByBuilderId: (args) => request("GET", "/inbox/by-builder/{id}", { hasBody: false }, args),
      // POST /inbox/preview-landing — rank: any-builder — POST /inbox/preview-landing
      postInboxPreviewLanding: (args) => request("POST", "/inbox/preview-landing", { hasBody: true }, args),
      // GET /inbox/rotting — rank: any-builder — GET /inbox/rotting
      getInboxRotting: (args) => request("GET", "/inbox/rotting", { hasBody: false }, args),
      // POST /inbox/score — rank: any-builder — POST /inbox/score
      postInboxScore: (args) => request("POST", "/inbox/score", { hasBody: true }, args),
      // GET /inbox/sparks — rank: any-builder — GET /inbox/sparks
      getInboxSparks: (args) => request("GET", "/inbox/sparks", { hasBody: false }, args),
      // GET /inbox/template — rank: any-builder — GET /inbox/template
      getInboxTemplate: (args) => request("GET", "/inbox/template", { hasBody: false }, args),
      // GET /inbox/votes — rank: any-builder — GET /inbox/votes
      getInboxVotes: (args) => request("GET", "/inbox/votes", { hasBody: false }, args),
    },
    "instance": {
      // GET /instance — rank: public — GET /instance
      getInstance: (args) => request("GET", "/instance", { hasBody: false }, args),
    },
    "leaderboard": {
      // GET /leaderboard — rank: public — GET /leaderboard
      getLeaderboard: (args) => request("GET", "/leaderboard", { hasBody: false }, args),
    },
    "learnings": {
      // GET /learnings — rank: any-builder — GET /learnings
      getLearnings: (args) => request("GET", "/learnings", { hasBody: false }, args),
      // POST /learnings — rank: any-builder — POST /learnings
      postLearnings: (args) => request("POST", "/learnings", { hasBody: true }, args),
    },
    "live": {
      // GET /live — rank: any-builder — GET /live
      getLive: (args) => request("GET", "/live", { hasBody: false }, args),
    },
    "llmCache": {
      // POST /llm-cache/lookup — rank: metic+archon — POST /llm-cache/lookup
      postLlmCacheLookup: (args) => request("POST", "/llm-cache/lookup", { hasBody: true }, args),
      // POST /llm-cache/store — rank: metic+archon — POST /llm-cache/store
      postLlmCacheStore: (args) => request("POST", "/llm-cache/store", { hasBody: true }, args),
    },
    "marketWatch": {
      // GET /market-watch/ask — rank: any-builder — GET /market-watch/ask
      getMarketWatchAsk: (args) => request("GET", "/market-watch/ask", { hasBody: false }, args),
      // POST /market-watch/ask/answer — rank: any-builder — POST /market-watch/ask/answer
      postMarketWatchAskAnswer: (args) => request("POST", "/market-watch/ask/answer", { hasBody: true }, args),
      // GET /market-watch/home — rank: any-builder — GET /market-watch/home
      getMarketWatchHome: (args) => request("GET", "/market-watch/home", { hasBody: false }, args),
      // GET /market-watch/items/{id} — rank: any-builder — GET /market-watch/items/:id
      getMarketWatchItemsId: (args) => request("GET", "/market-watch/items/{id}", { hasBody: false }, args),
      // POST /market-watch/proposals — rank: any-builder — POST /market-watch/proposals
      postMarketWatchProposals: (args) => request("POST", "/market-watch/proposals", { hasBody: true }, args),
      // POST /market-watch/proposals/{id}/decide — rank: any-builder — POST /market-watch/proposals/:id/decide
      postMarketWatchProposalsIdDecide: (args) => request("POST", "/market-watch/proposals/{id}/decide", { hasBody: true }, args),
      // POST /market-watch/proposals/{id}/vote — rank: metic+archon — POST /market-watch/proposals/:id/vote
      postMarketWatchProposalsIdVote: (args) => request("POST", "/market-watch/proposals/{id}/vote", { hasBody: true }, args),
      // GET /market-watch/rules — rank: any-builder — GET /market-watch/rules
      getMarketWatchRules: (args) => request("GET", "/market-watch/rules", { hasBody: false }, args),
      // POST /market-watch/rules/proposals — rank: any-builder — POST /market-watch/rules/proposals
      postMarketWatchRulesProposals: (args) => request("POST", "/market-watch/rules/proposals", { hasBody: true }, args),
      // GET /market-watch/settings — rank: metic+archon — GET /market-watch/settings
      getMarketWatchSettings: (args) => request("GET", "/market-watch/settings", { hasBody: false }, args),
      // PATCH /market-watch/settings — rank: metic+archon — PATCH /market-watch/settings
      patchMarketWatchSettings: (args) => request("PATCH", "/market-watch/settings", { hasBody: true }, args),
      // DELETE /market-watch/settings/key — rank: metic+archon — DELETE /market-watch/settings/key
      deleteMarketWatchSettingsKey: (args) => request("DELETE", "/market-watch/settings/key", { hasBody: false }, args),
      // PUT /market-watch/settings/key — rank: metic+archon — PUT /market-watch/settings/key
      putMarketWatchSettingsKey: (args) => request("PUT", "/market-watch/settings/key", { hasBody: true }, args),
    },
    "me": {
      // GET /me — rank: any-builder — GET /me
      getMe: (args) => request("GET", "/me", { hasBody: false }, args),
      // GET /me/achievements — rank: any-builder — GET /me/achievements
      getMeAchievements: (args) => request("GET", "/me/achievements", { hasBody: false }, args),
      // POST /me/anthropic-link — rank: any-builder — POST /me/anthropic-link
      postMeAnthropicLink: (args) => request("POST", "/me/anthropic-link", { hasBody: true }, args),
      // PUT /me/assumed-character — rank: any-builder — PUT /me/assumed-character
      putMeAssumedCharacter: (args) => request("PUT", "/me/assumed-character", { hasBody: true }, args),
      // GET /me/cash-outs — rank: any-builder — GET /me/cash-outs
      getMeCashOuts: (args) => request("GET", "/me/cash-outs", { hasBody: false }, args),
      // POST /me/cash-outs — rank: any-builder — POST /me/cash-outs
      postMeCashOuts: (args) => request("POST", "/me/cash-outs", { hasBody: true }, args),
      // POST /me/cash-outs/{id}/cancel — rank: any-builder — POST /me/cash-outs/:id/cancel
      postMeCashOutsIdCancel: (args) => request("POST", "/me/cash-outs/{id}/cancel", { hasBody: true }, args),
      // POST /me/cash-outs/{id}/retry — rank: any-builder — POST /me/cash-outs/:id/retry
      postMeCashOutsIdRetry: (args) => request("POST", "/me/cash-outs/{id}/retry", { hasBody: true }, args),
      // PUT /me/character — rank: any-builder — PUT /me/character
      putMeCharacter: (args) => request("PUT", "/me/character", { hasBody: true }, args),
      // PATCH /me/checkout-freshness — rank: any-builder — PATCH /me/checkout-freshness
      patchMeCheckoutFreshness: (args) => request("PATCH", "/me/checkout-freshness", { hasBody: true }, args),
      // PATCH /me/core-move-seen — rank: any-builder — PATCH /me/core-move-seen
      patchMeCoreMoveSeen: (args) => request("PATCH", "/me/core-move-seen", { hasBody: true }, args),
      // GET /me/credits — rank: any-builder — GET /me/credits
      getMeCredits: (args) => request("GET", "/me/credits", { hasBody: false }, args),
      // GET /me/cross-project — rank: any-builder — GET /me/cross-project
      getMeCrossProject: (args) => request("GET", "/me/cross-project", { hasBody: false }, args),
      // PATCH /me/cross-project — rank: any-builder — PATCH /me/cross-project
      patchMeCrossProject: (args) => request("PATCH", "/me/cross-project", { hasBody: true }, args),
      // PATCH /me/disciplines — rank: any-builder — PATCH /me/disciplines
      patchMeDisciplines: (args) => request("PATCH", "/me/disciplines", { hasBody: true }, args),
      // GET /me/display-name — rank: any-builder — GET /me/display-name
      getMeDisplayName: (args) => request("GET", "/me/display-name", { hasBody: false }, args),
      // PATCH /me/display-name — rank: any-builder — PATCH /me/display-name
      patchMeDisplayName: (args) => request("PATCH", "/me/display-name", { hasBody: true }, args),
      // GET /me/event-sound-prefs — rank: any-builder — GET /me/event-sound-prefs
      getMeEventSoundPrefs: (args) => request("GET", "/me/event-sound-prefs", { hasBody: false }, args),
      // PATCH /me/event-sound-prefs — rank: any-builder — PATCH /me/event-sound-prefs
      patchMeEventSoundPrefs: (args) => request("PATCH", "/me/event-sound-prefs", { hasBody: true }, args),
      // GET /me/filter-views — rank: any-builder — GET /me/filter-views
      getMeFilterViews: (args) => request("GET", "/me/filter-views", { hasBody: false }, args),
      // POST /me/filter-views — rank: any-builder — POST /me/filter-views
      postMeFilterViews: (args) => request("POST", "/me/filter-views", { hasBody: true }, args),
      // DELETE /me/filter-views/{id} — rank: any-builder — DELETE /me/filter-views/:id
      deleteMeFilterViewsId: (args) => request("DELETE", "/me/filter-views/{id}", { hasBody: false }, args),
      // PATCH /me/filter-views/{id} — rank: any-builder — PATCH /me/filter-views/:id
      patchMeFilterViewsId: (args) => request("PATCH", "/me/filter-views/{id}", { hasBody: true }, args),
      // POST /me/guardian-cosigns — rank: any-builder — POST /me/guardian-cosigns
      postMeGuardianCosigns: (args) => request("POST", "/me/guardian-cosigns", { hasBody: true }, args),
      // GET /me/guild-engagements — rank: any-builder — GET /me/guild-engagements
      getMeGuildEngagements: (args) => request("GET", "/me/guild-engagements", { hasBody: false }, args),
      // GET /me/guild-requests — rank: any-builder — GET /me/guild-requests
      getMeGuildRequests: (args) => request("GET", "/me/guild-requests", { hasBody: false }, args),
      // GET /me/guilds — rank: any-builder — GET /me/guilds
      getMeGuilds: (args) => request("GET", "/me/guilds", { hasBody: false }, args),
      // GET /me/hall-view — rank: any-builder — GET /me/hall-view
      getMeHallView: (args) => request("GET", "/me/hall-view", { hasBody: false }, args),
      // PATCH /me/hall-view — rank: any-builder — PATCH /me/hall-view
      patchMeHallView: (args) => request("PATCH", "/me/hall-view", { hasBody: true }, args),
      // PATCH /me/handle — rank: any-builder — PATCH /me/handle
      patchMeHandle: (args) => request("PATCH", "/me/handle", { hasBody: true }, args),
      // GET /me/howto — rank: any-builder — GET /me/howto
      getMeHowto: (args) => request("GET", "/me/howto", { hasBody: false }, args),
      // POST /me/howto/read — rank: any-builder — POST /me/howto/read
      postMeHowtoRead: (args) => request("POST", "/me/howto/read", { hasBody: true }, args),
      // POST /me/howto/reset — rank: any-builder — POST /me/howto/reset
      postMeHowtoReset: (args) => request("POST", "/me/howto/reset", { hasBody: true }, args),
      // GET /me/interaction — rank: any-builder — GET /me/interaction
      getMeInteraction: (args) => request("GET", "/me/interaction", { hasBody: false }, args),
      // PATCH /me/interaction — rank: any-builder — PATCH /me/interaction
      patchMeInteraction: (args) => request("PATCH", "/me/interaction", { hasBody: true }, args),
      // GET /me/model-allocation — rank: any-builder — GET /me/model-allocation
      getMeModelAllocation: (args) => request("GET", "/me/model-allocation", { hasBody: false }, args),
      // PATCH /me/model-allocation — rank: any-builder — PATCH /me/model-allocation
      patchMeModelAllocation: (args) => request("PATCH", "/me/model-allocation", { hasBody: true }, args),
      // GET /me/passkeys — rank: any-builder — GET /me/passkeys
      getMePasskeys: (args) => request("GET", "/me/passkeys", { hasBody: false }, args),
      // POST /me/passkeys/authenticate/options — rank: any-builder — POST /me/passkeys/authenticate/options
      postMePasskeysAuthenticateOptions: (args) => request("POST", "/me/passkeys/authenticate/options", { hasBody: true }, args),
      // POST /me/passkeys/authenticate/verify — rank: any-builder — POST /me/passkeys/authenticate/verify
      postMePasskeysAuthenticateVerify: (args) => request("POST", "/me/passkeys/authenticate/verify", { hasBody: true }, args),
      // GET /me/passkeys/browser.js — rank: any-builder — GET /me/passkeys/browser.js
      getMePasskeysBrowserJs: (args) => request("GET", "/me/passkeys/browser.js", { hasBody: false }, args),
      // POST /me/passkeys/register/options — rank: any-builder — POST /me/passkeys/register/options
      postMePasskeysRegisterOptions: (args) => request("POST", "/me/passkeys/register/options", { hasBody: true }, args),
      // POST /me/passkeys/register/verify — rank: any-builder — POST /me/passkeys/register/verify
      postMePasskeysRegisterVerify: (args) => request("POST", "/me/passkeys/register/verify", { hasBody: true }, args),
      // POST /me/passkeys/remove — rank: any-builder — POST /me/passkeys/remove
      postMePasskeysRemove: (args) => request("POST", "/me/passkeys/remove", { hasBody: true }, args),
      // POST /me/passkeys/rename — rank: any-builder — POST /me/passkeys/rename
      postMePasskeysRename: (args) => request("POST", "/me/passkeys/rename", { hasBody: true }, args),
      // POST /me/payout-age — rank: any-builder — POST /me/payout-age
      postMePayoutAge: (args) => request("POST", "/me/payout-age", { hasBody: true }, args),
      // POST /me/payout-freezes/{id}/appeal — rank: any-builder — POST /me/payout-freezes/:id/appeal
      postMePayoutFreezesIdAppeal: (args) => request("POST", "/me/payout-freezes/{id}/appeal", { hasBody: true }, args),
      // GET /me/payouts — rank: any-builder — GET /me/payouts
      getMePayouts: (args) => request("GET", "/me/payouts", { hasBody: false }, args),
      // PATCH /me/profile — rank: any-builder — PATCH /me/profile
      patchMeProfile: (args) => request("PATCH", "/me/profile", { hasBody: true }, args),
      // GET /me/profile-nudge — rank: any-builder — GET /me/profile-nudge
      getMeProfileNudge: (args) => request("GET", "/me/profile-nudge", { hasBody: false }, args),
      // PATCH /me/profile-nudge — rank: any-builder — PATCH /me/profile-nudge
      patchMeProfileNudge: (args) => request("PATCH", "/me/profile-nudge", { hasBody: true }, args),
      // GET /me/recent-ships — rank: any-builder — GET /me/recent-ships
      getMeRecentShips: (args) => request("GET", "/me/recent-ships", { hasBody: false }, args),
      // GET /me/render — rank: any-builder — GET /me/render
      getMeRender: (args) => request("GET", "/me/render", { hasBody: false }, args),
      // PATCH /me/render — rank: any-builder — PATCH /me/render
      patchMeRender: (args) => request("PATCH", "/me/render", { hasBody: true }, args),
      // GET /me/sessions — rank: any-builder — GET /me/sessions
      getMeSessions: (args) => request("GET", "/me/sessions", { hasBody: false }, args),
      // POST /me/sessions/revoke — rank: any-builder — POST /me/sessions/revoke
      postMeSessionsRevoke: (args) => request("POST", "/me/sessions/revoke", { hasBody: true }, args),
      // POST /me/sessions/revoke-all — rank: any-builder — POST /me/sessions/revoke-all
      postMeSessionsRevokeAll: (args) => request("POST", "/me/sessions/revoke-all", { hasBody: true }, args),
      // GET /me/sign-in-methods — rank: any-builder — GET /me/sign-in-methods
      getMeSignInMethods: (args) => request("GET", "/me/sign-in-methods", { hasBody: false }, args),
      // DELETE /me/sign-in-methods/{provider} — rank: any-builder — DELETE /me/sign-in-methods/:provider
      deleteMeSignInMethodsProvider: (args) => request("DELETE", "/me/sign-in-methods/{provider}", { hasBody: false }, args),
      // GET /me/skill-prefs — rank: any-builder — GET /me/skill-prefs
      getMeSkillPrefs: (args) => request("GET", "/me/skill-prefs", { hasBody: false }, args),
      // PATCH /me/skill-prefs — rank: any-builder — PATCH /me/skill-prefs
      patchMeSkillPrefs: (args) => request("PATCH", "/me/skill-prefs", { hasBody: true }, args),
      // GET /me/sound-prefs — rank: any-builder — GET /me/sound-prefs
      getMeSoundPrefs: (args) => request("GET", "/me/sound-prefs", { hasBody: false }, args),
      // PATCH /me/sound-prefs — rank: any-builder — PATCH /me/sound-prefs
      patchMeSoundPrefs: (args) => request("PATCH", "/me/sound-prefs", { hasBody: true }, args),
      // GET /me/specialities — rank: any-builder — GET /me/specialities
      getMeSpecialities: (args) => request("GET", "/me/specialities", { hasBody: false }, args),
      // GET /me/wandering — rank: any-builder — GET /me/wandering
      getMeWandering: (args) => request("GET", "/me/wandering", { hasBody: false }, args),
      // PATCH /me/wandering — rank: any-builder — PATCH /me/wandering
      patchMeWandering: (args) => request("PATCH", "/me/wandering", { hasBody: true }, args),
    },
    "memory": {
      // GET /memory/bfg/builders/{builderId}/file — rank: bfg-principal — GET /memory/bfg/builders/:builderId/file
      getMemoryBfgBuildersBuilderIdFile: (args) => request("GET", "/memory/bfg/builders/{builderId}/file", { hasBody: false }, args),
      // GET /memory/bfg/builders/{builderId}/files — rank: bfg-principal — GET /memory/bfg/builders/:builderId/files
      getMemoryBfgBuildersBuilderIdFiles: (args) => request("GET", "/memory/bfg/builders/{builderId}/files", { hasBody: false }, args),
      // POST /memory/builders/{builderId}/bfg-write — rank: bfg-principal — POST /memory/builders/:builderId/bfg-write
      postMemoryBuildersBuilderIdBfgWrite: (args) => request("POST", "/memory/builders/{builderId}/bfg-write", { hasBody: true }, args),
      // GET /memory/builders/{builderId}/file — rank: metic+archon — GET /memory/builders/:builderId/file
      getMemoryBuildersBuilderIdFile: (args) => request("GET", "/memory/builders/{builderId}/file", { hasBody: false }, args),
      // GET /memory/builders/{builderId}/files — rank: metic+archon — GET /memory/builders/:builderId/files
      getMemoryBuildersBuilderIdFiles: (args) => request("GET", "/memory/builders/{builderId}/files", { hasBody: false }, args),
      // DELETE /memory/file — rank: any-builder — DELETE /memory/file
      deleteMemoryFile: (args) => request("DELETE", "/memory/file", { hasBody: true }, args),
      // GET /memory/file — rank: any-builder — GET /memory/file
      getMemoryFile: (args) => request("GET", "/memory/file", { hasBody: false }, args),
      // GET /memory/files — rank: any-builder — GET /memory/files
      getMemoryFiles: (args) => request("GET", "/memory/files", { hasBody: false }, args),
      // POST /memory/sync — rank: any-builder — POST /memory/sync
      postMemorySync: (args) => request("POST", "/memory/sync", { hasBody: true }, args),
    },
    "mingle": {
      // GET /mingle — rank: any-builder — GET /mingle
      getMingle: (args) => request("GET", "/mingle", { hasBody: false }, args),
      // PUT /mingle/opt-in — rank: any-builder — PUT /mingle/opt-in
      putMingleOptIn: (args) => request("PUT", "/mingle/opt-in", { hasBody: true }, args),
      // POST /mingle/pairs/{id}/decide — rank: any-builder — POST /mingle/pairs/:id/decide
      postMinglePairsIdDecide: (args) => request("POST", "/mingle/pairs/{id}/decide", { hasBody: true }, args),
      // PUT /mingle/project — rank: metic+archon — PUT /mingle/project
      putMingleProject: (args) => request("PUT", "/mingle/project", { hasBody: true }, args),
      // POST /mingle/round — rank: metic+archon — POST /mingle/round
      postMingleRound: (args) => request("POST", "/mingle/round", { hasBody: true }, args),
    },
    "modules": {
      // GET /modules — rank: any-builder — GET /modules
      getModules: (args) => request("GET", "/modules", { hasBody: false }, args),
      // POST /modules/{key}/enable — rank: metic+archon — POST /modules/:key/enable
      postModulesKeyEnable: (args) => request("POST", "/modules/{key}/enable", { hasBody: true }, args),
      // POST /modules/{key}/general-only — rank: metic+archon — POST /modules/:key/general-only
      postModulesKeyGeneralOnly: (args) => request("POST", "/modules/{key}/general-only", { hasBody: true }, args),
      // POST /modules/{key}/submit — rank: metic+archon — POST /modules/:key/submit
      postModulesKeySubmit: (args) => request("POST", "/modules/{key}/submit", { hasBody: true }, args),
      // GET /modules/submissions — rank: metic+archon — GET /modules/submissions
      getModulesSubmissions: (args) => request("GET", "/modules/submissions", { hasBody: false }, args),
      // GET /modules/testing — rank: any-builder — GET /modules/testing
      getModulesTesting: (args) => request("GET", "/modules/testing", { hasBody: false }, args),
      // POST /modules/testing — rank: metic+archon — POST /modules/testing
      postModulesTesting: (args) => request("POST", "/modules/testing", { hasBody: true }, args),
    },
    "moving": {
      // GET /moving — rank: any-builder — GET /moving
      getMoving: (args) => request("GET", "/moving", { hasBody: false }, args),
    },
    "myProjects": {
      // GET /my-projects — rank: any-builder — GET /my-projects
      getMyProjects: (args) => request("GET", "/my-projects", { hasBody: false }, args),
      // POST /my-projects/{clientId}/leave — rank: any-builder — POST /my-projects/:clientId/leave
      postMyProjectsClientIdLeave: (args) => request("POST", "/my-projects/{clientId}/leave", { hasBody: true }, args),
      // GET /my-projects/invites — rank: any-builder — GET /my-projects/invites
      getMyProjectsInvites: (args) => request("GET", "/my-projects/invites", { hasBody: false }, args),
      // POST /my-projects/invites/{clientId}/decline — rank: any-builder — POST /my-projects/invites/:clientId/decline
      postMyProjectsInvitesClientIdDecline: (args) => request("POST", "/my-projects/invites/{clientId}/decline", { hasBody: true }, args),
      // POST /my-projects/join — rank: any-builder — POST /my-projects/join
      postMyProjectsJoin: (args) => request("POST", "/my-projects/join", { hasBody: true }, args),
    },
    "notes": {
      // GET /notes — rank: any-builder — GET /notes
      getNotes: (args) => request("GET", "/notes", { hasBody: false }, args),
      // POST /notes — rank: any-builder — POST /notes
      postNotes: (args) => request("POST", "/notes", { hasBody: true }, args),
      // DELETE /notes/{id} — rank: any-builder — DELETE /notes/:id
      deleteNotesId: (args) => request("DELETE", "/notes/{id}", { hasBody: false }, args),
      // PATCH /notes/{id} — rank: any-builder — PATCH /notes/:id
      patchNotesId: (args) => request("PATCH", "/notes/{id}", { hasBody: true }, args),
    },
    "npmRelease": {
      // DELETE /npm-release/preview — rank: any-builder — DELETE /npm-release/preview
      deleteNpmReleasePreview: (args) => request("DELETE", "/npm-release/preview", { hasBody: false }, args),
      // GET /npm-release/preview — rank: any-builder — GET /npm-release/preview
      getNpmReleasePreview: (args) => request("GET", "/npm-release/preview", { hasBody: false }, args),
      // POST /npm-release/preview — rank: any-builder — POST /npm-release/preview
      postNpmReleasePreview: (args) => request("POST", "/npm-release/preview", { hasBody: true }, args),
      // GET /npm-release/preview/enter — rank: any-builder — GET /npm-release/preview/enter
      getNpmReleasePreviewEnter: (args) => request("GET", "/npm-release/preview/enter", { hasBody: false }, args),
      // GET /npm-release/preview/exit — rank: any-builder — GET /npm-release/preview/exit
      getNpmReleasePreviewExit: (args) => request("GET", "/npm-release/preview/exit", { hasBody: false }, args),
      // POST /npm-release/release — rank: archon — POST /npm-release/release
      postNpmReleaseRelease: (args) => request("POST", "/npm-release/release", { hasBody: true }, args),
      // GET /npm-release/task/{id} — rank: any-builder — GET /npm-release/task/:id
      getNpmReleaseTaskId: (args) => request("GET", "/npm-release/task/{id}", { hasBody: false }, args),
      // GET /npm-release/work — rank: archon — GET /npm-release/work
      getNpmReleaseWork: (args) => request("GET", "/npm-release/work", { hasBody: false }, args),
    },
    "overrideRequests": {
      // GET /override-requests — rank: metic+archon — GET /override-requests
      getOverrideRequests: (args) => request("GET", "/override-requests", { hasBody: false }, args),
      // POST /override-requests/{id}/decide — rank: metic+archon — POST /override-requests/:id/decide
      postOverrideRequestsIdDecide: (args) => request("POST", "/override-requests/{id}/decide", { hasBody: true }, args),
    },
    "pageNotes": {
      // GET /page-notes — rank: any-builder — GET /page-notes
      getPageNotes: (args) => request("GET", "/page-notes", { hasBody: false }, args),
      // POST /page-notes — rank: any-builder — POST /page-notes
      postPageNotes: (args) => request("POST", "/page-notes", { hasBody: true }, args),
      // GET /page-notes/{id} — rank: any-builder — GET /page-notes/:id
      getPageNotesId: (args) => request("GET", "/page-notes/{id}", { hasBody: false }, args),
      // PATCH /page-notes/{id} — rank: any-builder — PATCH /page-notes/:id
      patchPageNotesId: (args) => request("PATCH", "/page-notes/{id}", { hasBody: true }, args),
      // POST /page-notes/{id}/images — rank: any-builder — POST /page-notes/:id/images
      postPageNotesIdImages: (args) => request("POST", "/page-notes/{id}/images", { hasBody: true }, args),
      // POST /page-notes/{id}/submit — rank: any-builder — POST /page-notes/:id/submit
      postPageNotesIdSubmit: (args) => request("POST", "/page-notes/{id}/submit", { hasBody: true }, args),
      // GET /page-notes/ideas — rank: any-builder — GET /page-notes/ideas
      getPageNotesIdeas: (args) => request("GET", "/page-notes/ideas", { hasBody: false }, args),
      // POST /page-notes/ideas — rank: any-builder — POST /page-notes/ideas
      postPageNotesIdeas: (args) => request("POST", "/page-notes/ideas", { hasBody: true }, args),
      // GET /page-notes/images/{id} — rank: any-builder — GET /page-notes/images/:id
      getPageNotesImagesId: (args) => request("GET", "/page-notes/images/{id}", { hasBody: false }, args),
      // GET /page-notes/site — rank: any-builder — GET /page-notes/site
      getPageNotesSite: (args) => request("GET", "/page-notes/site", { hasBody: false }, args),
    },
    "payTerms": {
      // GET /pay-terms — rank: any-builder — GET /pay-terms
      getPayTerms: (args) => request("GET", "/pay-terms", { hasBody: false }, args),
    },
    "payTypeGates": {
      // GET /pay-type-gates — rank: any-builder — GET /pay-type-gates
      getPayTypeGates: (args) => request("GET", "/pay-type-gates", { hasBody: false }, args),
      // PUT /pay-type-gates/{payType}/{requirement} — rank: archon — PUT /pay-type-gates/:payType/:requirement
      putPayTypeGatesPayTypeRequirement: (args) => request("PUT", "/pay-type-gates/{payType}/{requirement}", { hasBody: true }, args),
    },
    "payouts": {
      // POST /payouts/age-records — rank: archon — POST /payouts/age-records
      postPayoutsAgeRecords: (args) => request("POST", "/payouts/age-records", { hasBody: true }, args),
      // GET /payouts/approvals — rank: archon — GET /payouts/approvals
      getPayoutsApprovals: (args) => request("GET", "/payouts/approvals", { hasBody: false }, args),
      // POST /payouts/approve — rank: archon — POST /payouts/approve
      postPayoutsApprove: (args) => request("POST", "/payouts/approve", { hasBody: true }, args),
      // GET /payouts/builder-payouts — rank: archon — GET /payouts/builder-payouts
      getPayoutsBuilderPayouts: (args) => request("GET", "/payouts/builder-payouts", { hasBody: false }, args),
      // POST /payouts/builder-payouts — rank: archon — POST /payouts/builder-payouts
      postPayoutsBuilderPayouts: (args) => request("POST", "/payouts/builder-payouts", { hasBody: true }, args),
      // POST /payouts/contracts — rank: archon — POST /payouts/contracts
      postPayoutsContracts: (args) => request("POST", "/payouts/contracts", { hasBody: true }, args),
      // POST /payouts/freezes — rank: archon — POST /payouts/freezes
      postPayoutsFreezes: (args) => request("POST", "/payouts/freezes", { hasBody: true }, args),
      // POST /payouts/freezes/{id}/decide — rank: archon — POST /payouts/freezes/:id/decide
      postPayoutsFreezesIdDecide: (args) => request("POST", "/payouts/freezes/{id}/decide", { hasBody: true }, args),
      // GET /payouts/gates/{builderId} — rank: archon — GET /payouts/gates/:builderId
      getPayoutsGatesBuilderId: (args) => request("GET", "/payouts/gates/{builderId}", { hasBody: false }, args),
      // POST /payouts/grants — rank: archon — POST /payouts/grants
      postPayoutsGrants: (args) => request("POST", "/payouts/grants", { hasBody: true }, args),
      // POST /payouts/guardians — rank: archon — POST /payouts/guardians
      postPayoutsGuardians: (args) => request("POST", "/payouts/guardians", { hasBody: true }, args),
      // POST /payouts/module-sales — rank: archon — POST /payouts/module-sales
      postPayoutsModuleSales: (args) => request("POST", "/payouts/module-sales", { hasBody: true }, args),
      // GET /payouts/module-shares — rank: archon — GET /payouts/module-shares
      getPayoutsModuleShares: (args) => request("GET", "/payouts/module-shares", { hasBody: false }, args),
      // POST /payouts/module-shares/{id}/pay — rank: archon — POST /payouts/module-shares/:id/pay
      postPayoutsModuleSharesIdPay: (args) => request("POST", "/payouts/module-shares/{id}/pay", { hasBody: true }, args),
      // GET /payouts/module-shares/mine — rank: any-builder — GET /payouts/module-shares/mine
      getPayoutsModuleSharesMine: (args) => request("GET", "/payouts/module-shares/mine", { hasBody: false }, args),
      // GET /payouts/module-splits/{moduleKey} — rank: archon — GET /payouts/module-splits/:moduleKey
      getPayoutsModuleSplitsModuleKey: (args) => request("GET", "/payouts/module-splits/{moduleKey}", { hasBody: false }, args),
      // POST /payouts/module-splits/{moduleKey} — rank: archon — POST /payouts/module-splits/:moduleKey
      postPayoutsModuleSplitsModuleKey: (args) => request("POST", "/payouts/module-splits/{moduleKey}", { hasBody: true }, args),
      // POST /payouts/ndas — rank: archon — POST /payouts/ndas
      postPayoutsNdas: (args) => request("POST", "/payouts/ndas", { hasBody: true }, args),
      // GET /payouts/rules — rank: archon — GET /payouts/rules
      getPayoutsRules: (args) => request("GET", "/payouts/rules", { hasBody: false }, args),
      // POST /payouts/rules — rank: archon — POST /payouts/rules
      postPayoutsRules: (args) => request("POST", "/payouts/rules", { hasBody: true }, args),
      // POST /payouts/rules/{id}/narrow — rank: archon — POST /payouts/rules/:id/narrow
      postPayoutsRulesIdNarrow: (args) => request("POST", "/payouts/rules/{id}/narrow", { hasBody: true }, args),
      // POST /payouts/rules/{id}/revoke — rank: archon — POST /payouts/rules/:id/revoke
      postPayoutsRulesIdRevoke: (args) => request("POST", "/payouts/rules/{id}/revoke", { hasBody: true }, args),
      // POST /payouts/rules/{id}/runs — rank: archon — POST /payouts/rules/:id/runs
      postPayoutsRulesIdRuns: (args) => request("POST", "/payouts/rules/{id}/runs", { hasBody: true }, args),
      // POST /payouts/rules/{id}/runs/{runKey}/hold — rank: archon — POST /payouts/rules/:id/runs/:runKey/hold
      postPayoutsRulesIdRunsRunKeyHold: (args) => request("POST", "/payouts/rules/{id}/runs/{runKey}/hold", { hasBody: true }, args),
      // POST /payouts/screenings — rank: archon — POST /payouts/screenings
      postPayoutsScreenings: (args) => request("POST", "/payouts/screenings", { hasBody: true }, args),
      // POST /payouts/tax-details — rank: archon — POST /payouts/tax-details
      postPayoutsTaxDetails: (args) => request("POST", "/payouts/tax-details", { hasBody: true }, args),
    },
    "processor": {
      // POST /processor/webhook — rank: public — POST /processor/webhook
      postProcessorWebhook: (args) => request("POST", "/processor/webhook", { hasBody: true }, args),
    },
    "profiles": {
      // GET /profiles/{handle} — rank: public — GET /profiles/:handle
      getProfilesHandle: (args) => request("GET", "/profiles/{handle}", { hasBody: false }, args),
    },
    "project": {
      // GET /project/manage-link — rank: archon — GET /project/manage-link
      getProjectManageLink: (args) => request("GET", "/project/manage-link", { hasBody: false }, args),
    },
    "projectAccount": {
      // GET /project-account — rank: archon — GET /project-account
      getProjectAccount: (args) => request("GET", "/project-account", { hasBody: false }, args),
      // GET /project-account/ledger-checks — rank: archon — GET /project-account/ledger-checks
      getProjectAccountLedgerChecks: (args) => request("GET", "/project-account/ledger-checks", { hasBody: false }, args),
      // GET /project-account/outflow — rank: archon — GET /project-account/outflow
      getProjectAccountOutflow: (args) => request("GET", "/project-account/outflow", { hasBody: false }, args),
    },
    "projectSettings": {
      // GET /project-settings — rank: metic+archon — GET /project-settings
      getProjectSettings: (args) => request("GET", "/project-settings", { hasBody: false }, args),
      // GET /project-settings/funding-wall — rank: any-builder — GET /project-settings/funding-wall
      getProjectSettingsFundingWall: (args) => request("GET", "/project-settings/funding-wall", { hasBody: false }, args),
      // PATCH /project-settings/funding-wall — rank: metic+archon — PATCH /project-settings/funding-wall
      patchProjectSettingsFundingWall: (args) => request("PATCH", "/project-settings/funding-wall", { hasBody: true }, args),
      // PATCH /project-settings/pay-terms — rank: metic+archon — PATCH /project-settings/pay-terms
      patchProjectSettingsPayTerms: (args) => request("PATCH", "/project-settings/pay-terms", { hasBody: true }, args),
      // PATCH /project-settings/rot-days — rank: metic+archon — PATCH /project-settings/rot-days
      patchProjectSettingsRotDays: (args) => request("PATCH", "/project-settings/rot-days", { hasBody: true }, args),
      // GET /project-settings/ship-mode — rank: any-builder — GET /project-settings/ship-mode
      getProjectSettingsShipMode: (args) => request("GET", "/project-settings/ship-mode", { hasBody: false }, args),
      // PATCH /project-settings/ship-mode — rank: metic+archon — PATCH /project-settings/ship-mode
      patchProjectSettingsShipMode: (args) => request("PATCH", "/project-settings/ship-mode", { hasBody: true }, args),
      // PATCH /project-settings/spend-cap — rank: metic+archon — PATCH /project-settings/spend-cap
      patchProjectSettingsSpendCap: (args) => request("PATCH", "/project-settings/spend-cap", { hasBody: true }, args),
      // GET /project-settings/tweak-autopickup — rank: any-builder — GET /project-settings/tweak-autopickup
      getProjectSettingsTweakAutopickup: (args) => request("GET", "/project-settings/tweak-autopickup", { hasBody: false }, args),
      // PATCH /project-settings/tweak-autopickup — rank: metic+archon — PATCH /project-settings/tweak-autopickup
      patchProjectSettingsTweakAutopickup: (args) => request("PATCH", "/project-settings/tweak-autopickup", { hasBody: true }, args),
    },
    "projects": {
      // GET /projects — rank: metic+archon — GET /projects
      getProjects: (args) => request("GET", "/projects", { hasBody: false }, args),
      // POST /projects — rank: metic+archon — POST /projects
      postProjects: (args) => request("POST", "/projects", { hasBody: true }, args),
      // PATCH /projects/{id}/featured — rank: metic+archon — PATCH /projects/:id/featured
      patchProjectsIdFeatured: (args) => request("PATCH", "/projects/{id}/featured", { hasBody: true }, args),
      // PATCH /projects/{id}/status — rank: metic+archon — PATCH /projects/:id/status
      patchProjectsIdStatus: (args) => request("PATCH", "/projects/{id}/status", { hasBody: true }, args),
      // POST /projects/{projectId}/specialities — rank: any-builder — POST /projects/:projectId/specialities
      postProjectsProjectIdSpecialities: (args) => request("POST", "/projects/{projectId}/specialities", { hasBody: true }, args),
      // GET /projects/featured — rank: public — GET /projects/featured
      getProjectsFeatured: (args) => request("GET", "/projects/featured", { hasBody: false }, args),
      // POST /projects/invite — rank: metic+archon — POST /projects/invite
      postProjectsInvite: (args) => request("POST", "/projects/invite", { hasBody: true }, args),
      // POST /projects/invite-guild — rank: metic+archon — POST /projects/invite-guild
      postProjectsInviteGuild: (args) => request("POST", "/projects/invite-guild", { hasBody: true }, args),
    },
    "provisioning": {
      // GET /provisioning/control-plane — rank: archon — GET /provisioning/control-plane
      getProvisioningControlPlane: (args) => request("GET", "/provisioning/control-plane", { hasBody: false }, args),
      // POST /provisioning/creation-doc — rank: any-builder — POST /provisioning/creation-doc
      postProvisioningCreationDoc: (args) => request("POST", "/provisioning/creation-doc", { hasBody: true }, args),
      // POST /provisioning/creation-doc/file — rank: any-builder — POST /provisioning/creation-doc/file
      postProvisioningCreationDocFile: (args) => request("POST", "/provisioning/creation-doc/file", { hasBody: true }, args),
      // POST /provisioning/creation-doc/read — rank: any-builder — POST /provisioning/creation-doc/read
      postProvisioningCreationDocRead: (args) => request("POST", "/provisioning/creation-doc/read", { hasBody: true }, args),
      // GET /provisioning/fleet — rank: metic+archon — GET /provisioning/fleet
      getProvisioningFleet: (args) => request("GET", "/provisioning/fleet", { hasBody: false }, args),
      // GET /provisioning/fleet/cost-ledger — rank: metic+archon — GET /provisioning/fleet/cost-ledger
      getProvisioningFleetCostLedger: (args) => request("GET", "/provisioning/fleet/cost-ledger", { hasBody: false }, args),
      // GET /provisioning/github-app/callback — rank: public — GET /provisioning/github-app/callback
      getProvisioningGithubAppCallback: (args) => request("GET", "/provisioning/github-app/callback", { hasBody: false }, args),
      // GET /provisioning/github-app/resume — rank: any-builder — GET /provisioning/github-app/resume
      getProvisioningGithubAppResume: (args) => request("GET", "/provisioning/github-app/resume", { hasBody: false }, args),
      // GET /provisioning/github-app/return — rank: public — GET /provisioning/github-app/return
      getProvisioningGithubAppReturn: (args) => request("GET", "/provisioning/github-app/return", { hasBody: false }, args),
      // GET /provisioning/github-app/setup — rank: public — GET /provisioning/github-app/setup
      getProvisioningGithubAppSetup: (args) => request("GET", "/provisioning/github-app/setup", { hasBody: false }, args),
      // GET /provisioning/github-app/status — rank: public — GET /provisioning/github-app/status
      getProvisioningGithubAppStatus: (args) => request("GET", "/provisioning/github-app/status", { hasBody: false }, args),
      // GET /provisioning/health — rank: public — GET /provisioning/health
      getProvisioningHealth: (args) => request("GET", "/provisioning/health", { hasBody: false }, args),
      // GET /provisioning/instances — rank: any-builder — GET /provisioning/instances
      getProvisioningInstances: (args) => request("GET", "/provisioning/instances", { hasBody: false }, args),
      // POST /provisioning/instances — rank: any-builder — POST /provisioning/instances
      postProvisioningInstances: (args) => request("POST", "/provisioning/instances", { hasBody: true }, args),
      // GET /provisioning/instances/{id} — rank: any-builder — GET /provisioning/instances/:id
      getProvisioningInstancesId: (args) => request("GET", "/provisioning/instances/{id}", { hasBody: false }, args),
      // GET /provisioning/instances/{id}/core-upgrade — rank: archon — GET /provisioning/instances/:id/core-upgrade
      getProvisioningInstancesIdCoreUpgrade: (args) => request("GET", "/provisioning/instances/{id}/core-upgrade", { hasBody: false }, args),
      // POST /provisioning/instances/{id}/core-upgrade — rank: archon — POST /provisioning/instances/:id/core-upgrade
      postProvisioningInstancesIdCoreUpgrade: (args) => request("POST", "/provisioning/instances/{id}/core-upgrade", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/demo — rank: any-builder — POST /provisioning/instances/:id/demo
      postProvisioningInstancesIdDemo: (args) => request("POST", "/provisioning/instances/{id}/demo", { hasBody: true }, args),
      // PATCH /provisioning/instances/{id}/detail — rank: any-builder — PATCH /provisioning/instances/:id/detail
      patchProvisioningInstancesIdDetail: (args) => request("PATCH", "/provisioning/instances/{id}/detail", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/disconnect — rank: any-builder — POST /provisioning/instances/:id/disconnect
      postProvisioningInstancesIdDisconnect: (args) => request("POST", "/provisioning/instances/{id}/disconnect", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/domain — rank: any-builder — POST /provisioning/instances/:id/domain
      postProvisioningInstancesIdDomain: (args) => request("POST", "/provisioning/instances/{id}/domain", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/env-manifest — rank: any-builder — GET /provisioning/instances/:id/env-manifest
      getProvisioningInstancesIdEnvManifest: (args) => request("GET", "/provisioning/instances/{id}/env-manifest", { hasBody: false }, args),
      // POST /provisioning/instances/{id}/env-manifest — rank: any-builder — POST /provisioning/instances/:id/env-manifest
      postProvisioningInstancesIdEnvManifest: (args) => request("POST", "/provisioning/instances/{id}/env-manifest", { hasBody: true }, args),
      // DELETE /provisioning/instances/{id}/env-manifest/{varId} — rank: any-builder — DELETE /provisioning/instances/:id/env-manifest/:varId
      deleteProvisioningInstancesIdEnvManifestVarId: (args) => request("DELETE", "/provisioning/instances/{id}/env-manifest/{varId}", { hasBody: false }, args),
      // PATCH /provisioning/instances/{id}/env-manifest/{varId} — rank: any-builder — PATCH /provisioning/instances/:id/env-manifest/:varId
      patchProvisioningInstancesIdEnvManifestVarId: (args) => request("PATCH", "/provisioning/instances/{id}/env-manifest/{varId}", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/force-teardown — rank: metic+archon — POST /provisioning/instances/:id/force-teardown
      postProvisioningInstancesIdForceTeardown: (args) => request("POST", "/provisioning/instances/{id}/force-teardown", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/github-app — rank: any-builder — POST /provisioning/instances/:id/github-app
      postProvisioningInstancesIdGithubApp: (args) => request("POST", "/provisioning/instances/{id}/github-app", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/github-app/pick-up — rank: any-builder — POST /provisioning/instances/:id/github-app/pick-up
      postProvisioningInstancesIdGithubAppPickUp: (args) => request("POST", "/provisioning/instances/{id}/github-app/pick-up", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/grants — rank: any-builder — GET /provisioning/instances/:id/grants
      getProvisioningInstancesIdGrants: (args) => request("GET", "/provisioning/instances/{id}/grants", { hasBody: false }, args),
      // POST /provisioning/instances/{id}/grants — rank: any-builder — POST /provisioning/instances/:id/grants
      postProvisioningInstancesIdGrants: (args) => request("POST", "/provisioning/instances/{id}/grants", { hasBody: true }, args),
      // DELETE /provisioning/instances/{id}/grants/{grantId} — rank: any-builder — DELETE /provisioning/instances/:id/grants/:grantId
      deleteProvisioningInstancesIdGrantsGrantId: (args) => request("DELETE", "/provisioning/instances/{id}/grants/{grantId}", { hasBody: false }, args),
      // GET /provisioning/instances/{id}/invite-suggestions — rank: any-builder — GET /provisioning/instances/:id/invite-suggestions
      getProvisioningInstancesIdInviteSuggestions: (args) => request("GET", "/provisioning/instances/{id}/invite-suggestions", { hasBody: false }, args),
      // DELETE /provisioning/instances/{id}/logo — rank: any-builder — DELETE /provisioning/instances/:id/logo
      deleteProvisioningInstancesIdLogo: (args) => request("DELETE", "/provisioning/instances/{id}/logo", { hasBody: true }, args),
      // PUT /provisioning/instances/{id}/logo — rank: any-builder — PUT /provisioning/instances/:id/logo
      putProvisioningInstancesIdLogo: (args) => request("PUT", "/provisioning/instances/{id}/logo", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/look — rank: any-builder — GET /provisioning/instances/:id/look
      getProvisioningInstancesIdLook: (args) => request("GET", "/provisioning/instances/{id}/look", { hasBody: false }, args),
      // PATCH /provisioning/instances/{id}/look — rank: any-builder — PATCH /provisioning/instances/:id/look
      patchProvisioningInstancesIdLook: (args) => request("PATCH", "/provisioning/instances/{id}/look", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/render — rank: any-builder — GET /provisioning/instances/:id/render
      getProvisioningInstancesIdRender: (args) => request("GET", "/provisioning/instances/{id}/render", { hasBody: false }, args),
      // POST /provisioning/instances/{id}/render — rank: any-builder — POST /provisioning/instances/:id/render
      postProvisioningInstancesIdRender: (args) => request("POST", "/provisioning/instances/{id}/render", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/render/promote — rank: any-builder — POST /provisioning/instances/:id/render/promote
      postProvisioningInstancesIdRenderPromote: (args) => request("POST", "/provisioning/instances/{id}/render/promote", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/render/promote/look — rank: any-builder — POST /provisioning/instances/:id/render/promote/look
      postProvisioningInstancesIdRenderPromoteLook: (args) => request("POST", "/provisioning/instances/{id}/render/promote/look", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/render/sandbox — rank: any-builder — POST /provisioning/instances/:id/render/sandbox
      postProvisioningInstancesIdRenderSandbox: (args) => request("POST", "/provisioning/instances/{id}/render/sandbox", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/render/sandbox/database — rank: any-builder — POST /provisioning/instances/:id/render/sandbox/database
      postProvisioningInstancesIdRenderSandboxDatabase: (args) => request("POST", "/provisioning/instances/{id}/render/sandbox/database", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/repo-private — rank: any-builder — POST /provisioning/instances/:id/repo-private
      postProvisioningInstancesIdRepoPrivate: (args) => request("POST", "/provisioning/instances/{id}/repo-private", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/restart — rank: any-builder — POST /provisioning/instances/:id/restart
      postProvisioningInstancesIdRestart: (args) => request("POST", "/provisioning/instances/{id}/restart", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/settings — rank: any-builder — GET /provisioning/instances/:id/settings
      getProvisioningInstancesIdSettings: (args) => request("GET", "/provisioning/instances/{id}/settings", { hasBody: false }, args),
      // PATCH /provisioning/instances/{id}/settings — rank: any-builder — PATCH /provisioning/instances/:id/settings
      patchProvisioningInstancesIdSettings: (args) => request("PATCH", "/provisioning/instances/{id}/settings", { hasBody: true }, args),
      // PUT /provisioning/instances/{id}/ship-points — rank: any-builder — PUT /provisioning/instances/:id/ship-points
      putProvisioningInstancesIdShipPoints: (args) => request("PUT", "/provisioning/instances/{id}/ship-points", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/teardown — rank: any-builder — POST /provisioning/instances/:id/teardown
      postProvisioningInstancesIdTeardown: (args) => request("POST", "/provisioning/instances/{id}/teardown", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/update-channel — rank: archon — POST /provisioning/instances/:id/update-channel
      postProvisioningInstancesIdUpdateChannel: (args) => request("POST", "/provisioning/instances/{id}/update-channel", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/update-subscription — rank: metic+archon — POST /provisioning/instances/:id/update-subscription
      postProvisioningInstancesIdUpdateSubscription: (args) => request("POST", "/provisioning/instances/{id}/update-subscription", { hasBody: true }, args),
      // GET /provisioning/logos/{file} — rank: public — GET /provisioning/logos/:file
      getProvisioningLogosFile: (args) => request("GET", "/provisioning/logos/{file}", { hasBody: false }, args),
      // GET /provisioning/onboard-plan — rank: public — GET /provisioning/onboard-plan
      getProvisioningOnboardPlan: (args) => request("GET", "/provisioning/onboard-plan", { hasBody: false }, args),
      // POST /provisioning/physics-check — rank: any-builder — POST /provisioning/physics-check
      postProvisioningPhysicsCheck: (args) => request("POST", "/provisioning/physics-check", { hasBody: true }, args),
      // GET /provisioning/recommendations — rank: public — GET /provisioning/recommendations
      getProvisioningRecommendations: (args) => request("GET", "/provisioning/recommendations", { hasBody: false }, args),
      // POST /provisioning/render/lookup — rank: any-builder — POST /provisioning/render/lookup
      postProvisioningRenderLookup: (args) => request("POST", "/provisioning/render/lookup", { hasBody: true }, args),
      // GET /provisioning/slug-available — rank: any-builder — GET /provisioning/slug-available
      getProvisioningSlugAvailable: (args) => request("GET", "/provisioning/slug-available", { hasBody: false }, args),
      // GET /provisioning/starter-bundles — rank: public — GET /provisioning/starter-bundles
      getProvisioningStarterBundles: (args) => request("GET", "/provisioning/starter-bundles", { hasBody: false }, args),
      // GET /provisioning/tls-check — rank: public — GET /provisioning/tls-check
      getProvisioningTlsCheck: (args) => request("GET", "/provisioning/tls-check", { hasBody: false }, args),
    },
    "public": {
      // GET /public/analytics/ecosystem — rank: public — GET /public/analytics/ecosystem
      getPublicAnalyticsEcosystem: (args) => request("GET", "/public/analytics/ecosystem", { hasBody: false }, args),
      // GET /public/blockers/{id} — rank: public — GET /public/blockers/:id
      getPublicBlockersId: (args) => request("GET", "/public/blockers/{id}", { hasBody: false }, args),
      // GET /public/bounty-table — rank: public — GET /public/bounty-table
      getPublicBountyTable: (args) => request("GET", "/public/bounty-table", { hasBody: false }, args),
      // GET /public/branding — rank: public — GET /public/branding
      getPublicBranding: (args) => request("GET", "/public/branding", { hasBody: false }, args),
      // GET /public/cost-summary — rank: public — GET /public/cost-summary
      getPublicCostSummary: (args) => request("GET", "/public/cost-summary", { hasBody: false }, args),
      // GET /public/estimation-drift — rank: public — GET /public/estimation-drift
      getPublicEstimationDrift: (args) => request("GET", "/public/estimation-drift", { hasBody: false }, args),
      // GET /public/grades — rank: public — GET /public/grades
      getPublicGrades: (args) => request("GET", "/public/grades", { hasBody: false }, args),
      // GET /public/ideas/{id} — rank: public — GET /public/ideas/:id
      getPublicIdeasId: (args) => request("GET", "/public/ideas/{id}", { hasBody: false }, args),
      // GET /public/leaderboard — rank: public — GET /public/leaderboard
      getPublicLeaderboard: (args) => request("GET", "/public/leaderboard", { hasBody: false }, args),
      // GET /public/modules — rank: public — GET /public/modules
      getPublicModules: (args) => request("GET", "/public/modules", { hasBody: false }, args),
      // GET /public/progress — rank: public — GET /public/progress
      getPublicProgress: (args) => request("GET", "/public/progress", { hasBody: false }, args),
      // GET /public/recent-shipped — rank: public — GET /public/recent-shipped
      getPublicRecentShipped: (args) => request("GET", "/public/recent-shipped", { hasBody: false }, args),
      // GET /public/ref-ids — rank: public — GET /public/ref-ids
      getPublicRefIds: (args) => request("GET", "/public/ref-ids", { hasBody: false }, args),
      // GET /public/repo-health — rank: public — GET /public/repo-health
      getPublicRepoHealth: (args) => request("GET", "/public/repo-health", { hasBody: false }, args),
      // GET /public/repo-info — rank: public — GET /public/repo-info
      getPublicRepoInfo: (args) => request("GET", "/public/repo-info", { hasBody: false }, args),
      // GET /public/tasks/{id} — rank: public — GET /public/tasks/:id
      getPublicTasksId: (args) => request("GET", "/public/tasks/{id}", { hasBody: false }, args),
      // GET /public/versions — rank: public — GET /public/versions
      getPublicVersions: (args) => request("GET", "/public/versions", { hasBody: false }, args),
    },
    "raise": {
      // POST /raise/edit — rank: any-builder — POST /raise/edit
      postRaiseEdit: (args) => request("POST", "/raise/edit", { hasBody: true }, args),
      // POST /raise/enter — rank: public — POST /raise/enter
      postRaiseEnter: (args) => request("POST", "/raise/enter", { hasBody: true }, args),
      // POST /raise/interest — rank: public — POST /raise/interest
      postRaiseInterest: (args) => request("POST", "/raise/interest", { hasBody: true }, args),
    },
    "removalProposals": {
      // GET /removal-proposals — rank: metic+archon — GET /removal-proposals
      getRemovalProposals: (args) => request("GET", "/removal-proposals", { hasBody: false }, args),
      // POST /removal-proposals/{id}/decide — rank: metic+archon — POST /removal-proposals/:id/decide
      postRemovalProposalsIdDecide: (args) => request("POST", "/removal-proposals/{id}/decide", { hasBody: true }, args),
    },
    "renderDeploy": {
      // POST /render-deploy/act — rank: archon — POST /render-deploy/act
      postRenderDeployAct: (args) => request("POST", "/render-deploy/act", { hasBody: true }, args),
      // GET /render-deploy/app — rank: archon — GET /render-deploy/app
      getRenderDeployApp: (args) => request("GET", "/render-deploy/app", { hasBody: false }, args),
      // PUT /render-deploy/app — rank: archon — PUT /render-deploy/app
      putRenderDeployApp: (args) => request("PUT", "/render-deploy/app", { hasBody: true }, args),
      // GET /render-deploy/history — rank: archon — GET /render-deploy/history
      getRenderDeployHistory: (args) => request("GET", "/render-deploy/history", { hasBody: false }, args),
    },
    "scouting": {
      // GET /scouting — rank: metic+archon — GET /scouting
      getScouting: (args) => request("GET", "/scouting", { hasBody: false }, args),
      // GET /scouting/{handle} — rank: archon — GET /scouting/:handle
      getScoutingHandle: (args) => request("GET", "/scouting/{handle}", { hasBody: false }, args),
    },
    "search": {
      // POST /search — rank: any-builder — POST /search
      postSearch: (args) => request("POST", "/search", { hasBody: true }, args),
      // POST /search/mark — rank: any-builder — POST /search/mark
      postSearchMark: (args) => request("POST", "/search/mark", { hasBody: true }, args),
    },
    "security": {
      // GET /security/adr — rank: metic+archon — GET /security/adr
      getSecurityAdr: (args) => request("GET", "/security/adr", { hasBody: false }, args),
      // GET /security/docs — rank: metic+archon — GET /security/docs
      getSecurityDocs: (args) => request("GET", "/security/docs", { hasBody: false }, args),
      // POST /security/docs — rank: metic+archon — POST /security/docs
      postSecurityDocs: (args) => request("POST", "/security/docs", { hasBody: true }, args),
      // GET /security/docs/{slug} — rank: metic+archon — GET /security/docs/:slug
      getSecurityDocsSlug: (args) => request("GET", "/security/docs/{slug}", { hasBody: false }, args),
      // GET /security/reports — rank: metic+archon — GET /security/reports
      getSecurityReports: (args) => request("GET", "/security/reports", { hasBody: false }, args),
      // POST /security/reports — rank: metic+archon — POST /security/reports
      postSecurityReports: (args) => request("POST", "/security/reports", { hasBody: true }, args),
      // POST /security/reports/{id}/confirm — rank: metic+archon — POST /security/reports/:id/confirm
      postSecurityReportsIdConfirm: (args) => request("POST", "/security/reports/{id}/confirm", { hasBody: true }, args),
      // POST /security/reports/{id}/dispute — rank: metic+archon — POST /security/reports/:id/dispute
      postSecurityReportsIdDispute: (args) => request("POST", "/security/reports/{id}/dispute", { hasBody: true }, args),
      // POST /security/reports/{id}/fix — rank: metic+archon — POST /security/reports/:id/fix
      postSecurityReportsIdFix: (args) => request("POST", "/security/reports/{id}/fix", { hasBody: true }, args),
      // POST /security/reports/{id}/link-fix — rank: metic+archon — POST /security/reports/:id/link-fix
      postSecurityReportsIdLinkFix: (args) => request("POST", "/security/reports/{id}/link-fix", { hasBody: true }, args),
      // GET /security/scans — rank: any-builder — GET /security/scans
      getSecurityScans: (args) => request("GET", "/security/scans", { hasBody: false }, args),
      // POST /security/scans — rank: metic+archon — POST /security/scans
      postSecurityScans: (args) => request("POST", "/security/scans", { hasBody: true }, args),
    },
    "session": {
      // POST /session/optimize — rank: any-builder — POST /session/optimize
      postSessionOptimize: (args) => request("POST", "/session/optimize", { hasBody: true }, args),
    },
    "sessions": {
      // POST /sessions — rank: any-builder — POST /sessions
      postSessions: (args) => request("POST", "/sessions", { hasBody: true }, args),
      // GET /sessions/{id} — rank: any-builder — GET /sessions/:id
      getSessionsId: (args) => request("GET", "/sessions/{id}", { hasBody: false }, args),
      // GET /sessions/{id}/transcript — rank: any-builder — GET /sessions/:id/transcript
      getSessionsIdTranscript: (args) => request("GET", "/sessions/{id}/transcript", { hasBody: false }, args),
      // PUT /sessions/{sid}/transcript — rank: any-builder — PUT /sessions/:sid/transcript
      putSessionsSidTranscript: (args) => request("PUT", "/sessions/{sid}/transcript", { hasBody: true }, args),
      // POST /sessions/capture-events — rank: any-builder — POST /sessions/capture-events
      postSessionsCaptureEvents: (args) => request("POST", "/sessions/capture-events", { hasBody: true }, args),
      // GET /sessions/capture-health — rank: metic+archon — GET /sessions/capture-health
      getSessionsCaptureHealth: (args) => request("GET", "/sessions/capture-health", { hasBody: false }, args),
      // GET /sessions/capture-health/mine — rank: any-builder — GET /sessions/capture-health/mine
      getSessionsCaptureHealthMine: (args) => request("GET", "/sessions/capture-health/mine", { hasBody: false }, args),
      // GET /sessions/dynamics — rank: metic+archon — GET /sessions/dynamics
      getSessionsDynamics: (args) => request("GET", "/sessions/dynamics", { hasBody: false }, args),
      // GET /sessions/mine — rank: any-builder — GET /sessions/mine
      getSessionsMine: (args) => request("GET", "/sessions/mine", { hasBody: false }, args),
      // GET /sessions/reports — rank: metic+archon — GET /sessions/reports
      getSessionsReports: (args) => request("GET", "/sessions/reports", { hasBody: false }, args),
      // POST /sessions/reports — rank: metic+archon — POST /sessions/reports
      postSessionsReports: (args) => request("POST", "/sessions/reports", { hasBody: true }, args),
      // GET /sessions/scorecard — rank: metic+archon — GET /sessions/scorecard
      getSessionsScorecard: (args) => request("GET", "/sessions/scorecard", { hasBody: false }, args),
      // GET /sessions/search — rank: metic+archon — GET /sessions/search
      getSessionsSearch: (args) => request("GET", "/sessions/search", { hasBody: false }, args),
      // GET /sessions/task-link-coverage — rank: metic+archon — GET /sessions/task-link-coverage
      getSessionsTaskLinkCoverage: (args) => request("GET", "/sessions/task-link-coverage", { hasBody: false }, args),
      // GET /sessions/upload-health — rank: metic+archon — GET /sessions/upload-health
      getSessionsUploadHealth: (args) => request("GET", "/sessions/upload-health", { hasBody: false }, args),
    },
    "sky": {
      // GET /sky — rank: any-builder — GET /sky
      getSky: (args) => request("GET", "/sky", { hasBody: false }, args),
      // GET /sky/mine — rank: any-builder — GET /sky/mine
      getSkyMine: (args) => request("GET", "/sky/mine", { hasBody: false }, args),
    },
    "softwareUpdate": {
      // GET /software-update — rank: any-builder — GET /software-update
      getSoftwareUpdate: (args) => request("GET", "/software-update", { hasBody: false }, args),
    },
    "specialities": {
      // GET /specialities — rank: any-builder — GET /specialities
      getSpecialities: (args) => request("GET", "/specialities", { hasBody: false }, args),
      // POST /specialities — rank: any-builder — POST /specialities
      postSpecialities: (args) => request("POST", "/specialities", { hasBody: true }, args),
      // GET /specialities/{id} — rank: any-builder — GET /specialities/:id
      getSpecialitiesId: (args) => request("GET", "/specialities/{id}", { hasBody: false }, args),
      // PATCH /specialities/{id} — rank: any-builder — PATCH /specialities/:id
      patchSpecialitiesId: (args) => request("PATCH", "/specialities/{id}", { hasBody: true }, args),
      // POST /specialities/{id}/abandon — rank: any-builder — POST /specialities/:id/abandon
      postSpecialitiesIdAbandon: (args) => request("POST", "/specialities/{id}/abandon", { hasBody: true }, args),
      // POST /specialities/{id}/adopt — rank: any-builder — POST /specialities/:id/adopt
      postSpecialitiesIdAdopt: (args) => request("POST", "/specialities/{id}/adopt", { hasBody: true }, args),
      // GET /specialities/{id}/documents — rank: any-builder — GET /specialities/:id/documents
      getSpecialitiesIdDocuments: (args) => request("GET", "/specialities/{id}/documents", { hasBody: false }, args),
      // POST /specialities/{id}/documents — rank: any-builder — POST /specialities/:id/documents
      postSpecialitiesIdDocuments: (args) => request("POST", "/specialities/{id}/documents", { hasBody: true }, args),
      // DELETE /specialities/{id}/documents/{docId} — rank: any-builder — DELETE /specialities/:id/documents/:docId
      deleteSpecialitiesIdDocumentsDocId: (args) => request("DELETE", "/specialities/{id}/documents/{docId}", { hasBody: false }, args),
      // POST /specialities/{id}/offer — rank: metic+archon — POST /specialities/:id/offer
      postSpecialitiesIdOffer: (args) => request("POST", "/specialities/{id}/offer", { hasBody: true }, args),
      // GET /specialities/{id}/skills — rank: any-builder — GET /specialities/:id/skills
      getSpecialitiesIdSkills: (args) => request("GET", "/specialities/{id}/skills", { hasBody: false }, args),
      // PUT /specialities/{id}/skills — rank: any-builder — PUT /specialities/:id/skills
      putSpecialitiesIdSkills: (args) => request("PUT", "/specialities/{id}/skills", { hasBody: true }, args),
      // POST /specialities/{id}/unoffer — rank: metic+archon — POST /specialities/:id/unoffer
      postSpecialitiesIdUnoffer: (args) => request("POST", "/specialities/{id}/unoffer", { hasBody: true }, args),
      // GET /specialities/installed-skills — rank: any-builder — GET /specialities/installed-skills
      getSpecialitiesInstalledSkills: (args) => request("GET", "/specialities/installed-skills", { hasBody: false }, args),
      // GET /specialities/offered — rank: any-builder — GET /specialities/offered
      getSpecialitiesOffered: (args) => request("GET", "/specialities/offered", { hasBody: false }, args),
    },
    "sso": {
      // POST /sso/activity/rollup — rank: public — POST /sso/activity/rollup
      postSsoActivityRollup: (args) => request("POST", "/sso/activity/rollup", { hasBody: true }, args),
      // POST /sso/app-status — rank: public — POST /sso/app-status
      postSsoAppStatus: (args) => request("POST", "/sso/app-status", { hasBody: true }, args),
      // POST /sso/applicant-profile — rank: public — POST /sso/applicant-profile
      postSsoApplicantProfile: (args) => request("POST", "/sso/applicant-profile", { hasBody: true }, args),
      // GET /sso/authorize — rank: public — GET /sso/authorize
      getSsoAuthorize: (args) => request("GET", "/sso/authorize", { hasBody: false }, args),
      // POST /sso/device/poll — rank: public — POST /sso/device/poll
      postSsoDevicePoll: (args) => request("POST", "/sso/device/poll", { hasBody: true }, args),
      // POST /sso/device/start — rank: public — POST /sso/device/start
      postSsoDeviceStart: (args) => request("POST", "/sso/device/start", { hasBody: true }, args),
      // POST /sso/feedback — rank: public — POST /sso/feedback
      postSsoFeedback: (args) => request("POST", "/sso/feedback", { hasBody: true }, args),
      // POST /sso/feedback/direct — rank: public — POST /sso/feedback/direct
      postSsoFeedbackDirect: (args) => request("POST", "/sso/feedback/direct", { hasBody: true }, args),
      // POST /sso/invites/clear — rank: public — POST /sso/invites/clear
      postSsoInvitesClear: (args) => request("POST", "/sso/invites/clear", { hasBody: true }, args),
      // POST /sso/invites/notify — rank: public — POST /sso/invites/notify
      postSsoInvitesNotify: (args) => request("POST", "/sso/invites/notify", { hasBody: true }, args),
      // POST /sso/membership/check-in — rank: public — POST /sso/membership/check-in
      postSsoMembershipCheckIn: (args) => request("POST", "/sso/membership/check-in", { hasBody: true }, args),
      // POST /sso/membership/offboard — rank: public — POST /sso/membership/offboard
      postSsoMembershipOffboard: (args) => request("POST", "/sso/membership/offboard", { hasBody: true }, args),
      // GET /sso/pubkey — rank: public — GET /sso/pubkey
      getSsoPubkey: (args) => request("GET", "/sso/pubkey", { hasBody: false }, args),
      // POST /sso/token — rank: public — POST /sso/token
      postSsoToken: (args) => request("POST", "/sso/token", { hasBody: true }, args),
    },
    "store": {
      // GET /store/entitlements — rank: any-builder — GET /store/entitlements
      getStoreEntitlements: (args) => request("GET", "/store/entitlements", { hasBody: false }, args),
      // GET /store/modules — rank: any-builder — GET /store/modules
      getStoreModules: (args) => request("GET", "/store/modules", { hasBody: false }, args),
      // POST /store/modules/{key}/acquire — rank: any-builder — POST /store/modules/:key/acquire
      postStoreModulesKeyAcquire: (args) => request("POST", "/store/modules/{key}/acquire", { hasBody: true }, args),
      // POST /store/modules/{key}/acquired — rank: any-builder — POST /store/modules/:key/acquired
      postStoreModulesKeyAcquired: (args) => request("POST", "/store/modules/{key}/acquired", { hasBody: true }, args),
      // POST /store/modules/{key}/delist — rank: metic+archon — POST /store/modules/:key/delist
      postStoreModulesKeyDelist: (args) => request("POST", "/store/modules/{key}/delist", { hasBody: true }, args),
      // GET /store/modules/{key}/entitlement — rank: any-builder — GET /store/modules/:key/entitlement
      getStoreModulesKeyEntitlement: (args) => request("GET", "/store/modules/{key}/entitlement", { hasBody: false }, args),
      // GET /store/modules/{key}/listing — rank: any-builder — GET /store/modules/:key/listing
      getStoreModulesKeyListing: (args) => request("GET", "/store/modules/{key}/listing", { hasBody: false }, args),
      // POST /store/modules/{key}/price — rank: metic+archon — POST /store/modules/:key/price
      postStoreModulesKeyPrice: (args) => request("POST", "/store/modules/{key}/price", { hasBody: true }, args),
      // POST /store/modules/{key}/versions — rank: metic+archon — POST /store/modules/:key/versions
      postStoreModulesKeyVersions: (args) => request("POST", "/store/modules/{key}/versions", { hasBody: true }, args),
      // GET /store/modules/{key}/versions/{version}/channel — rank: any-builder — GET /store/modules/:key/versions/:version/channel
      getStoreModulesKeyVersionsVersionChannel: (args) => request("GET", "/store/modules/{key}/versions/{version}/channel", { hasBody: false }, args),
      // POST /store/modules/{key}/versions/{version}/error-count — rank: any-builder — POST /store/modules/:key/versions/:version/error-count
      postStoreModulesKeyVersionsVersionErrorCount: (args) => request("POST", "/store/modules/{key}/versions/{version}/error-count", { hasBody: true }, args),
      // GET /store/modules/{key}/versions/{version}/howto — rank: any-builder — GET /store/modules/:key/versions/:version/howto
      getStoreModulesKeyVersionsVersionHowto: (args) => request("GET", "/store/modules/{key}/versions/{version}/howto", { hasBody: false }, args),
      // POST /store/modules/{key}/versions/{version}/install-report — rank: any-builder — POST /store/modules/:key/versions/:version/install-report
      postStoreModulesKeyVersionsVersionInstallReport: (args) => request("POST", "/store/modules/{key}/versions/{version}/install-report", { hasBody: true }, args),
      // POST /store/modules/{key}/versions/{version}/reassess — rank: metic+archon — POST /store/modules/:key/versions/:version/reassess
      postStoreModulesKeyVersionsVersionReassess: (args) => request("POST", "/store/modules/{key}/versions/{version}/reassess", { hasBody: true }, args),
      // POST /store/modules/{key}/versions/{version}/release — rank: metic+archon — POST /store/modules/:key/versions/:version/release
      postStoreModulesKeyVersionsVersionRelease: (args) => request("POST", "/store/modules/{key}/versions/{version}/release", { hasBody: true }, args),
      // GET /store/modules/{key}/versions/{version}/tarball — rank: any-builder — GET /store/modules/:key/versions/:version/tarball
      getStoreModulesKeyVersionsVersionTarball: (args) => request("GET", "/store/modules/{key}/versions/{version}/tarball", { hasBody: false }, args),
      // POST /store/modules/{key}/versions/{version}/withdraw — rank: metic+archon — POST /store/modules/:key/versions/:version/withdraw
      postStoreModulesKeyVersionsVersionWithdraw: (args) => request("POST", "/store/modules/{key}/versions/{version}/withdraw", { hasBody: true }, args),
      // GET /store/modules/latest — rank: any-builder — GET /store/modules/latest
      getStoreModulesLatest: (args) => request("GET", "/store/modules/latest", { hasBody: false }, args),
      // GET /store/subcategories — rank: any-builder — GET /store/subcategories
      getStoreSubcategories: (args) => request("GET", "/store/subcategories", { hasBody: false }, args),
      // POST /store/subcategories/{id}/approve — rank: metic+archon — POST /store/subcategories/:id/approve
      postStoreSubcategoriesIdApprove: (args) => request("POST", "/store/subcategories/{id}/approve", { hasBody: true }, args),
      // POST /store/subcategories/{id}/merge — rank: metic+archon — POST /store/subcategories/:id/merge
      postStoreSubcategoriesIdMerge: (args) => request("POST", "/store/subcategories/{id}/merge", { hasBody: true }, args),
      // GET /store/subcategories/queue — rank: metic+archon — GET /store/subcategories/queue
      getStoreSubcategoriesQueue: (args) => request("GET", "/store/subcategories/queue", { hasBody: false }, args),
      // GET /store/usage-reporting — rank: any-builder — GET /store/usage-reporting
      getStoreUsageReporting: (args) => request("GET", "/store/usage-reporting", { hasBody: false }, args),
      // POST /store/usage-reporting — rank: any-builder — POST /store/usage-reporting
      postStoreUsageReporting: (args) => request("POST", "/store/usage-reporting", { hasBody: true }, args),
    },
    "taskRecommendations": {
      // POST /task-recommendations — rank: any-builder — POST /task-recommendations
      postTaskRecommendations: (args) => request("POST", "/task-recommendations", { hasBody: true }, args),
      // PATCH /task-recommendations/{id} — rank: any-builder — PATCH /task-recommendations/:id
      patchTaskRecommendationsId: (args) => request("PATCH", "/task-recommendations/{id}", { hasBody: true }, args),
      // GET /task-recommendations/for-me — rank: any-builder — GET /task-recommendations/for-me
      getTaskRecommendationsForMe: (args) => request("GET", "/task-recommendations/for-me", { hasBody: false }, args),
      // GET /task-recommendations/mine — rank: any-builder — GET /task-recommendations/mine
      getTaskRecommendationsMine: (args) => request("GET", "/task-recommendations/mine", { hasBody: false }, args),
    },
    "taskVisuals": {
      // GET /task-visuals/{name} — rank: public — GET /task-visuals/:name
      getTaskVisualsName: (args) => request("GET", "/task-visuals/{name}", { hasBody: false }, args),
    },
    "tasks": {
      // GET /tasks — rank: any-builder — GET /tasks
      getTasks: (args) => request("GET", "/tasks", { hasBody: false }, args),
      // POST /tasks — rank: metic+archon — POST /tasks
      postTasks: (args) => request("POST", "/tasks", { hasBody: true }, args),
      // GET /tasks/{id} — rank: any-builder — GET /tasks/:id
      getTasksId: (args) => request("GET", "/tasks/{id}", { hasBody: false }, args),
      // PATCH /tasks/{id} — rank: metic+archon — PATCH /tasks/:id
      patchTasksId: (args) => request("PATCH", "/tasks/{id}", { hasBody: true }, args),
      // POST /tasks/{id}/abandon — rank: any-builder — POST /tasks/:id/abandon
      postTasksIdAbandon: (args) => request("POST", "/tasks/{id}/abandon", { hasBody: true }, args),
      // POST /tasks/{id}/attest-gate — rank: any-builder — POST /tasks/:id/attest-gate
      postTasksIdAttestGate: (args) => request("POST", "/tasks/{id}/attest-gate", { hasBody: true }, args),
      // POST /tasks/{id}/confirm — rank: any-builder — POST /tasks/:id/confirm
      postTasksIdConfirm: (args) => request("POST", "/tasks/{id}/confirm", { hasBody: true }, args),
      // GET /tasks/{id}/criteria — rank: any-builder — GET /tasks/:id/criteria
      getTasksIdCriteria: (args) => request("GET", "/tasks/{id}/criteria", { hasBody: false }, args),
      // POST /tasks/{id}/criteria — rank: metic+archon — POST /tasks/:id/criteria
      postTasksIdCriteria: (args) => request("POST", "/tasks/{id}/criteria", { hasBody: true }, args),
      // DELETE /tasks/{id}/criteria/{criterionId} — rank: metic+archon — DELETE /tasks/:id/criteria/:criterionId
      deleteTasksIdCriteriaCriterionId: (args) => request("DELETE", "/tasks/{id}/criteria/{criterionId}", { hasBody: false }, args),
      // POST /tasks/{id}/demote — rank: metic+archon — POST /tasks/:id/demote
      postTasksIdDemote: (args) => request("POST", "/tasks/{id}/demote", { hasBody: true }, args),
      // GET /tasks/{id}/dependencies — rank: any-builder — GET /tasks/:id/dependencies
      getTasksIdDependencies: (args) => request("GET", "/tasks/{id}/dependencies", { hasBody: false }, args),
      // POST /tasks/{id}/dependencies — rank: metic+archon — POST /tasks/:id/dependencies
      postTasksIdDependencies: (args) => request("POST", "/tasks/{id}/dependencies", { hasBody: true }, args),
      // PUT /tasks/{id}/dependencies — rank: metic+archon — PUT /tasks/:id/dependencies
      putTasksIdDependencies: (args) => request("PUT", "/tasks/{id}/dependencies", { hasBody: true }, args),
      // DELETE /tasks/{id}/dependencies/{depId} — rank: metic+archon — DELETE /tasks/:id/dependencies/:depId
      deleteTasksIdDependenciesDepId: (args) => request("DELETE", "/tasks/{id}/dependencies/{depId}", { hasBody: false }, args),
      // POST /tasks/{id}/grade — rank: any-builder — POST /tasks/:id/grade
      postTasksIdGrade: (args) => request("POST", "/tasks/{id}/grade", { hasBody: true }, args),
      // POST /tasks/{id}/merge — rank: metic+archon — POST /tasks/:id/merge
      postTasksIdMerge: (args) => request("POST", "/tasks/{id}/merge", { hasBody: true }, args),
      // POST /tasks/{id}/override-request — rank: any-builder — POST /tasks/:id/override-request
      postTasksIdOverrideRequest: (args) => request("POST", "/tasks/{id}/override-request", { hasBody: true }, args),
      // POST /tasks/{id}/promote — rank: metic+archon — POST /tasks/:id/promote
      postTasksIdPromote: (args) => request("POST", "/tasks/{id}/promote", { hasBody: true }, args),
      // POST /tasks/{id}/publish-branch — rank: any-builder — POST /tasks/:id/publish-branch
      postTasksIdPublishBranch: (args) => request("POST", "/tasks/{id}/publish-branch", { hasBody: true }, args),
      // GET /tasks/{id}/publish-status — rank: any-builder — GET /tasks/:id/publish-status
      getTasksIdPublishStatus: (args) => request("GET", "/tasks/{id}/publish-status", { hasBody: false }, args),
      // GET /tasks/{id}/recommendations — rank: any-builder — GET /tasks/:id/recommendations
      getTasksIdRecommendations: (args) => request("GET", "/tasks/{id}/recommendations", { hasBody: false }, args),
      // POST /tasks/{id}/ship — rank: any-builder — POST /tasks/:id/ship
      postTasksIdShip: (args) => request("POST", "/tasks/{id}/ship", { hasBody: true }, args),
      // PATCH /tasks/{id}/short-name — rank: any-builder — PATCH /tasks/:id/short-name
      patchTasksIdShortName: (args) => request("PATCH", "/tasks/{id}/short-name", { hasBody: true }, args),
      // DELETE /tasks/{id}/visual — rank: any-builder — DELETE /tasks/:id/visual
      deleteTasksIdVisual: (args) => request("DELETE", "/tasks/{id}/visual", { hasBody: false }, args),
      // POST /tasks/{id}/visual — rank: any-builder — POST /tasks/:id/visual
      postTasksIdVisual: (args) => request("POST", "/tasks/{id}/visual", { hasBody: true }, args),
      // GET /tasks/{id}/visuals — rank: any-builder — GET /tasks/:id/visuals
      getTasksIdVisuals: (args) => request("GET", "/tasks/{id}/visuals", { hasBody: false }, args),
      // DELETE /tasks/{id}/visuals/{slot} — rank: any-builder — DELETE /tasks/:id/visuals/:slot
      deleteTasksIdVisualsSlot: (args) => request("DELETE", "/tasks/{id}/visuals/{slot}", { hasBody: false }, args),
      // POST /tasks/{id}/visuals/{slot} — rank: any-builder — POST /tasks/:id/visuals/:slot
      postTasksIdVisualsSlot: (args) => request("POST", "/tasks/{id}/visuals/{slot}", { hasBody: true }, args),
      // POST /tasks/{id}/vote — rank: metic+archon — POST /tasks/:id/vote
      postTasksIdVote: (args) => request("POST", "/tasks/{id}/vote", { hasBody: true }, args),
      // POST /tasks/{id}/water — rank: any-builder — POST /tasks/:id/water
      postTasksIdWater: (args) => request("POST", "/tasks/{id}/water", { hasBody: true }, args),
      // GET /tasks/claimable — rank: any-builder — GET /tasks/claimable
      getTasksClaimable: (args) => request("GET", "/tasks/claimable", { hasBody: false }, args),
      // GET /tasks/newcomer-floor — rank: any-builder — GET /tasks/newcomer-floor
      getTasksNewcomerFloor: (args) => request("GET", "/tasks/newcomer-floor", { hasBody: false }, args),
      // POST /tasks/newcomer-restock — rank: metic+archon — POST /tasks/newcomer-restock
      postTasksNewcomerRestock: (args) => request("POST", "/tasks/newcomer-restock", { hasBody: true }, args),
      // GET /tasks/peer-votes/feed — rank: any-builder — GET /tasks/peer-votes/feed
      getTasksPeerVotesFeed: (args) => request("GET", "/tasks/peer-votes/feed", { hasBody: false }, args),
      // GET /tasks/peer-votes/lookup — rank: any-builder — GET /tasks/peer-votes/lookup
      getTasksPeerVotesLookup: (args) => request("GET", "/tasks/peer-votes/lookup", { hasBody: false }, args),
      // POST /tasks/peer-votes/tally — rank: metic+archon — POST /tasks/peer-votes/tally
      postTasksPeerVotesTally: (args) => request("POST", "/tasks/peer-votes/tally", { hasBody: true }, args),
    },
    "updateStatus": {
      // GET /update-status — rank: any-builder — GET /update-status
      getUpdateStatus: (args) => request("GET", "/update-status", { hasBody: false }, args),
    },
    "versions": {
      // GET /versions — rank: public — GET /versions
      getVersions: (args) => request("GET", "/versions", { hasBody: false }, args),
      // POST /versions — rank: archon — POST /versions
      postVersions: (args) => request("POST", "/versions", { hasBody: true }, args),
      // POST /versions/{id}/close — rank: archon — POST /versions/:id/close
      postVersionsIdClose: (args) => request("POST", "/versions/{id}/close", { hasBody: true }, args),
      // GET /versions/{id}/done-when — rank: public — GET /versions/:id/done-when
      getVersionsIdDoneWhen: (args) => request("GET", "/versions/{id}/done-when", { hasBody: false }, args),
      // POST /versions/{id}/done-when — rank: metic+archon — POST /versions/:id/done-when
      postVersionsIdDoneWhen: (args) => request("POST", "/versions/{id}/done-when", { hasBody: true }, args),
      // GET /versions/{id}/progress — rank: public — GET /versions/:id/progress
      getVersionsIdProgress: (args) => request("GET", "/versions/{id}/progress", { hasBody: false }, args),
      // GET /versions/close-suggestions — rank: public — GET /versions/close-suggestions
      getVersionsCloseSuggestions: (args) => request("GET", "/versions/close-suggestions", { hasBody: false }, args),
      // GET /versions/focus — rank: any-builder — GET /versions/focus
      getVersionsFocus: (args) => request("GET", "/versions/focus", { hasBody: false }, args),
      // PUT /versions/focus — rank: archon — PUT /versions/focus
      putVersionsFocus: (args) => request("PUT", "/versions/focus", { hasBody: true }, args),
      // GET /versions/progress — rank: public — GET /versions/progress
      getVersionsProgress: (args) => request("GET", "/versions/progress", { hasBody: false }, args),
    },
    "workCategories": {
      // GET /work-categories — rank: any-builder — GET /work-categories
      getWorkCategories: (args) => request("GET", "/work-categories", { hasBody: false }, args),
      // POST /work-categories — rank: metic+archon — POST /work-categories
      postWorkCategories: (args) => request("POST", "/work-categories", { hasBody: true }, args),
      // PATCH /work-categories/{id} — rank: metic+archon — PATCH /work-categories/:id
      patchWorkCategoriesId: (args) => request("PATCH", "/work-categories/{id}", { hasBody: true }, args),
    },
  };
}


module.exports = createClient;
module.exports.createClient = createClient;
module.exports.ApiError = ApiError;
module.exports.API_VERSION = API_VERSION;
module.exports.DEFAULT_BASE_URL = DEFAULT_BASE_URL;
