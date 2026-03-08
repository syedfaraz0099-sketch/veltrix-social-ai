import { NextResponse } from "next/server"

export async function POST(req: Request) {

  try {

    const { topic } = await req.json()

    if (!topic) {
      return NextResponse.json({
        error: "Topic is required"
      })
    }

    const captions = [
      `Nature creates the most beautiful colors 🌿✨ ${topic} is where sustainability meets creativity. #naturaldye #sustainablefashion`,
      `Turning plants into pigments 🌱🎨 Discover the beauty of ${topic}. #plantdye #naturalfashion`,
      `Slow fashion starts with nature 🍃 ${topic} keeps tradition alive. #sustainability #textiledesign`
    ]

    const randomCaption =
      captions[Math.floor(Math.random() * captions.length)]

    return NextResponse.json({
      caption: randomCaption
    })

  } catch (error) {

    return NextResponse.json({
      error: "Failed to generate caption"
    })

  }

}
