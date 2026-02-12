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
    value: "10",
    label: "Educational toys created & donated",
    description: "Now actively used by 100+ children daily",
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
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          By The Numbers
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          2025 Program Highlights
        </h2>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start rounded-lg border border-border bg-card p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-6 font-serif text-4xl font-bold text-foreground">
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
      <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12">
        <h3 className="font-serif text-xl font-bold text-foreground">
          Participant Impact
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
