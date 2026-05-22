"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="font-semibold">Adi Shohat</p>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="/cv" className="hover:text-zinc-900 transition-colors">CV</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            UX Designer • Product Thinker • Software Background
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-[1.15]">
            I design products that make complex systems feel simple.
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            B.Sc. Computer Science, The Hebrew University · 4+ years UX/Product Design
          </p>
          <p className="mt-5 text-lg text-zinc-600 max-w-2xl leading-relaxed">
            I turn messy, high-friction workflows into clear, usable interfaces that feel simple to the user.
            With a background in development, I design with real implementation constraints in mind.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-video bg-zinc-100 rounded-t-2xl" />
              <div className="p-5">
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Case Study</p>
                <h3 className="text-base font-semibold mt-1">Project Title</h3>
                <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                  Short description of the problem, your role, and the impact.
                </p>
                <button className="mt-4 text-sm font-medium flex items-center gap-1 text-zinc-900 hover:gap-2 transition-all">
                  View details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-zinc-50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid gap-3">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-zinc-600 leading-relaxed max-w-3xl">
            I design complex, workflow-heavy products and care about making hard things feel simple.
            My background in software development means I work closely with engineering, think about
            constraints early, and ship things that actually hold up.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-50 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Let's build something useful</h2>
          <p className="text-zinc-500 mt-3">Open to UX / Product Design roles</p>
          <a
            href="mailto:adi.shohat21@gmail.com"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
          <div className="flex justify-center gap-5 mt-6 text-zinc-500 text-sm">
            <a href="https://linkedin.com/in/adishohat" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="https://github.com" className="hover:text-zinc-900 transition-colors">GitHub</a>
          </div>
        </div>
      </section>

    </main>
  );
}
