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
  name: "Assel Amangeldi",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711684_x.jpg",
  description: "Harvard University graduate and finalist of both the HBS Crossroads Emerging Leaders Program and the HBS New Venture Competition. International judge at UCL and the Stockholm School of Economics, as well as a speaker at ISWI and the Greifswald International Festival. Experienced English educator with over 8 years of teaching expertise.",
  url: "https://www.instagram.com/asselya.a/",
  nickname: "asselya.a",
},
{
  id: 2,
  name: "Gulmira Parmisheva",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711686_x.jpg",
  description: "Founder of Kishkentai - creates eco-friendly educational toys for children and resources for special educators. President of the Association of Social Innovators - promotes inclusion and social innovation in Kazakhstan. Co-founder of the Association for the Development of an Inclusive Society.",
  url: "https://www.instagram.com/gulmira_parmysheva/",
  nickname: "gulmira_parmysheva",
},
{
  id: 3,
  name: "Nuriya Baltabaikyzy",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711690_x.jpg",
  description: "Founder of Autism Kazakhstan National Association. Constitutor of the AINAR Public Foundation for the Support of Children with Autism. Authorized representative of the Republic of Kazakhstan in the Autism Federation of Turkic countries.",
  url: "https://www.instagram.com/nuriya.baltabaikyzy/",
  nickname: "nuriya.baltabaikyzy",
},
{
  id: 4,
  name: "Ayash Makenova",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711692_x.jpg",
  description: "Founder and Head of the Public Fund Bakytty Bala. National Consultant of the UNICEF Children’s Fund for the Development of the Institute of Children’s Rights Commissioners in Kazakhstan. Was Deputy Director of the territorial department for the protection of children’s rights of the Pavlodar region of the Committee for the Protection of Children’s Rights.",
  url: "https://www.instagram.com/of_bakytty_bala/",
  nickname: "of_bakytty_bala",
},
{
  id: 5,
  name: "Alua Nadirkulova",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711694_x.jpg",
  description: "Ambassador-at-Large of the Ministry of the Foreign Affairs of the Republic of Kazakhstan. Was awarded the prestigious Medal “For Contribution in the Development of Justice Bodies”. In 2022, was appointed as the Deputy Head of the National Center for Human Rights.",
  url: "",
  nickname: "",
},
{
  id: 6,
  name: "Azamat Bakhytbekuly",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711696_x.jpg",
  description: "Pedagogue-Psychologist and Master of Pedagogical Sciences, specializing in child development and behavioral analysis. Director of the Bala Inclusive Rehabilitation Center, supporting children with special needs through evidence-based behavioral therapy. Founder and Host of Zhuzim Podcast.",
  url: "https://www.instagram.com/aba_azamat/",
  nickname: "aba_azamat",
},
{
  id: 7,
  name: "Altynshash Mataeva",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711697_x.jpg",
  description: "Crisis psychologist specializing in emotional stabilization and personal recovery. Expert in chemical and non-chemical dependency counseling. Works with clients experiencing existential crises and deep life transitions.",
  url: "https://www.instagram.com/altynshash_psy/",
  nickname: "altynshash_psy",
},
{
  id: 8,
  name: "Asiya Kalibekovna",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711703_w.jpg",
  description: "Family and child psychologist specializing in emotional and behavioral development. Tomatis therapist helping improve focus, speech, and communication through sound stimulation. Psychologist at the Balam-ai Foundation, supporting children and families in psychological adaptation.",
  url: "https://www.instagram.com/balam_ai/",
  nickname: "balam_ai",
},
{
  id: 9,
  name: "Talgat Zholdymuratovich",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711704_x.jpg",
  description: "Chief Innovation Officer at AIFC Authority. Held the position of Chairman of the Board of JSC National Company Kazakh Tourism. Possesses experience in project management, startup development, investment projects, and government relations.",
  url: "https://www.instagram.com/aifckz/",
  nickname: "aifckz",
},
{
  id: 10,
  name: "Madiyar Abil",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711705_x.jpg",
  description: "Deputy Chairman of the Board at the National Agency for the Development of Innovations Qazinnovations. Actively promotes innovation and entrepreneurship in Kazakhstan. Focused on strengthening the national innovation infrastructure and supporting emerging projects.",
  url: "https://www.instagram.com/qazinnovations/",
  nickname: "qazinnovations",
},
{
  id: 11,
  name: "Maksat Akparov",
  image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711706_x.jpg",
  description: "Digital marketer and entrepreneur with 10+ years of experience. Expert in applying artificial intelligence to marketing, automation, and business processes. Co-organizer of AI education programs for business and the public sector, and a frequent speaker at professional forums and workshops.",
  url: "",
  nickname: "",
}
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    description: "Dedicated professionals guiding our participants through their innovation journey.",
    people: 
    [
  {
    id: 1,
    name: "Kuldraikhan Kanybekovna",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375160_y.jpg",
    description: "Curator of “Orda Autism” Centers, leading programs that provide individualized education and therapy for children with autism. Developer of Personalized Methods, creating tailored learning and behavioral strategies for each child's needs. Educational Psychologist in “ODI astana”.",
    url: "https://www.instagram.com/orda_autism/",
    nickname: "orda_autism",
  },
  {
    id: 2,
    name: "Gulbanu Sapargaliyevna",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375161_y.jpg",
    description: "Behavioral Analyst and Certified FTF Specialist, using evidence-based therapy to enhance communication, social, and adaptive skills. Founder of Tamshylar Network of Abilitation Centers, with 11+ years of experience supporting children with developmental differences. Mother of a teenager with Autism Spectrum Disorder.",
    url: "https://www.instagram.com/gulbanu_sapargali/",
    nickname: "gulbanu_sapargali",
  },
  {
    id: 3,
    name: "Dina Zakirova",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375165_y.jpg",
    description: "Certified Speech and Language Therapist with a Master's in Pedagogical Sciences, focused on inclusive and early childhood education. Founder of Aqniet Psychological and Speech Therapy Center, providing psychological and speech therapy services for children with developmental and communication challenges. Social Entrepreneur and Mother of Two Special Children.",
    url: "https://www.instagram.com/aqniet_center/",
    nickname: "aqniet_center",
  },
  {
    id: 4,
    name: "Adema Dyusseimbekova",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375159_y.jpg",
    description: "Licensed and Certified Psychologist specializing in psychological diagnostics, therapy, and emotional well-being. 7 years of experience in the field of inclusive education, working with children of diverse learning needs and supporting the development of inclusive practices. ABA specialist focusing on behavior analysis.",
    url: "",
    nickname: "",
  },
  {
    id: 5,
    name: "Azamat Bakhytbekuly",
    image: "https://storage.yandexcloud.kz/ifc-media/speakers/photo_5211137808435711696_x.jpg",
    description: "Pedagogue-Psychologist and Master of Pedagogical Sciences, specializing in child development and behavioral analysis. Director of the “Bala” Inclusive Rehabilitation Center, supporting children with special needs through evidence-based behavioral therapy. Founder and Host of “Zhuzim Podcast”.",
    url: "https://www.instagram.com/aba_azamat/",
    nickname: "aba_azamat",
  },
  {
    id: 6,
    name: "Makhabbat Kassymkhanova",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375163_y.jpg",
    description: "Deputy Head of the Bala Correctional Center for Organizational Affairs, responsible for ensuring effective implementation of educational and therapeutic services for children with developmental and behavioral challenges. Behavioral Specialist providing support and guidance for children's developmental and behavioral needs.",
    url: "",
    nickname: "",
  },
  {
    id: 7,
    name: "Laura Asylbekovna",
    image: "https://storage.yandexcloud.kz/ifc-media/mentors/photo_5244698588397375166_y.jpg",
    description: "Speech and Language Therapist (Defectologist) with 15 years of experience working with children with special needs. Passionate advocate for inclusion, dedicated to helping every child reach their potential through empathy and evidence-based support. Master of Pedagogical Sciences in Defectology, specializing in speech development and inclusive education.",
    url: "",
    nickname: "",
  }
]
  },
  {
    id: "judges",
    title: "Judges",
    description: "Expert evaluators who assess and provide feedback on student innovations.",
    people: [
  {
    id: 1,
    name: "Angela Aitbayeva",
    image: "https://storage.yandexcloud.kz/ifc-media/judges/photo_5244698588397375153_y.jpg",
    description: "Founder and General Director of 'Clover Foundation' Public Fund. Expert in Inclusive Education and Social Equality. Initiator of Kazakhstan's first national competition for inclusive education teachers, promoting inclusive practices in the country's education system.",
    url: "https://www.instagram.com/cloversf.kz/",
    nickname: "cloversf.kz",
  },
  {
    id: 2,
    name: "Jonathan Ferreira",
    image: "https://storage.yandexcloud.kz/ifc-media/judges/photo_5244698588397375154_y.jpg",
    description: "Over 20 years of experience in Design Industries, now consulting globally on best practices in Design Education. Brings over 20 years of leadership experience in top schools across the UK and internationally, inspiring excellence and growth in education. Principal of Spectrum International School.",
    url: "https://www.instagram.com/principal.jonathan/",
    nickname: "principal.jonathan",
  },
  {
    id: 3,
    name: "Akhmetzhanova Altynay",
    image: "https://storage.yandexcloud.kz/ifc-media/judges/photo_5244698588397375155_y.jpg",
    description: "Psychologist and Behavioral Analyst (MS), specializes in understanding and improving human behavior. Co-founder of the social project Juzim - dedicated to promoting awareness, inclusion, and emotional well-being in society.",
    url: "https://www.instagram.com/drc.bala/",
    nickname: "drc.bala",
  },
  {
    id: 4,
    name: "Danara Zholamanova",
    image: "https://storage.yandexcloud.kz/ifc-media/judges/photo_5244698588397375152_x.jpg",
    description: "Founder and CEO of Spectrum United Now Foundation. Holds a Doctorate in Holistic Naturopathy (Toronto, Canada) and professional certification in Applied Behavior Analysis (Brandman University, USA). Over 8 years of experience in holistic and behavioral therapy for children with autism.",
    url: "https://www.instagram.com/spectrum.astana/",
    nickname: "spectrum.astana",
  }
]
  },
  {
    id: "partners",
    title: "Partners",
    description: "Organizations collaborating with us to expand our reach and impact.",
    people: [
      {
        id: 1,
        name: "Spectrum School",
        description: "Leading international school committed to fostering inclusive education and empowering students to reach their full potential.",
        image: "https://storage.yandexcloud.kz/ifc-media/partners/spectrum.png",
        url: "https://spectrum.edu.kz/",
      },
      {
        id: 2,
        name: "Balam AI",
        description: "Innovative technology company specializing in AI solutions to enhance educational experiences and accessibility for all learners.",
        image: "https://storage.yandexcloud.kz/ifc-media/partners/balamai.jpg",
        url: "https://www.instagram.com/balam_ai/",
      },
    ],
  },
  {
    id: "sponsors",
    title: "Sponsors",
    description: "Generous supporters who make our programs possible.",
    people: [
      {
      id: 1,
      name: "Impact",
      description: "Leading educational institution providing comprehensive support and resources for students to achieve their academic and personal goals.",
      image: "https://storage.yandexcloud.kz/ifc-media/sponsors/impact.png",
      url: "https://admissions.kz/",
      },
      {
      id: 2,
      name: "A group development",
      description: "Prominent real estate development company dedicated to creating innovative and sustainable living spaces that enhance the quality of life for communities.",
      image: "https://storage.yandexcloud.kz/ifc-media/sponsors/a-group-development.png",
      url: "https://www.instagram.com/a_group_development/",
      },
    ],
  },
  {
    id: "guests",
    title: "Guests",
    description: "Distinguished visitors who contribute to our events and programs.",
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
]
