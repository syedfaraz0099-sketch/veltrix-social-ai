"use client"

import { useState } from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [open, setOpen] = useState(false)

  const closeSidebar = () => {
    setOpen(false)
  }

  return (
    <div className="dashboard-container">

      {/* MOBILE HEADER */}

      <div className="mobile-header">
        <button onClick={() => setOpen(!open)}>☰</button>
        <h2>Veltrix AI</h2>
      </div>


      {/* SIDEBAR */}

      <div className={`sidebar ${open ? "active" : ""}`}>

        <h2>Veltrix AI</h2>

        <Link href="/dashboard" onClick={closeSidebar}>Dashboard</Link>

        <Link href="/dashboard/caption" onClick={closeSidebar}>
          Caption Generator
        </Link>

        <Link href="/dashboard/planner" onClick={closeSidebar}>
          Content Planner
        </Link>

        <Link href="/dashboard/calendar" onClick={closeSidebar}>
          Calendar
        </Link>

        <Link href="/dashboard/ideas" onClick={closeSidebar}>
          Content Ideas
        </Link>

        <Link href="/dashboard/analytics" onClick={closeSidebar}>
          Analytics
        </Link>

        <Link href="/dashboard/settings" onClick={closeSidebar}>
          Settings
        </Link>

      </div>


      {/* MAIN CONTENT */}

      <div className="main-content">
        {children}
      </div>

    </div>
  )
}
