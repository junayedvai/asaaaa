import { CheckCircle2, Users, Globe2, Award, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function About() {
  const { content } = useCms();
  const about = content.about;
  const values = about.values;
  const whyChooseUs = about.whyChooseUs;
  const icons = [CheckCircle2, Users, Globe2, Award];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-kicker">About the brand</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {about.hero.title} <span className="text-golden">{about.hero.titleHighlight}</span>
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={about.hero.subtitle} />
            </div>
            <div className="premium-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-golden">Brand promise</p>
              <h3 className="mt-3 text-3xl font-bold text-black">A more elegant way to plan global education</h3>
              <p className="mt-4 text-sm leading-7 text-gray">Study Hub BD blends strategy, mentorship, training, and student care into one polished experience so the journey feels guided from day one.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Trusted counseling",
                  "Application support",
                  "Visa guidance",
                  "Language training",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/6 bg-light-golden/55 px-4 py-3">
                    <Sparkles size={16} className="text-golden" />
                    <span className="text-sm font-semibold text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="premium-dark-card p-8">
              <p className="section-kicker">Mission</p>
              <h2 className="mt-3 text-white">Purpose-led student support</h2>
              <RichText as="p" className="mt-4 text-sm leading-8 text-white/74 sm:text-base" text={about.mission} />
            </div>
            <div className="premium-card p-8">
              <p className="section-kicker">Vision</p>
              <h2 className="mt-3 text-black">Built for long-term trust</h2>
              <RichText as="p" className="mt-4 text-sm leading-8 text-gray sm:text-base" text={about.vision} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">What defines us</p>
              <h2>Core values</h2>
            </div>
            <p className="section-copy max-w-xl">A premium education brand feels consistent, trusted, and student-first. These principles shape every counseling conversation and every milestone.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={value.id} className="premium-card p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{value.title}</h3>
                  <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={value.description} />
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
              <p className="section-kicker">Why families choose us</p>
              <h2>
                {about.whyChooseTitle} <span className="text-golden">{about.whyChooseHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <div key={item.id} className="premium-card flex gap-5 p-6 sm:p-7">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">0{index + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  <RichText as="p" className="mt-3 text-sm leading-7 text-gray" text={item.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="premium-cta-panel">
            <div>
              <p className="section-kicker">Your next move</p>
              <h2 className="max-w-2xl text-white">{about.ctaTitle}</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              Talk to us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
