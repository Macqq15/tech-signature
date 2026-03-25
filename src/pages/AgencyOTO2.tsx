import React, { useState, useEffect } from "react";
import { ArrowRight, Video, Settings, Shield, Calendar, Check } from "lucide-react";

// OTO 2: "Done-For-You Setup" — $120
// 30-min call. We configure everything live. 5 spots/month.

const STRIPE_OTO2 = "#STRIPE_CHECKOUT_LINK_120";
const TIMER_MINUTES = 15;

function useOtoTimer(key: string) {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return remaining > 0 ? remaining : 0;
    }
    const expiry = Date.now() + TIMER_MINUTES * 60 * 1000;
    sessionStorage.setItem(key, String(expiry));
    return TIMER_MINUTES * 60;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return { seconds, expired: seconds === 0 };
}

function CountdownTimer({ seconds, expired }: { seconds: number; expired: boolean }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (expired) {
    return (
      <div className="text-center">
        <p className="text-sm font-bold text-red-500">This offer has expired</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="bg-slate-900 text-white rounded-lg px-3 py-2 min-w-[3rem] text-center">
        <span className="text-2xl font-black font-mono">{String(mins).padStart(2, "0")}</span>
      </div>
      <span className="text-2xl font-black text-slate-400">:</span>
      <div className="bg-slate-900 text-white rounded-lg px-3 py-2 min-w-[3rem] text-center">
        <span className="text-2xl font-black font-mono">{String(secs).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default function AgencyOTO2() {
  const { seconds, expired } = useOtoTimer("oto2_timer");
  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">

      {/* GREEN CONFIRMATION BAR */}
      <div className="bg-emerald-600 text-white text-center py-3 px-4 text-sm font-semibold">
        Your AI skills are confirmed. One last thing before you go:
      </div>

      {/* TIMER BAR */}
      <div className="bg-slate-50 border-b border-[hsl(40,12%,89%)] py-4 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">This offer expires in</p>
          <CountdownTimer seconds={seconds} expired={expired} />
        </div>
      </div>

      {/* HERO */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-amber-600 font-bold uppercase tracking-wider mb-4">Only 5 Spots Per Month</p>
          <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6">
            Skip the Setup.{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              I'll Do It With You.
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            30-minute call. I interview you about your agency, fill your context file in real-time, test every skill with your real data, and hand you a working system before we hang up.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 text-center">What Happens on the Call</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Video className="text-emerald-600" size={24} />,
                  title: "I interview you about your agency (15 min)",
                  desc: "Your clients, your team, your KPIs, your tone of voice. I ask the questions. You just answer. I fill everything in real-time."
                },
                {
                  icon: <Settings className="text-emerald-600" size={24} />,
                  title: "I configure and test your tools live (10 min)",
                  desc: "Context file filled. All skills tested with your real data. We run a report, research a prospect, prep for a call. You see it work."
                },
                {
                  icon: <Shield className="text-emerald-600" size={24} />,
                  title: "I hand you a working system (5 min)",
                  desc: "Quick walkthrough of what's set up, how to trigger each skill, and how to adjust settings. You're live before the call ends."
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR YOU IF */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Perfect for you if:</h3>
              <ul className="space-y-3">
                {[
                  "You'd rather have someone set it up than figure it out",
                  "You want to see the skills work with YOUR data before using them solo",
                  "You value your time more than $120",
                  "You want the system running today, not next week",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">What you save:</h3>
              <ul className="space-y-3">
                {[
                  "2-3 hours figuring out the context file yourself",
                  "Trial and error testing each skill with wrong inputs",
                  "The frustration of 'is this working right?'",
                  "A week of gradual setup compressed into 30 minutes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <Calendar size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-[hsl(48,25%,97%)] border-2 border-emerald-200 rounded-2xl p-10 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">March: 3 Spots Remaining</p>
            <h3 className="text-2xl font-black mb-2">Done-For-You Setup Call</h3>
            <p className="text-sm text-slate-500 mb-4">30 minutes. I configure everything. You're live before we hang up.</p>
            <div className="mb-4">
              <CountdownTimer seconds={seconds} expired={expired} />
            </div>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="text-5xl font-black">$120</span>
              <span className="text-sm text-slate-400">one-time</span>
            </div>
            {expired ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-600 font-bold text-lg mb-1">This offer has expired</p>
                <p className="text-sm text-slate-500">This one-time offer is no longer available.</p>
              </div>
            ) : (
              <>
                <a
                  href={STRIPE_OTO2}
                  className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200 px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  Book My Setup Call: $120 <ArrowRight size={20} />
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  30-day money back guarantee. 5 spots per month.
                </p>
              </>
            )}
          </div>

          <a
            href="/agency-thank-you"
            className="inline-block mt-8 text-sm text-slate-400 hover:text-slate-600 transition-colors underline"
          >
            No thanks, I'll set it up myself
          </a>
        </div>
      </section>
    </div>
  );
}
