import OpenAI from "openai"

export async function POST(req: Request) {
  try {
    const { topic } = await req.json()

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: `Write a powerful Instagram caption about ${topic} with emojis and hashtags.`
    })

    return Response.json({
      caption: response.output_text
    })

  } catch (error) {
    console.error("AI ERROR:", error)

    return Response.json({
      caption: "AI service error. Check API key or billing."
    })
  }
}
