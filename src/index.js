import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
       <App/>
    </StrictMode>
)