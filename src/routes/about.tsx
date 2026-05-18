import { createFileRoute } from "@tanstack/react-router";
import bruceImg from "@/assets/bruce.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Bruce Kiptoo" },
      { name: "description", content: "About Bruce Kiptoo, developer based in Nairobi, Kenya." },
    ],
  }),
  component: About,
});

const stack = [
  // Frontend Frameworks & Libraries
  "TypeScript",
  "React",
  "Next.js",
  "React Three Fiber",
  "TanStack Query",
  "Zustand",
  
  // Backend & Runtime
  "Node.js",
  "Express",
  "Django",
  "Python",
  
  // Databases
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "IndexedDB",
  
  // Styling & UI
  "Tailwind CSS",
  "CSS Modules",
  "Zod (validation)",
  
  // DevOps & Infrastructure
  "Docker",
  "Kubernetes",
  "AWS (EC2, S3, Lambda)",
  "GitHub Actions",
  
  // Payments & Integration
  "Stripe",
  
  // Monorepo & Build Tools
  "Turborepo",
  "Vite",
  "Next.js",
  "Bun",
  "npm/pnpm",
  
  // 3D & Graphics
  "Three.js",
  "WebGPU",
  "Drei",
  
  // State Management & Persistence
  "Zustand",
  "Zundo (undo/redo)",
  "Prisma ORM",
  
  // Testing & Quality
  "Jest",
  "Vitest",
  
  // AI & ML
  "Python (ML pipeline)",
  "TensorFlow",
  "LLM Integration",
];

function About() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <div className="card-surface p-3">
            <img
              src={bruceImg}
              alt="Bruce Kiptoo"
              width={512}
              height={512}
              loading="lazy"
              className="rounded-xl w-full"
            />
          </div>
        </div>
        <div>
          <p className="text-primary text-sm font-semibold tracking-widest">ABOUT</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">Hi, I'm Bruce Kiptoo.</h1>
          <p className="mt-6 text-muted-foreground">
            I'm a developer based in Nairobi, Kenya, focused on building fast, reliable, and
            beautiful web products. Over the last few years I've helped startups, agencies, and
            product teams ship software that customers love and engineering teams enjoy maintaining.
          </p>
          <p className="mt-4 text-muted-foreground">
            I care about clean architecture, thoughtful UX, and measurable outcomes. Whether you
            need a new product launched from scratch or an existing codebase brought back to life, I
            bring a calm, senior-level approach to the work.
          </p>

          <h2 className="font-semibold text-xl mt-10">Tech I work with</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-sm border border-border bg-surface hover:border-primary hover:text-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="font-semibold text-xl mt-10">A few principles</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>· Simple beats clever. Boring beats fragile.</li>
            <li>· Ship small, ship often, measure everything.</li>
            <li>· The user experience is the product.</li>
            <li>· Code is read more than it is written.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
