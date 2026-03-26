import { Award, Globe2, Users, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function SuccessStories() {
  const { content } = useCms();
  const stories = content.successStories;
  const g = content.global;
  const page = content.successPage;

  const stats = [
    { icon: Users, number: "500+", label: "Students Placed" },
    { icon: Globe2, number: "10+", label: "Countries" },
    { icon: Award, number: "50+", label: "Universities" },
  ];

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-kicker">Proof of outcomes</p>
              <h1 className="mt-3 text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                {page.heroTitle} <span className="text-golden">{page.heroHighlight}</span>
              </h1>
              <RichText as="p" className="mt-6 max-w-2xl text-base leading-8 text-gray sm:text-lg" text={page.heroSubtitle} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="premium-card p-5 text-center lg:text-left">
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white lg:mx-0"><Icon size={20} /></div>
                    <p className="text-3xl font-bold text-black">{stat.number}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Student spotlights</p>
              <h2>
                {page.sectionTitle} <span className="text-golden">{page.sectionHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <div key={story.id} className="premium-card overflow-hidden p-0">
                <div className="relative h-80">
                  <img src={story.image} alt={story.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-golden/90">Placed student</p>
                    <h3 className="mt-2 text-2xl font-bold">{story.name}</h3>
                    <p className="mt-1 text-sm text-white/76">{story.university} · {story.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-gray">“{story.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Student voice</p>
              <h2>
                {page.testimonialTitle} <span className="text-golden">{page.testimonialHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {page.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="premium-card p-7">
                <p className="text-lg leading-8 text-gray">“{testimonial.quote}”</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-golden">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="premium-cta-panel">
            <div>
              <p className="section-kicker">Your story could be next</p>
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
