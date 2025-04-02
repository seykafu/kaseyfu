"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to the PM Hive Newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Join over 2,000 product managers receiving monthly updates. No spam, ever.
      </p>
    </form>
  )
}

