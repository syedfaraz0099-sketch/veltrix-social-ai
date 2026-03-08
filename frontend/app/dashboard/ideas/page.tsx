"use client"

import { useState } from "react"

export default function IdeasPage() {

  const [topic,setTopic] = useState("")
  const [ideas,setIdeas] = useState<string[]>([])

  const generateIdeas = () => {

    const newIdeas = [
      `Reel: Quick tip about ${topic}`,
      `Carousel: 5 things people don't know about ${topic}`,
      `Story: Behind the scenes of ${topic}`,
      `Post: Common mistakes in ${topic}`,
      `Reel: Before vs After ${topic}`,
      `Carousel: Beginner guide to ${topic}`,
      `Story: Ask audience about ${topic}`,
      `Post: Myths about ${topic}`,
      `Reel: Process of ${topic}`,
      `Carousel: Tools used in ${topic}`
    ]

    setIdeas(newIdeas)
  }

  return (
    <div style={{padding:"20px"}}>

      <h1>AI Content Ideas Generator</h1>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{padding:"10px", width:"320px"}}
      />

      <br/><br/>

      <button
        onClick={generateIdeas}
        style={{padding:"10px 20px"}}
      >
        Generate Ideas
      </button>

      <br/><br/>

      <h3>Content Ideas</h3>

      {ideas.map((idea,index)=>(
        <p key={index}>{idea}</p>
      ))}

    </div>
  )
}
