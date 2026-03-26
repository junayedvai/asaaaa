import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

type HomeIconName = "book" | "globe" | "users" | "award" | "spark" | "check" | "compass" | "notice" | "admin" | "teacher" | "message" | "briefcase";

const SERVICE_ICONS: HomeIconName[] = ["book", "globe", "users", "award", "spark", "check"];

function HomeIcon({ name, size = 20 }: { name: HomeIconName; size?: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "book") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    );
  }
  if (name === "award") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <circle cx="12" cy="8" r="6" />
        <path d="m8.2 13.6-2.2 8.4L12 19l6 3-2.2-8.4" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M12 3v6" />
        <path d="M12 15v6" />
        <path d="M3 12h6" />
        <path d="M15 12h6" />
        <path d="m5.6 5.6 4.2 4.2" />
        <path d="m14.2 14.2 4.2 4.2" />
        <path d="m18.4 5.6-4.2 4.2" />
        <path d="m9.8 14.2-4.2 4.2" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="m20 6-11 11-5-5" />
      </svg>
    );
  }
  if (name === "compass") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }
  if (name === "notice") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .738-1.674C19.41 13.966 18 12.192 18 8a6 6 0 0 0-12 0c0 4.192-1.41 5.966-2.738 7.326" />
      </svg>
    );
  }
  if (name === "admin") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 11h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }
  if (name === "teacher") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="m22 10-10-5L2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    );
  }
  if (name === "message") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (name === "briefcase") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M9 7V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v2" />
        <path d="M2 13h20" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

export default function Home() {
  const { content } = useCms();
  const { home, services, destinations, successStories, global: g } = content;
  const featuredServices = services.slice(0, 6);
  const featuredDestinations = destinations.slice(0, 6);
  const featuredStories = successStories.slice(0, 3);
  const noticeBoard = home.noticeBoard;
  const notices = [...(noticeBoard?.notices || [])].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const excerptLength = Math.max(80, noticeBoard?.excerptLength || 180);
  const administrationSection = home.administrationSection;
  const leadershipMembers = administrationSection?.leadershipMembers || [];
  const teacherMembers = administrationSection?.teacherMembers || [];
  const messagesSection = home.messagesSection;
  const managementMessages = messagesSection?.messages || [];

  const journeySteps = [
    "Book a counseling session",
    "Choose country, program, and pathway",
    "Prepare documents and applications",
    "Train for IELTS or Japanese with mentors",
    "Get visa support and pre-departure guidance",
  ];

  const stripTags = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const cleanBadgeText = (value: string) => value.replace(/https?:\/\/www\.w3\.org\/2000\/svg/gi, "").trim();
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
  const getRoleIcon = (role: string, teacherMode = false): HomeIconName => {
    const lower = (role || "").toLowerCase();
    if (teacherMode || /teacher|instructor|ielts|japanese|trainer/.test(lower)) return "teacher";
    if (/ceo|manager|director|hr|admin|head|chairman/.test(lower)) return "briefcase";
    return "users";
  };
  const withProfileFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = "/images/profile-placeholder.svg";
  };

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-20">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-golden/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-golden shadow-[0_12px_28px_rgba(208,173,85,0.14)]">
                {cleanBadgeText(home.hero.badge || "")}
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-golden to-dark-golden px-7 py-4 text-sm font-bold text-black shadow-[0_18px_36px_rgba(208,173,85,0.28)]"
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
                    <p className="text-xs uppercase tracking-[0.28em] text-golden/85">Beyond borders</p>
                    <p className="mt-1 text-xl font-semibold">Your study abroad journey, elevated.</p>
                  </div>
                  <div className="text-golden"><HomeIcon name="teacher" size={34} /></div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="premium-glass-card">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black">End-to-end guidance</h3>
                    <p className="mt-3 text-sm leading-7 text-gray">From counseling and document prep to training, visa support, and pre-departure confidence.</p>
                  </div>
                  <div className="premium-glass-card">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <HomeIcon name="globe" size={20} />
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
              <p className="section-kicker">Programs & services</p>
              <h2>
                {home.servicesSection.title} <span className="text-golden">{home.servicesSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="section-copy max-w-xl" text={home.servicesSection.subtitle} />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => {
              const iconName = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <Link key={service.id} href="/services" className="premium-card group block p-6 sm:p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <HomeIcon name={iconName} size={24} />
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
            <div className="premium-card p-7 text-center shadow-none">
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
                  <article key={notice.id} className="premium-card p-6 shadow-none sm:p-7">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-light-golden px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-golden">Notice</span>
                      <span className="text-xs font-semibold text-gray">Published: {formatPublishedAt(notice.publishedAt)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black sm:text-3xl">{notice.title}</h3>
                    <p className="mt-3 text-base leading-8 text-gray sm:text-lg" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{preview || "No notice details provided."}</p>
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
              <p className="section-kicker">Our people</p>
              <h2>
                {administrationSection?.title || "Administration"}
              </h2>
            </div>
            <RichText
              as="p"
              className="section-copy max-w-xl"
              text={administrationSection?.subtitle || "Leadership and teachers guiding your international journey."}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="premium-card p-6 shadow-none sm:p-7">
              <h3 className="text-2xl font-bold text-black">{administrationSection?.leadershipTitle || "Administration Team"}</h3>
              <div className="mt-5 grid gap-4">
                {leadershipMembers.map((member) => {
                  return (
                  <article key={member.id} className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white/80 p-4">
                    <img src={member.image} alt={member.name} className="h-16 w-16 rounded-xl object-cover" onError={withProfileFallback} />
                    <div>
                      <h4 className="text-lg font-bold text-black">{member.name}</h4>
                      <p className="text-sm font-semibold text-golden">{member.role}</p>
                      <p className="mt-1 text-sm leading-7 text-gray">{member.bio}</p>
                    </div>
                  </article>
                )})}
              </div>
            </div>

            <div className="premium-card p-6 shadow-none sm:p-7">
              <h3 className="text-2xl font-bold text-black">{administrationSection?.teachersTitle || "Teachers"}</h3>
              <div className="mt-5 grid gap-4">
                {teacherMembers.map((member) => {
                  return (
                  <article key={member.id} className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white/80 p-4">
                    <img src={member.image} alt={member.name} className="h-16 w-16 rounded-xl object-cover" onError={withProfileFallback} />
                    <div>
                      <h4 className="text-lg font-bold text-black">{member.name}</h4>
                      <p className="text-sm font-semibold text-golden">{member.role}</p>
                      <p className="mt-1 text-sm leading-7 text-gray">{member.bio}</p>
                    </div>
                  </article>
                )})}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Leadership voice</p>
              <h2>{messagesSection?.title || "CEO Message"}</h2>
            </div>
            <RichText
              as="p"
              className="section-copy max-w-xl"
              text={messagesSection?.subtitle || "Messages from CEO and key leadership members."}
            />
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {managementMessages.map((item) => (
              <article key={item.id} className="premium-card border border-golden/20 p-8 shadow-none sm:p-10">
                <div className="flex items-center gap-6">
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-2xl object-cover ring-4 ring-golden/20 sm:h-28 sm:w-28" onError={withProfileFallback} />
                  <div>
                    <h3 className="text-2xl font-bold text-black sm:text-3xl">{item.name}</h3>
                    <p className="mt-1 text-base font-bold uppercase tracking-[0.12em] text-golden sm:text-lg">{item.designation}</p>
                  </div>
                </div>
                <p className="mt-7 text-lg leading-9 text-gray sm:text-xl">{item.message}</p>
              </article>
            ))}
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
