/**
 * GET /api/temultuous/status?leadId=...
 *
 * MVP stub. Returns a time-based mock stage progression so the loading page
 * advances through 7 stages over ~90 seconds. When real wiring lands:
 *
 *  - Look up the lead in Notion by leadId
 *  - Read stored Apify runId, query Apify run status
 *  - When Apify dataset is ready, fetch results, run Claude analysis,
 *    store generated report on the lead, return state="ready" + report
 *
 * The leadId timestamp prefix encodes submission time, which we use here
 * to derive the mock stage without server-side state.
 */

const TOTAL_STAGES = 7;
const TOTAL_DURATION_MS = 90_000;

function decodeStartTime(leadId: string): number | null {
  const m = leadId.match(/^([a-z0-9]+)-/i);
  if (!m) return null;
  const ts = parseInt(m[1], 36);
  if (!Number.isFinite(ts) || ts <= 0) return null;
  return ts;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const leadId = String(req.query?.leadId ?? "");
  if (!leadId) {
    res.status(400).json({ error: "leadId required" });
    return;
  }

  const startedAt = decodeStartTime(leadId);
  if (!startedAt) {
    res.status(400).json({ error: "Invalid leadId" });
    return;
  }

  const elapsed = Date.now() - startedAt;
  const stage = Math.min(TOTAL_STAGES - 1, Math.floor((elapsed / TOTAL_DURATION_MS) * TOTAL_STAGES));
  const isReady = elapsed >= TOTAL_DURATION_MS;

  // Cache headers — short TTL so clients re-poll, but allow CDN to dedupe simultaneous requests
  res.setHeader("Cache-Control", "no-store");

  if (isReady) {
    // Phase 1B will return the real Claude-generated report here from Notion storage.
    // For now we tell the frontend "ready" without the report payload — the page already
    // has a mock-mode fallback that will render anyway. This keeps the stub safe to call.
    res.status(200).json({
      leadId,
      state: "mock-ready",
      stage: TOTAL_STAGES,
      message: "Mock mode — frontend should render mock report based on form input.",
    });
    return;
  }

  res.status(200).json({
    leadId,
    state: "scraping",
    stage,
    elapsedMs: elapsed,
  });
}
