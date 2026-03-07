"use client"
import { useState } from "react"

export default function PlannerPage() {

  const [topic, setTopic] = useState("")
  const [plan, setPlan] = useState("")

  const generatePlan = async () => {

    if (!topic) return

    try {

      const response = await fetch("/api/planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic })
      })

      const data = await response.json()

      setPlan(data.plan)

    } catch (error) {
      setPlan("Error generating plan")
    }

  }

  return (
    <div>

      <h1>AI Content Planner</h1>

      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          padding: "10px",
          width: "350px",
          marginTop: "10px"
        }}
      />

      <br /><br />

      <button
        onClick={generatePlan}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Generate 30 Day Plan
      </button>

      <div style={{ marginTop: "30px", width: "500px" }}>

        {plan && plan.split("\n").map((line, index) => (

          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd"
            }}
          >
            {line}
          </div>

        ))}

      </div>

    </div>
  )
}
