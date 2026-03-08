export default function Dashboard() {
  return (
    <div>

      <h1 style={{fontSize:"32px",marginBottom:"10px"}}>Dashboard</h1>
      <p style={{color:"#666"}}>Welcome to Veltrix Social AI.</p>

      <div className="cards">

        <div className="card">
          <h3>Captions Generated</h3>
          <p style={{fontSize:"26px",marginTop:"10px"}}>2</p>
        </div>

        <div className="card">
          <h3>Content Plans</h3>
          <p style={{fontSize:"26px",marginTop:"10px"}}>0</p>
        </div>

        <div className="card">
          <h3>Scheduled Posts</h3>
          <p style={{fontSize:"26px",marginTop:"10px"}}>0</p>
        </div>

      </div>

    </div>
  )
}
