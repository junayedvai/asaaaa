import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";

export default function Footer() {
  const { content } = useCms();
  const g = content.global;
  const f = content.footer;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(135deg,#07101d_0%,#11295c_52%,#0f9bb7_100%)] text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      </div>
      <div className="container relative mx-auto px-4 py-16 sm:py-20">
        <div className="mb-12 grid gap-6 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/95">Study abroad with clarity</p>
            <h3 className="mb-4 text-3xl font-bold text-white">{g.siteName}</h3>
            <p className="max-w-md text-sm leading-7 text-white/76">{f.about}</p>
            <div className="mt-6 flex gap-3">
              {[{ href: g.socialMedia.facebook, icon: Facebook }, { href: g.socialMedia.instagram, icon: Instagram }, { href: g.socialMedia.linkedin, icon: Linkedin }, { href: g.socialMedia.youtube, icon: Youtube }].map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan-200 transition-all hover:-translate-y-0.5 hover:bg-white/14 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Navigate</h4>
            <ul className="space-y-3 text-sm text-white/76">
              <li><Link href="/" className="hover:text-cyan-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-200">About</Link></li>
              <li><Link href="/services" className="hover:text-cyan-200">Services</Link></li>
              <li><Link href="/destinations" className="hover:text-cyan-200">Destinations</Link></li>
              <li><Link href="/success-stories" className="hover:text-cyan-200">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Core Programs</h4>
            <ul className="space-y-3 text-sm text-white/76">
              <li><Link href="/ielts" className="hover:text-cyan-200">IELTS Preparation</Link></li>
              <li><Link href="/japanese" className="hover:text-cyan-200">Japanese Language</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-200">Counselling Session</Link></li>
              <li>
                <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-200">
                  Apply Now <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Reach Us</h4>
            <div className="space-y-4 text-sm text-white/76">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <p>{g.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <div>
                  <p>{g.phone1}</p>
                  <p>{g.phone2}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <p>{g.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{f.copyrightText}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cyan-200">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
