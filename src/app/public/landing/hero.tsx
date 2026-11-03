"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, MessageCircle, Printer, QrCode, Sparkles } from "lucide-react"
import Link from "next/link"
import { DemoModal } from "./demo-modal"

export function LandingHero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> Printing, without the back-and-forth
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Print it. Pick it up.
              <span className="mt-2 block text-primary">That simple.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Scan your shop’s QR code, upload a document, choose how it should look, and pay online or at the counter. Your local print shop takes it from there.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/customer/scan" className="w-full sm:w-auto">
                <Button size="xl" className="w-full gap-2 text-base">
                  <QrCode className="h-5 w-5" /> Scan a shop QR <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/customer/upload" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full gap-2 text-base">
                  <Printer className="h-5 w-5" /> Start a print order
                </Button>
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <Link href="/public/pdf-tools" className="inline-flex items-center gap-1.5 hover:text-primary"><FileText className="h-4 w-4" /> Free PDF tools</Link>
              <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-1.5 hover:text-primary"><MessageCircle className="h-4 w-4" /> See how it works</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border bg-card p-5 shadow-xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your print order</p>
                  <h2 className="mt-1 text-xl font-semibold">Ready in a few steps</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Printer className="h-5 w-5" /></div>
              </div>
              <div className="mt-7 space-y-5">
                {[
                  ["01", "Scan the shop QR", "Your order goes to the right local shop."],
                  ["02", "Upload & choose settings", "Pick paper, colour, copies and more."],
                  ["03", "Pay your way", "Pay online or at the counter."],
                  ["04", "Collect when it’s ready", "The shop confirms and prepares your prints."],
                ].map(([step, title, description], index) => (
                  <div key={step} className="flex gap-4">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{step}</div>
                    <div><p className="font-medium">{title}</p><p className="mt-0.5 text-sm text-muted-foreground">{description}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl bg-muted/50 p-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">No printer settings to figure out.</span> Your shop reviews the order and handles the printing.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  )
}
