import { motion } from "framer-motion";
import { Database, Cpu, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Database,
    tag: "Pillar 1",
    title: "Curated Health Datasets",
    desc: "Ready-to-use datasets on sleep, physical activity, heart rate variability, and chronic stress — cleaned, structured in design-friendly JSON, and documented so you can focus on designing, not wrangling data.",
    chips: ["Sleep & Recovery", "HRV / Stress", "Fitness & Activity", "PhysioNet · Kaggle · Open Humans"],
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900",
    iconColor: "bg-primary/10 text-primary",
    chipColor: "bg-primary/8 text-primary",
  },
  {
    icon: Cpu,
    tag: "Pillar 2",
    title: "Modular Sensor Kits",
    desc: "Plug-and-play biosensor modules for heart rate, breathing, and motion. Built on Arduino and Raspberry Pi with LED and actuator outputs, so you can create interactive experiences without needing advanced electronics skills.",
    chips: ["Heart Rate", "Breathing", "Motion & Posture", "Arduino · Raspberry Pi · Oura · Fitbit"],
    color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900",
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    chipColor: "bg-emerald-500/8 text-emerald-700 dark:text-emerald-400",
  },
  {
    icon: Code2,
    tag: "Pillar 3",
    title: "Reusable Software Resources",
    desc: "Code templates and examples in Processing, TouchDesigner, and the web — covering real-time sensor data, interactive visualizations, and integration with commercial APIs like Fitbit and Polar.",
    chips: ["Processing", "TouchDesigner", "Web / p5.js", "Fitbit · Polar · Oura APIs"],
    color: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900",
    iconColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    chipColor: "bg-violet-500/8 text-violet-700 dark:text-violet-400",
  },
];

export function Capabilities() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What's inside</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Three pillars,{" "}
            <span className="font-serif-italic font-normal text-primary">one playground.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Everything a designer needs to go from "I'm curious about health data" to a working, testable prototype.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.1 }}
              whileHover={{ y: -5, rotate: 0.4 }}
              className={`group flex flex-col p-7 rounded-3xl border-2 transition-all duration-300 ${pillar.color}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${pillar.iconColor}`}>
                  <pillar.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">{pillar.tag}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{pillar.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {pillar.chips.map((chip) => (
                  <span key={chip} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${pillar.chipColor}`}>
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
