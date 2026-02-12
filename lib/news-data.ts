export interface NewsArticle {
  slug: string
  title: string
  date: string
  summary: string
  tag: string
  content: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "honoring-teachers-sparking-ideas",
    title: "Honoring Teachers, Sparking Ideas",
    date: "17 Dec 2025",
    summary:
      "Shared our 2025 program insights and showed how student-led innovation can bring inclusive solutions directly into classrooms.",
    tag: "Forums & Professional Engagement",
    content: [
      "On 17 December 2025, educators, researchers, parents, and school leaders from across Kazakhstan gathered not just to honor excellence, but to explore practical ways to strengthen inclusive education.",
      "At the event, the Innovate For Change team presented our 2025 program, demonstrating how student-led initiatives can bring inclusive, hands-on learning directly into classrooms. Discussions explored key topics shaping the future of education: digitalization and AI in learning, supporting neurodiverse students, modern behavioral approaches, and real-life case studies from schools nationwide.",
      "This forum created a space for exchanging experiences, tools, and inspiring stories, empowering teachers to go beyond celebration and implement meaningful, practical innovations in their schools.",
    ],
  },
  {
    slug: "making-kazakhstan-child-friendly",
    title: "Making Kazakhstan Child-Friendly",
    date: "20 Nov 2025",
    summary:
      "Discussed empowering children, amplifying their voices in decisions, and applying international best practices in local schools.",
    tag: "Forums & Professional Engagement",
    content: [
      'On 20 November 2025, the "Kazakhstan, Child-Friendly!" conference brought together government representatives, NGOs, international experts, and children themselves to mark World Children\'s Day. Organized by UNICEF, the Ministry of Foreign Affairs, Bakytty Bala, the Science & Law Institute, and CDJI, the forum focused on strengthening children\'s rights, expanding their participation in decision-making, and applying international best practices locally.',
      "The Innovate For Change team shared our 2025 program, showcasing how youth-led, empathy-driven initiatives can create real opportunities for children and enhance inclusive education across schools. Panel discussions featured Judge Renata Winter, Honorary President of CDJI, and Pauline McCabe, Deputy Chair of CDJI Board, alongside local and international experts.",
      "The conference reinforced the importance of listening to children, designing practical solutions, and connecting youth innovation with policymaking to build a more inclusive and child-friendly society.",
    ],
  },
  {
    slug: "driving-social-change-together",
    title: "Driving Social Change Together",
    date: "14 Aug 2025",
    summary:
      "Brought civil society leaders, experts, and advocates together to explore advancing children's rights and creating lasting community impact.",
    tag: "Forums & Professional Engagement",
    content: [
      "On 14 August 2025, the Bakytty Bala Forum convened civil society leaders, experts, and advocates for a dialogue on children's rights, social work, and systemic change. Co-organized with the National Alliance of Professional Social Workers, the Ministry of Foreign Affairs, and the Unified Grant Operator, the forum offered a platform to discuss international standards, civil society development, and advocacy strategies.",
      "Our team highlighted the 2025 Innovate For Change program, showing how youth-led projects can complement professional social work, empower communities, and create lasting impact for children. Conversations centered on implementing international best practices, strengthening institutional support, and scaling advocacy initiatives.",
    ],
  },
]

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug)
}
