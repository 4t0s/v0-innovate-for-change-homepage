"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { peopleCategories, Person } from "@/lib/people-data"

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-xl sm:p-8">
      {/* Circular Photo */}
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
          {person.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {person.description}
        </p>

        {/* Instagram Link */}
        {person.url && person.nickname && (
          <a
            href={person.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
          >
            <Instagram className="h-4 w-4" />@{person.nickname}
          </a>
        )}
      </div>
    </div>
  )
}

function CategorySection({
  title,
  description,
  people,
  isAlternate,
}: {
  title: string
  description: string
  people: Person[]
  isAlternate: boolean
}) {
  return (
    <section className={isAlternate ? "bg-muted/50" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function PeopleGrid() {
  return (
    <>
      {peopleCategories.map((category, index) => (
        <CategorySection
          key={category.id}
          title={category.title}
          description={category.description}
          people={category.people}
          isAlternate={index % 2 === 1}
        />
      ))}
    </>
  )
}
