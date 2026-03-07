import OpenAI from "openai"

export async function POST(req: Request) {

  const { topic } = await req.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a social media strategist."
      },
      {
        role: "user",
        content: `Write a powerful Instagram caption about ${topic} with emojis and hashtags`
      }
    ]
  })

  return Response.json({
    caption: completion.choices[0].message.content
  })
}
