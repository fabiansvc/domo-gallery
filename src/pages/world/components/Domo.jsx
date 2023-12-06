import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useState, useEffect } from "react";

export default function Domo({domoRef}) {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl = "https://storage.googleapis.com/domogallery/video180.mp4"

    const [video, setVideo] = useState(null);

    useEffect(() => {
            const vid = document.createElement('video');
            vid.src = videoUrl;
            vid.loop = true;
            vid.muted = true;
            vid.crossOrigin = 'anonymous';
            vid.preload = 'none';
            vid.play();
            setVideo(vid);
    }, []);

    return (
        <group ref={domoRef} dispose={null}>
            <RigidBody colliders="trimesh" type="fixed" friction={0.7}>
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
            </RigidBody>

            <mesh
                geometry={nodes.ScreenDomo.geometry}
                material={nodes.ScreenDomo.material}
            >
                {video && (
                    <meshBasicMaterial>
                        <videoTexture flipY={false} attach="map" args={[video]} />
                    </meshBasicMaterial>
                )}
            </mesh>
        </group>
    )
}

useGLTF.preload('/static/model/domo/domo.glb')
