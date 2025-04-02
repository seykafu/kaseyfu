"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center">
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60",
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
            )}
          >
            About
          </Link>
          <Link
            href="/podcast"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/podcast") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Podcast
          </Link>
          <Link
            href="https://linktr.ee/pmhive"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/podcast") ? "text-foreground" : "text-foreground/60",
            )}
          >
            PM Hive
          </Link>
        </div>
      </div>
    </header>
  )
}