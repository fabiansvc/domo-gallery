import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Perf } from 'r3f-perf'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Experience/>
    </React.StrictMode>
)

