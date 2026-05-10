import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  Database,
  Brain,
  Code2,
  BookOpen,
  PlayCircle,
  Archive,
  ArrowRight,
  Layers,
  FileText,
  GitBranch,
  ChevronRight,
  ExternalLink,
  Heart,
} from "lucide-react";
import cardHardware from "@/assets/card-hardware.png";
import cardAi from "@/assets/card-ai.png";
import cardDatasets from "@/assets/card-datasets.png";
import cardSoftware from "@/assets/card-software.png";

const HDDPGridLogo = () => (
  <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center p-1.5 shrink-0">
    <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0"   y="0"   width="5" height="5" rx="1" fill="white" opacity="0.25"/>
      <rect x="6.5" y="0"   width="5" height="5" rx="1" fill="white" opacity="0.55"/>
      <rect x="13"  y="0"   width="5" height="5" rx="1" fill="white" opacity="1"/>
      <rect x="0"   y="6.5" width="5" height="5" rx="1" fill="white" opacity="0.55"/>
      <rect x="6.5" y="6.5" width="5" height="5" rx="1" fill="white" opacity="1"/>
      <rect x="13"  y="6.5" width="5" height="5" rx="1" fill="white" opacity="0.55"/>
      <rect x="0"   y="13"  width="5" height="5" rx="1" fill="white" opacity="1"/>
      <rect x="6.5" y="13"  width="5" height="5" rx="1" fill="white" opacity="0.55"/>
      <rect x="13"  y="13"  width="5" height="5" rx="1" fill="white" opacity="0.25"/>
    </svg>
  </div>
);

const sidebarSections = [
  {
    label: null,
    items: [
      { icon: Cpu,       name: "Sensor Kits", href: "#sensor-kits" },
      { icon: Code2,     name: "Software",    href: "#software" },
      { icon: Database,  name: "Datasets",    href: "#datasets" },
      { icon: Brain,     name: "Methods",     href: "#methods" },
      { icon: BookOpen,  name: "Learn",       href: "#learn" },
      { icon: PlayCircle,name: "Tutorials",   href: "#tutorials" },
    ],
  },
  {
    label: "Quick Access",
    items: [
      { icon: Layers,   name: "API Reference",      href: "#" },
      { icon: GitBranch,name: "SDKs & Libraries",   href: "#" },
      { icon: FileText, name: "Example Projects",   href: "#" },
    ],
  },
];

const categoryCards = [
  {
    id: "sensor-kits",
    image: cardHardware,
    title: "Sensor Kits",
    desc: "Datasheets, setup guides, and wiring diagrams for every HDDP biosensor kit — heart rate, EEG, sleep tracking, and more.",
    cta: "Browse Sensor Kits",
    href: "#",
    color: "text-primary",
  },
  {
    id: "methods",
    image: cardAi,
    title: "Design Methods",
    desc: "Research methodologies, design frameworks, and annotation guides for working with health data in creative projects.",
    cta: "Explore Methods",
    href: "#",
    color: "text-primary",
  },
  {
    id: "datasets",
    image: cardDatasets,
    title: "Datasets",
    desc: "Curated, labelled health datasets — PhysioNet, MIMIC, sleep studies, HRV timeseries — ready for design exploration.",
    cta: "Browse Datasets",
    href: "#",
    color: "text-primary",
  },
  {
    id: "software",
    image: cardSoftware,
    title: "Software Stack",
    desc: "Arduino sketches, Processing sketches, TouchDesigner patches, and Python notebooks — all open-source and beginner-friendly.",
    cta: "View Software Docs",
    href: "#",
    color: "text-primary",
  },
];

const discoverCards = [
  {
    icon: BookOpen,
    title: "Learn HDDP",
    desc: "Guided learning paths from your first sensor read to a finished design prototype.",
    href: "#",
  },
  {
    icon: PlayCircle,
    title: "Tutorials",
    desc: "Hands-on project walkthroughs with full source code, wiring diagrams, and design notes.",
    href: "#",
  },
  {
    icon: Archive,
    title: "Student Projects",
    desc: "Reference designs and finished prototypes from HDDP students and the HvA research team.",
    href: "#",
  },
];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("Sensor Kits");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="flex items-center gap-4 px-4 h-14">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <HDDPGridLogo />
            <span className="font-bold text-base tracking-tight">
              HDDP<span className="text-muted-foreground font-normal"> Resources</span>
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources…"
                className="w-full h-9 pl-9 pr-10 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
              />
              <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
                /
              </kbd>
            </div>
          </div>

          <Link
            href="/sign-up"
            className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors hidden sm:block"
          >
            Get Access →
          </Link>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col w-56 lg:w-64 shrink-0 border-r border-border py-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          {sidebarSections.map((section, si) => (
            <div key={si} className={si > 0 ? "mt-6" : ""}>
              {section.label && (
                <p className="px-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {section.label}
                </p>
              )}
              <nav className="flex flex-col gap-0.5 px-3">
                {section.items.map((item) => {
                  const active = activeSection === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveSection(item.name)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left w-full group ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4 shrink-0 ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                      />
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-10 px-6 lg:px-10">
          <div className="max-w-4xl">
            {/* Page header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                HDDP Resources
              </h1>
              <p className="text-muted-foreground text-base">
                Everything you need to start designing with health data — sensor kits, datasets, software, and learning materials.
              </p>
            </motion.div>

            {/* 2-col category cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {categoryCards.map((card, i) => (
                <motion.a
                  key={card.id}
                  href={card.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group relative flex items-stretch overflow-hidden rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-200 min-h-[140px]"
                >
                  <div className="flex-1 min-w-0 p-6 z-10">
                    <h2 className="text-base font-bold mb-1.5">{card.title}</h2>
                    <p className="text-sm text-muted-foreground leading-snug mb-4 max-w-[180px]">
                      {card.desc}
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${card.color} group-hover:underline`}>
                      {card.cta}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="shrink-0 w-36 relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute bottom-0 right-0 w-44 max-w-none object-contain object-right-bottom opacity-90 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Discover section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-5">Discover</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {discoverCards.map((card, i) => (
                  <a
                    key={i}
                    href={card.href}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-200"
                  >
                    <card.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <h3 className="text-sm font-bold mb-1 flex items-center gap-1 group-hover:text-primary transition-colors">
                        {card.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Latest updates */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48 }}
              className="mt-10"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold">Latest Updates</h2>
                <a href="#" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
                  View all <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="divide-y divide-border rounded-xl border border-border bg-card overflow-hidden">
                {[
                  { tag: "Sensor Kit",  title: "HDDP Biosensor Kit v1 — Setup Guide & Pinouts",             date: "Apr 28, 2026" },
                  { tag: "Dataset",     title: "PhysioNet HRV Collection — Annotation Notes",               date: "Apr 21, 2026" },
                  { tag: "Tutorial",    title: "Visualising Sleep Data with TouchDesigner",                  date: "Apr 14, 2026" },
                  { tag: "Software",    title: "Arduino + Processing Starter Templates v2.0 Released",       date: "Apr 7, 2026" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {item.tag}
                      </span>
                      <span className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-xs text-muted-foreground hidden sm:block">{item.date}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
