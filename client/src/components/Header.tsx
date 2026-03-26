import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useCms } from "@/contexts/CmsContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { content } = useCms();
  const g = content.global;
  const h = content.header;

  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "IELTS", href: "/ielts" },
      { label: "Japanese", href: "/japanese" },
      { label: "Administration", href: "/administration" },
      { label: "Destinations", href: "/destinations" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Notice Board", href: "/notice-board" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(135deg,rgba(6,14,30,0.90),rgba(18,50,112,0.86),rgba(8,145,178,0.82))] text-white backdrop-blur-2xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(6,14,30,0.84),rgba(18,50,112,0.78),rgba(8,145,178,0.74))]">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between gap-3 sm:h-22">
          <Link href="/" className="group flex items-center gap-3 min-w-0">
            <div className="relative shrink-0 overflow-hidden rounded-2xl border border-white/18 bg-white/12 p-2 shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
              <img src={h.logo} alt={`${g.siteName} Logo`} className="h-11 w-11 rounded-xl object-contain sm:h-12 sm:w-12" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-[0.18em] text-cyan-200/95 uppercase">Global Education Studio</p>
              <p className="truncate text-base font-bold text-white sm:text-lg">{g.siteName}</p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-white/8 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            {navItems.map((item) => {
              const active = location === item.href;
              const className = `rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-white shadow-[0_10px_24px_rgba(208,173,85,0.30)]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`;

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/88${g.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={g.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(208,173,85,0.28)] transition-all hover:-translate-y-0.5"
            >
              {h.registerButtonText} <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            className="xl:hidden rounded-2xl border border-white/12 bg-white/8 p-2.5 text-cyan-200"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden pb-4">
            <div className="rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(7,14,28,0.98),rgba(20,50,100,0.98))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.30)]">
              <nav className="grid gap-2">
                {navItems.map((item) => {
                  const active = location === item.href;
                  const className = `rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    active ? "bg-white text-slate-900" : "text-white/85 hover:bg-white/8 hover:text-white"
                  }`;

                  return (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={className}>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={`https://wa.me/88${g.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/12 px-4 py-3 text-center text-sm font-semibold text-white/90"
                >
                  WhatsApp
                </a>
                <a
                  href={g.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  {h.registerButtonText}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
