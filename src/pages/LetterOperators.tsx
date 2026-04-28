import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, PenTool, CheckCircle, ArrowRight, Menu, X, Rocket } from 'lucide-react';

// --- ANIMATION VARIANTS ---
// These control the "slow animation" feel you requested
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              LO
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Letter Operators</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">How it Works</a>
            <a href="#portfolio" className="text-gray-600 hover:text-orange-600 transition-colors">Portfolio</a>
            <a href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-orange-500">How it Works</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-orange-500">Portfolio</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-orange-500">Pricing</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              No contract · Cancel anytime
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Newsletters, <br />
              <span className="text-orange-500">Done For You</span>, <br />
              on beehiiv.
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Turn your newsletter into a marketing funnel that builds authority and nurtures leads—without you lifting a finger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                Let Us Run Your Letter <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                    {/* Placeholder for avatars */}
                    User
                  </div>
                ))}
              </div>
              <p>Limited spots available (Max 20)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/*
              NOTE: Replace this div with your Robot 3D Image.
              I've added a placeholder with a similar vibe.
            */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden relative shadow-2xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* This represents your Robot Image */}
                 <div className="w-64 h-64 bg-orange-400 rounded-full flex items-center justify-center text-white text-6xl shadow-inner">
                    🤖
                 </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Open Rate</p>
                    <p className="font-bold text-gray-800">48.5%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PenTool size={32} />,
      title: "Sourcing & Writing",
      desc: "We spend hours scouring the web for stories relevant to your niche, then our expert human editors craft the narrative."
    },
    {
      icon: <Zap size={32} />,
      title: "AI + Human Polish",
      desc: "We use a proprietary AI system to draft fast, but humans add the soul. The result? High-quality content at a fraction of the cost."
    },
    {
      icon: <Mail size={32} />,
      title: "Consistent Publishing",
      desc: "Never miss a week. We handle the formatting, scheduling, and delivery on Beehiiv so you can focus on your business."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hands-free newsletters that grow your brand</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sourcing stories, summarising content, and publishing consistently is time-consuming. We take it off your plate completely.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-8 rounded-3xl bg-[#FDFBF7] border border-orange-100 hover:border-orange-300 transition-colors group"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const clients = ["Franzy", "Innovacious", "QuotaGuard"];

  return (
    <section id="portfolio" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Newsletters We Run</h2>
          <p className="text-gray-600">Join the smart founders unplugging from the content matrix.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/*
                  Instead of the Matrix image everywhere,
                  use a colored gradient placeholder that suggests a unique cover.
              */}
              <div className={`h-48 w-full bg-gradient-to-r ${
                idx === 0 ? 'from-blue-500 to-cyan-400' :
                idx === 1 ? 'from-purple-500 to-pink-500' :
                'from-emerald-500 to-teal-400'
              } flex items-center justify-center`}>
                <span className="text-white font-bold opacity-50 text-3xl">Cover Art</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{client}</h3>
                <p className="text-gray-500 text-sm">One of our wonderful customers</p>
                <div className="mt-4 flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Issue <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-900 rounded-[3rem] p-12 relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to automate your growth?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              We have a strict cap of 20 customers to ensure quality. Secure your spot on the waitlist today.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500 flex-grow"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors">
                Join Waitlist
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FDFBF7] py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-900 font-bold text-xl">
          Letter Operators
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 Letter Operators.
        </div>
      </div>
    </footer>
  );
};

export default function LetterOperators() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-orange-100">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}
