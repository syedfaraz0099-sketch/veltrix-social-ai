"use client"
import { useState } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  const generateCaption = async () => {

    setLoading(true)

    const res = await fetch("/api/caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    })

    const data = await res.json()

    setCaption(data.caption)

    setLoading(false)
  }

  return (
    <div>

      <h1>AI Caption Generator</h1>

      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: "10px", width: "350px" }}
      />

      <br /><br />

      <button
        onClick={generateCaption}
        style={{ padding: "10px 20px" }}
      >
        {loading ? "Generating..." : "Generate Caption"}
      </button>

      <br /><br />

      <p>{caption}</p>

    </div>
  )
}
