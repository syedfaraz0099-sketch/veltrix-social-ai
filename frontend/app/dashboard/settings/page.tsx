"use client"

import { useState } from "react"

export default function SettingsPage() {

  const [name, setName] = useState("Creator")
  const [brand, setBrand] = useState("Veltrix AI")

  const saveSettings = () => {
    alert("Settings saved!")
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Settings</h1>

      <div style={{ marginTop: "30px" }}>

        <div style={{ marginBottom: "20px" }}>
          <label>Creator Name</label>
          <br/>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{ padding:"10px", width:"300px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Brand Name</label>
          <br/>
          <input
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}
            style={{ padding:"10px", width:"300px" }}
          />
        </div>

        <button
          onClick={saveSettings}
          style={{ padding:"10px 20px", cursor:"pointer" }}
        >
          Save Settings
        </button>

      </div>
    </div>
  )
}
