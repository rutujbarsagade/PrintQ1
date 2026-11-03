"use client"

import { motion } from "framer-motion"
import { Upload, Printer, Bell, CreditCard, QrCode } from "lucide-react"

const steps = [
  { icon: QrCode, title: "Scan the shop QR", description: "Open the shop’s print link from the counter, a message, or WhatsApp.", step: "01" },
  { icon: Upload, title: "Upload & choose", description: "Add your document and pick paper size, colour, sides, and copies.", step: "02" },
  { icon: CreditCard, title: "Choose payment", description: "Pay online now or choose cash at the shop. Cash orders wait for the shop to confirm payment.", step: "03" },
  { icon: Printer, title: "Shop prepares it", description: "The print shop reviews the order and moves it into the print queue when payment is confirmed.", step: "04" },
]

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="border-y bg-muted/30 px-4 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four easy steps. No counter queue.</h2>
          <p className="mt-4 text-muted-foreground">Place your order on your phone. The shop takes care of the rest.</p>
        </motion.div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><span className="text-sm font-semibold text-muted-foreground">{step.step}</span></div>
              <h3 className="mt-5 font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </motion.div>
          })}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground"><Bell className="h-4 w-4" /> Track order progress and know when your prints are ready.</p>
      </div>
    </section>
  )
}
