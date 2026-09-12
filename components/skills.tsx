"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          How I work
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-3xl border border-line bg-card p-6"
          >
            <h3 className="font-display text-xl">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
