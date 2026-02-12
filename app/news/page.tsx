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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Badge
            variant="outline"
            className="mb-6 border-background/20 bg-background/5 text-background/80"
          >
            Updates
          </Badge>
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Latest News
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-70">
            {"Stay informed with the latest updates on Innovate for Change's work around the world."}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-8">
          {newsArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group grid gap-6 rounded-lg border border-border bg-card p-8 transition-all hover:shadow-md hover:border-primary/30 md:grid-cols-4"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {article.tag}
                </span>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="font-serif text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
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
