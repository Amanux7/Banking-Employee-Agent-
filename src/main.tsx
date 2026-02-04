// What & Why: React root; fetch API health to sanity check integration.
// Security: Reads API URL from VITE_API_BASE_URL (non-secret).
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

