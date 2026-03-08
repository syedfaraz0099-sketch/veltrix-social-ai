"use client"

import { useState, useEffect } from "react"

export default function CaptionPage() {

  const [topic, setTopic] = useState("")
  const [caption, setCaption] = useState("")
  const [hashtags, setHashtags] = useState("")
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("captions")
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  const generateCaption = () => {

    const newCaption = `Amazing post about ${topic}! 🚀`
    const newTags = `#${topic.replaceAll(" ", "")} #contentcreator #socialmedia #growth #marketing`

    setCaption(newCaption)
    setHashtags(newTags)

    const updatedHistory = [`${newCaption} ${newTags}`, ...history]

    setHistory(updatedHistory)

    localStorage.setItem("captions", JSON.stringify(updatedHistory))
  }

  const copyCaption = () => {
    navigator.clipboard.writeText(`${caption} ${hashtags}`)
    alert("Caption copied!")
  }

  return (
    <div style={{ padding:"20px" }}>
      <h1>AI Caption Generator</h1>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{ padding:"10px", width:"320px" }}
      />

      <br/><br/>

      <button onClick={generateCaption} style={{ padding:"10px 20px" }}>
        Generate Caption
      </button>

      <br/><br/>

      <h3>Generated Caption</h3>

      <p>{caption}</p>
      <p>{hashtags}</p>

      {caption && (
        <button onClick={copyCaption} style={{ padding:"8px 15px" }}>
          Copy Caption
        </button>
      )}

      <hr/>

      <h3>Saved Captions</h3>

      {history.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}

    </div>
  )
}
