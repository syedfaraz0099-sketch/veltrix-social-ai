"use client"

import { useState } from "react"

export default function HashtagsPage() {

  const [topic, setTopic] = useState("")
  const [hashtags, setHashtags] = useState("")

  const generateHashtags = () => {

    const tags = `
#${topic.replaceAll(" ","")}
#contentcreator
#socialmedia
#digitalmarketing
#growth
#instagramtips
#viralcontent
`

    setHashtags(tags)
  }

  return (
    <div style={{padding:"20px"}}>

      <h1>AI Hashtag Generator</h1>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        style={{padding:"10px", width:"300px"}}
      />

      <br/><br/>

      <button onClick={generateHashtags}>
        Generate Hashtags
      </button>

      <br/><br/>

      <pre>{hashtags}</pre>

    </div>
  )
}
