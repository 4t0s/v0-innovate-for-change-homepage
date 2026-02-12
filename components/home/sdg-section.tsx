import {
  Heart,
  BookOpen,
  Lightbulb,
  Scale,
  Building2,
  Handshake,
} from "lucide-react"

const sdgs = [
  {
    number: 3,
    title: "Good Health and Well-Being",
    icon: Heart,
    color: "bg-emerald-600",
  },
  {
    number: 4,
    title: "Quality Education",
    icon: BookOpen,
    color: "bg-red-600",
  },
  {
    number: 9,
    title: "Industry, Innovation, and Infrastructure",
    icon: Lightbulb,
    color: "bg-orange-500",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    icon: Scale,
    color: "bg-pink-600",
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
    icon: Building2,
    color: "bg-amber-500",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    icon: Handshake,
    color: "bg-blue-700",
  },
]

export function SdgSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Global Alignment
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            UN Sustainable Development Goals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Innovate for Change aligns with 6 out of the 17 United Nations
            Sustainable Development Goals. Through our programs, we aim to
            contribute to the following goals:
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${sdg.color}`}
              >
                <sdg.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground">
                  {"SDG " + sdg.number}
                </p>
                <p className="mt-1 text-sm font-semibold text-card-foreground">
                  {sdg.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
