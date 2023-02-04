import { OrbitControls } from "@react-three/drei"

export default function Controls () {

    return (
        <OrbitControls
            enableDamping={true}
            minDistance={9}
            maxDistance={10}
            enablePan={true}
            enableZoom={true}
            minPolarAngle={Math.PI * 0.5}
            maxPolarAngle={Math.PI * 0.5 - 0.5}
        />
    )
}