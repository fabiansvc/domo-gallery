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
                <>
                    <Suspense fallback={<Loader />}>
                        <main className="app"  >
                            <section className='hero'>
                                <h1 style={{ color: "black" }}>O</h1>
                            </section>
                        </main>
                        <KeyboardControls
                            map={keyboardControls}>
                            <Canvas
                                className='canvas'
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
                </>
            )
        }
    }

    return <>
        <div ref={infoRef} className="info">
            <div className="card">
                <h1 style={{ fontSize: "xxx-large" }}>
                    DomoGallery
                </h1>
                <p style={{ fontSize: "xx-large" }}>
                    Instructions
                    <br />
                    Press click to move around the world
                    <br />
                    Press keys W-A-S-D to walk around the world
                    <br />
                    Press click to play videos
                </p>
                <p style={{ fontSize: "xx-large" }}>
                    Created by:
                    <br />
                    Fabian Stiven Valencia Cordoba
                    <br />
                    Javier Mauricio Reyes Ph.D
                    <br />
                    Paola Johanna Rodriguez Ph.D
                </p>

                <p style={{ fontSize: "xx-large" }}>
                    Universidad del Valle
                </p>
                <div className='buttonStart'>
                    <button onClick={() => { setInit(true) }}>
                        Start
                    </button>
                </div>
                <p style={{ fontSize: "x-large" }}>
                    This demo works only on Desktops
                </p>
            </div>
        </div>
        {startGame(init)}
    </>
}