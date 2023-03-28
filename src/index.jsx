import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Start from './Start'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
       <Start/>
    </StrictMode>
)