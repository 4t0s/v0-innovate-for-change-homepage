import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    slug: "honoring-teachers-sparking-ideas",
    title: "Honoring Teachers, Sparking Ideas",
    date: "17 Dec 2025",
    summary:
      "Shared our 2025 program insights and showed how student-led innovation can bring inclusive solutions directly into classrooms.",
    tag: "Forums & Professional Engagement",
  },
  {
    slug: "making-kazakhstan-child-friendly",
    title: "Making Kazakhstan Child-Friendly",
    date: "20 Nov 2025",
    summary:
      "Discussed empowering children, amplifying their voices in decisions, and applying international best practices in local schools.",
    tag: "Forums & Professional Engagement",
  },
  {
    slug: "driving-social-change-together",
    title: "Driving Social Change Together",
    date: "14 Aug 2025",
    summary:
      "Brought civil society leaders, experts, and advocates together to explore advancing children's rights and creating lasting community impact.",
    tag: "Forums & Professional Engagement",
  },
]

export function NewsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Latest Updates
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Latest News
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              {"Stay informed with the latest updates on Innovate for Change's work around the world."}
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 sm:px-5 sm:py-2.5"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-primary/30 sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.tag}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-5 flex items-center justify-between sm:mt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
