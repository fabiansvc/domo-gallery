import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useState } from "react"

export default function Gallery(props) {
    //Carga modelo
    const { nodes, materials } = useGLTF('/static/model/gallery/gallery.glb')

    const poster1Ref = useRef()
    const poster2Ref = useRef()
    const poster3Ref = useRef()
    const poster4Ref = useRef()
    const poster5Ref = useRef()
    const poster6Ref = useRef()
    const poster7Ref = useRef()
    const poster8Ref = useRef()
    const poster9Ref = useRef()
    const poster10Ref = useRef()

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
        hiddenPoster(event.object.name, false)
        event.stopPropagation()
        if (!videoPlayed) {
            currentVideo.play()
            videosPlayedNow.push(currentVideo)
            pauseVideosPlayedNow(currentVideo)
            videoPlayed = true
        } else {
            currentVideo.pause()
            hiddenPoster(event.object.name, true)
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

    const hiddenPoster = (poster, status) => {
        switch (poster) {
            case "video1":
                poster1Ref.current.visible = status
                break;
            case "video2":
                poster2Ref.current.visible = status
                break;
            case "video3":
                poster3Ref.current.visible = status
                break;
            case "video4":
                poster4Ref.current.visible = status
                break;
            case "video5":
                poster5Ref.current.visible = status
                break;
            case "video6":
                poster6Ref.current.visible = status
                break;
            case "video7":
                poster7Ref.current.visible = status
                break;
            case "video8":
                poster8Ref.current.visible = status
                break;
            case "video9":
                poster9Ref.current.visible = status
                break;
            case "video10":
                poster10Ref.current.visible = status
                break;
            default:
                break;
        }
    }

    return <>
        <group >
            <mesh
                geometry={nodes.TopGallery.geometry}
                material={materials.wall}
            />
            <mesh
                geometry={nodes.RoomGallery.geometry}
                material={materials.wall}
            />
            <mesh
                geometry={nodes.Frames.geometry}
                material={materials.FrameMaterial}
            />
            <mesh
                geometry={nodes.FloorGallery.geometry}
                material={materials.Floor}
            />
            <mesh
                name="video1"
                geometry={nodes.Video1.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video1]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video2"
                geometry={nodes.Video2.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video2]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video3"
                geometry={nodes.Video3.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video3]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video4"
                geometry={nodes.Video4.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video4]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video5"
                geometry={nodes.Video5.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video5]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video6"
                geometry={nodes.Video6.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video6]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video7"
                geometry={nodes.Video7.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video7]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video8"
                geometry={nodes.Video8.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video8]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video9"
                geometry={nodes.Video9.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video9]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video10"
                geometry={nodes.Video10.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video10]} />
                </meshBasicMaterial>
            </mesh>

            <mesh
                ref={poster7Ref}
                geometry={nodes.Poster7.geometry}
                material={materials.poster7}
            />
            <mesh
                ref={poster8Ref}
                geometry={nodes.Poster8.geometry}
                material={materials.poster8}
            />
            <mesh
                ref={poster10Ref}
                geometry={nodes.Poster10.geometry}
                material={materials.poster10}
            />
            <mesh
                ref={poster9Ref}
                geometry={nodes.Poster9.geometry}
                material={materials.poster9}
            />
            <mesh
                ref={poster1Ref}
                geometry={nodes.Poster1.geometry}
                material={materials.poster1}
            />
            <mesh
                ref={poster2Ref}
                geometry={nodes.Poster2.geometry}
                material={materials.poster2}
            />
            <mesh
                ref={poster3Ref}
                geometry={nodes.Poster3.geometry}
                material={materials.poster3}
            />
            <mesh
                ref={poster4Ref}
                geometry={nodes.Poster4.geometry}
                material={materials.poster4}
            />
            <mesh
                ref={poster5Ref}
                geometry={nodes.Poster5.geometry}
                material={materials.poster5}
            />
            <mesh
                ref={poster6Ref}
                geometry={nodes.Poster6.geometry}
                material={materials.poster6}
            />
        </group>
    </>
}
useGLTF.preload('/static/model/gallery/gallery.glb')
