import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToggleHello from './practical/ToggleHello'
import ParentComponent from './practical/ParentComponent'
import UseRef2 from './practical/UseRef2'
import UseRef from './practical/UseRef'
import RenderProps from './practical/RenderProps'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToggleHello /> */}
    {/* <ParentComponent /> */}
    {/* <UseRef2 /> */}
    {/* <UseRef /> */}
    <RenderProps />
  </StrictMode>,
)
