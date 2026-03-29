import {
  Puzzle,
  Eye,
  Users,
  DollarSign,
  Mic,
  GraduationCap,
} from "lucide-react"

const stats = [
  {
    icon: Puzzle,
    value: "150+",
    label: "Children now actively use them daily",
    description: "10+ Educational toys created & donated",
  },
  {
    icon: Eye,
    value: "480K+",
    label: "Online views",
    description: "Featured 7 times on national news portals",
  },
  {
    icon: Users,
    value: "9",
    label: "Strategic partners",
    description: "Enabling program success and collaboration",
  },
  {
    icon: DollarSign,
    value: "$5K+",
    label: "Funding secured",
    description: "For implementation, mentoring, and prototypes",
  },
  {
    icon: Mic,
    value: "11",
    label: "Guest speakers",
    description: "Including a Harvard graduate with 380K+ followers",
  },
  {
    icon: GraduationCap,
    value: "7",
    label: "Dedicated mentors",
    description: "Expertise in education, design, and entrepreneurship",
  },
]

export function AchievementStats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          By The Numbers
        </p>
        <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          2025 Program Highlights
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start rounded-lg border border-border bg-card p-5 sm:p-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
              <stat.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>
            <p className="mt-4 font-serif text-3xl font-bold text-foreground sm:mt-6 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-card-foreground">
              {stat.label}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Participant Impact */}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:mt-16 sm:p-8 md:p-12">
        <h3 className="font-serif text-lg font-bold text-foreground sm:text-xl">
          Participant Impact
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          Participants gained practical experience in designing for inclusivity,
          working with real users, and implementing solutions that matter.
          Children benefited from tools designed to support learning, play, and
          fine motor skill development, promoting inclusivity and empathy in
          education.
        </p>
      </div>
    </section>
  )
}
