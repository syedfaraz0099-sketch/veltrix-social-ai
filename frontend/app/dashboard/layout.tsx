import React from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "white",
          padding: "20px"
        }}
      >
        <h2>Veltrix AI</h2>

        <nav style={{ marginTop: "30px" }}>

          <Link href="/dashboard" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Dashboard
          </Link>

          <Link href="/dashboard/caption" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Caption Generator
          </Link>

          <Link href="/dashboard/planner" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Content Planner
          </Link>

          <Link href="/dashboard/calendar" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Calendar
          </Link>

          <Link href="/dashboard/analytics" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Analytics
          </Link>

          <Link href="/dashboard/settings" style={{display:"block", marginBottom:"12px", color:"white"}}>
            Settings
          </Link>

        </nav>
      </aside>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "40px" }}>
        {children}
      </main>

    </div>
  )
}
