import { Sky, useHelper } from "@react-three/drei"
import { useRef } from "react"
import { PointLightHelper } from "three";

export default function Environments() {
    const pointlLight = useRef();
    const pointlLight1 = useRef();
    const pointlLight2 = useRef();
    const pointlLight3 = useRef();
    const pointlLight4 = useRef();

    // useHelper(pointlLight, PointLightHelper, 1)
    // useHelper(pointlLight1, PointLightHelper, 1)
    // useHelper(pointlLight2, PointLightHelper, 1)
    // useHelper(pointlLight3, PointLightHelper, 1)
    // useHelper(pointlLight4, PointLightHelper, 1)

    return <>
        <pointLight position={[12, 2, 0]} ref={pointlLight} intensity={0.25} />
        <pointLight position={[-11, -2, 0]} ref={pointlLight1} intensity={0.1} />
        <pointLight position={[-3, -2, 0]} ref={pointlLight2} intensity={0.1} />
        <pointLight position={[-7, -2, -6]} ref={pointlLight3} intensity={0.25} />
        <pointLight position={[-7, -2, 6]} ref={pointlLight4} intensity={0.25} />
        <Sky />
    </>
}