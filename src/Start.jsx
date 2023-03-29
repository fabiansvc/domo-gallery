import { KeyboardControls, Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Experience from "./Experience"
import { LinearToneMapping, sRGBEncoding } from 'three'

export default function Start() {
    
    const [init, setInit] = useState(false)
    const infoRef = useRef()
    const cameraSettings = {
        fov: 50,
        near: 0.1,
        far: 40,
        position: [11.25, -2.5, -2.25],
        rotation: [0, Math.PI * 0.75, 0]
    }
    const keyboardControls = [
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
    ]
    const startGame = (init) => {
        if (init) {
            infoRef.current.style.visibility = 'hidden'
            infoRef.current.style.height = '0px'
            return (
                <Suspense fallback={<Loader />}>
                    <KeyboardControls
                        map={keyboardControls}>
                        <Canvas
                            dpr={[1, 2]}
                            flat
                            gl={
                                {
                                    antialias: true,
                                    toneMapping: LinearToneMapping,
                                    outputEncoding: sRGBEncoding
                                }
                            }
                            camera={cameraSettings}
                        >
                            <Experience />
                        </Canvas>
                    </KeyboardControls>
                </Suspense>
            )
        }
    }

    return <>
        <div ref={infoRef} className="info">
            <div className="card">
                <h1 style={{ fontSize: "xxx-large" }}>
                    DomoGallery
                </h1>
                <p style={{ fontSize: "x-large" }}>
                    Instructions:
                    <br />
                    Press click to move
                    <br />
                    Press keys W-A-S-D to walk
                    <br />
                    Click to play videos
                </p>
                <p style={{ fontSize: "x-large" }}>
                    Created by:
                    <br />
                    Fabian Stiven Valencia Cordoba
                    <br />
                    Javier Mauricio Reyes Ph.D
                    <br />
                    Paola Johanna Rodriguez Ph.D
                </p>

                <p style={{ fontSize: "x-large" }}>
                    Universidad del Valle
                </p>
                <div className='buttonStart'>
                    <button onClick={() => { setInit(true) }}>
                        Start
                    </button>
                </div>
                <p style={{ fontSize: "large" }}>
                    This demo works only on Desktops
                </p>
            </div>
        </div>
        {startGame(init)}
    </>
}