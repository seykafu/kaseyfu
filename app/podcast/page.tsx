import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function PodcastPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#020930] text-white">
        <div className="container px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">The PM Hive Podcast</h1>
                <p className="max-w-[600px] md:text-xl">
                  A podcast featuring conversations with PMs, innovators, creators, and changemakers!
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Join me as I interview inspiring tech and PM professionals!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://open.spotify.com/show/0P6KLUdGR28tmOI7UlqF7p?si=7b9941e668ff4a9b"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Spotify
                  </Link>
                  <Link
                    href="https://www.youtube.com/@PMHive"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MfeYP6xXjgE?si=P5PiNgeRGusK6xrq" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Episodes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Listen to the most recent conversations on Dare To Dream
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Episode {i}: The Power of Persistence</CardTitle>
                    <CardDescription>Released on March {i}, 2023 • 45 minutes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-16 w-16 overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=64&width=64`}
                          alt={`Guest ${i}`}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Guest Name</p>
                        <p className="text-sm text-muted-foreground">CEO, Company Name</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      In this episode, we discuss the importance of persistence in achieving your goals and overcoming
                      obstacles.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" size="sm">
                      <Play className="mr-2 h-4 w-4" /> Listen Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Episodes
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Be a Guest</h2>
                <p className="text-muted-foreground md:text-xl">
                  Have a story to share? I'm always looking for inspiring guests.
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="mailto:podcast@kaseyfu.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact for Guest Opportunities
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

