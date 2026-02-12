import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const forums = [
  {
    title: "Best Contemporary Teacher Award",
    date: "17 December 2025",
    slug: "honoring-teachers-sparking-ideas",
    description:
      "The ceremony served as a professional forum bringing together teachers, experts, researchers, parents, and school leaders from across Kazakhstan.",
    topics: [
      "Digitalization and AI in education",
      "Neurodiversity and inclusive teaching approaches",
      "Modern behavioral strategies and inclusive solutions",
      "Real-life case studies from schools nationwide",
    ],
    insight:
      "Our team shared insights from the 2025 Innovate For Change program, demonstrating how student-led initiatives and hands-on innovation can be integrated into schools, providing teachers with practical tools and inspiration.",
  },
  {
    title: '"Kazakhstan, Child-Friendly!" Conference',
    date: "20 November 2025",
    slug: "making-kazakhstan-child-friendly",
    description:
      "Organized by UNICEF, the Ministry of Foreign Affairs, and partners including Bakytty Bala, CDJI, and the Science & Law Institute, this conference focused on children's rights and participatory decision-making.",
    topics: [
      "Enhancing child protection, participation, and adoption of international best practices",
      "Panel of speakers including Judge Renata Winter and Pauline McCabe",
      "Scaling IFC's inclusive education approach across schools and communities",
    ],
    insight: null,
  },
  {
    title: "Bakytty Bala Forum",
    date: "14 August 2025",
    slug: "driving-social-change-together",
    description:
      "Co-organized with the National Alliance of Professional Social Workers, this dialogue brought together civil society leaders, experts, and advocates.",
    topics: [
      "Implementing international standards in civil society development",
      "Advancing children's rights protection",
      "Institutionalizing professional social work for advocacy and human rights",
    ],
    insight:
      "Our participation highlighted the intersection of youth-led innovation, social advocacy, and systemic change.",
  },
]

export function ForumsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Beyond the Program
        </p>
        <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl text-balance">
          Forums &amp; Professional Engagement
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Innovate For Change 2025 was not only about creating solutions but
          also actively participating in professional and civic discussions to
          scale impact.
        </p>

        <div className="mt-10 flex flex-col gap-5 sm:mt-16 sm:gap-8">
          {forums.map((forum) => (
            <div
              key={forum.title}
              className="rounded-lg border border-border bg-card p-5 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-bold text-card-foreground sm:text-xl">
                    {forum.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0" />
                    {forum.date}
                  </div>
                </div>
                <Link
                  href={`/news/${forum.slug}`}
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Read full article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {forum.description}
              </p>

              <div className="mt-5 sm:mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Key Topics
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {forum.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {forum.insight && (
                <div className="mt-5 rounded-lg bg-primary/5 p-3 sm:mt-6 sm:p-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    {forum.insight}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
