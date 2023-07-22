import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { VideoTexture } from "three";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const expressUrl = "http://localhost:8080/";
    const videoUrl = "https://youtu.be/xe8i2O3cdOkA";

    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = `${expressUrl}?url=${videoUrl}`;
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.play();
        return vid;
    });

    const videoTexture = useRef(new VideoTexture(video));
    videoTexture.current.flipY = false;

    return (
        <group dispose={null}>
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
                <meshStandardMaterial map={videoTexture.current}/>
            </mesh>
        </group>
    )
}
export default Domo;

useGLTF.preload('/static/model/domo/domo.glb')
