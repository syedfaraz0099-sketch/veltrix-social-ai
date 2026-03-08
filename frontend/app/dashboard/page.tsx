"use client"

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Dashboard
      </h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Welcome to Veltrix Social AI.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Captions Generated</h3>
          <h2>2</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Content Plans</h3>
          <h2>0</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3>Scheduled Posts</h3>
          <h2>0</h2>
        </div>
      </div>
    </div>
  )
}
