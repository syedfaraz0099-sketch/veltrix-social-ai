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
        content: `Create a 30 day social media content plan about ${topic}. 
        Each post must include:
        topic
        caption
        hashtags
        media idea`
      }
    ]
  })

  return Response.json({
    plan: completion.choices[0].message.content
  })

}
