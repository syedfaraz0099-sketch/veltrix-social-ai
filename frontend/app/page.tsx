export default function Home() {
  return (
    <main style={{padding:"40px",fontFamily:"Arial"}}>
      <h1>Veltrix Social AI</h1>

      <p>AI Powered Social Media Automation Platform</p>

      <div style={{marginTop:"40px"}}>
        <h2>Dashboard</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginTop:"20px"}}>
          
          <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"10px"}}>
            <h3>AI Caption Generator</h3>
            <p>Create captions for Instagram, LinkedIn, and Twitter.</p>
          </div>

          <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"10px"}}>
            <h3>Content Planner</h3>
            <p>Generate 30 days of social media content ideas.</p>
          </div>

          <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"10px"}}>
            <h3>Analytics</h3>
            <p>Track engagement, reach and growth.</p>
          </div>

        </div>
      </div>

      <footer style={{marginTop:"80px",opacity:0.6}}>
        Developed by Syed Faraz Hussain
      </footer>
    </main>
  )
}
