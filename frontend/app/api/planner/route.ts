export async function POST(req: Request) {

  const { topic } = await req.json()

  const plan = `
Day 1 – Introduction post about ${topic}
Day 2 – Educational carousel
Day 3 – Behind the scenes
Day 4 – Reel idea
Day 5 – Customer story
Day 6 – Tips & tricks
Day 7 – Weekly recap

Day 8 – Product highlight
Day 9 – Tutorial
Day 10 – Industry facts
Day 11 – Reel inspiration
Day 12 – Before / After
Day 13 – FAQ post
Day 14 – Weekly recap

Day 15 – Community question
Day 16 – Expert tips
Day 17 – Inspirational quote
Day 18 – Behind the scenes
Day 19 – Product feature
Day 20 – Educational carousel
Day 21 – Weekly recap
`

  return Response.json({
    plan: plan
  })
}
