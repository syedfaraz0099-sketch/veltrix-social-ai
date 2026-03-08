"use client"

import { useState } from "react"

export default function HashtagsPage(){

const [topic,setTopic] = useState("")
const [tags,setTags] = useState("")

const generateTags = () => {

const hashtags = `

#${topic.replaceAll(" ","")}
#contentcreator
#socialmedia
#digitalmarketing
#growth
#instagramtips
`

setTags(hashtags)

}

return (
<div>

  <h1>AI Hashtag Generator</h1>

  <input
    placeholder="Enter topic..."
    value={topic}
    onChange={(e)=>setTopic(e.target.value)}
    style={{ padding:"10px", width:"320px" }}
  />

  <br/><br/>

  <button
    onClick={generateTags}
    style={{ padding:"10px 20px" }}
  >
    Generate Hashtags
  </button>

  <br/><br/>

  <pre>{tags}</pre>

</div>

)
}
