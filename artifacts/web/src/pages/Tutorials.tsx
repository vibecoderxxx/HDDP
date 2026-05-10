import { motion } from "framer-motion";
import { Play, Clock, BookOpen, ChevronRight, Cpu, Radio, Activity, Database, Heart, Code2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;

const featured = {
  title: "From Sensor to Screen in 30 Minutes",
  description:
    "Connect an HDDP heart-rate sensor, stream live PPG data to your laptop, run a simple visualisation in Processing, and add a breath-rate overlay — all in one sitting. No prior sensor experience needed.",
  duration: "32 min",
  level: "Beginner",
  icon: Heart,
  tags: ["Getting Started", "PPG Sensor", "Processing"],
};

const tutorials = [
  {
    title: "Reading Heart Rate Data with Arduino",
    description: "Connect the HDDP PPG sensor, parse BPM output, and log timestamped readings over Serial to your laptop.",
    duration: "12 min",
    level: "Beginner" as const,
    icon: Radio,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    tags: ["Arduino", "PPG", "Serial"],
  },
  {
    title: "Visualising HRV with p5.js",
    description: "Load an RR-interval dataset from PhysioNet and draw an animated Poincaré plot that updates as new data arrives.",
    duration: "28 min",
    level: "Intermediate" as const,
    icon: Activity,
    iconColor: "text-brand-yellow",
    iconBg: "bg-brand-yellow/10",
    tags: ["p5.js", "HRV", "PhysioNet"],
  },
  {
    title: "Multi-Sensor Fusion — EDA + BPM",
    description: "Combine skin-conductance and heart-rate streams into a combined stress index, visualised as a live dashboard in Python.",
    duration: "35 min",
    level: "Advanced" as const,
    icon: Cpu,
    iconColor: "text-brand-coral",
    iconBg: "bg-brand-coral/10",
    tags: ["EDA", "Python", "Sensor Fusion"],
  },
  {
    title: "Building a Real-Time Biofeedback Display",
    description: "Pipe live sensor streams into a TouchDesigner patch, add threshold triggers, and drive generative visuals from your own body data.",
    duration: "18 min",
    level: "Beginner" as const,
    icon: Database,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green/10",
    tags: ["TouchDesigner", "Biofeedback", "Real-Time"],
  },
  {
    title: "Annotating a Sleep Dataset for Design",
    description: "Use the HDDP annotation tool to label sleep stages in an actigraphy CSV, then export annotated data ready for design prototypes.",
    duration: "22 min",
    level: "Intermediate" as const,
    icon: Code2,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    tags: ["Sleep Data", "Annotation", "CSV"],
  },
  {
    title: "Designing for Breath — Paced Breathing UI",
    description: "Read breathing rate from the chest strap, smooth the signal with a rolling average, and drive a calm, animated breathing guide in the browser.",
    duration: "40 min",
    level: "Advanced" as const,
    icon: Heart,
    iconColor: "text-brand-coral",
    iconBg: "bg-brand-coral/10",
    tags: ["Breathing", "Web", "Signal Processing"],
  },
];

const levelColors: Record<string, string> = {
  Beginner:     "bg-brand-green/10 text-brand-green",
  Intermediate: "bg-brand-yellow/10 text-yellow-600",
  Advanced:     "bg-brand-coral/10 text-brand-coral",
};

export function Tutorials() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-20 pb-14 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="w-2 h-2 rounded-sm bg-brand-green inline-block" />
              <span className="text-sm font-medium text-muted-foreground italic font-serif-italic">
                Learn by building
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight"
            >
              Step-by-step{" "}
              <span className="font-serif-italic font-normal text-brand-green">
                Tutorials
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Practical, self-contained guides for every stage of the health-data-design
              workflow — from your first sensor read to a finished interactive installation.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
          {/* Featured tutorial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden"
          >
            <div className="absolute top-6 right-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${levelColors[featured.level]}`}>
                {featured.level}
              </span>
            </div>
            <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <featured.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Featured Tutorial
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Start Tutorial
                  </a>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.duration}
                  </span>
                  <div className="flex gap-2">
                    {featured.tags.map((t) => (
                      <span key={t} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2">
            {levels.map((l) => (
              <button
                key={l}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                  l === "All"
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Tutorials grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tutorials.map((tut, i) => (
              <motion.a
                key={tut.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${tut.iconBg} flex items-center justify-center`}>
                    <tut.icon className={`w-5 h-5 ${tut.iconColor}`} />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${levelColors[tut.level]}`}>
                    {tut.level}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {tut.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {tut.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {tut.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" /> {tut.tags[0]}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
