export async function POST(req: Request) {

  const { topic } = await req.json()

  const ideas = `
1. Reel: 5 facts about ${topic}
2. Carousel: Beginner guide to ${topic}
3. Reel: Before vs after using ${topic}
4. Post: Common mistakes in ${topic}
5. Reel: Quick tips for ${topic}
6. Carousel: Tools needed for ${topic}
7. Post: My journey with ${topic}
8. Reel: Behind the scenes of ${topic}
9. Carousel: Step by step ${topic} tutorial
10. Reel: Why ${topic} is trending
`

  return Response.json({
    ideas
  })

}
