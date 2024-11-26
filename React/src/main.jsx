import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToggleHello from './practical/ToggleHello'
import ParentComponent from './practical/ParentComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToggleHello /> */}
    <ParentComponent />
  </StrictMode>,
)
