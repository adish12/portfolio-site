"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, GraduationCap, Mail } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

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
          <nav className="flex gap-6 text-sm text-zinc-600 font-manrope">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
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
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.15]">
            I design products that make complexity feel simple.
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            4y+ Product Design <span className="font-bold mx-1">•</span> Software Background
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
          {[
            { href: null, title: "Project Title", desc: "Short description of the problem, your role, and the impact." },
            { href: null, title: "Project Title", desc: "Short description of the problem, your role, and the impact." },
            { href: "/work/design-system", title: "Building a Design System for an ERP", desc: "Created a scalable UI kit and component system that reduced repetitive work and improved dev handoff." },
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-video bg-zinc-50 rounded-t-2xl" />
              <div className="p-5">
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Case Study</p>
                <h3 className="text-base font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">{item.desc}</p>
                {item.href ? (
                  <a href={item.href} className="mt-4 text-sm font-medium flex items-center gap-1 text-zinc-500 hover:gap-2 transition-all">
                    View details <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button className="mt-4 text-sm font-medium flex items-center gap-1 text-zinc-500 hover:gap-2 transition-all">
                    View details <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* BUILT */}
      <section id="built" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-100">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="text-2xl font-semibold">Built</h2>
        </div>
        <p className="text-sm text-zinc-500 mb-8 max-w-2xl leading-relaxed">
          Apps and sites I designed and brought to life with AI.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
          {[
            { href: null, title: "Spelling Bee", desc: "A word game that challenges you to find as many words as possible from seven letters." },
            { href: null, title: "G-Vision Landing Page", desc: "A clean marketing page built for a client to introduce their service and generate leads." },
          ].map((item, i) => {
            const inner = (
              <>
                <div className="w-12 h-12 shrink-0 rounded-lg bg-zinc-100 border border-zinc-200" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-medium text-zinc-900 truncate">{item.title}</h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </>
            );
            return item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 py-4 border-b border-zinc-100"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="group flex gap-4 py-4 border-b border-zinc-100 opacity-60">
                {inner}
              </div>
            );
          })}
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
          <div className="mt-2">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">Education</p>
            <div className="flex flex-wrap gap-3">
              {[
                { title: "B.Sc. Computer Science", issuer: "The Hebrew University" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white pl-3 pr-4 py-2"
                >
                  <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="text-sm">
                    <span className="font-medium text-zinc-900">{c.title}</span>
                    <span className="text-zinc-400"> - {c.issuer}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">Certifications</p>
            <div className="flex flex-wrap gap-3">
              {[
                { title: "UX Design", issuer: "Netcraft Academy" },
                { title: "Information Science", issuer: "Technion" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white pl-3 pr-4 py-2"
                >
                  <Award className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="text-sm">
                    <span className="font-medium text-zinc-900">{c.title}</span>
                    <span className="text-zinc-400"> - {c.issuer}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-50 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Let's build something useful</h2>
          <p className="text-zinc-500 mt-3">Open to UX / Product Design roles</p>
          <p className="text-zinc-400 text-sm mt-6">adi.shohat21@gmail.com</p>
          <div className="flex justify-center gap-3 mt-4">
            <a
              href="mailto:adi.shohat21@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4" /> Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/adishohat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
