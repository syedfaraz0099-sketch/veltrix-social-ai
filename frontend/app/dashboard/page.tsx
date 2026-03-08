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
    <div>

      <h1>Dashboard</h1>
      <p>Welcome to Veltrix Social AI dashboard.</p>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={{
          border:"1px solid #ddd",
          padding:"25px",
          width:"200px"
        }}>
          <h3>Captions Generated</h3>
          <p style={{fontSize:"28px"}}>{captions}</p>
        </div>

        <div style={{
          border:"1px solid #ddd",
          padding:"25px",
          width:"200px"
        }}>
          <h3>Content Plans</h3>
          <p style={{fontSize:"28px"}}>{plans}</p>
        </div>

        <div style={{
          border:"1px solid #ddd",
          padding:"25px",
          width:"200px"
        }}>
          <h3>Scheduled Posts</h3>
          <p style={{fontSize:"28px"}}>{scheduled}</p>
        </div>

      </div>

    </div>
  )
}
