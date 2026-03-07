export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Veltrix Social AI dashboard.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div style={{border:"1px solid #ddd", padding:"20px"}}>
          <h3>Captions Generated</h3>
          <p>0</p>
        </div>

        <div style={{border:"1px solid #ddd", padding:"20px"}}>
          <h3>Content Plans</h3>
          <p>0</p>
        </div>

        <div style={{border:"1px solid #ddd", padding:"20px"}}>
          <h3>Scheduled Posts</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  )
}
