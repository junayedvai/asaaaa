import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";

export default function NoticeDetails() {
  const { content } = useCms();
  const [, params] = useRoute("/notices/:id");
  const noticeBoard = content.home.noticeBoard;
  const notices = noticeBoard?.notices || [];
  const noticeId = params?.id || "";
  const notice = notices.find((item) => item.id === noticeId);

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

  if (!notice) {
    return (
      <div className="page-shell world-class-page">
        <section className="page-hero">
          <div className="container mx-auto px-4 py-14">
            <div className="premium-card p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-golden">Notice</p>
              <h1 className="mt-3 text-3xl font-bold text-black sm:text-4xl">Notice Not Found</h1>
              <p className="mt-4 max-w-2xl text-gray">The notice you are looking for is not available or may have been removed.</p>
              <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell world-class-page">
      <section className="page-hero">
        <div className="container mx-auto px-4 py-14">
          <article className="premium-card p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-golden">Notice details</p>
            <h1 className="mt-3 text-4xl font-bold text-black sm:text-5xl">{notice.title}</h1>
            <p className="mt-4 text-base font-semibold text-gray sm:text-lg">Published: {formatPublishedAt(notice.publishedAt)}</p>
            <div className="mt-6 rounded-2xl border border-black/8 bg-white/80 p-5 sm:p-6">
              <p className="whitespace-pre-wrap text-lg leading-9 text-gray sm:text-xl">{notice.content}</p>
            </div>
            <Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-bold text-black">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
