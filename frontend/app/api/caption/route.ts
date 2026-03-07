import OpenAI from "openai"

export async function POST(req: Request) {

  const body = await req.json()
  const topic = body.topic

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a social media marketing expert."
      },
      {
        role: "user",
        content: `Write a powerful Instagram caption about ${topic} with hashtags.`
      }
    ]
  })

  const caption = completion.choices[0].message.content

  return Response.json({
    caption
  })
}
