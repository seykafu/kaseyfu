import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { NewsletterForm } from "@/components/newsletter-form"
import cherryblossoms from "@/assets/images/cherryblossoms.jpeg"
import corruptions from "@/assets/images/corruptions.png"
import dmcy from "@/assets/images/dmcy.png"
import comingsoon from "@/assets/images/coming soon.png"
import vtw from "@/assets/images/vtw.jpg"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Kasey Fu
                  </h1>
                  <p className="text-muted-foreground md:text-xl">Author, Product Manager, and Community Builder</p>
                  <p className="text-muted-foreground">
                    I build software products and help young adults reduce their career anxiety. I also like to write fiction and non-fiction books!
                    Check out <a href="https://www.amazon.com/dp/B0BJZXKMM9" className="text-primary underline">Darkness Me, Colorful You (2022)</a> or my upcoming non-fiction book, <a href="https://example.com/dare-to-dream" className="text-primary underline">Dare To Dream (2025)</a>.
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:flex-shrink-0">
                <div className="relative w-[280px] h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl transform rotate-3"></div>
                  <Image
                    src={cherryblossoms}
                    alt="Kasey Fu"
                    width={400}
                    height={400}
                    className="absolute inset-2 object-cover rounded-tl-[90px] rounded-br-[90px] rounded-tr-2xl rounded-bl-2xl transform -rotate-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Writing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore my publications, books, and other written works.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                    <Image
                      src={ comingsoon }
                      alt='coming soon'
                      fill
                      className="object-cover"
                    />
              </div>
                <CardHeader>
                  <CardTitle>Dare To Dream</CardTitle>
                  <CardDescription>Non-Fiction • Coming 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  The ultimate, practical guide to eliminate all your career anxiety. Become a passion superstar.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                    Pre-order Soon <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                    <Image
                      src={ vtw }
                      alt='vtw'
                      fill
                      className="object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle>PM Hive</CardTitle>
                  <CardDescription>Articles on Product Management & Productivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Check out my product, technology, and productivity articles for PM Hive!
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://medium.com/@kaseyfu"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read Articles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                    <Image
                      src={ dmcy }
                      alt='dmcy'
                      fill
                      className="object-cover"
                    />
                  </div>
                <CardHeader>
                  <CardTitle>Darkness Me, Colorful You</CardTitle>
                  <CardDescription>Fiction (Fantasy, Mystery) • Published 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Follow Koka as he re-discovers his dark past and redeems himself against the mythical beast!
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={ corruptions }
                      alt='corruptions'
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Corruptions in the Autumn!</CardTitle>
                    <CardDescription>Fiction (Comedy, Romance) • Published 2023</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p> Kai has a $30 million in debt, can he find the love of his life from a local coffee shop? </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.amazon.com/dp/B0BJ2H2N7K" className="inline-flex items-center text-sm font-medium text-primary">
                      Check it out! <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

            </div>
            {/* 
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Articles
              </Link>
            </div>
            */}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product Management Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Showcasing my work as a product manager across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-60 w-full">
                    <Image
                      src={`/placeholder.svg?height=240&width=500`}
                      alt={`Project ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>Company • Role • Year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>A description of the project, my role, and the impact it had on the business.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">PM Hive Newsletter</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join my newsletter for product management events, resources, and articles!
                </p>
              </div>
              <div className="w-full max-w-md">
                <NewsletterForm />
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
            <Link href="https://x.com/seykafu" className="text-sm text-muted-foreground hover:underline">
              Twitter
            </Link>
            <Link href="https://linkedin.com/in/kaseyfu" className="text-sm text-muted-foreground hover:underline">
              LinkedIn
            </Link>
            <Link href="https://seykafu.medium.com" className="text-sm text-muted-foreground hover:underline">
              Medium
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

