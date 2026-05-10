import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Capabilities } from "@/components/landing/Capabilities";
import { FourPillars } from "@/components/landing/FourPillars";
import { Workflow } from "@/components/landing/Workflow";
import { Discovery } from "@/components/landing/Discovery";
import { Team } from "@/components/landing/Team";
import { AboutUs } from "@/components/landing/AboutUs";
import { Partnerships } from "@/components/landing/Partnerships";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Partnerships />
        <Capabilities />
        <FourPillars />
        <Workflow />
        <Discovery />
        <Team />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
