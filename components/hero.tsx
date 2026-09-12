"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { site } from "@/data/site";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-56 w-48 animate-pulse rounded-[1.6rem] bg-cyan-400/10 ring-1 ring-cyan-300/20" />
    </div>
  ),
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="glow-orb pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/15" />
      <div className="glow-orb pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-indigo-500/15" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.28em] text-cyan-300"
          >
            {site.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl"
          >
            {site.shortName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-3 text-lg text-cyan-100/90 sm:text-xl"
          >
            {site.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            {site.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#experience"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-cyan-100"
            >
              View experience
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-5 py-2.5 text-sm text-muted transition hover:border-cyan-300/40 hover:text-foreground"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[420px] w-full lg:h-[540px]"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
