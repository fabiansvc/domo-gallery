import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    
    <Canvas
        flat
        camera={{
            fov: 45,
            near: 0.1,
            far: 50,
            position: [0, 1.75, 0]
        }}
    >
        <color args={['#201919']} attach="background" />
        <Experience />
        
    </Canvas>
    
)