import { CheckCircle } from "lucide-react"

const impacts = [
  "Students gained hands-on experience in inclusive design and social innovation",
  "Children gained access to tools tailored to their needs",
  "Inclusivity moved from concept to practice",
  "Winning teams gained opportunities to further develop their products into real ventures",
  "Solutions continue to create value well beyond the program's duration",
]

export function CaseImpact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Lasting Results
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Impact
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            The 2025 case proved that young innovators can create meaningful
            solutions when given trust, structure, and real responsibility. This
            case laid the foundation for our future work in inclusive education
            and innovation.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-card-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
