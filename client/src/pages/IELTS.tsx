import { CheckCircle2, Clock3, Users, Award, BookOpen, Target, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function IELTS() {
  const { content } = useCms();
  const ielts = content.ielts;
  const g = content.global;

  const stats = [
    { label: "Classes", value: ielts.courseStats.classes, icon: BookOpen },
    { label: "Per week", value: ielts.courseStats.perWeek, icon: Clock3 },
    { label: "Mock tests", value: ielts.courseStats.mockTests, icon: Target },
  ];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-golden/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-golden">
                <Target size={14} /> {ielts.hero.badge}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {ielts.hero.title} <span className="text-golden">{ielts.hero.titleHighlight}</span> {ielts.hero.titleSuffix}
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={ielts.hero.description} />
              <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-golden to-dark-golden px-7 py-4 text-sm font-bold text-white">
                {ielts.hero.ctaButton} <ArrowUpRight size={16} />
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
                {ielts.courseFeatures.map((feature) => (
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
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-dark-card p-8">
              <p className="section-kicker">Program overview</p>
              <h2 className="mt-3 text-white">{ielts.programTitle}</h2>
              <RichText as="p" className="mt-4 text-sm leading-8 text-white/74" text={ielts.programDescription} />
            </div>
            <div className="premium-card p-8">
              <p className="section-kicker">Skill modules</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {ielts.curriculum.map((item) => (
                  <div key={item.id} className="rounded-[1.4rem] border border-black/6 bg-white/74 p-5">
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                    <RichText as="p" className="mt-3 text-sm leading-7 text-gray" text={item.description} />
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
              <p className="section-kicker">Why this feels premium</p>
              <h2>Why students choose this IELTS track</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ielts.whyChooseUs.map((item, index) => {
              const icons = [Users, Award, Target, CheckCircle2, Clock3, BookOpen];
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
              <h2 className="max-w-2xl text-white">{ielts.ctaTitle}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74" text={ielts.ctaSubtitle} />
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
