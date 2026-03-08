import { NextResponse } from "next/server"
import OpenAI from "openai"
import { supabase } from "@/lib/supabase"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  try {

    const { topic } = await req.json()

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
      caption
    })

  } catch (error) {

    return NextResponse.json({
      error: "Failed to generate caption"
    })

  }

}
