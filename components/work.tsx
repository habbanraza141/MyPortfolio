"use client";

import { motion } from "motion/react";
import { work } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Work</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Products I have owned
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {work.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-line bg-card p-6 sm:p-7"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              {item.tag}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.company}</p>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
