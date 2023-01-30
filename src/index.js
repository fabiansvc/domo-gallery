import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { StrictMode } from 'react'


const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <StrictMode>
        <Canvas
            shadows={ true }
            dpr={ [1, 2] }
            flat
            gl = {
                {
                    antialias : true,
                    toneMapping: ACESFilmicToneMapping,
                    outputEncoding: sRGBEncoding
                }
            }
            camera={{
                fov: 45,
                near: 0.1,
                far: 50,
                position: [-10, 0, 0]
            }}
        >
            <color args={['#201919']} attach="background" />
            <Experience />            
        </Canvas>
    </StrictMode>
)