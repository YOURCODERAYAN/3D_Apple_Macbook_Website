import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.history.scrollRestoration = 'manual'

// Prevent scrolling during initial load
document.documentElement.style.scrollBehavior = 'auto'
const originalOverflow = document.body.style.overflow
document.body.style.overflow = 'hidden'

// Allow scrolling once the app is mounted
window.addEventListener('load', () => {
  document.body.style.overflow = originalOverflow
  document.documentElement.style.scrollBehavior = 'smooth'
}, { once: true })

// Fallback: allow scrolling after 3 seconds if load event doesn't fire
setTimeout(() => {
  document.body.style.overflow = originalOverflow
  document.documentElement.style.scrollBehavior = 'smooth'
}, 3000)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
