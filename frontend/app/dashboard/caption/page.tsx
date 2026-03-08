"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function CaptionsPage() {

  const [captions, setCaptions] = useState<any[]>([])

  async function loadCaptions() {

    const { data } = await supabase
      .from("captions")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) setCaptions(data)

  }

  useEffect(() => {
    loadCaptions()
  }, [])

  return (
    <div style={{ padding: "40px" }}>
      <h1>Caption History</h1>

      {captions.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "8px"
          }}
        >
          {item.caption}
        </div>
      ))}
    </div>
  )
}
