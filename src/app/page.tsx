"use client";

import { motion } from "framer-motion";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 md:px-16">
      {/* HERO */}
      <section className="max-w-4xl mx-auto grid gap-6 pt-16 md:pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-zinc-500 tracking-wide">UX Designer · Product Thinker · Frontend Background</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mt-3">
            I design products that make complex systems feel simple.
          </h1>
          <p className="mt-5 text-zinc-600 text-lg leading-relaxed">
            I come from development and UX, with experience leading design end-to-end in product teams —
            from early research and flows, to UI systems and hands-on implementation thinking.
          </p>

          <div className="flex gap-3 mt-7">
            <button className="px-5 py-2.5 rounded-2xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
              View Work
            </button>
            <button className="px-5 py-2.5 rounded-2xl border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors">
              Download CV
            </button>
          </div>

          <div className="flex gap-5 mt-6 text-zinc-500 text-sm">
            <a href="mailto:adi.shohat21@gmail.com" className="hover:text-zinc-900 transition-colors">Email</a>
            <a href="https://linkedin.com" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="https://github.com" className="hover:text-zinc-900 transition-colors">GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-3">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-zinc-600 leading-relaxed">
          I started in frontend development and moved into UX and product design, where I found my space:
          connecting systems thinking with human behavior. I've worked as the sole designer in a company,
          collaborated closely with engineers, and built design systems and flows from scratch.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I like messy problems — especially ones where the product, data, and users don't naturally align.
          My strength is turning ambiguity into structure: flows, UI patterns, and decisions teams can actually build.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-4">
        <h2 className="text-2xl font-semibold">What I bring</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">End-to-end product thinking</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                From research and flows to UI decisions and implementation details.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Strong technical intuition</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                Background in frontend development helps me design realistic, buildable interfaces.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Clarity in complex systems</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                I focus on reducing cognitive load and making decision paths obvious.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Ownership mindset</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                I've been responsible for entire UX surfaces, not just isolated screens.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-4">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <div className="grid gap-3">
          <Card>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-zinc-900">UX / Product Designer</h3>
                <span className="text-xs text-zinc-400 mt-0.5">Recent</span>
              </div>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                Led UX in product environments, working closely with engineering teams, defining flows,
                building UI systems in Figma, and translating product logic into usable interfaces.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Frontend / Development Background</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                Built interfaces and features hands-on, which shaped a strong understanding of technical constraints
                and improved design feasibility decisions.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-20 mb-16 text-center">
        <h2 className="text-2xl font-semibold">Let's talk</h2>
        <p className="text-zinc-500 mt-2 leading-relaxed">
          Open to UX / Product roles where I can work on complex systems and meaningful product problems.
        </p>
        <button className="mt-6 px-6 py-2.5 rounded-2xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
          Get in touch
        </button>
      </section>
    </div>
  );
}
