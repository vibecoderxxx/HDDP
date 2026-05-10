import { motion } from "framer-motion";
import { MessageSquare, Users, Github, Twitter, Rss, ArrowRight, Star, GitFork, Globe } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </svg>
);

const stats = [
  { label: "Community members",  value: "480+" },
  { label: "GitHub stars",       value: "1.2k" },
  { label: "Institutions",       value: "12" },
  { label: "Projects shared",    value: "90+" },
];

const channels = [
  { name: "#general",           desc: "Introductions, announcements, and community news" },
  { name: "#biosensors",        desc: "Sensor setup, wiring, calibration questions" },
  { name: "#data-datasets",     desc: "Finding, cleaning, and annotating health datasets" },
  { name: "#project-showcase",  desc: "Share your prototypes and get feedback" },
  { name: "#project-updates",   desc: "HDDP platform and kit release announcements" },
  { name: "#collaborate",       desc: "Open calls, partnerships, and research opportunities" },
];

const links = [
  {
    icon: Github,
    label: "GitHub",
    desc: "Browse HDDP open-source templates, Arduino sketches, and Processing patches.",
    href: "#",
    cta: "View on GitHub",
    iconColor: "text-foreground",
    iconBg: "bg-secondary",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    desc: "Follow @HDDP_HvA for project updates, student showcases, and event announcements.",
    href: "#",
    cta: "Follow @HDDP_HvA",
    iconColor: "text-foreground",
    iconBg: "bg-secondary",
  },
  {
    icon: Rss,
    label: "Blog",
    desc: "Research reflections, design process write-ups, and deep dives from the HDDP team.",
    href: "#",
    cta: "Read the Blog",
    iconColor: "text-brand-coral",
    iconBg: "bg-brand-coral/10",
  },
  {
    icon: Globe,
    label: "Forum",
    desc: "Long-form discussions on health data, biosensor design, and creative methodology.",
    href: "#",
    cta: "Browse the Forum",
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
  },
];

const events = [
  {
    date: "May 22, 2026",
    title: "Live Workshop: Building Your First Biosensor Visualisation",
    type: "Workshop",
    typeColor: "bg-brand-blue/10 text-brand-blue",
  },
  {
    date: "Jun 10, 2026",
    title: "HDDP Office Hours — Sensor Kit Q&A with the Research Team",
    type: "Office Hours",
    typeColor: "bg-brand-green/10 text-brand-green",
  },
  {
    date: "Sep 18, 2026",
    title: "HDDP Open Studio 2026 — Student Project Exhibition",
    type: "Exhibition",
    typeColor: "bg-brand-coral/10 text-brand-coral",
  },
];

export function Community() {
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
              <span className="w-2 h-2 rounded-sm bg-brand-blue inline-block" />
              <span className="text-sm font-medium text-muted-foreground italic font-serif-italic">
                Built together, learned together
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight"
            >
              Join the HDDP{" "}
              <span className="font-serif-italic font-normal text-brand-blue">
                Community
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Designers, researchers, and students across 12 institutions exploring
              what it means to design with body data. Share your work, ask questions,
              and shape the future of health-data design together.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Slack CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#4A154B] text-white overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-14">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <SlackIcon />
                  <span className="text-lg font-bold opacity-90">Slack</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 leading-snug">
                  Join our Slack workspace
                </h2>
                <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
                  Real-time help, project feedback, and conversations with the researchers
                  and designers building with HDDP. Jump into any topic channel — from
                  biosensor wiring to generative data visualisation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-white text-[#4A154B] font-bold text-sm px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
                >
                  <SlackIcon />
                  Join the HDDP Slack
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              {/* Channel list */}
              <div className="w-full lg:w-80 bg-white/10 rounded-xl p-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                  Popular channels
                </p>
                {channels.map((c) => (
                  <div key={c.name} className="flex items-start gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-white/50 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-white">{c.name}</span>
                      <p className="text-xs text-white/60 leading-tight">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other links */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">
              More ways to connect
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-lg ${l.iconBg} flex items-center justify-center mb-4`}>
                    <l.icon className={`w-5 h-5 ${l.iconColor}`} />
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {l.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {l.desc}
                  </p>
                  <p className="mt-4 text-xs font-bold text-primary flex items-center gap-1">
                    {l.cta} <ArrowRight className="w-3 h-3" />
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* GitHub strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center gap-6 justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Github className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground mb-0.5">hddp-hva / platform</p>
                <p className="text-sm text-muted-foreground">
                  HDDP open-source templates, sensor drivers, and data tools. MIT licensed.
                </p>
                <div className="flex items-center gap-4 mt-1.5">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" /> 1,248
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork className="w-3 h-3" /> 187
                  </span>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="shrink-0 text-sm font-bold px-6 py-2.5 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>

          {/* Events */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Upcoming Events</h2>
              <a href="#" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                View all <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
              {events.map((e) => (
                <a
                  key={e.title}
                  href="#"
                  className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="text-center w-14 shrink-0">
                      <p className="text-xs text-muted-foreground leading-none">
                        {e.date.split(" ")[0]}
                      </p>
                      <p className="text-xl font-bold text-foreground leading-tight">
                        {e.date.split(" ")[1].replace(",", "")}
                      </p>
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${e.typeColor}`}>
                        {e.type}
                      </span>
                      <p className="text-sm font-semibold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                        {e.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-xs font-semibold text-primary hidden sm:block">
                      Register →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Members CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-10"
          >
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {["bg-brand-blue", "bg-brand-coral", "bg-brand-green", "bg-brand-yellow", "bg-primary"].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-background flex items-center justify-center`}
                  >
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              480+ designers & researchers already inside
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Free and open to everyone curious about health-data design.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <SlackIcon />
              Join the HDDP community
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
