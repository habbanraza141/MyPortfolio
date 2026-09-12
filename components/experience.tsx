"use client";

import { motion } from "motion/react";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            Where I have shipped
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">
          Full-time roles from junior frontend to React Native team lead.
        </p>
      </motion.div>

      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <span
              className={`absolute -left-[31px] top-5 h-3 w-3 rounded-full sm:-left-[39px] ${
                job.current
                  ? "bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]"
                  : "bg-slate-500"
              }`}
            />
            <article
              className={`rounded-3xl border p-6 sm:p-8 ${
                job.current
                  ? "border-cyan-300/30 bg-cyan-400/5"
                  : "border-line bg-card"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {job.company} · {job.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">
                    {job.role}
                  </h3>
                </div>
                <p className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {job.start} — {job.end} · {job.type}
                </p>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted sm:text-base">
                {job.highlights.map((item) => (
                  <li key={item} className="pl-4 relative">
                    <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-cyan-300/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
