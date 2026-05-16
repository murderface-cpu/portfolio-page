import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bruce Kiptoo" },
      { name: "description", content: "Get in touch with Bruce Kiptoo." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "How long does a typical project take?", a: "Most engagements run 4–12 weeks depending on scope. I'll give you a clear timeline after our first call." },
  { q: "Do you work solo or with a team?", a: "Both. I deliver as a senior IC, and can bring in trusted designers and engineers when the scope calls for it." },
  { q: "What stack do you prefer?", a: "TypeScript end-to-end — React/Next/TanStack on the frontend, Node and Postgres on the backend." },
  { q: "Do you offer ongoing support?", a: "Yes. After launch I offer monthly retainer arrangements for maintenance, performance, and new features." },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-primary text-sm font-semibold tracking-widest">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">Let's build something great.</h1>
          <p className="mt-4 text-muted-foreground">Tell me about your project — timelines, goals, and where you're stuck. I'll get back within one business day.</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" /><span>hello@brucekiptoo.dev</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" /><span>Nairobi, Kenya · Available worldwide</span>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-semibold text-xl">Frequently asked</h2>
            {faqs.map((f) => (
              <details key={f.q} className="card-surface p-5 group">
                <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-surface p-8 h-fit space-y-4 sticky top-24"
        >
          <Field label="Your name"><input required className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary" /></Field>
          <Field label="Email"><input required type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary" /></Field>
          <Field label="What can I help with?">
            <textarea required rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary resize-none" />
          </Field>
          <button type="submit" className="btn-primary w-full !rounded-lg">
            <Send className="w-4 h-4 mr-2" /> Send Message
          </button>
          {sent && <p className="text-sm text-primary text-center">Thanks! I'll be in touch shortly.</p>}
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
