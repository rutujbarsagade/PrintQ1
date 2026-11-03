"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { QrCode, Download, Share2, Check, Copy, Loader2, Store, Key, MessageCircle } from "lucide-react"
import { getShopQrAction } from "@/lib/actions/qr.actions"

interface QrData {
  shopId: string
  shopName: string
  logo: string | null
  qrToken: string
  regeneratedAt: string
  status: string
}

export function QrDisplay() {
  const [data, setData] = useState<QrData | null>(null)
  const [loading, setLoading] = useState(true)
  const [qrDataUrl, setQrDataUrl] = useState("")
  const [copied, setCopied] = useState(false)

  const fetchQr = useCallback(async () => {
    const result = await getShopQrAction()
    if ("error" in result) { toast.error(result.error); setLoading(false); return }
    setData(result as unknown as QrData)
    setLoading(false)
  }, [])

  useEffect(() => { fetchQr() }, [fetchQr])

  const getScanUrl = () => `${window.location.origin}/customer/scan/${data?.qrToken}`

  useEffect(() => {
    if (!data?.qrToken) return
    import("qrcode").then((qr) => qr.toDataURL(`${window.location.origin}/customer/scan/${data.qrToken}`, {
      width: 400, margin: 2, color: { dark: "#1a1a2e", light: "#ffffff" },
    }).then(setQrDataUrl))
  }, [data?.qrToken])

  const handleDownload = () => {
    if (!qrDataUrl) return
    const link = document.createElement("a")
    link.download = `${data?.shopName || "shop"}-qr.png`
    link.href = qrDataUrl
    link.click()
    toast.success("QR code downloaded")
  }

  const handleCopyLink = async () => {
    if (!data?.qrToken) return
    await navigator.clipboard.writeText(getScanUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success("Order link copied")
  }

  const handleWhatsAppShare = () => {
    if (!data?.qrToken) return
    const message = `Order prints from ${data.shopName} online: ${getScanUrl()}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  if (loading) return <Card><CardHeader><CardTitle className="flex items-center gap-2"><QrCode className="h-5 w-5 text-primary" /> Shop QR Code</CardTitle></CardHeader><CardContent><div className="flex items-center justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div></CardContent></Card>

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><QrCode className="h-5 w-5 text-primary" /> Shop order link</CardTitle></CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-5">
            <div className="rounded-2xl border-2 border-primary/20 bg-white p-3 shadow-sm">
              {qrDataUrl ? <img src={qrDataUrl} alt={`${data?.shopName} order QR code`} className="h-48 w-48 object-contain" /> : <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-muted"><QrCode className="h-12 w-12 text-muted-foreground" /></div>}
            </div>
            <div className="text-center"><h3 className="flex items-center justify-center gap-2 text-lg font-semibold"><Store className="h-4 w-4 text-primary" />{data?.shopName}</h3><p className="mt-1 text-sm text-muted-foreground">Customers scan this code to start their print order.</p></div>
            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
              <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2"><Download className="h-4 w-4" /> Download QR</Button>
              <Button variant="outline" size="sm" onClick={handleCopyLink} className="gap-2">{copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}{copied ? "Copied" : "Copy link"}</Button>
              <Button variant="outline" size="sm" onClick={handleWhatsAppShare} className="gap-2"><MessageCircle className="h-4 w-4 text-emerald-600" /> Share WhatsApp</Button>
              <Button variant="outline" size="sm" onClick={() => { const url = getScanUrl(); if (navigator.share) void navigator.share({ title: `${data?.shopName} — PrintQ`, url }); else void handleCopyLink() }} className="gap-2"><Share2 className="h-4 w-4" /> Share link</Button>
              <Button variant="ghost" size="sm" onClick={() => { void navigator.clipboard.writeText(data?.qrToken || ""); toast.success("QR token copied") }} className="col-span-2 gap-2 sm:col-span-1"><Key className="h-4 w-4" /> Copy token</Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">Put this QR at your counter or send the order link on WhatsApp.</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
