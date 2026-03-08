import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {

  try {

    const body = await req.json()
    const topic = body.topic

    if (!topic) {
      return NextResponse.json({
        error: "Topic is required"
      })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `Write an engaging Instagram caption about ${topic}. Include emojis and hashtags.`,
        },
      ],
    })

    const caption = completion.choices[0].message.content

    return NextResponse.json({
      caption: caption
    })

  } catch (error: any) {

    console.log("OPENAI ERROR:", error)

    return NextResponse.json({
      error: error.message || "OpenAI request failed"
    })

  }

}
