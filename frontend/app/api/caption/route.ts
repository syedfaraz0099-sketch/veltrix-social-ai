export async function POST(req: Request) {
  const { topic } = await req.json()

  const caption = `
🌿 ${topic} is where creativity meets sustainability.

Bring natural beauty into your feed with timeless inspiration.

#Indigo #NaturalDye #SustainableFashion #EcoTextiles
`

  return Response.json({
    caption: caption
  })
}
