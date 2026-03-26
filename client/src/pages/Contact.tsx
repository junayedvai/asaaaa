import { Mail, Phone, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Contact() {
  const { content } = useCms();
  const c = content.contact;
  const g = content.global;

  const contactCards = [
    { title: "Address", value: c.address, icon: MapPin },
    { title: "Phone", value: `${c.phone1} / ${c.phone2}`, icon: Phone },
    { title: "Email", value: c.email, icon: Mail },
    { title: "Office Hours", value: "Sat – Thu · 10 AM to 7 PM", icon: Clock3 },
  ];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-kicker">Talk to our team</p>
              <h1 className="mt-3 text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {c.hero.title} <span className="text-golden">{c.hero.titleHighlight}</span>
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={c.hero.subtitle} />
            </div>
            <div className="premium-dark-card p-8">
              <p className="section-kicker">Next step</p>
              <h2 className="mt-3 text-white">Choose the easiest way to reach us</h2>
              <p className="mt-4 text-sm leading-8 text-white/74">Message on WhatsApp, book through the registration form, or visit our office for a guided consultation.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/88${g.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
                  WhatsApp now <ArrowUpRight size={16} />
                </a>
                <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/10 px-6 py-3 text-sm font-bold text-white">
                  Register online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-6 text-center xl:text-left">
                  <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white xl:mx-0"><Icon size={20} /></div>
                  <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-card p-8">
              <p className="section-kicker">Visit our office</p>
              <h2 className="mt-3 text-black">A consultation space that feels accessible and supportive</h2>
              <p className="mt-4 text-sm leading-8 text-gray">Students and families can come in for guidance on country selection, application documents, language training, and visa planning.</p>
              <div className="mt-6 grid gap-3">
                {[
                  "Free initial guidance",
                  "Course and destination matching",
                  "Checklist-based document support",
                  "Follow-up after enrollment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/6 bg-light-golden/50 px-4 py-3 text-sm font-medium text-gray">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card overflow-hidden p-0">
              <iframe
                src={c.mapEmbedUrl}
                title="Study Hub BD Location"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="premium-cta-panel">
            <div>
              <p className="section-kicker">Ready to talk?</p>
              <h2 className="max-w-2xl text-white">{c.ctaTitle}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74" text={c.ctaSubtitle} />
            </div>
            <a href={c.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              Get directions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
