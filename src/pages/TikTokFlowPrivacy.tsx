const TikTokFlowPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy — TikTokFlow</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 24, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              TikTokFlow ("we", "our", "us") is an AI agent for managing TikTok Ads campaigns.
              This Privacy Policy explains how we handle data when you use our software with your
              TikTok Ads account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Data We Access</h2>
            <p>When authorized through TikTok OAuth, TikTokFlow accesses:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your TikTok Ads campaign metadata (names, budgets, status)</li>
              <li>Ad performance metrics (impressions, clicks, spend, conversions)</li>
              <li>Audience definitions (custom audiences, lookalike configurations)</li>
              <li>Pixel/Events API conversion data</li>
              <li>Business Center asset permissions (when using BC Partner mode)</li>
            </ul>
            <p className="mt-3"><strong>We do NOT access:</strong> personal user data of your customers,
            payment methods, account passwords, or content unrelated to advertising operations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Data Storage</h2>
            <p>
              TikTokFlow operates in a <strong>local-first / fork model</strong>: your access tokens and account
              data are stored <strong>locally on your machine</strong> in <code>~/.tiktokflow/</code>. We do not
              upload your data to our servers.
            </p>
            <p className="mt-3">
              The only server-side component is a stateless OAuth proxy that facilitates the
              authorization handshake. The proxy does not log or persist any tokens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To execute your explicit requests (e.g., "create a campaign", "show my reports")</li>
              <li>To provide AI-driven recommendations based on your account performance</li>
              <li>To maintain a local audit log of changes you authorize</li>
            </ul>
            <p className="mt-3">We never use your data for advertising, training AI models, or selling to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
            <p>
              TikTokFlow does not share your data with any third party. AI processing occurs
              through Anthropic Claude API (subject to Anthropic's privacy policy) for the purpose
              of generating recommendations on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Revoke access anytime</strong> via your TikTok Business Center settings</li>
              <li><strong>Delete local data</strong> by removing <code>~/.tiktokflow/</code></li>
              <li><strong>Request data export</strong> by emailing the contact below</li>
              <li>GDPR, CCPA, and TikTok's data processing terms apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Security</h2>
            <p>
              We follow industry best practices: SHA256 PII hashing for Events API, OAuth 2.0 for
              authentication, no plaintext credentials in code, and audit logging of all account
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Contact</h2>
            <p>
              For privacy questions or data requests:<br />
              Email: <a href="mailto:info@maciejmarek.com" className="underline">info@maciejmarek.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy as TikTokFlow evolves. The "Last updated" date at the top
              indicates when changes were made. Material changes will be communicated via email to
              registered users.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>TikTokFlow is operated by an independent developer. TikTokFlow is not affiliated with,
          endorsed by, or sponsored by TikTok or ByteDance Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default TikTokFlowPrivacy;
