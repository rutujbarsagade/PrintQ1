"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "STEP 1",
    title: "Scan your Xerox shop QR",
    description:
      "Scan the unique QR code displayed by your local print shop to open its order page.",
    variant: "scan",
  },
  {
    step: "STEP 2",
    title: "Upload your document",
    description:
      "Choose a PDF, document, or image from your phone or computer and send it to the selected shop.",
    variant: "upload",
  },
  {
    step: "STEP 3",
    title: "Choose print settings & payment",
    description:
      "Select copies, color, paper, and single- or double-sided printing. Pay online or choose cash at the shop.",
    variant: "settings",
  },
  {
    step: "STEP 4",
    title: "The shop prints your order",
    description:
      "The Xerox shop receives your order, confirms payment, and prints it. Track the status and collect when it is ready.",
    variant: "done",
  },
]

function QrPattern() {
  const cells = Array.from({ length: 49 }, (_, index) => {
    const row = Math.floor(index / 7)
    const col = index % 7
    const finder1 = row < 3 && col < 3
    const finder2 = row < 3 && col > 3
    const finder3 = row > 3 && col < 3
    const dark = finder1 || finder2 || finder3 || ((row + col + (row % 2)) % 3 === 0 && row > 2 && col > 2)
    return { dark }
  })

  return (
    <div aria-label="Illustrative QR code" className="grid grid-cols-7 gap-[2px] rounded-md bg-black/10 p-2">
      {cells.map((cell, index) => (
        <div key={index} className={`aspect-square rounded-[2px] ${cell.dark ? "bg-black" : "bg-white"}`} />
      ))}
    </div>
  )
}

function PhoneFrame({ variant }: { variant: string }) {
  return (
    <div className="mx-auto mt-8 w-full max-w-[260px] rounded-[2.2rem] border-[6px] border-[#1f1f1f] bg-[#111827] p-2 shadow-2xl">
      <div className="rounded-[1.7rem] border border-black/5 bg-[#f5f7f6] p-3">
        <div className="mb-3 flex items-center justify-between px-2 pt-1 text-[10px] text-black/70">
          <span>9:41</span>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
          </div>
        </div>
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="text-lg font-black text-[#1e8d4f]">PrintQ</span>
          <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-black/70">Help</span>
        </div>

        {variant === "scan" && (
          <div className="space-y-4 rounded-xl bg-white p-3 shadow-sm">
            <div className="text-center text-xs font-medium text-black">Welcome to City Xerox</div>
            <div className="mx-auto w-full max-w-[180px] rounded-xl border border-black/10 bg-white p-3"><QrPattern /></div>
            <p className="text-center text-[10px] text-black/60">Scan this shop QR to start your print order</p>
            <div className="rounded-xl bg-[#22b15c] py-2.5 text-center text-sm font-semibold text-white">Start printing</div>
          </div>
        )}

        {variant === "upload" && (
          <div className="space-y-4 rounded-xl bg-white p-3 shadow-sm">
            <div className="text-xs font-medium text-black">City Xerox · New order</div>
            <div className="rounded-2xl border-2 border-dashed border-[#22b15c]/70 bg-[#f5faf7] p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#22b15c] text-xl font-bold text-white">+</div>
              <div className="mt-3 text-sm font-medium text-[#1b7b4d]">Choose document</div>
              <div className="mt-1 text-[10px] text-black/50">PDF, DOCX, PNG or JPG</div>
            </div>
            <div className="rounded-lg bg-[#f8faf8] p-3 text-xs text-black/70">📄 assignment.pdf <span className="float-right">Remove</span></div>
            <div className="rounded-xl bg-[#22b15c] py-2.5 text-center text-sm font-semibold text-white">Continue</div>
          </div>
        )}

        {variant === "settings" && (
          <div className="space-y-3 rounded-xl bg-white p-3 shadow-sm">
            <div className="text-xs font-medium text-black">Print preferences</div>
            <div className="rounded-xl bg-[#f8faf8] p-3">
              <div className="mb-2 text-[10px] text-black/60">Copies</div>
              <div className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black">− <span className="mx-8">1</span> +</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-black/75">
              <div className="rounded-lg border border-[#22b15c] bg-[#f0fbf4] py-2 text-center">Black & white</div>
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center">Color</div>
              <div className="rounded-lg border border-[#22b15c] bg-[#f0fbf4] py-2 text-center">Single-sided</div>
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center">Double-sided</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-2 text-xs text-black">Payment <span className="float-right">Online or cash</span></div>
            <div className="rounded-xl bg-[#22b15c] py-2.5 text-center text-sm font-semibold text-white">Review order</div>
          </div>
        )}

        {variant === "done" && (
          <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f7ec] text-xl text-[#1e8d4f]">✓</div>
            <div className="text-center text-sm font-semibold text-black">Order sent to City Xerox</div>
            <div className="rounded-xl bg-[#f8faf8] p-3 text-xs text-black/70">
              <div className="flex justify-between"><span>Order</span><span className="font-medium text-black">PQ-1042</span></div>
              <div className="mt-2 flex justify-between"><span>Payment</span><span className="font-medium text-amber-700">Cash at shop</span></div>
              <div className="mt-2 flex justify-between"><span>Status</span><span className="font-medium text-amber-700">Awaiting shop</span></div>
            </div>
            <div className="rounded-xl bg-[#22b15c] py-2.5 text-center text-sm font-semibold text-white">Track order</div>
            <p className="text-center text-[10px] text-black/55">The shop will print after reviewing your order and payment.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function LandingHowItWorks() {
  return (
    <section className="bg-[#17b85a] px-4 py-10 lg:py-14" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="how-it-works-title" className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">How Xerox shop printing works</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="flex flex-col rounded-[2rem] bg-[#17b85a] p-4 text-center text-white"
            >
              <div className="mx-auto mb-5 inline-flex rounded-full bg-white px-6 py-2 text-sm font-bold text-[#1d7c4b] shadow-sm">{item.step}</div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-white">{item.title}</h3>
              <p className="mb-2 text-sm leading-relaxed text-white/90">{item.description}</p>
              <PhoneFrame variant={item.variant} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
