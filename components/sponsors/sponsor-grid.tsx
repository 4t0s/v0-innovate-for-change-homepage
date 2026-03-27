import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface Sponsor {
  name: string
  role: string
  description: string
  photo: string
  website?: string
}

const sponsors: Sponsor[] = [
  {
    name: "UNICEF Kazakhstan",
    role: "Strategic Partner",
    description:
      "Supporting children's rights and inclusive education initiatives across Central Asia.",
    photo: "/images/sponsors/unicef.jpg",
    website: "https://unicef.org",
  },
  {
    name: "Balam-Ai Foundation",
    role: "Education Partner",
    description:
      "Partnering to provide educational resources for children with disabilities.",
    photo: "/images/sponsors/balam-ai.jpg",
  },
  {
    name: "Spectrum International School",
    role: "Program Host",
    description:
      "Hosting the Summer Innovation Program and providing world-class learning facilities.",
    photo: "/images/sponsors/spectrum.jpg",
  },
  {
    name: "Bakytty Bala",
    role: "Community Partner",
    description:
      "Collaborating on civil society engagement and children's rights advocacy.",
    photo: "/images/sponsors/bakytty-bala.jpg",
  },
  {
    name: "Ministry of Foreign Affairs",
    role: "Government Partner",
    description:
      "Government partnership supporting youth innovation and social impact programs.",
    photo: "/images/sponsors/mfa.jpg",
  },
  {
    name: "National Alliance of Professional Social Workers",
    role: "Professional Network",
    description:
      "Professional network advancing social work standards and child advocacy.",
    photo: "/images/sponsors/napsw.jpg",
  },
  {
    name: "CDJI",
    role: "Research Partner",
    description:
      "International expertise in child rights and judicial innovation.",
    photo: "/images/sponsors/cdji.jpg",
  },
  {
    name: "Science & Law Institute",
    role: "Academic Partner",
    description:
      "Research partnership bridging innovation policy and education.",
    photo: "/images/sponsors/sli.jpg",
  },
  {
    name: "Unified Grant Operator",
    role: "Grant Partner",
    description:
      "Platform support and grant administration for civil society projects.",
    photo: "/images/sponsors/ugo.jpg",
  },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-xl sm:p-8">
      {/* Circular Photo */}
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32">
        <Image
          src={sponsor.photo}
          alt={sponsor.name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {sponsor.role}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
          {sponsor.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {sponsor.description}
        </p>

        {/* Link */}
        {sponsor.website && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
          >
            Visit website
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}

export function SponsorGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            People and organizations who make our mission possible through their
            generous support and partnership.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  )
}
