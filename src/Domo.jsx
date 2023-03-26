import { useGLTF, useVideoTexture } from "@react-three/drei";

export default function Domo(props) {
    const video = useVideoTexture("/static/video/video180.mp4", { muted: true, start: true })
    video.flipY = false

    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
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
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
        </group>
    </>
}

useGLTF.preload('/static/model/domo/domo.glb')
