import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-lg">Bruce Kiptoo</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Developer building fast, reliable, and beautiful web products.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link to="/case-study" className="hover:text-foreground">
            Case Study
          </Link>
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
        <div className="flex md:justify-end items-start gap-3">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bruce Kiptoo. All rights reserved.
      </div>
    </footer>
  );
}
