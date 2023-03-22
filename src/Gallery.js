import { useGLTF } from "@react-three/drei"
import { useState } from "react"

export default function Gallery(props) {
    //Carga modelo
    const { nodes, materials } = useGLTF('/static/model/gallery/gallery.glb')

    // Carga Videos
    const videos = []
    for (let index = 1; index < 11; index++) {
        const [video] = useState(() => {
            const vid = document.createElement("video");
            vid.src = `/static/video/video${index}.mp4`;
            vid.crossOrigin = "Anonymous";
            vid.loop = false;
            vid.muted = false;
            vid.pause();
            return vid;
        });
        videos[`video${index}`] = video
    }

    // Evento videos
    let currentVideo = null
    let videoPlayed = false
    let videosPlayedNow = []

    const eventHandler = (event) => {
        currentVideo = videos[event.object.name]
        event.stopPropagation()
        if (!videoPlayed) {

            currentVideo.play()
            videosPlayedNow.push(currentVideo)
            pauseVideosPlayedNow(currentVideo)
            videoPlayed = true
        } else {
            currentVideo.pause()
            videoPlayed = false
        }
    }

    const pauseVideosPlayedNow = (currentVideo) => {
        videosPlayedNow.map((video) => {
            if (!(currentVideo == video)) {
                video.pause()
            }
        })
    }

    return <>
        <group {...props} >
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
                geometry={nodes.Frames.geometry}
                material={materials.FrameMaterial}
            />
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
                geometry={nodes.Frames.geometry}
                material={materials.FrameMaterial}
            />
            <mesh
                name="video1"
                geometry={nodes.Video1.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video1]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video2"
                geometry={nodes.Video2.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video2]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video3"
                geometry={nodes.Video3.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video3]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video4"
                geometry={nodes.Video4.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video4]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video5"
                geometry={nodes.Video5.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video5]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video6"
                geometry={nodes.Video6.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video6]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video7"
                geometry={nodes.Video7.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video7]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video8"
                geometry={nodes.Video8.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video8]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video9"
                geometry={nodes.Video9.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video9]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video10"
                geometry={nodes.Video10.geometry}
                onClick={eventHandler}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video10]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FloorGallery.geometry}
                material={materials.Floor}
            />
        </group>
    </>
}
useGLTF.preload('./model/gallery/gallery.glb')
