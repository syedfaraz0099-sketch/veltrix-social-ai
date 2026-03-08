"use client"

import { useState } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [history, setHistory] = useState<string[]>([])

  const generateCaption = () => {

    const newCaption = `Amazing post about ${topic}! 🚀 #content #socialmedia`

    setCaption(newCaption)

    setHistory([newCaption, ...history])
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Caption Generator</h1>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{ padding:"10px", width:"300px" }}
      />

      <br/><br/>

      <button
        onClick={generateCaption}
        style={{ padding:"10px 20px" }}
      >
        Generate Caption
      </button>

      <br/><br/>

      <h3>Generated Caption</h3>
      <p>{caption}</p>

      <hr/>

      <h3>Saved Captions</h3>

      {history.map((item, index)=>(
        <p key={index}>{item}</p>
      ))}

    </div>
  )
}
