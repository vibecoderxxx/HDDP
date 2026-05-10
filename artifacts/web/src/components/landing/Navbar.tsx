import { useState, useEffect } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth, useUser, SignOutButton } from "@clerk/react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setUserMenuOpen(false);
    if (userMenuOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [userMenuOpen]);

  const navLinks = [
    { name: "Resources",    href: "/resources" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Tutorials",    href: "/tutorials" },
    { name: "Team",         href: "/team" },
    { name: "Community",    href: "/community" },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-primary text-white text-sm py-2.5 px-4 font-medium flex items-center justify-center gap-4">
        <div className="flex-1 text-center">
          ✦ HDDP is funded by HvA's Creative Innovation Call 2026 —{" "}
          <a href="#" className="underline underline-offset-2 hover:no-underline font-semibold">
            Read the project plan →
          </a>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-border"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm shadow-primary/30 p-1.5"
                whileHover={{ rotate: 6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 3×3 grid — diagonal data-heatmap pattern */}
                  <rect x="0"    y="0"    width="5" height="5" rx="1"   fill="white" opacity="0.25"/>
                  <rect x="6.5"  y="0"    width="5" height="5" rx="1"   fill="white" opacity="0.55"/>
                  <rect x="13"   y="0"    width="5" height="5" rx="1"   fill="white" opacity="1"/>
                  <rect x="0"    y="6.5"  width="5" height="5" rx="1"   fill="white" opacity="0.55"/>
                  <rect x="6.5"  y="6.5"  width="5" height="5" rx="1"   fill="white" opacity="1"/>
                  <rect x="13"   y="6.5"  width="5" height="5" rx="1"   fill="white" opacity="0.55"/>
                  <rect x="0"    y="13"   width="5" height="5" rx="1"   fill="white" opacity="1"/>
                  <rect x="6.5"  y="13"   width="5" height="5" rx="1"   fill="white" opacity="0.55"/>
                  <rect x="13"   y="13"   width="5" height="5" rx="1"   fill="white" opacity="0.25"/>
                </svg>
              </motion.div>
              <div>
                <span className="font-bold text-base tracking-tight text-foreground">HDDP</span>
                <span className="hidden sm:inline text-xs text-muted-foreground ml-2">Health-Data-Design Playground</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              {isSignedIn ? (
                <div className="relative">
                  <button
                    onClick={(e) => { e.stopPropagation(); setUserMenuOpen(!userMenuOpen); }}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      {user?.imageUrl ? (
                        <img src={user.imageUrl} alt="" className="w-6 h-6 rounded-full object-cover" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-primary" />
                      )}
                    </div>
                    <span className="text-foreground max-w-[120px] truncate">
                      {user?.firstName || "Account"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-xl shadow-lg py-1 z-50"
                      >
                        <div className="px-4 py-2.5 border-b border-border">
                          <p className="text-sm font-semibold text-foreground truncate">{user?.fullName || "User"}</p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">{user?.emailAddresses?.[0]?.emailAddress}</p>
                        </div>
                        <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
                          <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">
                            <LogOut className="w-4 h-4 text-muted-foreground" />
                            Sign out
                          </button>
                        </SignOutButton>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link href="/sign-in" className="text-sm font-semibold text-foreground hover:text-primary transition-colors px-3 py-2">
                    Sign in
                  </Link>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/sign-up" className="text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm shadow-primary/25">
                      Get Access →
                    </Link>
                  </motion.div>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-foreground">
                <AnimatePresence mode="wait">
                  {mobileMenuOpen
                    ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.div>
                    : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.div>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 space-y-2">
                  {isSignedIn ? (
                    <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
                      <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors">
                        <LogOut className="w-4 h-4" /> Sign out
                      </button>
                    </SignOutButton>
                  ) : (
                    <>
                      <Link href="/sign-in" className="block text-center text-sm font-semibold px-5 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
                      <Link href="/sign-up" className="block text-center text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors" onClick={() => setMobileMenuOpen(false)}>Get Access →</Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
