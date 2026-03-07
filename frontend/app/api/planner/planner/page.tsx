"use client"
import { useState } from "react"

export default function PlannerPage() {

  const [topic, setTopic] = useState("")
  const [plan, setPlan] = useState("")

  const generatePlan = async () => {

    const response = await fetch("/api/planner", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ topic })
    })

    const data = await response.json()

    setPlan(data.plan)
  }

  return (
    <div>

      <h1>AI Content Planner</h1>

      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{padding:"10px", width:"300px"}}
      />

      <br/><br/>

      <button onClick={generatePlan}>
        Generate 30 Day Plan
      </button>

      <pre style={{marginTop:"30px"}}>
        {plan}
      </pre>

    </div>
  )
}
