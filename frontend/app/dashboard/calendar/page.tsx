"use client"

import { useState } from "react"

export default function CalendarPage() {

  const [posts] = useState([
    { day: "Day 1", idea: "Introduction post" },
    { day: "Day 2", idea: "Educational carousel" },
    { day: "Day 3", idea: "Behind the scenes" },
    { day: "Day 4", idea: "Reel idea" },
    { day: "Day 5", idea: "Tips & tricks" },
    { day: "Day 6", idea: "Customer story" },
    { day: "Day 7", idea: "Weekly recap" }
  ])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Content Calendar</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Day</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Post Idea</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {post.day}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {post.idea}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
