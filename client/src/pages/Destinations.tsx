import { useState } from "react";
import { ChevronDown, Globe2, Users, Award, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Destinations() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const { content } = useCms();
  const countries = content.destinations;
  const page = content.destinationsPage;
  const g = content.global;

  const whyIcons = [Globe2, Users, Award];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="section-kicker">Global destinations</p>
              <h1 className="mt-3 text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {page.heroTitle} <span className="text-golden">{page.heroHighlight}</span>
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={page.heroSubtitle} />
            </div>
            <div className="premium-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-golden">A curated destination mix</p>
              <p className="mt-3 text-3xl font-bold text-black">Choose a country that matches your goals, budget, and long-term pathway.</p>
              <div className="mt-6 grid gap-3">
                {[
                  "Academic quality and recognition",
                  "Budget and lifestyle fit",
                  "Post-study opportunities",
                  "Visa and pathway suitability",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/6 bg-light-golden/50 px-4 py-3 text-sm font-medium text-gray">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Explore all destinations</p>
              <h2>Country profiles</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {countries.map((country, index) => {
              const expanded = expandedCountry === country.id;
              return (
                <div key={country.id} className="premium-card overflow-hidden p-0">
                  <button
                    onClick={() => setExpandedCountry(expanded ? null : country.id)}
                    className="w-full text-left"
                  >
                    <div className="premium-country-band flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{country.flag}</span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">Destination {String(index + 1).padStart(2, "0")}</p>
                          <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                        </div>
                      </div>
                      <ChevronDown size={22} className={`text-white transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </div>
                    <div className="p-6">
                      <RichText as="p" className="text-sm leading-7 text-gray" text={country.shortDescription} />
                      <div className="mt-5 flex flex-wrap gap-2">
                        {country.highlights.map((highlight) => (
                          <span key={highlight} className="rounded-full border border-golden/18 bg-light-golden/70 px-3 py-1 text-xs font-semibold text-golden">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                  {expanded && (
                    <div className="border-t border-black/6 px-6 pb-6">
                      <RichText as="p" className="pt-5 text-sm leading-8 text-gray" text={country.fullDescription} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Why international study matters</p>
              <h2>
                {page.whyTitle} <span className="text-golden">{page.whyHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.whyCards.map((card, index) => {
              const Icon = whyIcons[index % whyIcons.length];
              return (
                <div key={card.id} className="premium-card p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white"><Icon size={20} /></div>
                  <h3 className="text-2xl font-bold text-black">{card.title}</h3>
                  <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={card.description} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="premium-cta-panel">
            <div>
              <p className="section-kicker">Need destination advice?</p>
              <h2 className="max-w-2xl text-white">{page.ctaTitle}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74" text={page.ctaSubtitle} />
            </div>
            <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              Book guidance <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
