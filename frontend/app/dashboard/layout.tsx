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
          padding: "20px"
        }}
      >
        <h2>Veltrix AI</h2>

        <nav style={{ marginTop: "30px" }}>
          <p>Dashboard</p>
          <p>Caption Generator</p>
          <p>Content Planner</p>
          <p>Calendar</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "40px" }}>
        {children}
      </main>

    </div>
  )
}
