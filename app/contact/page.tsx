import { Metadata } from "next"
import { Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Innovate for Change",
  description:
    "Get in touch with Innovate for Change. We'd love to hear from passionate students, partners, and educators.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-background sm:text-4xl md:text-5xl text-balance">
            We&apos;d Love to{" "}
            <span className="font-serif text-primary">Hear From You</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[hsl(0_0%_100%/0.6)] sm:text-base">
            Whether you&apos;re a student with a bold idea, an educator looking
            to collaborate, or a partner ready to create impact — reach out.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Email Us
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For general inquiries and partnership opportunities.
              </p>
              <a
                href="mailto:innovate4change.kz@gmail.com"
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                innovate4change.kz@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Based In
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our headquarters and primary operations.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                Astana, Kazakhstan
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center sm:col-span-2 sm:p-8 lg:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Follow Along
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Stay updated on programs and impact stories.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://instagram.com/innovate4change"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Instagram
                </a>z
              </div>
            </div>
          </div>

          {/* Contact Form */}
          

            
          
        </div>
      </section>
    </>
  )
}
