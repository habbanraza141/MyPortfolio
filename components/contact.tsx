"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(129,140,248,0.1))] px-6 py-14 text-center sm:px-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Contact
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl">
          Let us build the next release
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Open to team lead and senior React Native conversations. Based in{" "}
          {site.location}.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-cyan-100"
        >
          {site.email}
        </a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} {site.name}. Built with Next.js.
    </footer>
  );
}
