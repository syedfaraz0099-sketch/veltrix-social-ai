"use client"

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Total Posts</h3>
          <p>120</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Engagement</h3>
          <p>8.4%</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Follower Growth</h3>
          <p>+230</p>
        </div>
      </div>
    </div>
  )
}
