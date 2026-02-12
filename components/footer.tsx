import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-[hsl(0_0%_100%/0.8)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                IFC
              </span>
              <span className="text-lg font-semibold text-[hsl(0_0%_100%/0.95)]">
                Innovate for Change
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[hsl(0_0%_100%/0.5)]">
              A platform for students to design practical solutions that support
              underprivileged communities and create lasting impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[hsl(0_0%_100%/0.35)]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-[hsl(0_0%_100%/0.5)] transition-colors hover:text-[hsl(0_0%_100%/0.9)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-2025" className="text-sm text-[hsl(0_0%_100%/0.5)] transition-colors hover:text-[hsl(0_0%_100%/0.9)]">
                  Case 2025
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm text-[hsl(0_0%_100%/0.5)] transition-colors hover:text-[hsl(0_0%_100%/0.9)]">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-[hsl(0_0%_100%/0.5)] transition-colors hover:text-[hsl(0_0%_100%/0.9)]">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[hsl(0_0%_100%/0.35)]">
              Get Involved
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-[hsl(0_0%_100%/0.5)]">
              If you are a passionate student who believes innovation should
              solve real problems, Innovate For Change is open to you.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[hsl(0_0%_100%/0.1)] pt-8 text-center sm:mt-16 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-[hsl(0_0%_100%/0.35)]">
            {"© 2025 Innovate for Change. All rights reserved."}
          </p>
          <p className="text-xs text-[hsl(0_0%_100%/0.35)]">
            Empowering youth-led innovation worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
