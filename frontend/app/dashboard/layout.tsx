import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <aside
        style={{
          width: "230px",
          background: "#0f172a",
          color: "white",
          padding: "25px",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "22px" }}>
          Veltrix AI
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard">
            Dashboard
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/caption">
            Caption Generator
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/planner">
            Content Planner
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/calendar">
            Calendar
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/ideas">
            Content Ideas
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/analytics">
            Analytics
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} href="/dashboard/settings">
            Settings
          </Link>

        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          background: "#f5f5f5",
          padding: "40px",
        }}
      >
        {children}
      </main>

    </div>
  )
}
