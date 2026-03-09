"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", captions: 2 },
  { day: "Tue", captions: 5 },
  { day: "Wed", captions: 3 },
  { day: "Thu", captions: 7 },
  { day: "Fri", captions: 4 },
  { day: "Sat", captions: 6 },
  { day: "Sun", captions: 8 },
]

export default function Dashboard() {
  return (
    <div className="p-10 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-500">Welcome to Veltrix Social AI</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-sm">Captions Generated</h3>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-sm">Content Plans</h3>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="bg-orange-500 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-sm">Scheduled Posts</h3>
          <p className="text-3xl font-bold">5</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl p-6 shadow-md">

        <h2 className="text-lg font-semibold mb-4">
          Weekly Caption Activity
        </h2>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
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

    </div>
  )
}
