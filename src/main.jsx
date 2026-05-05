import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.history.scrollRestoration = 'manual'

// Prevent scrolling during initial load
let scrollDisabled = true
const preventDefault = (e) => scrollDisabled && e.preventDefault()

window.addEventListener('wheel', preventDefault, { passive: false })
window.addEventListener('touchmove', preventDefault, { passive: false })

// Allow scrolling once the app is mounted
window.addEventListener('load', () => {
  scrollDisabled = false
  window.removeEventListener('wheel', preventDefault)
  window.removeEventListener('touchmove', preventDefault)
}, { once: true })

// Fallback: allow scrolling after 2 seconds
setTimeout(() => {
  scrollDisabled = false
  window.removeEventListener('wheel', preventDefault)
  window.removeEventListener('touchmove', preventDefault)
}, 2000)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
