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

    const { nodes, materials } = useGLTF('./model/domo/domo.glb')
    console.log(materials);
    return <>
        <ambientLight intensity={0.5}></ambientLight>
        <directionalLight color="white" intensity={2.0} position={[2, 1, 2]} />

        <OrbitControls
            enableDamping={true}
            minDistance={0}
            maxDistance={0.5}
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI * 0.5 - 0.5}
            maxPolarAngle={Math.PI}
        />
        <Center>
            <mesh
                geometry={nodes.Floor.geometry}
                material={materials.MetalGray}
            >
            </mesh>
            <mesh
                geometry={nodes.Top.geometry}
                material={materials.MetalGray}
            >
            </mesh>
            <mesh
                geometry={nodes.BottomStructure.geometry}
                material={materials.MetalRed}
            >
            </mesh>
            <mesh
                geometry={nodes.Screen.geometry}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                geometry={nodes.TopStructure.geometry}
                material={materials.MetalRed}
            >
            </mesh>
        </Center>
    </>
}