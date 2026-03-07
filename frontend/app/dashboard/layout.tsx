import React from "react"

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
          padding: "20px",
        }}
      >
        <h2>Veltrix AI</h2>

        <nav style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </a>

          <a href="/dashboard/caption" style={{ color: "white", textDecoration: "none" }}>
            Caption Generator
          </a>

          <a href="/dashboard/planner" style={{ color: "white", textDecoration: "none" }}>
            Content Planner
          </a>

          <a href="/dashboard/calendar" style={{ color: "white", textDecoration: "none" }}>
            Calendar
          </a>

          <a href="/dashboard/analytics" style={{ color: "white", textDecoration: "none" }}>
            Analytics
          </a>

          <a href="/dashboard/settings" style={{ color: "white", textDecoration: "none" }}>
            Settings
          </a>
        </nav>
      </aside>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "40px" }}>
        {children}
      </main>

    </div>
  )
}
