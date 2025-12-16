"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, Play, DollarSign } from "lucide-react"
import { useGameStore } from "@/lib/stores/gameStore"
import { DAYCARE_PAYWALL, processPayment, watchAdvertisement } from "@/lib/utils/paywall"

export function PaywallDialog() {
  const showPaywall = useGameStore((state) => state.showPaywall)
  const setShowPaywall = useGameStore((state) => state.setShowPaywall)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"payment" | "ad" | null>(null)

  const handlePayment = async () => {
    setIsProcessing(true)
    setPaymentMethod("payment")

    try {
      const success = await processPayment("user_demo")

      if (success) {
        setShowPaywall(false)
        // Would grant access to daycare creation
        console.log("[v0] Payment successful - daycare access granted")
      } else {
        console.error("[v0] Payment failed")
      }
    } catch (error) {
      console.error("[v0] Payment error:", error)
    } finally {
      setIsProcessing(false)
      setPaymentMethod(null)
    }
  }

  const handleWatchAd = async () => {
    setIsProcessing(true)
    setPaymentMethod("ad")

    try {
      const success = await watchAdvertisement()

      if (success) {
        setShowPaywall(false)
        // Would grant access to daycare creation
        console.log("[v0] Ad completed - daycare access granted")
      } else {
        console.error("[v0] Ad failed or was skipped")
      }
    } catch (error) {
      console.error("[v0] Ad error:", error)
    } finally {
      setIsProcessing(false)
      setPaymentMethod(null)
    }
  }

  return (
    <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Create Your Daycare</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose how you'd like to unlock daycare creation and start welcoming little ones
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          {/* Payment Option */}
          <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    One-Time Payment
                  </h3>
                  <p className="text-sm text-muted-foreground">Instant access, no ads</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${DAYCARE_PAYWALL.price}</div>
                  <div className="text-xs text-muted-foreground">One-time fee</div>
                </div>
              </div>

              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Lifetime access to daycare creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>No advertisements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Support development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Priority customer support</span>
                </li>
              </ul>

              <Button onClick={handlePayment} disabled={isProcessing} className="w-full bg-primary hover:bg-primary/90">
                {isProcessing && paymentMethod === "payment" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Purchase Now"
                )}
              </Button>
            </div>
          </Card>

          {/* Ad Option */}
          <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Play className="h-5 w-5 text-secondary" />
                    Watch Advertisement
                  </h3>
                  <p className="text-sm text-muted-foreground">Free access after watching</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">FREE</div>
                  <div className="text-xs text-muted-foreground">{DAYCARE_PAYWALL.adDuration}s ad</div>
                </div>
              </div>

              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Watch a {DAYCARE_PAYWALL.adDuration}-second advertisement</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Get {DAYCARE_PAYWALL.trialDays}-day trial access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>No payment required</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Can upgrade to premium anytime</span>
                </li>
              </ul>

              <Button onClick={handleWatchAd} disabled={isProcessing} variant="secondary" className="w-full">
                {isProcessing && paymentMethod === "ad" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading Ad...
                  </>
                ) : (
                  "Watch Ad & Start Trial"
                )}
              </Button>
            </div>
          </Card>

          <div className="text-center text-xs text-muted-foreground">
            <p>
              By proceeding, you agree to our Terms of Service and Privacy Policy.
              <br />
              Payment processed securely through Stripe.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
