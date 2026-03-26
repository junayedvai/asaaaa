import { CheckCircle2, Clock3, Users, Award, BookOpen, Languages, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Japanese() {
  const { content } = useCms();
  const japanese = content.japanese;
  const g = content.global;

  const stats = [
    { label: "Classes", value: japanese.courseStats.classes, icon: BookOpen },
    { label: "Per week", value: japanese.courseStats.perWeek, icon: Clock3 },
    { label: "Support", value: japanese.courseStats.support, icon: Users },
  ];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-golden/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-golden">
                <Languages size={14} /> {japanese.hero.badge}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {japanese.hero.title} <span className="text-golden">{japanese.hero.titleHighlight}</span> {japanese.hero.titleSuffix}
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={japanese.hero.description} />
              <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-golden to-dark-golden px-7 py-4 text-sm font-bold text-white">
                {japanese.hero.ctaButton} <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="premium-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-golden">Course snapshot</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[1.5rem] border border-black/6 bg-light-golden/50 p-4 text-center">
                      <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white"><Icon size={18} /></div>
                      <p className="text-2xl font-bold text-black">{item.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray">{item.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3">
                {japanese.courseFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white/70 px-4 py-3 text-sm font-medium text-gray">
                    <CheckCircle2 size={16} className="text-golden" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="premium-card p-8">
              <p className="section-kicker">Program overview</p>
              <h2 className="mt-3 text-black">{japanese.programTitle}</h2>
              <RichText as="p" className="mt-4 text-sm leading-8 text-gray" text={japanese.programDescription} />
            </div>
            <div className="premium-dark-card p-8">
              <p className="section-kicker">Learning paths</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {japanese.levels.map((level) => (
                  <div key={level.id} className="rounded-[1.4rem] border border-white/10 bg-white/7 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white">{level.level}</h3>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-golden">{level.duration}</span>
                    </div>
                    <RichText as="p" className="mt-3 text-sm leading-7 text-white/74" text={level.description} />
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
              <p className="section-kicker">Curriculum depth</p>
              <h2>What students learn</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {japanese.curriculum.map((item) => (
              <div key={item.id} className="premium-card p-6">
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={item.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Why this course stands out</p>
              <h2>Why students choose Japanese here</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {japanese.whyChooseUs.map((item, index) => {
              const icons = [Users, Award, Languages, CheckCircle2, Clock3, BookOpen];
              const Icon = icons[index % icons.length];
              return (
                <div key={item.id} className="premium-card p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white"><Icon size={20} /></div>
                  <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                  <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={item.description} />
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
              <p className="section-kicker">Enrollment open</p>
              <h2 className="max-w-2xl text-white">{japanese.ctaTitle}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74" text={japanese.ctaSubtitle} />
            </div>
            <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              Enroll now <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
