// What & Why: Minimal UI to validate API connectivity and layout baseline.
// Security: No PII; displays only service status from /healthz.
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function App() {
  const [status, setStatus] = useState<string>('loading...')
  useEffect(() => {
    fetch(`${API}/healthz`)
      .then((r) => r.json())
      .then((j) => setStatus(j.status || 'unknown'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-semibold">Banking Employee Copilot</h1>
      <p className="mt-2 text-sm text-gray-600">API status: {status}</p>
      <div className="mt-4 text-sm">
        <a href="http://localhost:8000/docs" target="_blank">Open API Docs</a>
      </div>
    </div>
  )
}

