import { Sky, useHelper } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

export default function Environments () {
    const pointlLight = useRef();
    // useHelper(pointlLight, THREE.PointLightHelper, 1)
   
   return <>
        <ambientLight/>
        <pointLight ref={pointlLight} intensity={0.5}/>
        <Sky />
    </>
}