"use client"

import { useState } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  const generateCaption = async () => {

    if (!topic) return

    setLoading(true)

    try {

      const res = await fetch("/api/caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic })
      })

      const data = await res.json()

      setCaption(data.caption)

    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        AI Caption Generator
      </h1>

      <div style={{ marginTop: "20px" }}>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic..."
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={generateCaption}
          style={{
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {loading ? "Generating..." : "Generate Caption"}
        </button>

      </div>

      {caption && (
        <div style={{ marginTop: "30px" }}>
          <h3>Generated Caption</h3>
          <p>{caption}</p>
        </div>
      )}

    </div>
  )
}
