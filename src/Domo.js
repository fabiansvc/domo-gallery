import { useGLTF, useVideoTexture } from "@react-three/drei";
import url from "../static/video/video360.mp4";
``
export default function Domo(props) {
    const video = useVideoTexture(url)
    video.flipY = false

    const domoModel = useGLTF('./model/domo/domo.glb')

    return <>
        <group {...props} dispose={null}>
            <mesh
                geometry={domoModel.nodes.FloorDomo.geometry}
                material={domoModel.materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={domoModel.nodes.GrayStructureDomo.geometry}
                material={domoModel.materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={domoModel.nodes.RedStructureDomo.geometry}
                material={domoModel.materials.MetalRed}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={domoModel.nodes.ScreenDomo.geometry}
            >
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
        </group>
    </>
}

useGLTF.preload('./model/domo/domo.glb')