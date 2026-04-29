const TikTokFlowTerms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Terms of Service — TikTokFlow</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 24, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Service Description</h2>
            <p>
              TikTokFlow is an AI-powered agent that helps marketing professionals manage TikTok
              Ads campaigns. The service uses TikTok's Marketing API to read account data, provide
              recommendations, and (with your explicit confirmation) execute campaign management
              operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Acceptance</h2>
            <p>
              By installing and using TikTokFlow, you agree to these Terms of Service. If you do
              not agree, do not install or use the software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Your Account</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintaining the confidentiality of your TikTok credentials</li>
              <li>All activities that occur under your TikTok account through TikTokFlow</li>
              <li>Compliance with TikTok's Advertising Policies and Community Guidelines</li>
              <li>All financial obligations arising from your TikTok ad spend</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Authorization Requirement</h2>
            <p>
              TikTokFlow operates on a <strong>human-in-the-loop</strong> principle. Every change to
              your account (campaign creation, edit, pause, budget change, etc.) requires your
              explicit confirmation before execution. The agent will never make autonomous
              modifications without your approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. No Guarantees</h2>
            <p>
              TikTokFlow provides recommendations based on industry knowledge and your historical
              account data. We make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Specific performance outcomes (ROAS, CPA, conversions)</li>
              <li>TikTok approving your campaigns or creatives</li>
              <li>Continuous availability of TikTok's API</li>
              <li>Compatibility with future TikTok platform changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Limitations of Liability</h2>
            <p>
              To the maximum extent permitted by law, TikTokFlow and its operators shall not be
              liable for any indirect, incidental, special, or consequential damages arising from
              your use of the service. This includes lost ad spend, missed opportunities, or
              account suspensions resulting from your campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Disconnection</h2>
            <p>
              You may revoke TikTokFlow's access to your account at any time through:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>TikTok Business Center → Partners → Remove TikTokFlow</li>
              <li>TikTok account settings → Authorized Apps → Revoke</li>
              <li>Local: deleting <code>~/.tiktokflow/credentials.yaml</code></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
            <p>
              TikTokFlow software and knowledge base are proprietary. The software is provided for
              use under license. The knowledge base content is for internal use only and may not
              be redistributed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Third-Party Services</h2>
            <p>
              TikTokFlow integrates with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>TikTok Marketing API</strong> — subject to TikTok's Developer Terms</li>
              <li><strong>Anthropic Claude API</strong> — for AI processing, subject to Anthropic's terms</li>
            </ul>
            <p className="mt-3">Your use of TikTokFlow constitutes acceptance of these third-party terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
            <p>
              We may update these Terms as TikTokFlow evolves. Continued use after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Poland. Any disputes shall be resolved in
              the courts of Warsaw, Poland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact</h2>
            <p>
              For questions about these Terms:<br />
              Email: <a href="mailto:info@maciejmarek.com" className="underline">info@maciejmarek.com</a>
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

export default TikTokFlowTerms;
