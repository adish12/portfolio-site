import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function DesignSystemCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-semibold">Adi Shohat</a>
          <nav className="flex gap-6 text-sm text-zinc-600 font-manrope">
            <a href="/#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="/#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="/cv" className="hover:text-zinc-900 transition-colors">CV</a>
            <a href="/#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">

        {/* BACK */}
        <a href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </a>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Building a design system for an ERP
        </h1>

        <p className="mt-6 text-zinc-600 leading-relaxed">
          I created a scalable UI kit and component system based on atomic design principles,
          enabling clear hierarchy and reusability. This maintained design consistency, reduced
          repetitive work, and improved handoff to development.
        </p>

        {/* META */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {[
            { label: "Role", value: "Product Designer" },
            { label: "Type", value: "Design System – ERP Platform" },
            { label: "Team", value: "1 Designer, 1 PM, 2 Devs" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-zinc-200 p-4 font-manrope">
              <p className="text-sm text-zinc-400">{label}</p>
              <p className="text-sm font-medium text-zinc-900 mt-1">{value}</p>
            </div>
          ))}
        </div>

        {/* CHALLENGE */}
        <section className="mt-16">
          <p className="text-sm text-zinc-400 mb-3">The challenge</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            How do I build a design system while keeping the users&apos; and team&apos;s experience simple and intuitive?
          </h2>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            The product manager&apos;s vision was clear: a fully customizable ERP system, built from the ground up
            to handle complex workflows without overwhelming the user.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            With no existing product, no design infrastructure, and a newly formed team, I was tasked with
            creating a design system that could support this vision.
          </p>
        </section>

        {/* RESEARCH */}
        <section className="mt-16">
          <p className="text-sm text-zinc-400 mb-3">Research &amp; Exploration</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Before building, I had to understand what makes a system work
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-600 leading-relaxed list-disc list-outside pl-5">
            <li>
              I <strong className="text-zinc-900">reviewed product requirements</strong> with the PM to understand core use cases and created some{" "}
              <strong className="text-zinc-900">initial screens</strong> to identify what components and patterns we&apos;d likely need for ERP workflows
              (e.g., tables, filters, form-heavy screens)
            </li>
            <li>
              I <strong className="text-zinc-900">studied design systems</strong> like Material, HIG, Atlassian for best practices
            </li>
            <li>
              I explored <strong className="text-zinc-900">data table packages</strong> that would suit the needs of the system, and can also be
              customized to its needs (e.g., MUI, ag-grid)
            </li>
            <li>
              I studied and applied <strong className="text-zinc-900">Atomic Design</strong> principles to organize components into a scalable system
            </li>
            <li>
              <strong className="text-zinc-900">Design–Dev Collaboration:</strong> I maintained naming alignment between Figma and code, structured
              the Figma files clearly, and worked closely with the devs to ensure smooth handoff and implementation.
            </li>
          </ul>
        </section>

        {/* IMPLEMENTATION */}
        <section className="mt-16">
          <p className="text-sm text-zinc-400 mb-3">Implementation</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Key Components Designed
          </h2>

          {[
            { name: "Typography", category: "Atoms", web: "/ui-kit/Text.png", mobile: "/ui-kit/TextM.png" },
            { name: "Colors", category: "Atoms", web: "/ui-kit/Colors.png", mobile: "/ui-kit/ColorsM.png" },
            { name: "Spacing", category: "Atoms", web: "/ui-kit/Spacing.png", mobile: "/ui-kit/SpacingM.png" },
            { name: "Grid System", category: "Atoms", web: "/ui-kit/GridSystem.png", mobile: "/ui-kit/GridSystemM.png" },
            { name: "Buttons", category: "Molecules", web: "/ui-kit/Buttons.png", mobile: "/ui-kit/ButtonsM.png" },
            { name: "Tabs", category: "Molecules", web: "/ui-kit/Tabs.png", mobile: "/ui-kit/TabsM.png" },
            { name: "Breadcrumbs", category: "Molecules", web: "/ui-kit/Breadcrumbs.png", mobile: "/ui-kit/BreadcrumbsM.png" },
            { name: "Selectors", category: "Molecules", web: "/ui-kit/Selectors.png", mobile: "/ui-kit/SelectorsM.png" },
            { name: "Text Field", category: "Molecules", web: "/ui-kit/Text Field.png", mobile: "/ui-kit/Text FieldM.png" },
            { name: "Data Table", category: "Organisms", web: "/ui-kit/Data tables.png", mobile: "/ui-kit/Data tablesM.png" },
          ].map((component) => (
            <div key={component.name} className="mt-10">
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-lg font-bold">{component.name}</h3>
                <span className="text-sm text-zinc-400">/ {component.category}</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50">
                <Image
                  src={component.web}
                  alt={`${component.name}`}
                  width={800}
                  height={500}
                  className="w-full h-auto hidden md:block"
                  unoptimized
                />
                <Image
                  src={component.mobile}
                  alt={`${component.name}`}
                  width={400}
                  height={600}
                  className="w-full h-auto block md:hidden"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </section>

        {/* OUTCOMES */}
        <section className="mt-16">
          <p className="text-sm text-zinc-400 mb-3">Outcomes</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            What impact did the system actually have?
          </h2>
          <ul className="mt-5 space-y-2 text-zinc-600 leading-relaxed list-disc list-outside pl-5">
            <li>A foundational UI kit covering the core needs of the product</li>
            <li>Visual and behavioral consistency across screens</li>
            <li>Developers handoff was clear and fast</li>
          </ul>
        </section>

        {/* LEARNINGS */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            What I learned by building a system from scratch
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Designing this system taught me the value of clarity and reusability — not just in components, but in
            communication across the team.
          </p>
        </section>

        {/* NEXT STEPS */}
        <section className="mt-16">
          <p className="text-sm text-zinc-400 mb-3">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            How I&apos;d improve and scale the system further?
          </h2>
          <ul className="mt-5 space-y-2 text-zinc-600 leading-relaxed list-disc list-outside pl-5">
            <li>Introduce formal <strong className="text-zinc-900">design tokens</strong> for easier theming and long-term maintenance</li>
            <li>Add <strong className="text-zinc-900">structured documentation</strong> to improve adoption and onboarding</li>
            <li>
              Extend support for <strong className="text-zinc-900">RTL layouts</strong> and{" "}
              <strong className="text-zinc-900">accessibility features</strong> such as high contrast modes
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
