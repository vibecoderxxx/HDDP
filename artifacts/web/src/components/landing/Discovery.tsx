import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Activity, Layers } from "lucide-react";

const projects = [
  {
    icon: Heart,
    iconColor: "bg-rose-100 text-rose-500",
    category: "Research Project",
    title: "HeartBloom",
    desc: "A metaphorical stress visualization that translates heart rate variability into a blooming flower — designed to make biofeedback feel emotionally resonant rather than clinical.",
    credit: "Yu, B. & Arents, R. (Leonardo, 2020)",
    link: "#",
    bg: "bg-rose-50/50 dark:bg-rose-950/20",
    border: "border-rose-100 dark:border-rose-900",
  },
  {
    icon: Activity,
    iconColor: "bg-blue-100 text-blue-500",
    category: "Research Project",
    title: "BioMirror / LivingSurface",
    desc: "A tangible biofeedback interface where physical surfaces change shape in response to biosensor data — exploring embodied, non-screen ways to present personal health information.",
    credit: "Yu et al. (TEI Conference, 2016)",
    link: "#",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    border: "border-blue-100 dark:border-blue-900",
  },
  {
    icon: Layers,
    iconColor: "bg-violet-100 text-violet-500",
    category: "Design Studio",
    title: "Your prototype, here",
    desc: "Once you build something with HDDP, it could live right here. We're collecting and showcasing student and practitioner work throughout the project.",
    credit: "Open call for submissions",
    link: "#",
    bg: "bg-violet-50/50 dark:bg-violet-950/20",
    border: "border-violet-100 dark:border-violet-900",
    placeholder: true,
  },
];

export function Discovery() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Inspiration</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              What's possible
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Projects that show what happens when designers get access to real health data and biosensors.
            </p>
          </div>
          <a href="#" className="shrink-0 text-sm font-semibold text-foreground hover:text-primary flex items-center gap-1.5 transition-colors">
            See all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group block rounded-3xl border-2 p-7 transition-all duration-300 ${project.bg} ${project.border} ${project.placeholder ? "border-dashed" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${project.iconColor}`}>
                  <project.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/80 text-muted-foreground border border-border">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/70 italic">{project.credit}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
