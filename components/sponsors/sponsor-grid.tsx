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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl">
      {/* Photo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={sponsor.photo}
          alt={sponsor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {sponsor.role}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
            {sponsor.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {sponsor.description}
        </p>

        {/* Link */}
        {sponsor.website && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
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
            Organizations and individuals who make our mission possible through
            their generous support and partnership.
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
