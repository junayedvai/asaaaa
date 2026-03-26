import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function NoticeBoard() {
  const { content } = useCms();
  const noticeBoard = content.home.noticeBoard;
  const notices = [...(noticeBoard?.notices || [])].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const excerptLength = Math.max(80, noticeBoard?.excerptLength || 180);

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
      <section className="page-hero">
        <div className="container mx-auto px-4 py-14">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Latest announcements</p>
              <h1 className="text-black">
                {noticeBoard?.title || "Notice"} <span className="text-golden">Board</span>
              </h1>
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
                const preview = plainText.length > excerptLength ? `${plainText.slice(0, excerptLength).trim()}...` : plainText;
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
    </div>
  );
}
