import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <h1 className="text-3xl font-black text-slate-900 mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p className="text-slate-400 text-xs">Last updated: May 2026</p>

          <p>
            This Privacy Policy applies to maciejmarek.com and all services provided by Maciej Marek
            ("we", "us", "our") and governs the collection, use, and protection of personal data in
            relation to our website and services.
          </p>
          <p>
            We are committed to protecting your privacy and handling your personal data in accordance
            with the General Data Protection Regulation (GDPR) and applicable data protection laws.
          </p>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-bold text-slate-800 mb-2">Data Controller Details:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name: Maciej Marek</li>
              <li>Email: hello@maciejmarek.com</li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-slate-800">1. Information We Collect</h3>
          <h4 className="font-bold text-slate-700">1.1 Information You Provide to Us</h4>
          <p>We collect and process the following personal data when you use our services:</p>
          <p className="font-bold text-slate-700">Contact Information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name and email address</li>
            <li>Business name and trading details</li>
            <li>Telephone number</li>
            <li>Job title and role</li>
          </ul>
          <p className="font-bold text-slate-700">Business Information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Marketplace account access details (where authorised)</li>
            <li>API credentials and integration configurations</li>
            <li>Business process documentation shared during onboarding</li>
          </ul>
          <p className="font-bold text-slate-700">Commercial Information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sales data and performance metrics</li>
            <li>Product information and inventory data</li>
            <li>Advertising spend and campaign performance</li>
            <li>Customer reviews and feedback data</li>
          </ul>
          <p className="font-bold text-slate-700">Communication Data:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Correspondence via email, phone, or video conferencing</li>
            <li>Support tickets and queries</li>
            <li>Meeting notes and call recordings (where consent is provided)</li>
          </ul>

          <h4 className="font-bold text-slate-700">1.2 Information We Collect Automatically</h4>
          <p className="font-bold text-slate-700">Website Usage Data:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800">2. How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide, maintain, and improve our services</li>
            <li>To configure, deploy, and maintain solutions on your behalf</li>
            <li>To communicate with you about your account and services</li>
            <li>To send you updates about service changes and new features</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800">3. Data Sharing</h3>
          <p>We do not sell your personal data. We may share data with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cloud hosting providers within the EU/EEA</li>
            <li>
              AI model providers (Anthropic, OpenAI) as necessary for service operations — subject to
              their data processing agreements
            </li>
            <li>Payment processors for billing purposes</li>
          </ul>
          <p>
            For on-premise clients: your data never leaves your infrastructure. AI models run locally
            on your hardware.
          </p>

          <h3 className="text-lg font-bold text-slate-800">4. Data Retention</h3>
          <p>
            We retain your data for the duration of our business relationship plus 12 months, or as
            required by law. You may request deletion at any time.
          </p>

          <h3 className="text-lg font-bold text-slate-800">5. Your Rights</h3>
          <p>Under GDPR, you have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>
          <p>To exercise any of these rights, contact us at hello@maciejmarek.com.</p>

          <h3 className="text-lg font-bold text-slate-800">6. Cookies</h3>
          <p>
            We use essential cookies for website functionality. We do not use advertising or tracking
            cookies. Analytics cookies are used only with your consent.
          </p>

          <h3 className="text-lg font-bold text-slate-800">7. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant
            changes via email or through our website.
          </p>

          <h3 className="text-lg font-bold text-slate-800">8. Contact</h3>
          <p>For questions about this Privacy Policy, contact us at hello@maciejmarek.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
