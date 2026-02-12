const sdgs = [
  { number: 3, title: "Good Health and Well-Being" },
  { number: 4, title: "Quality Education" },
  { number: 9, title: "Industry, Innovation, and Infrastructure" },
  { number: 10, title: "Reduced Inequalities" },
  { number: 11, title: "Sustainable Cities and Communities" },
  { number: 17, title: "Partnerships for the Goals" },
]

export function SdgSection() {
  return (
    <section className="bg-foreground py-16 text-background sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Global Alignment
          </p>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-balance">
            UN Sustainable Development Goals
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[hsl(0_0%_100%/0.6)] sm:mt-6 sm:text-base text-pretty">
            Innovate for Change aligns with 6 out of the 17 United Nations
            Sustainable Development Goals. Through our programs, we aim to
            contribute to the following goals:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="group overflow-hidden rounded-xl transition-transform hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://open-sdg.github.io/sdg-translations/assets/img/goals/en/${sdg.number}.png`}
                alt={`SDG ${sdg.number}: ${sdg.title}`}
                width={200}
                height={200}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
