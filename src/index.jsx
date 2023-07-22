import './index.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Experience />
        </BrowserRouter>
    </React.StrictMode>
)

