import { OrbitControls } from "@react-three/drei"

export default function Controls () {

    return (
        <OrbitControls
            enableDamping={true}
            enablePan={true}
            enableZoom={true}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={Math.PI * 0.5}
            maxPolarAngle={Math.PI * 0.5 - 0.25}
            target = {[-15, -2, -4]}
        />
    )
}