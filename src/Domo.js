import { useGLTF, useVideoTexture } from "@react-three/drei";

export default function Domo(props) {

    const video = useVideoTexture("/static/video/video180.mp4", { muted: true, start: true })
    video.flipY = false

    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    return <>
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FloorDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GrayStructureDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedStructureDomo.geometry}
                material={materials.MetalRed}
                position={[0, -2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WallDomo.geometry}
                material={materials.MetalGray}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetOut.geometry}
                material={materials.MetalRed}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StreetInner.geometry}
                material={materials.MetalRed}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ScreenDomo.geometry}
                material={materials.MetalGray}
            >
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
        </group>
    </>
}

useGLTF.preload('/static/model/domo/domo.glb')
