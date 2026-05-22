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
          <p className="text-sm text-zinc-500 tracking-wide">UX Designer · CS Background · Product & Systems Thinking</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mt-3">
            I design products that make complex systems feel simple.
          </h1>
          <p className="mt-5 text-zinc-600 text-lg leading-relaxed">
            I started as a software developer and moved into UX — which means I design with the full picture in mind.
            I know what's hard to build, where the edge cases hide, and how to write specs engineers actually want to work with.
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
            <a href="https://linkedin.com/in/adishohat" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="https://github.com" className="hover:text-zinc-900 transition-colors">GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-3">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-zinc-600 leading-relaxed">
          Most designers come from graphic design or psychology. I come from writing production code.
          That background isn't just a fun fact — it means I read technical constraints before I sketch
          the first screen, catch implementation problems before they reach engineering, and collaborate
          with developers as someone who's actually been on their side of the table.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I've owned design end-to-end in product teams — working closely with engineers, product managers,
          and stakeholders to take things from ambiguous problem to shipped feature. I know how to move
          fast without losing the thread, and I care about what actually gets built, not just what looks
          good in Figma.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-4">
        <h2 className="text-2xl font-semibold">What I bring</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Dev background, design mindset</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                CS degree and 3 years of software development mean I design things that are actually buildable — and I speak the same language as the engineers I work with.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">End-to-end ownership</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                At Mdsc I was the sole UX designer — responsible for research, flows, UI systems, and specs across the entire product.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Clarity in complex systems</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                I focus on reducing cognitive load and making decision paths obvious — especially in data-heavy or workflow-driven products.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">Low friction with engineering</h3>
              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                I write specs that account for technical constraints upfront. Less back-and-forth, fewer surprises in implementation.
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
                <div>
                  <h3 className="font-medium text-zinc-900">User Experience Designer</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Mdsc</p>
                </div>
                <span className="text-xs text-zinc-400 mt-0.5 shrink-0 ml-4">2020 – 2025</span>
              </div>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                Sole UX designer across the product. Responsible for end-to-end design — from defining
                user flows and running research, to building UI systems in Figma and working directly with engineering
                to ship features. Embedded in the product team with full ownership over the design surface.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-zinc-900">Software Developer</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Ex Libris · Full-time</p>
                </div>
                <span className="text-xs text-zinc-400 mt-0.5 shrink-0 ml-4">2016 – 2018</span>
              </div>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                Developed and maintained production tools end-to-end across development, testing, and deployment.
                Responsible for production server health and versioning. Worked in Agile with Perl, Java, MySQL, Apache, Linux, Jenkins, and Jira.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-zinc-900">Software & Web Developer</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Hebrew University — Minerva Center for Movement Ecology</p>
                </div>
                <span className="text-xs text-zinc-400 mt-0.5 shrink-0 ml-4">2015 – 2016</span>
              </div>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                Built and maintained a web platform for querying and visualizing wildlife tracking research data
                (HTML5, CSS3, JavaScript, Django, MySQL, Google Maps API). Developed a real-time Java service
                feeding data into the research DB, migrated lab servers to AWS EC2, and maintained the research database.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-4">
        <h2 className="text-2xl font-semibold">Education</h2>

        <div className="grid gap-3">
          <Card>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-zinc-900">B.Sc. Computer Science</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">The Hebrew University of Jerusalem</p>
                </div>
                <span className="text-xs text-zinc-400 mt-0.5 shrink-0 ml-4">2012 – 2016</span>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-zinc-900">UX Design</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Netcraft Academy</p>
                </div>
                <span className="text-xs text-zinc-400 mt-0.5 shrink-0 ml-4">2019 – 2020</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-20 mb-16 text-center">
        <h2 className="text-2xl font-semibold">Let's talk</h2>
        <p className="text-zinc-500 mt-2 leading-relaxed">
          Open to UX / Product Design roles where I can work on complex systems and meaningful product problems.
        </p>
        <button className="mt-6 px-6 py-2.5 rounded-2xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
          Get in touch
        </button>
      </section>
    </div>
  );
}
