export async function POST(req: Request) {
  const body = await req.json()

  const topic = body.topic

  const caption = `🔥 AI Caption for: ${topic}

Grow your brand with smart social media content.
#AI #SocialMedia #Marketing`

  return Response.json({
    caption
  })
}
