import { CheckCircle2, BookOpen, Globe2, Users, Award, Zap, FileText, Briefcase, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Services() {
  const { content } = useCms();
  const services = content.services;
  const page = content.servicesPage;
  const g = content.global;
  const icons = [BookOpen, Globe2, Users, Award, FileText, Globe2, Zap, Briefcase, Award, Users, Globe2, CheckCircle2];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-kicker">Student experience design</p>
              <h1 className="mt-3 text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {page.heroTitle} <span className="text-golden">{page.heroHighlight}</span>
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={page.heroSubtitle} />
            </div>
            <div className="premium-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-golden">What you get</p>
              <div className="mt-5 grid gap-3">
                {[
                  "Academic pathway planning",
                  "Application & SOP support",
                  "IELTS and Japanese preparation",
                  "Visa, finance, and travel guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/6 bg-light-golden/50 px-4 py-3 text-sm font-semibold text-black">
                    <CheckCircle2 size={16} className="text-golden" />
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
              <p className="section-kicker">Every service, clearly packaged</p>
              <h2>Full service stack</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={service.id} className="premium-card p-6 sm:p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={service.description} />
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
              <p className="section-kicker">Clear service pillars</p>
              <h2>
                {page.categoriesTitle} <span className="text-golden">{page.categoriesHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {page.categories.map((category, index) => (
              <div key={category.id} className={`premium-card p-6 ${index === 0 ? "xl:col-span-2" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-golden">Category 0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-black">{category.title}</h3>
                <div className="mt-5 grid gap-3">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white/70 px-4 py-3 text-sm font-medium text-gray">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-golden" />
                      <span>{item}</span>
                    </div>
                  ))}
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
              <p className="section-kicker">Ready to begin</p>
              <h2 className="max-w-2xl text-white">{page.ctaTitle}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74" text={page.ctaSubtitle} />
            </div>
            <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              {page.ctaButton} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
