import { motion } from "framer-motion";
import { Lightbulb, Layers, Zap, Users } from "lucide-react";

const steps = [
  { icon: Lightbulb, num: "01", title: "Pick a health theme",     label: "Explore",   desc: "Choose from sleep, stress, breathing, or activity. Browse the curated datasets and get a feel for what the data actually looks like." },
  { icon: Layers,    num: "02", title: "Connect a sensor kit",    label: "Sense",     desc: "Snap in a modular biosensor — no soldering. Real-time data starts streaming immediately into your design software of choice." },
  { icon: Zap,       num: "03", title: "Build your intervention", label: "Prototype", desc: "Use our code templates in Processing, TouchDesigner, or the web to quickly wire data to visuals, sound, or physical actuators." },
  { icon: Users,     num: "04", title: "Test with real people",   label: "Evaluate",  desc: "Put your prototype in front of users and iterate. HDDP is designed for fast, repeated design cycles — not one-and-done demos." },
];

export function Workflow() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From curiosity to{" "}
            <span className="font-serif-italic font-normal text-primary">working prototype.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Designers with no technical background have gone from zero to functioning biofeedback prototype in a single session.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300"
              >
                <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <p className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-2">
                {step.num} / {step.label}
              </p>
              <h3 className="text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
