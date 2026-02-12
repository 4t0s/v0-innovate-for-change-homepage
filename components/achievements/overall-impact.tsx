import { Target, Users, MessageSquare } from "lucide-react"

const impacts = [
  {
    icon: Target,
    title: "Empowered Youth",
    description:
      "Students designed and implemented real-world solutions for children with disabilities, gaining hands-on experience in inclusive design and social innovation.",
  },
  {
    icon: Users,
    title: "Engaged Children",
    description:
      "Children were directly involved in inclusive, impactful projects. The educational toys are used daily to develop fine motor skills and support learning.",
  },
  {
    icon: MessageSquare,
    title: "Influenced Policy",
    description:
      "Practical insights shared with teachers, experts, and civil society leaders helped shape conversations about education and social policy in Kazakhstan and beyond.",
  },
]

export function OverallImpact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          The Bigger Picture
        </p>
        <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
          A Model for Sustainable Impact
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base text-pretty">
          Through both program achievements and active engagement in
          professional forums, the 2025 Innovate For Change initiative
          positioned itself as a model for inclusive education, youth leadership,
          and sustainable social impact.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-3">
        {impacts.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-14 sm:w-14">
              <item.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
            </div>
            <h3 className="mt-5 text-base font-bold text-card-foreground sm:mt-6 sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
