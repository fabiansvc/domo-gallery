import { Sky } from "@react-three/drei"
import { useRef } from "react"

export default function Environments () {
    const pointlLight = useRef();
    const pointlLight1 = useRef();
    const pointlLight2 = useRef();
    const pointlLight3 = useRef();
    const pointlLight4 = useRef();
   
   return <>
        <pointLight position={[9, 1, 0]} ref={pointlLight} intensity={0.8}/>
        <pointLight position={[-11, -1.5, 0]} ref={pointlLight1} intensity={0.8}/>
        <pointLight position={[-3, -1.5, 0]} ref={pointlLight2} intensity={0.8}/>
        <pointLight position={[-0, -1.5, -6]} ref={pointlLight3} intensity={0.8}/>
        <pointLight position={[-0, -1.5, 6]} ref={pointlLight4} intensity={0.8}/>
        <Sky />
    </>
}