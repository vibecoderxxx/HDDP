import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import teamAlex from "@/assets/team-alex.png";
import teamSarah from "@/assets/team-sarah.png";
import teamMarcus from "@/assets/team-marcus.png";
import teamPriya from "@/assets/team-priya.png";
import teamJames from "@/assets/team-james.png";
import teamElena from "@/assets/team-elena.png";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const leadership = [
  {
    name: "Bin Yu",
    role: "Project Lead & Design Researcher",
    bio: "Leads the HDDP initiative at HvA's Digital Life Research Group. Bin's work sits at the intersection of biosensing, interaction design, and health communication — making complex physiological data legible and meaningful for designers.",
    image: teamAlex,
    linkedin: "#",
  },
  {
    name: "Somaya Ben Allouch",
    role: "Research Supervisor",
    bio: "Professor at HvA and research supervisor for HDDP. Somaya specialises in human-centred design for health technology, with a focus on how people relate to wearable and ambient sensing systems.",
    image: teamSarah,
    linkedin: "#",
  },
  {
    name: "Design Technologist",
    role: "Junior Researcher & Platform Developer",
    bio: "Builds and maintains the HDDP sensor kits, software templates, and dataset pipeline. Bridges the gap between research ambition and practical usability for students who are new to working with body data.",
    image: teamMarcus,
    linkedin: "#",
  },
];

const collaborators = [
  {
    name: "FDMCI Faculty",
    role: "Faculty of Digital Media & Creative Industries",
    bio: "HDDP is embedded within FDMCI's Bachelor of Communication & Multimedia Design programme, providing the student design community with hands-on access to the platform each semester.",
    image: teamPriya,
    linkedin: "#",
  },
  {
    name: "TU/e Industrial Design",
    role: "Academic Partner",
    bio: "The Industrial Design department at Eindhoven University of Technology contributes sensor design expertise and co-develops advanced kit hardware that pushes beyond standard consumer wearables.",
    image: teamJames,
    linkedin: "#",
  },
  {
    name: "A+N Studio",
    role: "Creative Industry Partner",
    bio: "Amsterdam design studio A+N Studio collaborates on real-world briefs where HDDP students design biosensor-driven experiences for public and commercial contexts.",
    image: teamElena,
    linkedin: "#",
  },
];

function MemberCard({ member, i }: { member: typeof leadership[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group flex flex-col"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <a
          href={member.linkedin}
          className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white flex items-center justify-center text-foreground shadow-md">
            <LinkedInIcon />
          </span>
        </a>
      </div>
      <h3 className="text-base font-bold mb-0.5">{member.name}</h3>
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
        {member.role}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center border-b border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-primary italic font-serif-italic mb-4">
                The people behind HDDP
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Built by researchers,{" "}
                <span className="font-serif-italic font-normal text-primary">
                  for designers.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                A small, focused team of designers, researchers, and technologists at
                HvA who believe health data should be a creative material — not a barrier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Core Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((m, i) => (
                <MemberCard key={m.name} member={m} i={i} />
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Partners & Collaborators */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-12">Partners & Collaborators</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborators.map((m, i) => (
                <MemberCard key={m.name} member={m} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Collaborate CTA */}
        <section className="py-20 border-t border-border bg-secondary/40">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-primary italic font-serif-italic mb-4">
                Work with us
              </p>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We're open to partnerships with research groups, design schools, and
                creative studios who want to explore biosensor-driven design together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:b.yu@hva.nl"
                  className="w-full sm:w-auto text-sm font-semibold px-8 py-3.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Get in touch →
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto text-sm font-semibold px-8 py-3.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Read the project plan
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
