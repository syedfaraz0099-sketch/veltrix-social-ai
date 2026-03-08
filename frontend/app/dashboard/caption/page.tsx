"use client"

import { useState } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  const generateCaption = async () => {

    if (!topic) {
      alert("Please enter a topic")
      return
    }

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

      if (data.caption) {
        setCaption(data.caption)
      } else {
        alert(data.error || "API failed")
      }

    } catch (error) {

      console.log(error)
      alert("Something went wrong")

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
          type="text"
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

          <p style={{
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px"
          }}>
            {caption}
          </p>

          <button
            onClick={() => navigator.clipboard.writeText(caption)}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Copy Caption
          </button>

        </div>

      )}

    </div>
  )
}
