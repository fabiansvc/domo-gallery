import { Center, useGLTF, OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import url from "../static/video/university.mp4";

export default function Experience() {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = url;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    const { nodes, materials } = useGLTF('./model/domo.glb')

    return <>
        <ambientLight intensity={0.5}></ambientLight>
        <directionalLight color="white" intensity={2.0} position={[2, 1, 2]} />
        
        <OrbitControls
            enableDamping={true}
            minDistance={0}
            maxDistance={0.5}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI * 0.5 - 0.5}
            maxPolarAngle={Math.PI}
        />
        <Center>
            <mesh
                geometry={nodes.sphere.geometry}
                material={materials.gray}>
            </mesh>
            <mesh geometry={nodes.panel.geometry}>
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshBasicMaterial>
            </mesh>
        </Center>
    </>
}