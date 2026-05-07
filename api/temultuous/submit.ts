/**
 * POST /api/temultuous/submit
 *
 * MVP stub. Accepts a FormSubmission, returns a leadId.
 * Real wiring (Phase 1B) will:
 *  1. Validate input
 *  2. Save lead to Notion (status=pending)
 *  3. Kick off Apify amit123 actor run async with the classified search term
 *  4. Store Apify run ID against the lead in Notion
 *  5. Return leadId for the loading page to poll
 *
 * Until then, this returns a fake leadId so the frontend flow is testable
 * end-to-end. The status endpoint mirrors this with a time-based mock progression.
 */

interface FormSubmission {
  productType: string;
  businessName: string;
  email: string;
  currentStatus: string;
}

const STATUS_VALUES = new Set([
  "never_sold",
  "tried_didnt_work",
  "already_selling",
  "looking_into_it",
]);

function validate(body: unknown): { ok: true; data: FormSubmission } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid body" };
  const b = body as Record<string, unknown>;
  const productType = String(b.productType ?? "").trim();
  const businessName = String(b.businessName ?? "").trim();
  const email = String(b.email ?? "").trim();
  const currentStatus = String(b.currentStatus ?? "").trim();

  if (productType.length < 2) return { ok: false, error: "productType too short" };
  if (businessName.length < 2) return { ok: false, error: "businessName too short" };
  if (!/.+@.+\..+/.test(email)) return { ok: false, error: "invalid email" };
  if (!STATUS_VALUES.has(currentStatus)) return { ok: false, error: "invalid currentStatus" };

  return { ok: true, data: { productType, businessName, email, currentStatus } };
}

export default async function handler(req: any, res: any) {
  // CORS preflight (in case the page is served from a different domain during dev)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const validation = validate(req.body);
  if (!validation.ok) {
    res.status(400).json({ error: validation.error });
    return;
  }

  // Generate a leadId — UUID-style without external deps
  const leadId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

  // TODO Phase 1B:
  //   - Save lead to Notion (NOTION_API_KEY + NOTION_DB_ID env vars)
  //   - Kick off Apify run via fetch:
  //       POST https://api.apify.com/v2/acts/LTBzVVq592mKgR6lU/runs?token=APIFY_TOKEN
  //       body: { searchQueries: [classifiedSearchTerm], currency: "EUR", maxResults: 40 }
  //   - Store Apify runId on the Notion record
  //   - Return leadId

  // For now: log + respond OK so frontend can proceed to mock-mode polling.
  // eslint-disable-next-line no-console
  console.log("[temultuous] new lead", { leadId, ...validation.data });

  res.status(200).json({ leadId, mock: true });
}
