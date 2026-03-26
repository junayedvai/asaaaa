import { Link } from "wouter";
import { ArrowRight, BookOpen, Globe2, Users, Award, Sparkles, BadgeCheck, ArrowUpRight, GraduationCap, Compass } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

const SERVICE_ICONS = [BookOpen, Globe2, Users, Award, Sparkles, BadgeCheck];

export default function Home() {
  const { content } = useCms();
  const { home, services, destinations, successStories, global: g } = content;
  const featuredServices = services.slice(0, 6);
  const featuredDestinations = destinations.slice(0, 6);
  const featuredStories = successStories.slice(0, 3);
  const noticeBoard = home.noticeBoard;
  const notices = noticeBoard?.notices || [];
  const excerptLength = Math.max(80, noticeBoard?.excerptLength || 180);

  const journeySteps = [
    "Book a counseling session",
    "Choose country, program, and pathway",
    "Prepare documents and applications",
    "Train for IELTS or Japanese with mentors",
    "Get visa support and pre-departure guidance",
  ];

  const stripTags = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const formatPublishedAt = (publishedAt: string) => {
    const date = new Date(publishedAt);
    if (Number.isNaN(date.getTime())) return "Date not available";
    return date.toLocaleString("en-BD", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-20">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-golden/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-golden shadow-[0_12px_28px_rgba(208,173,85,0.14)]">
                <Sparkles size={14} /> {home.hero.badge}
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] text-black sm:text-5xl lg:text-7xl">
                  {home.hero.title} <span className="text-golden">{home.hero.titleHighlight}</span>
                </h1>
                <RichText as="p" className="max-w-2xl text-base leading-8 text-gray sm:text-lg" text={home.hero.description} />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={g.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-golden to-dark-golden px-7 py-4 text-sm font-bold text-white shadow-[0_18px_36px_rgba(208,173,85,0.28)]"
                >
                  {home.hero.ctaButton} <ArrowRight size={18} />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/82 px-7 py-4 text-sm font-bold text-black shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
                >
                  Explore Programs <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3">
                {home.hero.stats.map((stat, i) => (
                  <div key={i} className="premium-stat-card">
                    <p className="text-2xl font-bold text-black sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-gray/80 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-4 hidden h-28 w-28 rounded-full border border-golden/25 bg-white/55 backdrop-blur-lg lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/55 bg-[linear-gradient(155deg,rgba(255,255,255,0.84),rgba(248,240,220,0.92))] p-5 shadow-[0_28px_70px_rgba(15,23,42,0.15)] sm:p-7">
                <div className="mb-5 flex items-center justify-between rounded-[1.4rem] border border-black/6 bg-black px-5 py-4 text-white shadow-[0_16px_34px_rgba(15,23,42,0.28)]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-golden/85">Signature experience</p>
                    <p className="mt-1 text-xl font-semibold">Study abroad, designed beautifully</p>
                  </div>
                  <GraduationCap size={34} className="text-golden" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="premium-glass-card">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white">
                      <Compass size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-black">End-to-end guidance</h3>
                    <p className="mt-3 text-sm leading-7 text-gray">From counseling and document prep to training, visa support, and pre-departure confidence.</p>
                  </div>
                  <div className="premium-glass-card">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <Globe2 size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-black">Global pathways</h3>
                    <p className="mt-3 text-sm leading-7 text-gray">Programs built for ambitious Bangladeshi students targeting trusted universities and career-ready destinations.</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.6rem] border border-golden/20 bg-white/72 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-golden">Journey blueprint</p>
                      <p className="text-lg font-bold text-black">A premium student flow</p>
                    </div>
                    <span className="rounded-full bg-light-golden px-3 py-1 text-xs font-bold text-golden">Fast & guided</span>
                  </div>
                  <div className="grid gap-3">
                    {journeySteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/76 px-4 py-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">0{index + 1}</span>
                        <p className="text-sm font-medium leading-6 text-gray">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Latest announcements</p>
              <h2>
                {noticeBoard?.title || "Notice"} <span className="text-golden">Board</span>
              </h2>
            </div>
            <RichText
              as="p"
              className="section-copy max-w-xl"
              text={noticeBoard?.subtitle || "Stay updated with important announcements and admissions information."}
            />
          </div>

          {notices.length === 0 ? (
            <div className="premium-card p-7 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-golden">No updates yet</p>
              <p className="mt-3 text-gray">{noticeBoard?.emptyText || "Notices will appear here when published."}</p>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-2">
              {notices.map((notice) => {
                const plainText = stripTags(notice.content || "");
                const isLong = plainText.length > excerptLength;
                const preview = isLong ? `${plainText.slice(0, excerptLength).trim()}...` : plainText;
                return (
                  <article key={notice.id} className="premium-card p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-light-golden px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-golden">Notice</span>
                      <span className="text-xs font-semibold text-gray">Published: {formatPublishedAt(notice.publishedAt)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black sm:text-3xl">{notice.title}</h3>
                    <p className="mt-3 text-base leading-8 text-gray sm:text-lg">{preview || "No notice details provided."}</p>
                    <Link href={`/notices/${notice.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-golden">
                      {noticeBoard?.readMoreText || "Read full notice"} <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Programs & services</p>
              <h2>
                {home.servicesSection.title} <span className="text-golden">{home.servicesSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="section-copy max-w-xl" text={home.servicesSection.subtitle} />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <Link key={service.id} href="/services" className="premium-card group block p-6 sm:p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-golden to-dark-golden text-white shadow-[0_14px_26px_rgba(208,173,85,0.26)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  <RichText as="p" className="mt-4 text-sm leading-7 text-gray" text={service.description} />
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-golden">
                    View details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Where students go next</p>
              <h2>
                {home.destinationsSection.title} <span className="text-golden">{home.destinationsSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="section-copy max-w-xl" text={home.destinationsSection.subtitle} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredDestinations.map((country, index) => (
              <div key={country.id} className="premium-card overflow-hidden p-0">
                <div className="premium-country-band">
                  <div className="text-5xl">{country.flag}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">Destination {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <RichText as="p" className="text-sm leading-7 text-gray" text={country.shortDescription} />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {country.highlights.slice(0, 3).map((highlight) => (
                      <span key={highlight} className="rounded-full border border-golden/18 bg-light-golden/70 px-3 py-1 text-xs font-semibold text-golden">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/destinations" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-6 py-3 text-sm font-bold text-black shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
              Explore all destinations <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Results that feel real</p>
              <h2>
                {home.successSection.title} <span className="text-golden">{home.successSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="section-copy max-w-xl" text={home.successSection.subtitle} />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredStories.map((student) => (
              <div key={student.id} className="premium-card overflow-hidden p-0">
                <div className="relative h-72">
                  <img src={student.image} alt={student.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/12 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-golden/90">Placed student</p>
                    <h3 className="mt-2 text-2xl font-bold">{student.name}</h3>
                    <p className="mt-1 text-sm text-white/78">{student.university} · {student.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-gray">“{student.quote}”</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/success-stories" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(15,23,42,0.22)]">
              View all success stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="premium-cta-panel">
            <div>
              <p className="section-kicker">Start your next chapter</p>
              <h2 className="max-w-2xl text-white">{home.ctaSection.title}</h2>
              <RichText as="p" className="mt-4 max-w-2xl text-sm leading-7 text-white/74 sm:text-base" text={home.ctaSection.subtitle} />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={g.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
              >
                {home.ctaSection.buttonText} <ArrowUpRight size={16} />
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-bold text-white">
                Talk to an advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
