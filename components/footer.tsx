import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold font-serif">IFC</span>
            <p className="max-w-xs text-sm leading-relaxed opacity-70">
              Innovate for Change provides students with a platform to design
              practical solutions that support underprivileged communities.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-2025" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Case 2025
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50">
              Get Involved
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              If you are a passionate student who believes innovation should
              solve real problems, Innovate For Change is open to you.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            {'© 2025 Innovate for Change. All rights reserved.'}
          </p>
          <p className="text-xs opacity-50">
            Empowering youth-led innovation worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
