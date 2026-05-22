import { ArrowLeft } from "lucide-react";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default function CV() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-semibold">Adi Shohat</a>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <a href="/#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="/#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="/cv" className="text-zinc-900 font-medium">CV</a>
            <a href="/#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">

        {/* PAGE TITLE */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </a>
          <h1 className="text-4xl font-semibold">CV</h1>
          <p className="text-zinc-500 mt-2">UX Designer · CS Background · Product & Systems Thinking</p>
        </div>

        {/* EXPERIENCE */}
        <section className="grid gap-4 mb-14">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="grid gap-3">
            <Card>
              <div className="p-5">
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
              <div className="p-5">
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
              <div className="p-5">
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
        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="grid gap-3">
            <Card>
              <div className="p-5">
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
              <div className="p-5">
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

      </div>
    </main>
  );
}
