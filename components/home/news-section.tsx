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
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Latest Updates
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Latest News
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {"Stay informed with the latest updates on Innovate for Change's work around the world."}
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-card"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.tag}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-6 flex items-center justify-between">
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
