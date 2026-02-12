import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:pb-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: Main headline + CTA */}
          <div className="max-w-2xl">
            <h1 className="text-balance leading-[1.05]">
              <span className="block text-4xl font-semibold text-[hsl(0_0%_100%/0.95)] md:text-5xl lg:text-6xl">
                Innovate for Change.
              </span>
              <span className="mt-1 block font-serif text-4xl italic text-[hsl(0_0%_100%/0.85)] md:text-5xl lg:text-6xl">
                Impact that lasts.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-[hsl(0_0%_100%/0.6)] md:text-lg">
              A student innovation platform where ideas become real solutions
              for underprivileged communities — and keep creating impact long
              after the competition ends.
            </p>

            <Link
              href="/case-2025"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0_0%_100%/0.95)] px-6 py-3 text-sm font-semibold text-[hsl(220_20%_12%)] transition-all hover:bg-[hsl(0_0%_100%/1)] hover:shadow-lg"
            >
              Explore Case 2025
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Status card */}
          <div className="max-w-sm rounded-2xl border border-[hsl(0_0%_100%/0.1)] bg-[hsl(220_20%_12%/0.6)] p-6 backdrop-blur-md">
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
