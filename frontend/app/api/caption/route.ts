import { NextResponse } from "next/server"
import OpenAI from "openai"
import { supabase } from "../../../lib/supabase"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const body = await req.json()
    const topic = body.topic

    if (!topic) {
      return NextResponse.json({ error: "Topic missing" })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write an engaging Instagram caption about ${topic}`
        }
      ]
    })

    const caption = completion.choices[0].message.content

    await supabase
      .from("captions")
      .insert([{ caption }])

    return NextResponse.json({
      caption: caption
    })

  } catch (error) {

    console.log("API ERROR:", error)

    return NextResponse.json({
      error: "Failed to generate caption"
    })
  }

}
