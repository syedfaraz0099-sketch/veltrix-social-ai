"use client"

import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">

      {/* Sidebar */}

      <div className="sidebar">
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
  )
}
