"use client"

import { useState } from "react"

export default function Home() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  const [plannerTopic, setPlannerTopic] = useState("")
  const [plan, setPlan] = useState("")
  const [plannerLoading, setPlannerLoading] = useState(false)

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

  const generatePlan = async () => {

    setPlannerLoading(true)

    const res = await fetch("/api/content-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic: plannerTopic })
    })

    const data = await res.json()

    setPlan(data.plan)
    setPlannerLoading(false)

  }

  return (

    <main style={{ padding: "40px", fontFamily: "Arial" }}>

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


      <hr style={{ margin: "40px 0" }} />


      <h2>AI Content Planner</h2>

      <input
        placeholder="Enter topic for 30 day plan"
        value={plannerTopic}
        onChange={(e) => setPlannerTopic(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button
        onClick={generatePlan}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Generate 30 Day Plan
      </button>

      {plannerLoading && <p>Generating content plan...</p>}

      {plan && (
        <div style={{ marginTop: "20px" }}>
          <h3>30 Day Content Plan</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {plan}
          </pre>
        </div>
      )}

      <p style={{ marginTop: "40px", color: "#777" }}>
        Developed by Syed Faraz Hussain
      </p>

    </main>

  )

} 
