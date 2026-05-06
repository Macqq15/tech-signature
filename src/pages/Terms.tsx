import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <h1 className="text-3xl font-black text-slate-900 mb-8">Terms of Service</h1>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p className="text-slate-400 text-xs">Last updated: May 2026</p>

          <p>
            These Terms of Service ("Terms") govern your use of the services provided by Maciej Marek
            ("we", "us", "our"). By engaging our services, you agree to these Terms. If you do not
            agree to these Terms, you must not use our services.
          </p>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-bold text-slate-800 mb-2">Service Provider:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name: Maciej Marek</li>
              <li>Email: hello@maciejmarek.com</li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-slate-800">1. Services</h3>
          <p>
            Maciej Marek provides AI agent development, deployment, and maintenance services across
            three tiers:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Tier 1 (AI Playbook):</strong> Pre-configured AI assistants delivered as files,
              with onboarding and training.
            </li>
            <li>
              <strong>Tier 2 (AI Chief of Staff):</strong> Autonomous AI agents deployed in the cloud,
              with integrations, monitoring, and ongoing maintenance.
            </li>
            <li>
              <strong>Tier 3 (AI On-Premise):</strong> Tier 2 deployed on client hardware, with
              hardware consulting and local model configuration.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800">2. Engagement Process</h3>
          <p>
            All engagements begin with a free AI Audit call. Paid services commence only after mutual
            agreement through a formal proposal or service agreement. The Operations Deep-Dive fee is
            credited toward any subsequent setup.
          </p>

          <h3 className="text-lg font-bold text-slate-800">3. Payment Terms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Tier 1: One-time payment due upon delivery.</li>
            <li>Tier 2: Setup fee due at project start. Monthly maintenance billed in advance.</li>
            <li>
              Tier 3: Setup fee due at project start. Monthly maintenance and quarterly
              re-evaluations billed in advance.
            </li>
            <li>All prices are exclusive of VAT where applicable.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800">4. Guarantees & Refunds</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Tier 1 includes a 30-day money-back guarantee if you don't see value.</li>
            <li>Tier 2 includes a 30-day supervised launch period.</li>
            <li>Refund requests must be made in writing within the guarantee period.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800">5. Intellectual Property</h3>
          <p>
            Upon full payment, clients own all custom configurations, agent setups, and data files
            created specifically for their business. We retain the right to use general
            methodologies, frameworks, and non-client-specific tools in other engagements.
          </p>

          <h3 className="text-lg font-bold text-slate-800">6. Data & Confidentiality</h3>
          <p>
            We treat all client data as confidential. We do not share, sell, or use client data for
            purposes other than delivering the agreed services. Our Privacy Policy provides detailed
            information about our data practices.
          </p>

          <h3 className="text-lg font-bold text-slate-800">7. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, our total liability for any claim arising from or
            related to our services shall not exceed the total fees paid by you in the 3 months
            preceding the claim. We do not guarantee specific results or performance outcomes.
          </p>

          <h3 className="text-lg font-bold text-slate-800">8. AI & Automation Disclaimer</h3>
          <p>
            AI agents operate within defined boundaries set during configuration. While we design
            agents to be reliable and accurate, AI systems may occasionally produce unexpected
            outputs. Human oversight is recommended for critical business decisions. We are not
            liable for actions taken by AI agents that fall within their configured operational
            parameters.
          </p>

          <h3 className="text-lg font-bold text-slate-800">9. Termination</h3>
          <p>
            Either party may terminate ongoing services with 30 days' written notice. Upon
            termination, we will provide all client data, configurations, and access credentials.
            Monthly fees are non-refundable for the current billing period.
          </p>

          <h3 className="text-lg font-bold text-slate-800">10. Governing Law</h3>
          <p>
            These Terms are governed by and construed in accordance with the laws of Poland. The
            parties submit to the jurisdiction of the courts of Poland for any disputes.
          </p>

          <h3 className="text-lg font-bold text-slate-800">11. Entire Agreement</h3>
          <p>
            These Terms, together with any Service Agreement and our Privacy Policy, constitute the
            entire agreement. Individual service agreements may contain additional or superseding
            terms specific to the engagement.
          </p>

          <h3 className="text-lg font-bold text-slate-800">12. Contact</h3>
          <p>For questions about these Terms, contact us at hello@maciejmarek.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
