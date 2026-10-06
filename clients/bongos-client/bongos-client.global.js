// @bongos/client (browser-global build) — GENERATED from index.mjs by
// scripts/gds/gen-api-client.js. DO NOT EDIT BY HAND. Exposes window.BongosClient
// for classic <script> pages. Same behavior as the ESM build.
(function (global) {
'use strict';
// @bongos/client — GENERATED from the OpenAPI spec by
// scripts/gds/gen-api-client.js (task 1995 / ADR 0118). DO NOT EDIT BY HAND —
// regenerate on spec change. Zero deps; uses the platform fetch.

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
    "analytics": {
      // GET /analytics/builder/{id} — rank: any-builder — GET /analytics/builder/:id
      getAnalyticsBuilderId: (args) => request("GET", "/analytics/builder/{id}", { hasBody: false }, args),
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
      // POST /auth/logout — rank: any-builder — POST /auth/logout
      postAuthLogout: (args) => request("POST", "/auth/logout", { hasBody: true }, args),
      // POST /auth/revoke — rank: archon — POST /auth/revoke
      postAuthRevoke: (args) => request("POST", "/auth/revoke", { hasBody: true }, args),
      // POST /auth/revoke-all — rank: archon — POST /auth/revoke-all
      postAuthRevokeAll: (args) => request("POST", "/auth/revoke-all", { hasBody: true }, args),
      // GET /auth/web/admission-status — rank: public — GET /auth/web/admission-status
      getAuthWebAdmissionStatus: (args) => request("GET", "/auth/web/admission-status", { hasBody: false }, args),
      // GET /auth/web/callback — rank: public — GET /auth/web/callback
      getAuthWebCallback: (args) => request("GET", "/auth/web/callback", { hasBody: false }, args),
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
      // POST /autonomy/heartbeat — rank: any-builder — POST /autonomy/heartbeat
      postAutonomyHeartbeat: (args) => request("POST", "/autonomy/heartbeat", { hasBody: true }, args),
      // PUT /autonomy/me/goals — rank: metic+archon — PUT /autonomy/me/goals
      putAutonomyMeGoals: (args) => request("PUT", "/autonomy/me/goals", { hasBody: true }, args),
      // GET /autonomy/precheck — rank: metic+archon — GET /autonomy/precheck
      getAutonomyPrecheck: (args) => request("GET", "/autonomy/precheck", { hasBody: false }, args),
      // GET /autonomy/runners — rank: any-builder — GET /autonomy/runners
      getAutonomyRunners: (args) => request("GET", "/autonomy/runners", { hasBody: false }, args),
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
      // GET /builders/{id}/onboarding — rank: public — GET /builders/:id/onboarding
      getBuildersIdOnboarding: (args) => request("GET", "/builders/{id}/onboarding", { hasBody: false }, args),
      // GET /builders/{id}/profile — rank: public — GET /builders/:id/profile
      getBuildersIdProfile: (args) => request("GET", "/builders/{id}/profile", { hasBody: false }, args),
      // PATCH /builders/{id}/rank — rank: archon — PATCH /builders/:id/rank
      patchBuildersIdRank: (args) => request("PATCH", "/builders/{id}/rank", { hasBody: true }, args),
      // PATCH /builders/{id}/status — rank: archon — PATCH /builders/:id/status
      patchBuildersIdStatus: (args) => request("PATCH", "/builders/{id}/status", { hasBody: true }, args),
      // GET /builders/directory — rank: any-builder — GET /builders/directory
      getBuildersDirectory: (args) => request("GET", "/builders/directory", { hasBody: false }, args),
      // GET /builders/me/pending-rank-change — rank: any-builder — GET /builders/me/pending-rank-change
      getBuildersMePendingRankChange: (args) => request("GET", "/builders/me/pending-rank-change", { hasBody: false }, args),
      // GET /builders/roster — rank: metic+archon — GET /builders/roster
      getBuildersRoster: (args) => request("GET", "/builders/roster", { hasBody: false }, args),
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
      // GET /community/leaderboard — rank: public — GET /community/leaderboard
      getCommunityLeaderboard: (args) => request("GET", "/community/leaderboard", { hasBody: false }, args),
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
      // GET /copy-desk/tally — rank: any-builder — GET /copy-desk/tally
      getCopyDeskTally: (args) => request("GET", "/copy-desk/tally", { hasBody: false }, args),
    },
    "coreUpdate": {
      // GET /core-update — rank: archon — GET /core-update
      getCoreUpdate: (args) => request("GET", "/core-update", { hasBody: false }, args),
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
      // POST /feedback — rank: any-builder — POST /feedback
      postFeedback: (args) => request("POST", "/feedback", { hasBody: true }, args),
    },
    "founding": {
      // POST /founding/alive — rank: any-builder — POST /founding/alive
      postFoundingAlive: (args) => request("POST", "/founding/alive", { hasBody: true }, args),
      // GET /founding/builders — rank: any-builder — GET /founding/builders
      getFoundingBuilders: (args) => request("GET", "/founding/builders", { hasBody: false }, args),
      // GET /founding/genesis — rank: any-builder — GET /founding/genesis
      getFoundingGenesis: (args) => request("GET", "/founding/genesis", { hasBody: false }, args),
      // POST /founding/plan — rank: any-builder — POST /founding/plan
      postFoundingPlan: (args) => request("POST", "/founding/plan", { hasBody: true }, args),
      // POST /founding/stages/{stage}/close — rank: any-builder — POST /founding/stages/:stage/close
      postFoundingStagesStageClose: (args) => request("POST", "/founding/stages/{stage}/close", { hasBody: true }, args),
      // POST /founding/start — rank: any-builder — POST /founding/start
      postFoundingStart: (args) => request("POST", "/founding/start", { hasBody: true }, args),
    },
    "gateApprovals": {
      // GET /gate-approvals — rank: metic+archon — GET /gate-approvals
      getGateApprovals: (args) => request("GET", "/gate-approvals", { hasBody: false }, args),
      // POST /gate-approvals/{pr}/approve — rank: archon — POST /gate-approvals/:pr/approve
      postGateApprovalsPrApprove: (args) => request("POST", "/gate-approvals/{pr}/approve", { hasBody: true }, args),
    },
    "github": {
      // GET /github/repo — rank: any-builder — GET /github/repo
      getGithubRepo: (args) => request("GET", "/github/repo", { hasBody: false }, args),
      // POST /github/repo/visibility — rank: any-builder — POST /github/repo/visibility
      postGithubRepoVisibility: (args) => request("POST", "/github/repo/visibility", { hasBody: true }, args),
      // GET /github/repos — rank: any-builder — GET /github/repos
      getGithubRepos: (args) => request("GET", "/github/repos", { hasBody: false }, args),
      // POST /github/repos — rank: any-builder — POST /github/repos
      postGithubRepos: (args) => request("POST", "/github/repos", { hasBody: true }, args),
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
      // GET /government/assignments — rank: archon — GET /government/assignments
      getGovernmentAssignments: (args) => request("GET", "/government/assignments", { hasBody: false }, args),
      // POST /government/assignments — rank: archon — POST /government/assignments
      postGovernmentAssignments: (args) => request("POST", "/government/assignments", { hasBody: true }, args),
      // DELETE /government/assignments/{builderId}/{rankKey} — rank: archon — DELETE /government/assignments/:builderId/:rankKey
      deleteGovernmentAssignmentsBuilderIdRankKey: (args) => request("DELETE", "/government/assignments/{builderId}/{rankKey}", { hasBody: false }, args),
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
      // POST /government/board/matters — rank: metic+archon — POST /government/board/matters
      postGovernmentBoardMatters: (args) => request("POST", "/government/board/matters", { hasBody: true }, args),
      // GET /government/constitution — rank: any-builder — GET /government/constitution
      getGovernmentConstitution: (args) => request("GET", "/government/constitution", { hasBody: false }, args),
      // GET /government/docket — rank: any-builder — GET /government/docket
      getGovernmentDocket: (args) => request("GET", "/government/docket", { hasBody: false }, args),
      // GET /government/permissions — rank: archon — GET /government/permissions
      getGovernmentPermissions: (args) => request("GET", "/government/permissions", { hasBody: false }, args),
      // POST /government/rank-sets/apply — rank: archon — POST /government/rank-sets/apply
      postGovernmentRankSetsApply: (args) => request("POST", "/government/rank-sets/apply", { hasBody: true }, args),
      // GET /government/ranks — rank: archon — GET /government/ranks
      getGovernmentRanks: (args) => request("GET", "/government/ranks", { hasBody: false }, args),
      // POST /government/ranks — rank: archon — POST /government/ranks
      postGovernmentRanks: (args) => request("POST", "/government/ranks", { hasBody: true }, args),
      // DELETE /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon — DELETE /government/ranks/:rankKey/permissions/:permissionKey
      deleteGovernmentRanksRankKeyPermissionsPermissionKey: (args) => request("DELETE", "/government/ranks/{rankKey}/permissions/{permissionKey}", { hasBody: false }, args),
      // PUT /government/ranks/{rankKey}/permissions/{permissionKey} — rank: archon — PUT /government/ranks/:rankKey/permissions/:permissionKey
      putGovernmentRanksRankKeyPermissionsPermissionKey: (args) => request("PUT", "/government/ranks/{rankKey}/permissions/{permissionKey}", { hasBody: true }, args),
      // POST /government/ranks/{rankKey}/reset — rank: archon — POST /government/ranks/:rankKey/reset
      postGovernmentRanksRankKeyReset: (args) => request("POST", "/government/ranks/{rankKey}/reset", { hasBody: true }, args),
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
    "me": {
      // GET /me — rank: any-builder — GET /me
      getMe: (args) => request("GET", "/me", { hasBody: false }, args),
      // GET /me/achievements — rank: any-builder — GET /me/achievements
      getMeAchievements: (args) => request("GET", "/me/achievements", { hasBody: false }, args),
      // POST /me/anthropic-link — rank: any-builder — POST /me/anthropic-link
      postMeAnthropicLink: (args) => request("POST", "/me/anthropic-link", { hasBody: true }, args),
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
      // GET /me/guild-engagements — rank: any-builder — GET /me/guild-engagements
      getMeGuildEngagements: (args) => request("GET", "/me/guild-engagements", { hasBody: false }, args),
      // GET /me/guild-requests — rank: any-builder — GET /me/guild-requests
      getMeGuildRequests: (args) => request("GET", "/me/guild-requests", { hasBody: false }, args),
      // GET /me/guilds — rank: any-builder — GET /me/guilds
      getMeGuilds: (args) => request("GET", "/me/guilds", { hasBody: false }, args),
      // PATCH /me/handle — rank: any-builder — PATCH /me/handle
      patchMeHandle: (args) => request("PATCH", "/me/handle", { hasBody: true }, args),
      // GET /me/interaction — rank: any-builder — GET /me/interaction
      getMeInteraction: (args) => request("GET", "/me/interaction", { hasBody: false }, args),
      // PATCH /me/interaction — rank: any-builder — PATCH /me/interaction
      patchMeInteraction: (args) => request("PATCH", "/me/interaction", { hasBody: true }, args),
      // GET /me/model-allocation — rank: any-builder — GET /me/model-allocation
      getMeModelAllocation: (args) => request("GET", "/me/model-allocation", { hasBody: false }, args),
      // PATCH /me/model-allocation — rank: any-builder — PATCH /me/model-allocation
      patchMeModelAllocation: (args) => request("PATCH", "/me/model-allocation", { hasBody: true }, args),
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
      // POST /modules/{key}/submit — rank: metic+archon — POST /modules/:key/submit
      postModulesKeySubmit: (args) => request("POST", "/modules/{key}/submit", { hasBody: true }, args),
      // GET /modules/submissions — rank: metic+archon — GET /modules/submissions
      getModulesSubmissions: (args) => request("GET", "/modules/submissions", { hasBody: false }, args),
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
    },
    "profiles": {
      // GET /profiles/{handle} — rank: public — GET /profiles/:handle
      getProfilesHandle: (args) => request("GET", "/profiles/{handle}", { hasBody: false }, args),
    },
    "project": {
      // GET /project/manage-link — rank: archon — GET /project/manage-link
      getProjectManageLink: (args) => request("GET", "/project/manage-link", { hasBody: false }, args),
    },
    "projectSettings": {
      // GET /project-settings — rank: metic+archon — GET /project-settings
      getProjectSettings: (args) => request("GET", "/project-settings", { hasBody: false }, args),
      // PATCH /project-settings/rot-days — rank: metic+archon — PATCH /project-settings/rot-days
      patchProjectSettingsRotDays: (args) => request("PATCH", "/project-settings/rot-days", { hasBody: true }, args),
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
      // GET /provisioning/fleet — rank: metic+archon — GET /provisioning/fleet
      getProvisioningFleet: (args) => request("GET", "/provisioning/fleet", { hasBody: false }, args),
      // GET /provisioning/fleet/cost-ledger — rank: metic+archon — GET /provisioning/fleet/cost-ledger
      getProvisioningFleetCostLedger: (args) => request("GET", "/provisioning/fleet/cost-ledger", { hasBody: false }, args),
      // GET /provisioning/github-app/callback — rank: public — GET /provisioning/github-app/callback
      getProvisioningGithubAppCallback: (args) => request("GET", "/provisioning/github-app/callback", { hasBody: false }, args),
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
      // POST /provisioning/instances/{id}/repo-private — rank: any-builder — POST /provisioning/instances/:id/repo-private
      postProvisioningInstancesIdRepoPrivate: (args) => request("POST", "/provisioning/instances/{id}/repo-private", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/restart — rank: any-builder — POST /provisioning/instances/:id/restart
      postProvisioningInstancesIdRestart: (args) => request("POST", "/provisioning/instances/{id}/restart", { hasBody: true }, args),
      // GET /provisioning/instances/{id}/settings — rank: any-builder — GET /provisioning/instances/:id/settings
      getProvisioningInstancesIdSettings: (args) => request("GET", "/provisioning/instances/{id}/settings", { hasBody: false }, args),
      // PATCH /provisioning/instances/{id}/settings — rank: any-builder — PATCH /provisioning/instances/:id/settings
      patchProvisioningInstancesIdSettings: (args) => request("PATCH", "/provisioning/instances/{id}/settings", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/teardown — rank: any-builder — POST /provisioning/instances/:id/teardown
      postProvisioningInstancesIdTeardown: (args) => request("POST", "/provisioning/instances/{id}/teardown", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/update-channel — rank: archon — POST /provisioning/instances/:id/update-channel
      postProvisioningInstancesIdUpdateChannel: (args) => request("POST", "/provisioning/instances/{id}/update-channel", { hasBody: true }, args),
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
      // GET /public/uptime — rank: public — GET /public/uptime
      getPublicUptime: (args) => request("GET", "/public/uptime", { hasBody: false }, args),
      // GET /public/versions — rank: public — GET /public/versions
      getPublicVersions: (args) => request("GET", "/public/versions", { hasBody: false }, args),
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
      // GET /sessions/mine — rank: any-builder — GET /sessions/mine
      getSessionsMine: (args) => request("GET", "/sessions/mine", { hasBody: false }, args),
      // GET /sessions/search — rank: metic+archon — GET /sessions/search
      getSessionsSearch: (args) => request("GET", "/sessions/search", { hasBody: false }, args),
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
      // POST /sso/invites/clear — rank: public — POST /sso/invites/clear
      postSsoInvitesClear: (args) => request("POST", "/sso/invites/clear", { hasBody: true }, args),
      // POST /sso/invites/notify — rank: public — POST /sso/invites/notify
      postSsoInvitesNotify: (args) => request("POST", "/sso/invites/notify", { hasBody: true }, args),
      // POST /sso/membership/check-in — rank: public — POST /sso/membership/check-in
      postSsoMembershipCheckIn: (args) => request("POST", "/sso/membership/check-in", { hasBody: true }, args),
      // GET /sso/pubkey — rank: public — GET /sso/pubkey
      getSsoPubkey: (args) => request("GET", "/sso/pubkey", { hasBody: false }, args),
      // POST /sso/token — rank: public — POST /sso/token
      postSsoToken: (args) => request("POST", "/sso/token", { hasBody: true }, args),
    },
    "store": {
      // GET /store/entitlements — rank: any-builder — GET /store/entitlements
      getStoreEntitlements: (args) => request("GET", "/store/entitlements", { hasBody: false }, args),
      // POST /store/modules/{key}/acquire — rank: any-builder — POST /store/modules/:key/acquire
      postStoreModulesKeyAcquire: (args) => request("POST", "/store/modules/{key}/acquire", { hasBody: true }, args),
      // POST /store/modules/{key}/acquired — rank: any-builder — POST /store/modules/:key/acquired
      postStoreModulesKeyAcquired: (args) => request("POST", "/store/modules/{key}/acquired", { hasBody: true }, args),
      // POST /store/modules/{key}/delist — rank: metic+archon — POST /store/modules/:key/delist
      postStoreModulesKeyDelist: (args) => request("POST", "/store/modules/{key}/delist", { hasBody: true }, args),
      // GET /store/modules/{key}/entitlement — rank: any-builder — GET /store/modules/:key/entitlement
      getStoreModulesKeyEntitlement: (args) => request("GET", "/store/modules/{key}/entitlement", { hasBody: false }, args),
      // POST /store/modules/{key}/versions — rank: metic+archon — POST /store/modules/:key/versions
      postStoreModulesKeyVersions: (args) => request("POST", "/store/modules/{key}/versions", { hasBody: true }, args),
      // GET /store/modules/{key}/versions/{version}/howto — rank: any-builder — GET /store/modules/:key/versions/:version/howto
      getStoreModulesKeyVersionsVersionHowto: (args) => request("GET", "/store/modules/{key}/versions/{version}/howto", { hasBody: false }, args),
      // POST /store/modules/{key}/versions/{version}/reassess — rank: metic+archon — POST /store/modules/:key/versions/:version/reassess
      postStoreModulesKeyVersionsVersionReassess: (args) => request("POST", "/store/modules/{key}/versions/{version}/reassess", { hasBody: true }, args),
      // GET /store/modules/{key}/versions/{version}/tarball — rank: any-builder — GET /store/modules/:key/versions/:version/tarball
      getStoreModulesKeyVersionsVersionTarball: (args) => request("GET", "/store/modules/{key}/versions/{version}/tarball", { hasBody: false }, args),
      // GET /store/modules/latest — rank: any-builder — GET /store/modules/latest
      getStoreModulesLatest: (args) => request("GET", "/store/modules/latest", { hasBody: false }, args),
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
      // POST /tasks/peer-votes/tally — rank: metic+archon — POST /tasks/peer-votes/tally
      postTasksPeerVotesTally: (args) => request("POST", "/tasks/peer-votes/tally", { hasBody: true }, args),
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


global.BongosClient = { createClient: createClient, ApiError: ApiError, API_VERSION: API_VERSION, DEFAULT_BASE_URL: DEFAULT_BASE_URL };
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this));
