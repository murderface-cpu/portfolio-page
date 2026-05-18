import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study - Bruce Kiptoo" },
      { name: "description", content: "How I rebuilt a SaaS frontend and cut load times by 68%." },
    ],
  }),
  component: CaseStudy,
});

const studies = [
  {
    client: "Nerdware Technologies Platform",
    timeline: "5 Months",
    market: "Kenya, East Africa & Global",
    stats: [
      ["+340%", "API Response Speed"],
      ["99.97%", "Uptime SLA"],
      ["+156%", "Active Projects"],
    ],
    bullets: [
      "Express + Prisma backend modernization",
      "PostgreSQL query optimization",
      "JWT authentication & role-based access control",
      "Blog & portfolio management system",
      "Job application workflow pipeline",
      "Admin dashboard with analytics",
    ],
  },
  {
    client: "Pascal 3D Building Editor",
    timeline: "6 Months",
    market: "Enterprise / Architecture",
    stats: [
      ["−73%", "Model Load Time"],
      ["+89%", "Rendering Performance (WebGPU)"],
      ["+250%", "Undo/Redo History Depth"],
    ],
    bullets: [
      "Turborepo monorepo architecture",
      "React Three Fiber 3D rendering",
      "Zustand state management with persistence",
      "Geometry generation systems",
      "WebGPU rendering engine",
      "IndexedDB scene persistence",
      "Collaborative editing foundation",
    ],
  },
  {
    client: "UAPTS Multimodal Transport Platform",
    timeline: "4 Months",
    market: "Kenya & Tanzania",
    stats: [
      ["+212%", "Fleet Tracking Throughput"],
      ["−58%", "Route Computation Time"],
      ["+184%", "Mobile User Capacity"],
    ],
    bullets: [
      "Django backend with PostgreSQL",
      "Real-time traffic monitoring system",
      "GIS integration for route optimization",
      "Machine learning pipeline setup",
      "Fleet management API",
      "Mobile-first architecture (Flutter/Dart)",
      "Data engineering foundation",
    ],
  },
  {
    client: "EcomScale Analytics Dashboard",
    timeline: "3 Months",
    market: "E-commerce SaaS / Global",
    stats: [
      ["+167%", "Analytics Query Speed"],
      ["+92%", "Dashboard UI Performance"],
      ["+78%", "Multi-tenant Throughput"],
    ],
    bullets: [
      "React component library design",
      "TypeScript type safety across stack",
      "Real-time data visualization",
      "Multi-tenant data isolation",
      "Automated data pipeline",
      "Performance monitoring integration",
    ],
  },
];

function CaseStudy() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-primary text-sm font-semibold tracking-widest">CASE STUDY</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">Engineering Outcomes, Not Just Code</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A look at recent engagements and the measurable impact delivered.
        </p>

        <div className="mt-12 space-y-10">
          {studies.map((s) => (
            <article key={s.client} className="card-surface p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 border-b border-border pb-6">
                <Info label="Client" value={s.client} />
                <Info label="Timeline" value={s.timeline} />
                <Info label="Market" value={s.market} />
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {s.stats.map(([n, l]) => (
                  <div key={l}>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
                      {n}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}
