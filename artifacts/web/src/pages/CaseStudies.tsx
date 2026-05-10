import { motion } from "framer-motion";
import { ArrowRight, Heart, Activity, Moon, Cpu, Radio, Brain } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const featured = {
  company: "HeartBloom — HvA FDMCI",
  industry: "Wearable Health Design",
  icon: Heart,
  iconColor: "text-brand-coral",
  iconBg: "bg-brand-coral/10",
  headline: "Turning Heart Rate into a Living, Breathing Interface",
  summary:
    "HeartBloom uses the HDDP biosensor kit to stream real-time PPG data and translate it into generative visual blooms. Students moved from raw sensor data to a working biofeedback installation in under three weeks.",
  metrics: [
    { label: "Weeks to prototype", value: "3" },
    { label: "Sensor channels used", value: "4" },
    { label: "Exhibition visitors", value: "200+" },
  ],
  tags: ["Biofeedback", "Generative Design", "PPG Sensor"],
};

const studies = [
  {
    company: "BioMirror — HvA FDMCI",
    industry: "Responsive Environments",
    icon: Activity,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    headline: "A Wall That Breathes With You",
    summary:
      "BioMirror (also known as LivingSurface) maps breathing rate from a chest-strap sensor onto a soft-actuated wall panel. The installation responds to visitors' breath in near real-time, creating an empathic spatial experience.",
    metrics: [
      { label: "Latency (sensor → display)", value: "<80ms" },
      { label: "Actuated panels", value: "24" },
      { label: "Breath accuracy", value: "96%" },
    ],
    tags: ["Breathing Sensor", "Soft Actuators", "TouchDesigner"],
  },
  {
    company: "SleepScape — HvA FDMCI",
    industry: "Sleep Health Design",
    icon: Moon,
    iconColor: "text-brand-yellow",
    iconBg: "bg-brand-yellow/10",
    headline: "Designing with Eight Hours of Data",
    summary:
      "Students used the HDDP sleep dataset (actigraphy + HRV) to build a personal sleep diary that surfaces patterns as hand-drawn-style data portraits, helping wearers understand their own rest.",
    metrics: [
      { label: "Nights of data used", value: "180" },
      { label: "Data dimensions", value: "6" },
      { label: "Avg session length", value: "12 min" },
    ],
    tags: ["Sleep Data", "Data Portrait", "PhysioNet"],
  },
  {
    company: "NeuralCanvas — HvA FDMCI",
    industry: "EEG + Generative Art",
    icon: Brain,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green/10",
    headline: "Painting with Brainwaves",
    summary:
      "NeuralCanvas connects a consumer EEG headset to a p5.js canvas through the HDDP Python bridge. Alpha and theta band power drive brush strokes, yielding a new drawing with every mental state.",
    metrics: [
      { label: "EEG channels", value: "8" },
      { label: "Framerate", value: "30 fps" },
      { label: "Minutes to onboard", value: "15" },
    ],
    tags: ["EEG", "Generative Art", "Python Bridge"],
  },
  {
    company: "PulseMap — HvA × A+N Studio",
    industry: "Urban Health Sensing",
    icon: Radio,
    iconColor: "text-brand-coral",
    iconBg: "bg-brand-coral/10",
    headline: "Mapping Stress Across a City Block",
    summary:
      "Participants wore HDDP skin-conductance sensors on a guided walk through Amsterdam. The resulting dataset, overlaid on a map, revealed micro-stress hotspots invisible to city planners.",
    metrics: [
      { label: "Participants", value: "32" },
      { label: "GPS + EDA samples", value: "2.4M" },
      { label: "Hotspots identified", value: "11" },
    ],
    tags: ["EDA Sensor", "Urban Data", "Participatory Design"],
  },
  {
    company: "BreathCoach — HvA FDMCI",
    industry: "Stress & Wellbeing",
    icon: Cpu,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    headline: "A Quiet Coach in Your Pocket",
    summary:
      "BreathCoach pairs the HDDP chest-strap sensor with a minimal iOS UI to detect elevated respiratory rate and prompt paced-breathing exercises, using no cloud — fully on-device.",
    metrics: [
      { label: "Detection accuracy", value: "94%" },
      { label: "Average stress reduction", value: "28%" },
      { label: "Battery life", value: "9 hrs" },
    ],
    tags: ["On-Device", "Breathing", "iOS"],
  },
];

export function CaseStudies() {
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
              <span className="w-2 h-2 rounded-sm bg-brand-coral inline-block" />
              <span className="text-sm font-medium text-muted-foreground italic font-serif-italic">
                Real students. Real projects.
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight"
            >
              Case{" "}
              <span className="font-serif-italic font-normal text-brand-coral">
                Studies
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              How HvA design students turned raw health data into meaningful,
              human experiences using the HDDP platform.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-gradient-to-br from-brand-coral/10 to-brand-coral/5 p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${featured.iconBg} flex items-center justify-center mb-6`}>
                    <featured.icon className={`w-6 h-6 ${featured.iconColor}`} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {featured.industry}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                    {featured.headline}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {featured.summary}
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    Read the full story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex-1 p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
                  {featured.company} — Key Results
                </p>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-3xl font-bold text-foreground mb-1">{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((s, i) => (
              <motion.a
                key={s.company}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="group flex flex-col rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                      <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        {s.industry}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.company}</p>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {s.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.summary}
                  </p>
                </div>
                <div className="px-6 pb-4 border-t border-border pt-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-foreground">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {s.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
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
