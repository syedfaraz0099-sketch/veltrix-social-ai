"use client"

import { useState } from "react"
import { supabase } from "../../../lib/supabase"

export default function CaptionPage() {
  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")

  const generateCaption = async () => {
    const res = await fetch("/api/caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic })
    })

    const data = await res.json()
    setCaption(data.caption)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Caption Generator</h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic..."
      />

      <button onClick={generateCaption}>
        Generate Caption
      </button>

      {caption && (
        <div>
          <h3>Generated Caption</h3>
          <p>{caption}</p>
        </div>
      )}
    </div>
  )
}
