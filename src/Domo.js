import { useGLTF, useVideoTexture } from "@react-three/drei";
import url from "../static/video/video360.mp4";
``
export default function Domo(props) {
    const video = useVideoTexture(url)
    video.flipY = false

    const domoModel = useGLTF('./model/domo/domo.glb')

    return <>
        <group {...props}>
            <mesh geometry={domoModel.nodes.DoorDomo.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.DoorGallery.geometry} material={domoModel.materials.MetalGray} />
            <mesh receiveShadow geometry={domoModel.nodes.FloorDomo.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.GrayStructure.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.RedStructure.geometry} material={domoModel.materials.MetalRed} />
            <mesh geometry={domoModel.nodes.Screen.geometry}>
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
        </group>

    </>
}

useGLTF.preload('./model/domo/domo.glb')