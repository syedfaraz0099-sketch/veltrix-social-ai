"use client"

import { useState, useEffect } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [history, setHistory] = useState<string[]>([])

  // Load saved captions when page loads
  useEffect(() => {
    const saved = localStorage.getItem("captions")
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  const generateCaption = () => {

    const newCaption = `Amazing post about ${topic}! 🚀 #content #socialmedia`

    setCaption(newCaption)

    const updatedHistory = [newCaption, ...history]

    setHistory(updatedHistory)

    // Save to browser storage
    localStorage.setItem("captions", JSON.stringify(updatedHistory))
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
