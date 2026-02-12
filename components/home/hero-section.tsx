import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-36">
        <Badge
          variant="outline"
          className="mb-8 border-background/20 bg-background/5 text-background/80"
        >
          Student Innovation Program
        </Badge>

        <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Innovate for Change
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed opacity-70 md:text-lg">
          Innovate for Change provides students with a platform to design
          practical solutions that support underprivileged communities. We
          combine innovation, mentorship, a scientific approach, and
          entrepreneurship to transform the strongest projects into ventures
          that continue delivering impact long after the competition ends.
        </p>

        {/* Dynamic status notice */}
        <div className="mt-10 rounded-lg border border-background/10 bg-background/5 px-6 py-4">
          <p className="text-sm leading-relaxed opacity-80">
            Applications for the Kazakhstan 2025 round are now closed.
            <br />
            The next application cycle will open in 2026 — stay tuned.
          </p>
        </div>

        <div className="mt-12 max-w-2xl rounded-lg border border-primary/30 bg-primary/10 px-6 py-5">
          <p className="text-sm leading-relaxed opacity-90">
            If you are a passionate student who believes innovation should
            solve real problems on a global scale, Innovate For Change is open
            to you. Bring empathy-driven, real-world innovation to your
            community by leading programs and applying to start a branch in
            your country.
          </p>
        </div>
      </div>
    </section>
  )
}
