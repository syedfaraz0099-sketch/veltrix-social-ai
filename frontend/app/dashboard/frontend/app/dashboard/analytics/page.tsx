"use client"

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px"
        }}>
          <h3>Total Posts</h3>
          <p style={{ fontSize: "24px" }}>120</p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px"
        }}>
          <h3>Engagement Rate</h3>
          <p style={{ fontSize: "24px" }}>8.4%</p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px"
        }}>
          <h3>Followers Growth</h3>
          <p style={{ fontSize: "24px" }}>+230</p>
        </div>

      </div>
    </div>
  )
}
