import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get("audio") as Blob

    if (!audioFile) {
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY

    if (!apiKey) {
      console.error("ElevenLabs API key not configured")
      return NextResponse.json({ text: "Speech transcription unavailable", confidence: 0 }, { status: 200 })
    }

    const whisperFormData = new FormData()
    whisperFormData.append("file", audioFile, "audio.wav")
    whisperFormData.append("model", "whisper-1")
    whisperFormData.append("language", "en")

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: whisperFormData,
    })

    if (!response.ok) {
      console.error("OpenAI Whisper error:", response.status)
      return NextResponse.json({ text: "Transcription failed", confidence: 0 }, { status: response.status })
    }

    const result = await response.json()

    return NextResponse.json({
      text: result.text || "",
      confidence: 0.9,
      language: "en",
      duration: 0,
    })
  } catch (error) {
    console.error("Transcription error:", error)
    return NextResponse.json({ error: "Transcription failed" }, { status: 500 })
  }
}
