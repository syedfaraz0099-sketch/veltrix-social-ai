export default function CaptionPage() {
  return (
    <div>
      <h1>AI Caption Generator</h1>
      <p>Create captions for your social media posts.</p>

      <input
        type="text"
        placeholder="Enter topic..."
        style={{ padding: "10px", width: "300px", marginTop: "20px" }}
      />

      <br /><br />

      <button style={{ padding: "10px 20px" }}>

        
        Generate Caption
      </button>
    </div>
  )
}
