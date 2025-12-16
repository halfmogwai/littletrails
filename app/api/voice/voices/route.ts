import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY

    if (!apiKey) {
      console.error("ElevenLabs API key not configured")
      return NextResponse.json([])
    }

    const response = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: {
        "xi-api-key": apiKey,
      },
    })

    if (!response.ok) {
      console.error("Failed to fetch voices:", response.status)
      return NextResponse.json([])
    }

    const data = await response.json()

    const voices = data.voices.map((voice: any) => ({
      provider: "elevenlabs",
      voiceId: voice.voice_id,
      name: voice.name,
      pitch: 1.0,
      speed: 1.0,
      emotion: "neutral",
      recognitionProvider: "openai",
      synthesisProvider: "elevenlabs",
    }))

    return NextResponse.json(voices)
  } catch (error) {
    console.error("Failed to fetch voices:", error)
    return NextResponse.json([])
  }
}
