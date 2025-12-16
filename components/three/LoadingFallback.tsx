"use client"

import { Html } from "@react-three/drei"

export function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 p-8 bg-primary/10 rounded-xl backdrop-blur-sm">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium text-foreground">Loading Daycare...</p>
      </div>
    </Html>
  )
}
