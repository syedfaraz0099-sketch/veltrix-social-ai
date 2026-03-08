"use client"

import { useState } from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [open,setOpen] = useState(false)

  return (
    <div>

      {/* Mobile top bar */}

      <div className="mobile-topbar">
        <button onClick={()=>setOpen(!open)}>☰</button>
        <h2>Veltrix AI</h2>
      </div>

      <div className="dashboard">

        {/* Sidebar */}

        <div className={`sidebar ${open ? "show" : ""}`}>

          <h2>Veltrix AI</h2>

          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/caption">Caption Generator</Link>
          <Link href="/dashboard/planner">Content Planner</Link>
          <Link href="/dashboard/calendar">Calendar</Link>
          <Link href="/dashboard/ideas">Content Ideas</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>

        </div>

        {/* Main content */}

        <div className="main">
          {children}
        </div>

      </div>
    </div>
  )
}
