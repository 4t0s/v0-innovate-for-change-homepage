import { ExternalLink } from "lucide-react"

type SponsorTier = "platinum" | "gold" | "silver" | "partner"

interface Sponsor {
  name: string
  description: string
  logo?: string
  website?: string
  tier: SponsorTier
}

const sponsors: Sponsor[] = [
  {
    name: "UNICEF Kazakhstan",
    description:
      "Supporting children's rights and inclusive education initiatives across Central Asia.",
    tier: "platinum",
    website: "https://unicef.org",
  },
  {
    name: "Balam-Ai Foundation",
    description:
      "Partnering to provide educational resources for children with disabilities.",
    tier: "platinum",
    website: "#",
  },
  {
    name: "Spectrum International School",
    description:
      "Hosting the Summer Innovation Program and providing world-class learning facilities.",
    tier: "gold",
    website: "#",
  },
  {
    name: "Bakytty Bala",
    description:
      "Collaborating on civil society engagement and children's rights advocacy.",
    tier: "gold",
    website: "#",
  },
  {
    name: "Ministry of Foreign Affairs",
    description:
      "Government partnership supporting youth innovation and social impact programs.",
    tier: "gold",
    website: "#",
  },
  {
    name: "National Alliance of Professional Social Workers",
    description:
      "Professional network advancing social work standards and child advocacy.",
    tier: "silver",
    website: "#",
  },
  {
    name: "CDJI",
    description:
      "International expertise in child rights and judicial innovation.",
    tier: "silver",
    website: "#",
  },
  {
    name: "Science & Law Institute",
    description:
      "Research partnership bridging innovation policy and education.",
    tier: "silver",
    website: "#",
  },
  {
    name: "Unified Grant Operator",
    description:
      "Platform support and grant administration for civil society projects.",
    tier: "partner",
    website: "#",
  },
]

const tierConfig: Record<
  SponsorTier,
  { label: string; gridClass: string; cardClass: string }
> = {
  platinum: {
    label: "Platinum Partners",
    gridClass: "grid-cols-1 sm:grid-cols-2",
    cardClass:
      "bg-gradient-to-br from-[hsl(220_20%_16%)] to-[hsl(220_20%_12%)] border-[hsl(168_55%_32%/0.3)]",
  },
  gold: {
    label: "Gold Partners",
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    cardClass:
      "bg-gradient-to-br from-[hsl(40_30%_97%)] to-[hsl(40_20%_94%)] border-[hsl(40_40%_70%)]",
  },
  silver: {
    label: "Silver Partners",
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    cardClass: "bg-card border-border",
  },
  partner: {
    label: "Supporting Partners",
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    cardClass: "bg-muted/50 border-border",
  },
}

function SponsorCard({
  sponsor,
  tierClass,
  isPlatinum,
}: {
  sponsor: Sponsor
  tierClass: string
  isPlatinum: boolean
}) {
  const textColor = isPlatinum
    ? "text-[hsl(0_0%_100%/0.95)]"
    : "text-foreground"
  const mutedColor = isPlatinum
    ? "text-[hsl(0_0%_100%/0.6)]"
    : "text-muted-foreground"

  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:shadow-lg sm:p-8 ${tierClass}`}
    >
      {/* Logo placeholder */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl ${
          isPlatinum ? "bg-primary/20" : "bg-primary/10"
        }`}
      >
        <span className="text-xl font-bold text-primary">
          {sponsor.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className={`text-lg font-semibold sm:text-xl ${textColor}`}>
          {sponsor.name}
        </h3>
        <p className={`text-sm leading-relaxed ${mutedColor}`}>
          {sponsor.description}
        </p>
      </div>

      {/* Link */}
      {sponsor.website && sponsor.website !== "#" && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline`}
        >
          Visit website
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}

      {/* Decorative corner accent for platinum */}
      {isPlatinum && (
        <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-primary/10" />
      )}
    </div>
  )
}

export function SponsorGrid() {
  const tiers: SponsorTier[] = ["platinum", "gold", "silver", "partner"]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier)
          if (tierSponsors.length === 0) return null

          const config = tierConfig[tier]
          const isPlatinum = tier === "platinum"

          return (
            <div key={tier} className="mb-12 sm:mb-16 last:mb-0">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:mb-8">
                {config.label}
              </h2>
              <div className={`grid gap-4 sm:gap-6 ${config.gridClass}`}>
                {tierSponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.name}
                    sponsor={sponsor}
                    tierClass={config.cardClass}
                    isPlatinum={isPlatinum}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
