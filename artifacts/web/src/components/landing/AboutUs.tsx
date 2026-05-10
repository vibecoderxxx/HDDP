import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        >
          {/* Pull quote */}
          <div className="flex justify-center mb-8">
            <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary" />
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl font-medium text-background/80 italic leading-relaxed mb-10 font-serif-italic">
            "What if health data didn't just live in spreadsheets, but came to life through interactive objects and immersive spaces around us?"
          </blockquote>

          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">Why we built HDDP</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-tight">
            Bridging design intent{" "}
            <em className="font-serif-italic font-normal not-italic text-primary">
              and technical reality.
            </em>
          </h2>

          <div className="space-y-5 text-lg text-background/70 leading-relaxed text-left max-w-2xl mx-auto">
            <p className="text-center">
              Designers want to create health interventions that are compelling, motivating, and capable of sustaining long-term use. But the technical complexity of biosensors, data pipelines, and firmware toolchains creates a gap between what designers envision and what they can actually build.
            </p>
            <p className="text-center">HDDP closes that gap. By providing accessible sensor toolkits, shared datasets, and design-oriented software resources, we lower the entry barrier so that design practitioners regardless of technical background can move beyond speculative concepts toward rapid, real-world prototyping.</p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Read the project plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <a href="#" className="w-full sm:w-auto text-sm font-semibold px-8 py-3.5 rounded-full border border-background/30 text-background hover:bg-background/10 transition-colors">
              Meet the team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
