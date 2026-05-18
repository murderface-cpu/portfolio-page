import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Bruce Kiptoo" },
      { name: "description", content: "Selected projects by Bruce Kiptoo." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "EcomScale Dashboard",
    tag: "SaaS · React · Postgres",
    desc: "Multi-tenant analytics dashboard powering 1M+ monthly events for ecommerce brands.",
    url: "https://github.com/murderface-cpu/dash-better"
  },
  {
    name: "GrowthNest API",
    tag: "Node · tRPC · AWS",
    desc: "Type-safe backend platform with auth, billing, and a public developer API.",
    url: "https://github.com/Nerdware-Systems-Limited/nerdware-backend"
  },
  {
    name: "BrightEdge CMS",
    tag: "Next.js · CMS · Edge",
    desc: "Editorial CMS with sub-100ms TTFB and a custom blocks-based editor.",
    url: "https://github.com/murderface-cpu/editor"
  },
  {
    name: "FieldKit Mobile",
    tag: "React Native · Offline",
    desc: "Offline-first field operations app for technicians, syncing 10K+ records daily.",
    url: "https://github.com/Nerdware-Systems-Limited/uapts_mobile"
  },
  {
    name: "PulseAI",
    tag: "AI · Streaming · LLM",
    desc: "Real-time AI chat product with streaming responses and tool-calling agents.",
    url: "https://github.com/murderface-cpu/chatbot"
  },
  {
    name: "PayLane Checkout",
    tag: "Stripe · Payments",
    desc: "High-conversion checkout flow improving completion rate by 41%.",
    url: "https://github.com/Nerdware-Systems-Limited/shop-frontend"
  },
  {
    name: "Agency Agents",
    tag: "AI · Multi-Agent",
    desc: "A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers.",
    url: "https://github.com/murderface-cpu/agency-agents"
  },
  {
    name: "UAPTS Backend",
    tag: "Django · Transport · ML",
    desc: "Scalable, modular, and data-driven platform designed to manage, analyze, and optimize multimodal transport systems.",
    url: "https://github.com/Nerdware-Systems-Limited/uapts_backend"
  },
];

function Projects() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-primary text-sm font-semibold tracking-widest">PORTFOLIO</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">Selected Work</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A snapshot of products I've designed, built, and shipped for startups and growing teams.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p) => (
            <div
              key={p.name}
              className="card-surface p-8 group hover:border-primary/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-primary tracking-widest">{p.tag}</div>
                  <h2 className="font-semibold text-xl mt-2">{p.name}</h2>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="btn-primary">
            Have a project in mind?
          </Link>
        </div>
      </div>
    </div>
  );
}
