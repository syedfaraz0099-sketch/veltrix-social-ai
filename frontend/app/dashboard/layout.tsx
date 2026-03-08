"use client"

export default function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<div style={{ display: "flex" }}>

  {/* Sidebar */}
  <div
    style={{
      width: "220px",
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px",
    }}
  >
    <h2>Veltrix AI</h2>

    <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "12px" }}>

      <a href="/dashboard" style={{ color: "#fff" }}>Dashboard</a>

      <a href="/dashboard/caption" style={{ color: "#fff" }}>
        Caption Generator
      </a>

      <a href="/dashboard/planner" style={{ color: "#fff" }}>
        Content Planner
      </a>

      <a href="/dashboard/calendar" style={{ color: "#fff" }}>
        Calendar
      </a>

      <a href="/dashboard/ideas" style={{ color: "#fff" }}>
        Content Ideas
      </a>

      <a href="/dashboard/analytics" style={{ color: "#fff" }}>
        Analytics
      </a>

      <a href="/dashboard/settings" style={{ color: "#fff" }}>
        Settings
      </a>

    </div>
  </div>

  {/* Page Content */}
  <div style={{ flex: 1, padding: "40px" }}>
    {children}
  </div>

</div>

)
}
