import { Sky, useHelper } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

export default function Environments () {
    const directionalLight = useRef();
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
   
   return <>
        <ambientLight intensity={1} />

        <directionalLight ref={directionalLight}
            position={[-10, 3, 2]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={- 5}
            shadow-camera-left={- 5} />
        <Sky />
    </>
}