"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function DashboardPage() {

  const [captionCount, setCaptionCount] = useState(0)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {

    const { count } = await supabase
      .from("captions")
      .select("*", { count: "exact", head: true })

    setCaptionCount(count || 0)
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Dashboard
      </h1>

      <p style={{ color: "#666" }}>
        Welcome to Veltrix Social AI.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Captions Generated</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            {captionCount}
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Content Plans</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            0
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Scheduled Posts</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            0
          </p>
        </div>

      </div>

    </div>
  )
}
