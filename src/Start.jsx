import { KeyboardControls, Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Experience from "./Experience"
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'

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
                                <img className="cursor" src={"/static/textures/cursor/cursor.png"} alt="cursor" />
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
                                        outputEncoding: sRGBEncoding,
                                        toneMapping: ACESFilmicToneMapping

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

    const isMobileDevice = () => {
        return
    }

    const isDesktop = () => {
        if (/Android|webOS|iPad|Tablet|PlayBook|Kindle|Windows Phone|IEMobile|Surface|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|Windows Phone|SymbianOS/i.test(navigator.userAgent)) {
            return (
                <p className="note">
                    This demo works only on PC Desktops
                </p>
            )
        } else {
            return (
                <div className='buttonStart'>
                    <button onClick={() => { setInit(true) }}>
                        Start
                    </button>
                </div>
            )
        }
    }

    return <>
        <div ref={infoRef} className="info">
            <div className="card">
                <img className="logo" src={"/static/favicon.png"} alt="logo" />
                <h1>
                    DomoGallery
                </h1>
                <p>
                    Instructions:
                    <br />
                    Press click to move around
                    <br />
                    Press keys W-A-S-D to walk
                    <br />
                    Press click to play videos
                </p>
                <p>
                    Created by:
                    <br />
                    Fabian Stiven Valencia
                    <br />
                    Javier Mauricio Reyes Ph.D
                    <br />
                    Paola Johanna Rodriguez Ph.D
                </p>
                <p>
                    Universidad del Valle
                </p>

                {isDesktop()}

            </div>
        </div>
        {startGame(init)}
    </>
}