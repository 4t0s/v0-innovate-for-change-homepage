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
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Lasting Results
          </p>
          <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
            Impact
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base text-pretty">
            The 2025 case proved that young innovators can create meaningful
            solutions when given trust, structure, and real responsibility. This
            case laid the foundation for our future work in inclusive education
            and innovation.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 sm:gap-4 sm:p-5"
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
