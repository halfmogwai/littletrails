import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { text, voiceId, stability = 0.7, similarityBoost = 0.8, style = 0.3 } = await request.json()

    if (!text || !voiceId) {
      return NextResponse.json({ error: "Missing text or voiceId" }, { status: 400 })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY

    if (!apiKey) {
      console.error("ElevenLabs API key not configured")
      // Return empty audio buffer as fallback
      return new NextResponse(new ArrayBuffer(0), {
        headers: {
          "Content-Type": "audio/mpeg",
        },
      })
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability,
          similarity_boost: similarityBoost,
          style,
          use_speaker_boost: true,
        },
      }),
    })

    if (!response.ok) {
      console.error("ElevenLabs TTS error:", response.status)
      return new NextResponse(new ArrayBuffer(0), {
        status: response.status,
        headers: {
          "Content-Type": "audio/mpeg",
        },
      })
    }

    const audioData = await response.arrayBuffer()

    return new NextResponse(audioData, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    })
  } catch (error) {
    console.error("Speech synthesis error:", error)
    return NextResponse.json({ error: "Synthesis failed" }, { status: 500 })
  }
}
