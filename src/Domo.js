import { useGLTF, useVideoTexture } from "@react-three/drei";
``
export default function Domo(props) {
    const video = useVideoTexture("./video/video180.mp4", { muted: true, start: true })
    video.flipY = false

    const domoModel = useGLTF('./model/domo/domo.glb')

    return <>
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.FloorDomo.geometry}
                material={domoModel.materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.GrayStructureDomo.geometry}
                material={domoModel.materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.RedStructureDomo.geometry}
                material={domoModel.materials.MetalRed}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={domoModel.nodes.ScreenDomo.geometry}
            >
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.WallDomo.geometry}
                material={domoModel.materials.MetalGray}
                scale={0.99}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.StreetOut.geometry}
                material={domoModel.materials.MetalGray}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={domoModel.nodes.StreetInner.geometry}
                material={domoModel.materials.MetalGray}
            />
        </group>


    </>
}

useGLTF.preload('./model/domo/domo.glb')