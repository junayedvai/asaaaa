import { ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Administration() {
  const { content } = useCms();
  const { home, global: g } = content;
  const administrationSection = home.administrationSection;
  const leadershipMembers = administrationSection?.leadershipMembers || [];
  const teacherMembers = administrationSection?.teacherMembers || [];
  const messagesSection = home.messagesSection;
  const managementMessages = messagesSection?.messages || [];

  const withProfileFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = "/images/profile-placeholder.svg";
  };

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero premium-mesh">
        <div className="container mx-auto px-4 py-10 lg:py-18">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Our people</p>
              <h1 className="text-black">{administrationSection?.title || "Administration"}</h1>
            </div>
            <RichText
              as="p"
              className="section-copy max-w-xl"
              text={administrationSection?.subtitle || "Leadership and teachers guiding your international journey."}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="premium-card p-6 shadow-none sm:p-7">
              <h2 className="text-2xl font-bold text-black">{administrationSection?.leadershipTitle || "Administration Team"}</h2>
              <div className="mt-5 grid gap-4">
                {leadershipMembers.map((member) => (
                  <article key={member.id} className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white/80 p-4">
                    <img src={member.image} alt={member.name} className="h-16 w-16 rounded-xl object-cover" onError={withProfileFallback} />
                    <div>
                      <h3 className="text-lg font-bold text-black">{member.name}</h3>
                      <p className="text-sm font-semibold text-golden">{member.role}</p>
                      <p className="mt-1 text-sm leading-7 text-gray">{member.bio}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="premium-card p-6 shadow-none sm:p-7">
              <h2 className="text-2xl font-bold text-black">{administrationSection?.teachersTitle || "Teachers"}</h2>
              <div className="mt-5 grid gap-4">
                {teacherMembers.map((member) => (
                  <article key={member.id} className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white/80 p-4">
                    <img src={member.image} alt={member.name} className="h-16 w-16 rounded-xl object-cover" onError={withProfileFallback} />
                    <div>
                      <h3 className="text-lg font-bold text-black">{member.name}</h3>
                      <p className="text-sm font-semibold text-golden">{member.role}</p>
                      <p className="mt-1 text-sm leading-7 text-gray">{member.bio}</p>
                    </div>
                  </article>
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

          <div className="mt-10 premium-cta-panel">
            <div>
              <p className="section-kicker">Speak with our team</p>
              <h2 className="max-w-2xl text-white">Plan your admission journey with confidence</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
                Connect with our administration and academic team for admission support, course counseling, and next steps.
              </p>
            </div>
            <a
              href={g.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
            >
              Register now <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
