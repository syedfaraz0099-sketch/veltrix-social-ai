import OpenAI from "openai"

export async function POST(req: Request) {
  try {

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
          content: `Write an engaging Instagram caption about ${topic} with emojis and hashtags.`
        }
      ]
    })

    return Response.json({
      caption: completion.choices[0].message.content
    })

  } catch (error) {

    console.error(error)

    return Response.json({
      caption: "Error generating caption"
    })
  }
}
