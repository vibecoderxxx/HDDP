const cols = [
  { heading: "Platform",   links: ["Datasets", "Sensor Kits", "Software Resources", "Get Access"] },
  { heading: "Learn",      links: ["Documentation", "Tutorials", "HeartBloom", "BioMirror"] },
  { heading: "Project",    links: ["About HDDP", "Research Team", "HvA Digital Life Lab", "Partners"] },
];

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-sm p-1.5">
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
              <div>
                <span className="font-bold text-base tracking-tight text-foreground">HDDP</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Health-Data-Design Playground.<br />
              A HvA Creative Innovation project.
            </p>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Mar 2026 – Feb 2027
            </span>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Life Research Group · Hogeschool van Amsterdam
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Open Source</a>
            <a href="#" className="hover:text-foreground transition-colors">HvA.nl</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
