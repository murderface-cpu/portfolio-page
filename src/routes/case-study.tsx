import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study — Bruce Kiptoo" },
      { name: "description", content: "How I rebuilt a SaaS frontend and cut load times by 68%." },
    ],
  }),
  component: CaseStudy,
});

const studies = [
  {
    client: "E-commerce SaaS",
    timeline: "4 Months",
    market: "USA & EU",
    stats: [["−68%", "Page Load Time"], ["+145", "Lighthouse Score Points"], ["+87%", "Conversion Rate"]],
    bullets: ["Frontend re-architecture", "Edge caching strategy", "Component library rollout"],
  },
  {
    client: "Fintech Platform",
    timeline: "6 Months",
    market: "UK & USA",
    stats: [["+228%", "API Throughput"], ["99.98%", "Uptime SLA"], ["+63%", "Active Users"]],
    bullets: ["Backend rewrite to TypeScript", "Postgres query optimization", "CI/CD modernization", "On-call observability"],
  },
  {
    client: "Local Services Startup",
    timeline: "3 Months",
    market: "Kenya & Tanzania",
    stats: [["+178%", "Booking Volume"], ["−52%", "Time-to-First-Action"], ["+41%", "Repeat Bookings"]],
    bullets: ["Mobile-first redesign", "Offline-capable PWA", "Realtime notifications", "Stripe Connect integration"],
  },
];

function CaseStudy() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-primary text-sm font-semibold tracking-widest">CASE STUDY</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">Engineering Outcomes, Not Just Code</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">A look at recent engagements and the measurable impact delivered.</p>

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
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">{n}</div>
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
