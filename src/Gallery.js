import { useGLTF } from "@react-three/drei"
import { useRef, useState } from "react"

export default function Gallery(props) {
    const video1Ref = useRef()

    let videoPlayed = true

    const [video1] = useState(() => {
        const vid = document.createElement("video");
        vid.src = "./video/video1.mp4";
        vid.crossOrigin = "Anonymous";
        vid.loop = false;
        vid.muted = false;
        vid.pause();
        return vid;
    });

    const { nodes, materials } = useGLTF('./model/gallery/gallery.glb')

    const eventHandler = (event) => {
        if (videoPlayed) {
            video1.play()
            videoPlayed = false
        } else {
            video1.pause()
            videoPlayed = true
        }

        event.stopPropagation()
    }
    return <>
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TopGallery.geometry}
                material={materials.wall}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RoomGallery.geometry}
                material={materials.wall}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PortalGallery.geometry}
                material={materials.wall}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WindowsGallery.geometry}
                material={materials.GlassMaterial}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FloorGallery.geometry}
                material={materials.Floor}
            />
            <mesh
                ref={video1Ref}
                geometry={nodes.Video6.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[video1]} />
                </meshBasicMaterial>
            </mesh>

        </group>


    </>
}
useGLTF.preload('./model/gallery/gallery.glb')
