export async function POST(req: Request) {

  const { topic } = await req.json()

  const fakeCaption = `
🌿 ${topic} is where creativity meets sustainability.

Bring natural beauty into your feed with timeless inspiration.

#Indigo #NaturalDye #SustainableFashion #EcoTextiles
`

  return Response.json({
    caption: fakeCaption
  })
}
