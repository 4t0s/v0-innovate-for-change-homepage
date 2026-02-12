import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { newsArticles, getNewsArticle } from "@/lib/news-data"

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Innovate for Change`,
    description: article.summary,
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Button
            asChild
            variant="ghost"
            className="mb-6 gap-2 text-background/60 hover:text-background hover:bg-background/10 sm:mb-8"
          >
            <Link href="/news">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </Button>

          <Badge
            variant="outline"
            className="mb-4 border-background/20 bg-background/5 text-background/80"
          >
            {article.tag}
          </Badge>

          <h1 className="max-w-3xl font-serif text-2xl font-bold sm:text-3xl md:text-5xl text-balance">
            {article.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm opacity-60 sm:mt-6">
            <Calendar className="h-4 w-4" />
            {article.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-5 sm:gap-6">
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 sm:mt-16 sm:pt-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/news">
              <ArrowLeft className="h-4 w-4" />
              Back to all news
            </Link>
          </Button>
        </div>
      </article>
    </>
  )
}
