import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl = "https://storage.googleapis.com/domogallery/video180.mp4"

    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = videoUrl;
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.preload = 'none';
        vid.pause()
        return vid;
    }, []);

    useEffect(()=>{
        video.play()
    }, [video])
    return (
        <group dispose={null}>
            <group>
                <mesh
                    geometry={nodes.Domo_1.geometry}
                    material={materials.MetalGray}
                />
                <mesh
                    geometry={nodes.Domo_2.geometry}
                    material={materials.MetalRed}
                />
            </group>
            <mesh
                geometry={nodes.ScreenDomo.geometry}
                material={nodes.ScreenDomo.material}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}
export default Domo;

useGLTF.preload('/static/model/domo/domo.glb')
