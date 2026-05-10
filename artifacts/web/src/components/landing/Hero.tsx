import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WORDS = ["biosensors", "sleep data", "HRV signals", "real datasets", "breathing patterns"];

function useTypewriter(words: string[], speed = 75, pause = 1800) {
  const [display, setDisplay] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx === words[wordIdx].length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(() => {
        const next = charIdx + (deleting ? -1 : 1);
        setCharIdx(next);
        setDisplay(words[wordIdx].substring(0, next));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const floatingShapes = [
  {
    x: "5%", y: "15%", delay: 0, size: 44,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3.5" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
    color: "bg-slate-100 text-slate-400",
  },
  {
    x: "80%", y: "10%", delay: 0.5, size: 40,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11 Q6 5 11 11 Q16 17 20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "bg-blue-50 text-blue-400",
  },
  {
    x: "88%", y: "55%", delay: 1.0, size: 44,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="12" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.25"/>
        <rect x="3" y="12" width="7" height="7" rx="1" fill="currentColor" opacity="0.25"/>
        <rect x="12" y="12" width="7" height="7" rx="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-400",
  },
  {
    x: "75%", y: "80%", delay: 0.3, size: 40,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polygon points="11,3 20,19 2,19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    color: "bg-rose-50 text-rose-400",
  },
  {
    x: "8%", y: "70%", delay: 0.8, size: 44,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <line x1="11" y1="2" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-400",
  },
  {
    x: "50%", y: "4%", delay: 1.3, size: 40,
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="5"  cy="5"  r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="11" cy="5"  r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="17" cy="5"  r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="5"  cy="11" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="11" cy="11" r="2" fill="currentColor"/>
        <circle cx="17" cy="11" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="5"  cy="17" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="11" cy="17" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="17" cy="17" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    color: "bg-amber-50 text-amber-400",
  },
];

export function Hero() {
  const word = useTypewriter(WORDS);

  return (
    <section className="relative bg-background overflow-hidden pt-20 pb-28">
      {/* Warm dot-grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(61,107,229,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
      {/* Warm blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-100/60 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating shapes */}
      {floatingShapes.map(({ svg, color, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex rounded-2xl shadow-sm items-center justify-center ${color}`}
          style={{ left: x, top: y, width: size, height: size }}
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {svg}
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Creative Innovation 2026 · HvA Digital Life Research Group
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.06]"
        >
          Play with{" "}
          <span className="font-serif-italic font-normal text-primary">health data.</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed"
        >
          A hands-on platform empowering designers to turn{" "}
          <span className="relative">
            <span className="font-semibold text-foreground">{word}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
            />
          </span>
          {" "}into meaningful everyday health interventions.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
          className="text-base text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          No deep technical background needed — just curiosity and a desire to design for health.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-full sm:w-auto text-sm font-semibold px-7 py-3.5 rounded-full border border-border text-foreground hover:bg-secondary hover:border-primary/30 transition-all"
          >
            Browse Datasets
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-muted-foreground/60">scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-border to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
