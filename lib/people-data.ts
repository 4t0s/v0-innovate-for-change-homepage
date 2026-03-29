export interface Person {
  id: number
  name: string
  image: string
  description: string
  url?: string
  nickname?: string
}

export interface PeopleCategory {
  id: string
  title: string
  description: string
  people: Person[]
}

export const peopleCategories: PeopleCategory[] = [
  {
    id: "speakers",
    title: "Speakers",
    description: "Inspiring voices who share their knowledge and experience with our community.",
    people: [
      {
        id: 1,
        name: "Saya Kidirali",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps86LDu9xBqe0eF97a7xE1zRN9rAIEcJJug&s",
        description: "World's youngest record holder with an IELTS 9.0. Founder of Saya Education. Mentor and educator to thousands of successful IELTS candidates.",
        url: "https://instagram.com/saya.kidirali",
        nickname: "saya.kidirali",
      },
      {
        id: 2,
        name: "Assel Amangeldi",
        image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711684_x.jpg",
        description: "Finalist of Harvard's New Venture Competition & Crossroads Emerging Leaders Program. Harvard University graduate. International judge at UCL & Stockholm School of Economics. Speaker at ISWI & Greifswald Festival. Founder of an English school with 8+ years of experience.",
        url: "https://www.instagram.com/asselya.a",
        nickname: "asselya.a",
      },
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    description: "Dedicated professionals guiding our participants through their innovation journey.",
    people: [
      {
        id: 3,
        name: "Program Mentor",
        image: "/images/people/mentor-1.jpg",
        description: "Experienced educator and innovation coach helping students develop impactful solutions for inclusive education.",
      },
    ],
  },
  {
    id: "judges",
    title: "Judges",
    description: "Expert evaluators who assess and provide feedback on student innovations.",
    people: [
      {
        id: 4,
        name: "Panel Judge",
        image: "/images/people/judge-1.jpg",
        description: "Industry expert with extensive experience in social entrepreneurship and educational technology.",
      },
    ],
  },
  {
    id: "partners",
    title: "Partners",
    description: "Organizations collaborating with us to expand our reach and impact.",
    people: [
      {
        id: 5,
        name: "Partner Representative",
        image: "/images/people/partner-1.jpg",
        description: "Strategic partner supporting our mission to create inclusive educational opportunities for all children.",
      },
    ],
  },
  {
    id: "sponsors",
    title: "Sponsors",
    description: "Generous supporters who make our programs possible.",
    people: [
      {
        id: 6,
        name: "Sponsor Representative",
        image: "/images/people/sponsor-1.jpg",
        description: "Committed to advancing youth innovation and inclusive education initiatives.",
      },
    ],
  },
  {
    id: "guests",
    title: "Guests",
    description: "Distinguished visitors who contribute to our events and programs.",
    people: [
      {
        id: 7,
        name: "Special Guest",
        image: "/images/people/guest-1.jpg",
        description: "Advocate for children's rights and inclusive education policy.",
      },
    ],
  },
]
