export async function POST(req: Request) {

  const { topic } = await req.json()

  const plan = `
Day 1: Introduction post about ${topic}
Day 2: Educational carousel
Day 3: Behind the scenes
Day 4: Reel idea
Day 5: Tips & tricks
Day 6: Customer story
Day 7: Weekly recap
`

  return Response.json({
    plan: plan
  })

}
