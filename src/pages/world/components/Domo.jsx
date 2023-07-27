import { useGLTF } from "@react-three/drei";
import { useState } from "react";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl ="https://storage.googleapis.com/domogallery/video180.mp4"

    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = videoUrl;
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.preload = 'auto';
        vid.play();
        return vid;
    });



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
                  <meshStandardMaterial>
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshStandardMaterial>
            </mesh>
        </group>
    )
}
export default Domo;

useGLTF.preload('/static/model/domo/domo.glb')
