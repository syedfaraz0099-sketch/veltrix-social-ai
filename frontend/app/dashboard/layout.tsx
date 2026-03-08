"use client"

import Link from "next/link"

export default function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {

return (
<div style={{ display: "flex", fontFamily: "sans-serif" }}>

  {/* Sidebar */}
  <div
    style={{
      width: "230px",
      background: "#111",
      color: "#fff",
      minHeight: "100vh",
      padding: "25px"
    }}
  >

    <h2 style={{ marginBottom: "40px" }}>Veltrix AI</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      <Link href="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>

      <Link href="/dashboard/caption" style={{ color: "#fff" }}>
        Caption Generator
      </Link>

      <Link href="/dashboard/planner" style={{ color: "#fff" }}>
        Content Planner
      </Link>

      <Link href="/dashboard/calendar" style={{ color: "#fff" }}>
        Calendar
      </Link>

      <Link href="/dashboard/ideas" style={{ color: "#fff" }}>
        Content Ideas
      </Link>

      <Link href="/dashboard/analytics" style={{ color: "#fff" }}>
        Analytics
      </Link>

      <Link href="/dashboard/settings" style={{ color: "#fff" }}>
        Settings
      </Link>

    </div>

  </div>

  {/* Main Content */}
  <div
    style={{
      flex: 1,
      padding: "40px",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}
  >
    {children}
  </div>

</div>

)
}
