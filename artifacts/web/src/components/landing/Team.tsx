import { motion } from "framer-motion";
import { Link } from "wouter";
import teamAlex from "@/assets/team-alex.png";
import teamSarah from "@/assets/team-sarah.png";
import teamMarcus from "@/assets/team-marcus.png";

const members = [
  {
    name: "Bin Yu",
    role: "Principal Researcher",
    bio: "Researcher at HvA's Digital Life Lab. Background in tangible interaction design and biofeedback systems. Led HeartBloom and BioMirror — and now building the platform to let others do the same.",
    image: teamAlex,
    linkedin: "#",
    hours: "60 hrs",
  },
  {
    name: "Somaya Ben Allouch",
    role: "Research Lead",
    bio: "Professor at FDMCI with expertise in human-technology interaction and participatory healthcare. Provides strategic direction and ensures HDDP connects meaningfully to real clinical and educational contexts.",
    image: teamSarah,
    linkedin: "#",
    hours: "10 hrs",
  },
  {
    name: "Design Technologist",
    role: "Junior Researcher",
    bio: "The hands-on builder of the platform — developing sensor kits, curating datasets, writing code templates, and ensuring that designers can actually pick things up and start creating on day one.",
    image: teamMarcus,
    linkedin: "#",
    hours: "250 hrs",
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function Team() {
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The people</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built by researchers,{" "}
            <span className="font-serif-italic font-normal text-primary">for designers.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A small team at HvA's Digital Life Research Group who've spent years at the intersection of design, health, and technology — and found the tools were always missing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-secondary mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <a href={member.linkedin} className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end justify-end p-4">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white flex items-center justify-center text-foreground shadow-md">
                    <LinkedInIcon />
                  </span>
                </a>
              </div>
              <h3 className="text-base font-bold mb-0.5">{member.name}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all duration-200">
            HvA Digital Life Research Group →
          </Link>
        </div>
      </div>
    </section>
  );
}
