import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <aside
        style={{
          width: "220px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Veltrix AI</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/caption">Caption Generator</Link>
          <Link href="/dashboard/planner">Content Planner</Link>
          <Link href="/dashboard/calendar">Calendar</Link>
          <Link href="/dashboard/ideas">Content Ideas</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

    </div>
  )
}
