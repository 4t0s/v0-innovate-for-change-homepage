const sdgs = [
  {
    number: 3,
    title: "Good Health and Well-Being",
  },
  {
    number: 4,
    title: "Quality Education",
  },
  {
    number: 9,
    title: "Industry, Innovation, and Infrastructure",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
  },
]

export function SdgSection() {
  return (
    <section className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Global Alignment
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl text-balance">
            UN Sustainable Development Goals
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[hsl(0_0%_100%/0.6)] text-pretty">
            Innovate for Change aligns with 6 out of the 17 United Nations
            Sustainable Development Goals. Through our programs, we aim to
            contribute to the following goals:
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
