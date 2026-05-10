import { motion } from "framer-motion";

const stats = [
  { value: "3",      label: "Sensor Types",         note: "heart rate, breathing, motion" },
  { value: "50+",    label: "Curated Datasets",      note: "sleep, HRV, fitness, activity" },
  { value: "3",      label: "Software Platforms",    note: "Processing, TouchDesigner, web" },
  { value: "Mar '26", label: "Project Kick-off",    note: "through February 2027" },
];

const partners = [
  "HvA", "FDMCI", "Digital Life Lab", "TU/e", "A+N Studio", "Fashion Tech Farm", "PhysioNet", "Kaggle",
];

export function Partnerships() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-0.5">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.note}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground/70 mb-6">
            Collaborating with
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
          >
            {partners.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default select-none"
              >
                {p}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
