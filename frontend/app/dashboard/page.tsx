"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Mon", captions: 2 },
  { day: "Tue", captions: 5 },
  { day: "Wed", captions: 3 },
  { day: "Thu", captions: 7 },
  { day: "Fri", captions: 4 },
  { day: "Sat", captions: 6 },
  { day: "Sun", captions: 8 }
]

export default function DashboardPage() {

  return (

    <div style={{ padding: "30px" }}>

      <h1 style={{
        fontSize: "32px",
        fontWeight: "bold"
      }}>
        Dashboard
      </h1>

      <p style={{ color: "gray" }}>
        Welcome to Veltrix Social AI
      </p>

      {/* Stat cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div style={card("#6366f1")}>
          <h3>Captions Generated</h3>
          <h1>12</h1>
        </div>

        <div style={card("#22c55e")}>
          <h3>Content Plans</h3>
          <h1>3</h1>
        </div>

        <div style={card("#f59e0b")}>
          <h3>Scheduled Posts</h3>
          <h1>5</h1>
        </div>

      </div>

      {/* Chart */}

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
        }}
      >

        <h3 style={{ marginBottom: "20px" }}>
          Weekly Caption Activity
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="captions"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  )
}

function card(color: string) {

  return {
    background: color,
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  }

}
