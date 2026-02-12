import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { newsArticles } from "@/lib/news-data"

export const metadata: Metadata = {
  title: "News — Innovate for Change",
  description:
    "Stay informed with the latest updates on Innovate for Change's work around the world.",
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Badge
            variant="outline"
            className="mb-4 border-background/20 bg-background/5 text-background/80 sm:mb-6"
          >
            Updates
          </Badge>
          <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Latest News
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-70 sm:text-base">
            {"Stay informed with the latest updates on Innovate for Change's work around the world."}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-5 sm:gap-8">
          {newsArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30 sm:p-8 md:flex-row md:gap-6"
            >
              <div className="shrink-0 md:w-48">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {article.tag}
                </span>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                  {article.summary}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary sm:mt-4">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
