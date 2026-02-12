"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-2025", label: "Case 2025" },
  { href: "/achievements", label: "Achievements" },
  { href: "/news", label: "News" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-[hsl(0_0%_100%/0.1)] bg-[hsl(220_20%_12%/0.7)] px-4 py-2.5 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            IFC
          </span>
          <span className="hidden text-sm font-medium text-[hsl(0_0%_100%/0.9)] sm:inline">
            Innovate for Change
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[hsl(0_0%_100%/0.7)] transition-colors hover:text-[hsl(0_0%_100%/1)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/case-2025"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Explore 2025
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-[hsl(0_0%_100%/0.8)] transition-colors hover:bg-[hsl(0_0%_100%/0.1)] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-4 right-4 top-[4.5rem] rounded-2xl border border-[hsl(0_0%_100%/0.1)] bg-[hsl(220_20%_12%/0.95)] px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-[hsl(0_0%_100%/0.8)] transition-colors hover:text-[hsl(0_0%_100%/1)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/case-2025"
            className="mt-4 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Explore 2025
          </Link>
        </div>
      )}
    </header>
  )
}
