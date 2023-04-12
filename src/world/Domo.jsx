import { useGLTF } from "@react-three/drei";
import { useState } from "react";

export default function Domo() {

    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')

    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = "/static/video/video180.mp4";
        vid.crossOrigin = "Anonymous";
        vid.loop = true
        vid.muted = false
        vid.preload = "metadata"
        vid.play()
        return vid
    });


    return <>
        <group>
            <mesh
                geometry={nodes.FloorDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.GrayStructureDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.RedStructureDomo.geometry}
                material={materials.MetalRed}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.WallDomo.geometry}
                material={materials.MetalGray}
            />
            <mesh
                geometry={nodes.StreetOut.geometry}
                material={materials.MetalRed}
            />
            <mesh
                geometry={nodes.StreetInner.geometry}
                material={materials.MetalRed}
            />
            <mesh
                geometry={nodes.ScreenDomo.geometry}
                material={materials.MetalGray}
            >
                <meshStandardMaterial >
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshStandardMaterial>
            </mesh>
        </group>
    </>
}

useGLTF.preload('/static/model/domo/domo.glb')
