import { KeyboardControls, Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Experience from "./Experience"
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'

export default function App() {
    const [init, setInit] = useState(false)
    const infoRef = useRef()

    const startGame = (init) => {
        if (init) {
            infoRef.current.style.visibility = 'hidden'
            infoRef.current.style.height = '0px'
            return <>
                <KeyboardControls
                    map={[
                        { name: "forward", keys: ["ArrowUp", "w", "W"] },
                        { name: "backward", keys: ["ArrowDown", "s", "S"] },
                        { name: "left", keys: ["ArrowLeft", "a", "A"] },
                        { name: "right", keys: ["ArrowRight", "d", "D"] },
                    ]}>
                    <Canvas
                        shadows={true}
                        dpr={[1, 2]}
                        flat
                        gl={
                            {
                                antialias: true,
                                toneMapping: ACESFilmicToneMapping,
                                outputEncoding: sRGBEncoding
                            }
                        }
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 50,
                            position: [7, -2, 0],
                            rotation: [0, -Math.PI / 2, 0]

                        }}
                    >
                        <Suspense fallback={null}>
                            <Experience />
                        </Suspense>
                    </Canvas>
                    <Loader />
                </KeyboardControls>
            </>
        }
    }

    return <>
        <div ref={infoRef} className="info">
            <h1>
                Dome and Art Gallery Project
            </h1>
            <p>
                Instructions:
                <br />
                Press click to move
                <br />
                Press keys W-A-S-D to walk
                <br />
                Double click to play videos
            </p>
            <p style={{fontSize:"medium"}}>
                This project works only on Desktops
            </p>
            <div className='buttonStart'>
                <button onClick={() => { setInit(true) }}>
                    Start
                </button>
            </div>
        </div>
        {startGame(init)}
    </>
}