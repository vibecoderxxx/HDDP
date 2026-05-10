import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    num: "01",
    numLabel: "Phase 1",
    period: "Mar – Apr 2026",
    title: "Plan & Co-Design",
    desc: "We work alongside design practitioners, lecturers, and master's students to map out what the platform needs to feel genuinely useful — not just technically complete.",
    bullets: ["User requirements & platform specs", "Sensor & API selection", "Data management plan"],
    accent: "#3D6BE5",
    tag: "Research",
  },
  {
    num: "02",
    numLabel: "Phase 2",
    period: "May – Jun 2026",
    title: "Collect & Prepare Datasets",
    desc: "Curating sleep, fitness, and HRV/stress datasets from PhysioNet, Kaggle, and Open Humans. Every dataset is cleaned, pre-processed, and documented so designers can actually understand and use it.",
    bullets: ["Sleep, HRV, fitness datasets", "JSON design-friendly formats", "Plain-language data guides"],
    accent: "#47B85C",
    tag: "Data",
  },
  {
    num: "03",
    numLabel: "Phase 3",
    period: "Jul – Nov 2026",
    title: "Build the Sensor Kits",
    desc: "Developing modular hardware + software kits for heart rate, breathing, and motion. Real-time data flows from biosensors into Processing, TouchDesigner, and the web — without needing a CS degree.",
    bullets: ["Arduino & Raspberry Pi modules", "Real-time data acquisition", "Visualisation templates"],
    accent: "#7C5CE4",
    tag: "Hardware",
  },
  {
    num: "04",
    numLabel: "Phase 4",
    period: "Dec 2026 – Feb 2027",
    title: "Launch & Disseminate",
    desc: "Everything comes together on a unified online platform. We run pilot workshops with students and designers, gather feedback, and open-source the whole thing so others can build on it.",
    bullets: ["Unified web platform", "Workshop & webinar series", "Open-source codebase"],
    accent: "#E05B52",
    tag: "Launch",
  },
];

function PhaseRow({ phase, i }: { phase: typeof phases[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.08 }}
      className="relative grid grid-cols-[64px_1px_1fr] md:grid-cols-[120px_1px_1fr] gap-x-8 md:gap-x-12 pb-16 last:pb-0"
    >
      {/* Phase number — large serif */}
      <div className="flex flex-col items-end pt-1 select-none">
        <span
          className="font-serif-italic text-5xl md:text-7xl leading-none font-normal"
          style={{ color: phase.accent, opacity: 0.18 }}
        >
          {phase.num}
        </span>
      </div>

      {/* Spine + node */}
      <div className="relative flex flex-col items-center">
        {/* Node dot */}
        <motion.div
          className="w-3 h-3 rounded-full shrink-0 mt-2.5 z-10 ring-4 ring-background"
          style={{ backgroundColor: phase.accent }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: i * 0.08 + 0.15 }}
        />
        {/* Line downward — hidden on last */}
        {i < phases.length - 1 && (
          <motion.div
            className="flex-1 w-px mt-2"
            style={{ backgroundColor: phase.accent, opacity: 0.15 }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-2">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3 mt-1">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${phase.accent}18`, color: phase.accent }}
          >
            {phase.tag}
          </span>
          <span className="text-xs text-muted-foreground">{phase.period}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
          {phase.title}
        </h3>

        <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-xl">
          {phase.desc}
        </p>

        {/* Bullet chips */}
        <div className="flex flex-wrap gap-2">
          {phase.bullets.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border bg-background text-foreground"
              style={{ borderColor: `${phase.accent}30` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: phase.accent }}
              />
              {b}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function FourPillars() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How we're{" "}
            <span className="font-serif-italic font-normal text-primary">building it</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Four phases, co-designed with the people who'll actually use it. March 2026 through February 2027.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {phases.map((phase, i) => (
            <PhaseRow key={phase.num} phase={phase} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
