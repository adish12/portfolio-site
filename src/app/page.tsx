"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 md:px-16 py-10">
      {/* HERO */}
      <section className="max-w-4xl mx-auto grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-zinc-500">UX Designer · Product Thinker · Frontend Background</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            I design products that make complex systems feel simple.
          </h1>
          <p className="mt-4 text-zinc-600 text-lg">
            I come from development and UX, with experience leading design end-to-end in product teams —
            from early research and flows, to UI systems and hands-on implementation thinking.
          </p>

          <div className="flex gap-3 mt-6">
            <Button className="rounded-2xl">View Work</Button>
            <Button variant="outline" className="rounded-2xl">Download CV</Button>
          </div>

          <div className="flex gap-4 mt-6 text-zinc-500">
            <a href="mailto:adi.shohat21@gmail.com" className="hover:text-zinc-900">Email</a>
            <a href="https://linkedin.com" className="hover:text-zinc-900">LinkedIn</a>
            <a href="https://github.com" className="hover:text-zinc-900">GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-20 grid gap-4">
        <h2 className="text-xl font-medium">About</h2>
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
      <section className="max-w-4xl mx-auto mt-20 grid gap-4">
        <h2 className="text-xl font-medium">What I bring</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">End-to-end product thinking</h3>
              <p className="text-sm text-zinc-600 mt-2">
                From research and flows to UI decisions and implementation details.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">Strong technical intuition</h3>
              <p className="text-sm text-zinc-600 mt-2">
                Background in frontend development helps me design realistic, buildable interfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">Clarity in complex systems</h3>
              <p className="text-sm text-zinc-600 mt-2">
                I focus on reducing cognitive load and making decision paths obvious.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">Ownership mindset</h3>
              <p className="text-sm text-zinc-600 mt-2">
                I've been responsible for entire UX surfaces, not just isolated screens.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mt-20 grid gap-6">
        <h2 className="text-xl font-medium">Experience</h2>

        <div className="grid gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex justify-between">
                <h3 className="font-medium">UX / Product Designer</h3>
                <span className="text-sm text-zinc-500">Recent</span>
              </div>
              <p className="text-sm text-zinc-600 mt-2">
                Led UX in product environments, working closely with engineering teams, defining flows,
                building UI systems in Figma, and translating product logic into usable interfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">Frontend / Development Background</h3>
              <p className="text-sm text-zinc-600 mt-2">
                Built interfaces and features hands-on, which shaped a strong understanding of technical constraints
                and improved design feasibility decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-24 mb-10 text-center">
        <h2 className="text-xl font-medium">Let's talk</h2>
        <p className="text-zinc-600 mt-2">
          Open to UX / Product roles where I can work on complex systems and meaningful product problems.
        </p>
        <Button className="mt-6 rounded-2xl">Get in touch</Button>
      </section>
    </div>
  );
}
