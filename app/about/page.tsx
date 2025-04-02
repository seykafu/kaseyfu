import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import tajmahal from "@/assets/images/IMG_0087.jpg"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 p-8 rounded-lg">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Author, Product Manager, and Community Builder
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm Kasey Fu, a passionate product manager with a love for writing and building communities.
                    I've worked on Bing Platform products at Microsoft, and now lead AI products at Planview.
                  </p>
                  <p>
                    As an author, I've published 2 fiction novels. I also publish on Medium and run the PM Hive newsletter, writing articles on product management, leadership, and technology trends. My
                    writing has appeared in various publications and has helped thousands of aspiring product managers
                    navigate their careers.
                  </p>
                  <p>
                    In my role as a community builder, I founded the PM Hive, a community for product managers to share
                    knowledge, network, and grow professionally. Through this initiative, I've organized workshops,
                    webinars, and mentorship programs.
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src= { tajmahal}
                  alt="Kasey Fu"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Journey</h2>
                <p className="text-muted-foreground md:text-xl">
                  A timeline of my professional experience and key milestones
                </p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    year: "2022 - Present",
                    role: "Senior Product Manager",
                    company: "Tech Company",
                    description:
                      "Leading product strategy and development for a SaaS platform with over 100,000 users.",
                  },
                  {
                    year: "2020 - 2022",
                    role: "Product Manager",
                    company: "Startup Inc.",
                    description: "Launched three new products and grew user base by 200% in two years.",
                  },
                  {
                    year: "2018 - 2020",
                    role: "Associate Product Manager",
                    company: "Enterprise Solutions",
                    description: "Managed the product roadmap for a B2B solution used by Fortune 500 companies.",
                  },
                  {
                    year: "2016 - 2018",
                    role: "Product Analyst",
                    company: "Digital Agency",
                    description: "Conducted market research and user testing to inform product decisions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_3fr]">
                    <div>
                      <p className="font-semibold">{item.year}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground md:text-xl">
                  I'm always open to new opportunities and collaborations
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="mailto:contact@kaseyfu.com"
                  className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-8 text-center shadow-sm hover:bg-muted"
                >
                  <div className="text-xl font-bold">Email Me</div>
                  <p className="text-muted-foreground">contact@kaseyfu.com</p>
                </Link>
                <Link
                  href="https://linkedin.com/in/kaseyfu"
                  className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-8 text-center shadow-sm hover:bg-muted"
                >
                  <div className="text-xl font-bold">Connect on LinkedIn</div>
                  <p className="text-muted-foreground">linkedin.com/in/kaseyfu</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Kasey Fu. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Medium
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

