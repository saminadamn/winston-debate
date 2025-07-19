// lib/sarvam.ts

const SARVAM_API_KEY = process.env.SARVAM_API_KEY || "";

export async function generateSarvamSpeech(text: string): Promise<string> {
  const res = await fetch("https://api.sarvam.ai/v1/tts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${SARVAM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      voice: "female-neutral", // can be male/female, choose tone
      language: "en",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Sarvam TTS Error: " + err);
  }

  const data = await res.json();
  return data.audio_url; // Assuming API gives direct audio URL
}
