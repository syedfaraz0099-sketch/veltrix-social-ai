"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function CaptionsPage() {

  const [captions,setCaptions] = useState<any[]>([])

  async function loadCaptions(){

    const { data } = await supabase
      .from("captions")
      .select("*")
      .order("created_at",{ascending:false})

    if(data){
      setCaptions(data)
    }

  }

  useEffect(()=>{
    loadCaptions()
  },[])

  return (

    <div className="container">

      <h1>Caption History</h1>

      <div className="cards">

        {captions.map((item)=>(
          <div className="card" key={item.id}>
            <p>{item.caption}</p>
          </div>
        ))}

      </div>

    </div>
  )
}
