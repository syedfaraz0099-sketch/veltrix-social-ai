"use client"
import { useState } from "react"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  const generateCaption = async () => {
    setLoading(true)

    const res = await fetch("/api/caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic })
    })

    const data = await res.json()

    setCaption(data.caption)
    setLoading(false)
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Veltrix Social AI</h1>
      <p>AI Powered Social Media Automation Platform</p>

      <h2>AI Caption Generator</h2>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button
        onClick={generateCaption}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Generate Caption
      </button>

      {loading && <p>Generating caption...</p>}

      {caption && (
        <div style={{ marginTop: "20px" }}>
          <h3>AI Caption:</h3>
          <p>{caption}</p>
        </div>
      )}
    </main>
  )
}
