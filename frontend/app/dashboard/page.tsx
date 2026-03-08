"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {

  const [captions, setCaptions] = useState(0)
  const [plans, setPlans] = useState(0)
  const [scheduled, setScheduled] = useState(0)

  useEffect(() => {

    const savedCaptions = JSON.parse(localStorage.getItem("captions") || "[]")
    const savedPlans = JSON.parse(localStorage.getItem("plans") || "[]")
    const scheduledPosts = JSON.parse(localStorage.getItem("calendarPosts") || "[]")

    setCaptions(savedCaptions.length)
    setPlans(savedPlans.length)
    setScheduled(scheduledPosts.length)

  }, [])

  return (
    <div style={{ padding: "30px" }}>

      <h1 style={{ marginBottom: "10px" }}>Dashboard</h1>
      <p style={{ color: "#555" }}>
        Welcome to Veltrix Social AI.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        {/* Card 1 */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h3>Captions Generated</h3>
          <p style={{ fontSize: "28px", marginTop: "10px" }}>
            {captions}
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h3>Content Plans</h3>
          <p style={{ fontSize: "28px", marginTop: "10px" }}>
            {plans}
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h3>Scheduled Posts</h3>
          <p style={{ fontSize: "28px", marginTop: "10px" }}>
            {scheduled}
          </p>
        </div>

      </div>

    </div>
  )
}
