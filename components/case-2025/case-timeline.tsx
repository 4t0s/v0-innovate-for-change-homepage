import {
  FileText,
  Users,
  Wrench,
  Gift,
} from "lucide-react"

const stages = [
  {
    icon: FileText,
    number: "01",
    title: "Selective Online Application",
    purpose:
      "The application stage aimed to identify teams that demonstrated not only creativity, but also research depth, ethical awareness, and motivation to work with sensitive social issues.",
    details: [
      "Applicants submitted their materials through an online platform",
      "Each team completed a detailed registration form with structured project information",
      "Four short essays addressing problem identification, proposed impact, and personal motivation",
      "Video submission responding to the official prompts of the year",
    ],
    outcome: "19% acceptance rate — only the strongest teams advanced to the in-person Summer Innovation Program",
  },
  {
    icon: Users,
    number: "02",
    title: "Summer Innovation Session",
    purpose:
      "This stage focused on full immersion into problem-solving, human-centered design, and collaborative innovation.",
    details: [
      "3-day in-person intensive held August 1-3 at Spectrum International School",
      "Lectures by invited experts across education, design, and entrepreneurship",
      "Interactive workshops and team-based activities under close mentorship",
      "Early-stage prototypes developed focusing on usability, safety, and accessibility",
      "Final day presentations to a jury covering problem statement, user analysis, and product design",
    ],
    outcome: "20 teams completed the in-person program — 10 finalist teams were selected to continue",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Implementation & Final Defense",
    purpose:
      "To ensure that promising ideas evolved into fully functional, real-world products.",
    details: [
      "8-week remote implementation phase with close mentorship",
      "Refined designs based on feedback, built physical prototypes",
      "Tested functionality, durability, and child engagement",
      "Teams designed for actual daily use by children, not just presentation",
      "Final defense on September 28 before a jury panel",
    ],
    outcome: "3 teams recognized as winners — all 10 products met quality standards for real-world implementation",
  },
  {
    icon: Gift,
    number: "04",
    title: "Donation & Field Implementation",
    purpose:
      "To close the innovation loop by delivering solutions directly to the children they were designed for.",
    details: [
      "In-person visit to the Balam-Ai Foundation",
      "All 10 educational toys donated and tested in real learning environments",
      "Teams interacted with children and observed engagement firsthand",
      "Formal memorandum of cooperation signed for long-term product use",
    ],
    outcome: "10 high-quality educational toys delivered — 100+ children now use the tools regularly",
  },
]

export function CaseTimeline() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            The Process
          </p>
          <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
            Four Stages of Innovation
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:mt-16 sm:gap-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8"
            >
              {/* Number + icon */}
              <div className="flex items-center gap-4 lg:w-64 lg:shrink-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary sm:h-14 sm:w-14">
                  <stage.icon className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-muted-foreground">
                    {"Stage " + stage.number}
                  </p>
                  <p className="text-base font-bold text-foreground sm:text-lg">
                    {stage.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 rounded-lg border border-border bg-card p-5 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Purpose
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {stage.purpose}
                </p>

                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary sm:mt-6">
                  Key Details
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {stage.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-lg bg-primary/5 p-3 sm:mt-6 sm:p-4">
                  <p className="text-sm font-semibold text-primary">Outcome</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {stage.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
