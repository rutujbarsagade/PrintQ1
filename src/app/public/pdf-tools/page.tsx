"use client"

import Link from "next/link"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { PublicFooter } from "@/components/layout/public-footer"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Combine, Crop, FileDown, FilePlus2, FileText, LockKeyhole, RotateCw, Scissors, ShieldCheck, Sparkles } from "lucide-react"

const tools = [
  { title: "Merge PDF", description: "Combine multiple PDF files into one document.", icon: Combine, href: "https://www.ilovepdf.com/merge_pdf" },
  { title: "Split PDF", description: "Extract pages or divide a PDF into separate files.", icon: Scissors, href: "https://www.ilovepdf.com/split_pdf" },
  { title: "Compress PDF", description: "Reduce PDF size for easier sharing and uploading.", icon: FileDown, href: "https://www.ilovepdf.com/compress_pdf" },
  { title: "Rotate PDF", description: "Turn pages to the correct orientation and save a copy.", icon: RotateCw, href: "https://www.ilovepdf.com/rotate_pdf" },
  { title: "Crop PDF", description: "Trim page margins and save the updated document.", icon: Crop, href: "https://www.ilovepdf.com/crop_pdf" },
  { title: "Convert to PDF", description: "Turn common documents and images into PDF files.", icon: FilePlus2, href: "https://www.ilovepdf.com/word_to_pdf" },
]

export default function PdfToolsPage() {
  return (
    <>
      <PublicNavbar />
      <main>
        <section className="border-b bg-gradient-to-b from-primary/[0.06] to-background px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><FileText className="h-6 w-6" /></div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">PDF workspace</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Get your document print-ready.</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">Choose a tool, make your change, then download the finished document and bring it back here to print.</p>
              <Link href="/customer/upload"><Button size="lg" className="mt-7 gap-2">Print a document <ArrowUpRight className="h-4 w-4" /></Button></Link>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <div><h2 className="text-2xl font-bold">Pick a PDF tool</h2><p className="mt-1 text-sm text-muted-foreground">Free document actions, all in one simple place.</p></div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground"><Sparkles className="h-3.5 w-3.5" /> No account needed to choose a tool</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map(({ title, description, icon: Icon, href }) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" /></div>
                  <h3 className="mt-5 font-semibold">{title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{description}</p>
                </a>
              ))}
            </div>
            <div className="mt-7 grid gap-3 rounded-2xl border bg-muted/30 p-5 text-sm text-muted-foreground sm:grid-cols-2">
              <p className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><span>PDF editing is handled by the selected external service. Review its privacy policy before uploading sensitive documents.</span></p>
              <p className="flex gap-2"><LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>When your edited file is ready, download it to your device. Then upload that copy to PrintQ for printing.</span></p>
            </div>
          </div>
        </section>
        <section className="border-t px-4 py-12">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 rounded-2xl bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:p-8">
            <div><h2 className="text-xl font-semibold">Document ready?</h2><p className="mt-1 text-sm text-primary-foreground/80">Upload it, choose print settings, then pay online or at the shop.</p></div>
            <Link href="/customer/upload"><Button variant="secondary" className="gap-2">Start printing <ArrowUpRight className="h-4 w-4" /></Button></Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
