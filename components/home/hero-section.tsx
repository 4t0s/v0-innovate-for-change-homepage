import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%/0.85)] via-[hsl(220_20%_8%/0.4)] to-[hsl(220_20%_8%/0.2)]" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 pb-10 pt-28 sm:px-6 sm:pb-16 md:pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: Main headline + CTA */}
          <div className="min-w-0 max-w-2xl">
            <h1 className="text-balance leading-[1.05]">
              <span className="block text-3xl font-semibold text-[hsl(0_0%_100%/0.95)] sm:text-4xl md:text-5xl lg:text-6xl">
                Innovate for Change.
              </span>
              <span className="mt-1 block font-serif text-3xl italic text-[hsl(0_0%_100%/0.85)] sm:text-4xl md:text-5xl lg:text-6xl">
                Impact that lasts.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-[hsl(0_0%_100%/0.6)] sm:mt-6 sm:text-base md:text-lg">
              A student innovation platform where ideas become real solutions
              for underprivileged communities — and keep creating impact long
              after the competition ends.
            </p>

            <Link
              href="/case-2025"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(0_0%_100%/0.95)] px-5 py-2.5 text-sm font-semibold text-[hsl(220_20%_12%)] transition-all hover:bg-[hsl(0_0%_100%/1)] hover:shadow-lg sm:mt-8 sm:px-6 sm:py-3"
            >
              Explore Case 2025
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Status card */}
          <div className="w-full max-w-sm rounded-2xl border border-[hsl(0_0%_100%/0.1)] bg-[hsl(220_20%_12%/0.6)] p-5 backdrop-blur-md sm:p-6 lg:shrink-0">
            <p className="text-sm italic leading-relaxed text-[hsl(0_0%_100%/0.7)]">
              {'"If you are a passionate student who believes innovation should solve real problems on a global scale, Innovate For Change is open to you."'}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-[hsl(0_0%_100%/0.15)]" />
              <p className="shrink-0 text-xs font-medium text-[hsl(0_0%_100%/0.5)]">
                Applications for 2025 are closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
