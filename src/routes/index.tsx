import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Rocket, Database, Quote } from "lucide-react";
import heroImg from "@/assets/hero-laptop.jpg";
import bruceImg from "@/assets/bruce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruce Kiptoo — Developer Portfolio" },
      {
        name: "description",
        content: "Developer crafting fast, reliable, and beautiful web products.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--glow)_25%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Build Real Products.{" "}
              <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
                Ship Beyond Limits.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              I'm Bruce Kiptoo — a developer who helps founders and teams turn ideas into fast,
              reliable, production-grade web applications.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
              <p className="text-sm text-primary">Trusted by 30+ growing startups worldwide</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Developer workspace"
              width={1280}
              height={896}
              className="relative rounded-2xl border border-border shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why */}
      <Section
        title="Why Work With Me?"
        subtitle="I focus on shipping maintainable code, modern architectures, and pixel-perfect interfaces that drive real business outcomes."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Code2,
              title: "Modern Full-Stack",
              desc: "React, TypeScript, Node, Postgres — production-ready patterns end to end.",
            },
            {
              Icon: Rocket,
              title: "Performance First",
              desc: "Fast load times, clean architecture, and infrastructure that scales.",
            },
            {
              Icon: Database,
              title: "Data-Driven Builds",
              desc: "Analytics, A/B tests, and metrics to make every feature measurable.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="card-surface p-8 hover:border-primary/60 transition-colors">
              <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-glow mb-5">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section
        title="What I Build"
        subtitle="End-to-end engineering services designed to ship great products, faster."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Web Applications",
              desc: "Custom SaaS dashboards, internal tools, and consumer apps built with React, Next.js, and TanStack.",
            },
            {
              title: "APIs & Backends",
              desc: "Type-safe Node and Postgres backends with auth, payments, and clean REST or tRPC interfaces.",
            },
            {
              title: "Performance Audits",
              desc: "Profile, refactor, and ship measurable speed-ups for slow or aging codebases.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="card-surface p-8 hover:-translate-y-1 transition-transform"
            >
              <div className="text-primary text-sm font-semibold tracking-widest">SERVICE</div>
              <h3 className="font-semibold text-xl mt-2">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section
        title="Numbers That Reflect The Work"
        subtitle="Every project is delivered with focus on measurable, long-term impact."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["50+", "Projects Delivered"],
            ["98%", "Client Satisfaction"],
            ["3X", "Average Performance Gains"],
            ["6+", "Years of Engineering"],
          ].map(([n, l]) => (
            <div key={l} className="card-surface p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
                {n}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="What Clients Say" subtitle="Real teams. Real products. Real outcomes.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Bruce restructured our entire frontend. The app feels twice as fast and our team velocity went up dramatically.",
              n: "Daniel Morgan",
              r: "CTO, EcomScale",
            },
            {
              q: "Clean code, clear communication, and on-time delivery. He shipped what other teams couldn't in three months.",
              n: "Michel Thomas",
              r: "Founder, GrowthNest",
            },
            {
              q: "From architecture to deployment, Bruce delivered exactly what he promised. Reliable, sharp, and easy to work with.",
              n: "James Carter",
              r: "Head of Product, BrightEdge",
            },
          ].map((t) => (
            <div key={t.n} className="card-surface p-8">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground">{t.q}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={bruceImg}
                  alt={t.n}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl card-surface p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--primary)_25%,transparent),transparent_70%)]" />
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Something That Lasts?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Let's craft a product that's fast, maintainable, and built to grow with your business.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Start a Project
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            No long-term contracts · Transparent process · Measurable outcomes
          </p>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
