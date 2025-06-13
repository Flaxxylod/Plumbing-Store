import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/reset.css"
import "./Styles/common.css"
import Landing from './Landing/Landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
