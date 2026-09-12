"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="grid gap-8 lg:grid-cols-[0.4fr_1fr]"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          About
        </p>
        <div className="max-w-2xl space-y-5 text-lg leading-8 text-muted">
          <p>
            I lead React Native teams in Karachi and ship mobile products that
            have to work in production — not just in a demo. That means
            architecture, mentoring, release pipelines, and staying close to
            the bugs that actually matter.
          </p>
          <p>
            Before leading a social app at Alasoft, I was the primary mobile
            engineer at Anglebrackets for EHS Navigator and Mabel Insights AI,
            taking both through NestJS/AWS integrations and store releases. I
            started in frontend at PAZ Technologies on global eSIM platforms,
            then moved fully into React Native.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
