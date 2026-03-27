import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PartnerCTA() {
  return (
    <section className="bg-[hsl(220_20%_12%)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-bold text-[hsl(0_0%_100%/0.95)] sm:text-3xl md:text-4xl text-balance">
          Become a Partner
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[hsl(0_0%_100%/0.7)] sm:text-base text-pretty">
          Join us in empowering the next generation of innovators. Whether
          through funding, mentorship, or resources, your partnership can help
          transform student ideas into real-world solutions that benefit
          communities.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:contact@innovateforchange.org"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(0_0%_100%/0.2)] px-6 py-3 text-sm font-medium text-[hsl(0_0%_100%/0.8)] transition-colors hover:bg-[hsl(0_0%_100%/0.05)]"
          >
            View Our Impact
          </Link>
        </div>
      </div>
    </section>
  )
}
