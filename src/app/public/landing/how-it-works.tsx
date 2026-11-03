"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "STEP 1",
    title: "Scan the kiosk QR",
    description:
      "Each QwikPrint vending machine has their very own unique QR — scan it using your mobile camera.",
    variant: "scan",
  },
  {
    step: "STEP 2",
    title: "Upload Your Document",
    description:
      "Choose your required document from phone, laptop, or Google Drive. No sign-up required.",
    variant: "upload",
  },
  {
    step: "STEP 3",
    title: "Set Print Preference",
    description:
      "Set number of copies, B&W or color, duplex/single-side & orientation for your preferred print settings.",
    variant: "settings",
  },
  {
    step: "STEP 4",
    title: "Get Your Print Instantly",
    description:
      "Enter the 4-digit OTP or scan the dynamic QR code to instantly receive your print.",
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
    const isFinder = finder1 || finder2 || finder3
    const isDark = isFinder || ((row + col + (row % 2)) % 3 === 0 && row > 2 && col > 2)

    return { dark: isDark }
  })

  return (
    <div className="grid grid-cols-7 gap-[2px] rounded-md bg-black/10 p-2">
      {cells.map((cell, index) => (
        <div
          key={index}
          className={`aspect-square rounded-[2px] ${cell.dark ? "bg-black" : "bg-white"}`}
        />
      ))}
    </div>
  )
}

function PhoneFrame({ variant, title }: { variant: string; title: string }) {
  const accent = variant === "done" ? "bg-[#f1f7f3]" : "bg-white"

  return (
    <div className="mx-auto mt-8 w-[260px] rounded-[2.2rem] border-[6px] border-[#1f1f1f] bg-[#111827] p-2 shadow-2xl">
      <div className="rounded-[1.7rem] border border-black/5 bg-[#f5f7f6] p-3">
        <div className="mb-3 flex items-center justify-between px-2 pt-1 text-[10px] text-black/70">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/80" />
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-black">
            <span className="text-lg font-black text-[#1e8d4f]">Qwikprint</span>
          </div>
          <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-black/70">
            Help
          </span>
        </div>

        {variant === "scan" && (
          <div className="space-y-4 rounded-xl bg-white p-3 shadow-sm">
            <div className="mx-auto w-full max-w-[180px] rounded-xl border border-black/10 bg-white p-3">
              <QrPattern />
            </div>
            <button className="w-full rounded-xl bg-[#22b15c] py-2.5 text-sm font-semibold text-white shadow-sm">
              Scan QR
            </button>
          </div>
        )}

        {variant === "upload" && (
          <div className="space-y-4 rounded-xl bg-white p-3 shadow-sm">
            <div className="rounded-2xl border-2 border-dashed border-[#22b15c]/70 bg-[#f5faf7] p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#22b15c] text-xl font-bold text-white">
                +
              </div>
              <div className="mt-3 text-sm font-medium text-[#1b7b4d]">Add files</div>
            </div>
            <div className="rounded-xl bg-[#f8faf8] p-2">
              <div className="flex items-center justify-between text-[10px] text-black/60">
                <span>Number of Copies</span>
                <span className="font-medium">0</span>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="flex-1 rounded-lg border border-black/10 bg-white px-2 py-1 text-center text-[10px] text-black/70">
                  B/W
                </div>
                <div className="flex-1 rounded-lg border border-black/10 bg-white px-2 py-1 text-center text-[10px] text-black/70">
                  Color
                </div>
              </div>
            </div>
            <button className="w-full rounded-xl bg-[#22b15c] py-2.5 text-sm font-semibold text-white shadow-sm">
              Upload
            </button>
          </div>
        )}

        {variant === "settings" && (
          <div className="space-y-4 rounded-xl bg-white p-3 shadow-sm">
            <div className="rounded-xl bg-[#f8faf8] p-3">
              <div className="mb-2 text-[10px] text-black/60">Number of Copies</div>
              <div className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-2 py-2 text-sm font-medium text-black">
                <span>0</span>
                <div className="flex gap-2">
                  <span className="h-5 w-5 rounded-full border border-black/15 bg-[#f2f2f2]" />
                  <span className="h-5 w-5 rounded-full border border-black/15 bg-[#f2f2f2]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center text-[10px] font-medium text-black/75">
                B/W
              </div>
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center text-[10px] font-medium text-black/75">
                Color
              </div>
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center text-[10px] font-medium text-black/75">
                Double-sided
              </div>
              <div className="rounded-lg border border-black/10 bg-white py-2 text-center text-[10px] font-medium text-black/75">
                Single-sided
              </div>
              <div className="col-span-2 rounded-lg border border-black/10 bg-white py-2 text-center text-[10px] font-medium text-black/75">
                Orientation
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#22b15c] py-2.5 text-sm font-semibold text-white shadow-sm">
              Apply
            </button>
          </div>
        )}

        {variant === "done" && (
          <div className={`${accent} rounded-xl border border-black/5 p-3 shadow-sm`}>
            <div className="mb-2 flex items-center justify-between text-[10px] text-black/60">
              <button className="text-xs font-medium">← Back</button>
              <span className="rounded-full bg-[#dff2e6] px-2 py-1 font-medium text-[#1d7c4b]">59:00</span>
            </div>
            <div className="text-center text-sm font-semibold text-black">Your Print Code is Ready!</div>
            <div className="mt-3 rounded-xl bg-white p-3">
              <QrPattern />
            </div>
            <button className="mt-4 w-full rounded-xl bg-[#22b15c] py-2.5 text-sm font-semibold text-white shadow-sm">
              Download
            </button>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="rounded-xl bg-white py-2 text-xs font-medium text-black shadow-sm">View OTP</button>
              <button className="rounded-xl bg-white py-2 text-xs font-medium text-black shadow-sm">Share</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function LandingHowItWorks() {
  return (
    <section className="bg-[#17b85a] px-4 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="flex flex-col rounded-[2rem] bg-[#17b85a] p-4 text-white"
            >
              <div className="mx-auto mb-5 inline-flex rounded-full bg-white px-6 py-2 text-sm font-bold text-[#1d7c4b] shadow-sm">
                {item.step}
              </div>

              <h3 className="mb-3 text-3xl font-bold leading-tight text-white">{item.title}</h3>
              <p className="mb-2 text-base leading-relaxed text-white/90">{item.description}</p>

              <PhoneFrame variant={item.variant} title={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
