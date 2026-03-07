"use client"
import { useState } from "react"

export default function Home() {

  const [topic,setTopic] = useState("")
  const [caption,setCaption] = useState("")

  async function generateCaption(){

    const res = await fetch("/api/caption",{
      method:"POST",
      body:JSON.stringify({topic})
    })

    const data = await res.json()

    setCaption(data.caption)
  }

  return (
    <main style={{padding:"40px",fontFamily:"Arial"}}>

      <h1>Veltrix Social AI</h1>
      <p>AI Powered Social Media Automation Platform</p>

      <h2>AI Caption Generator</h2>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{padding:"10px",width:"300px"}}
      />

      <button
        onClick={generateCaption}
        style={{marginLeft:"10px",padding:"10px"}}
      >
        Generate Caption
      </button>

      <pre style={{marginTop:"20px",background:"#eee",padding:"20px"}}>
        {caption}
      </pre>

      <footer style={{marginTop:"80px",opacity:0.6}}>
        Developed by Syed Faraz Hussain
      </footer>

    </main>
  )
}
