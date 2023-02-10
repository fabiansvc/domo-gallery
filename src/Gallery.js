import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei"

export default function Gallery(props) {

    const video1 = useVideoTexture("./video/Hoy.mp4", {muted: false, start: false})
    video1.flipY = false

    const video2 = useVideoTexture("./video/Empanadas.mp4", {muted: false, start: false})
    video2.flipY = false

    const galleryModel = useGLTF('./model/gallery/gallery.glb')
    // const bakedGalleryTexture = useTexture('./textures/gallery/bakedGallery.jpg')
    // bakedGalleryTexture.flipY = false

    return <>
        {/* <group {...props}>
            <mesh geometry={galleryModel.nodes.BakedGallery.geometry}>
                <meshBasicMaterial map={bakedGalleryTexture} />
            </mesh>
        </group> */}

        <group {...props}>
            <mesh geometry={galleryModel.nodes.FloorGallery.geometry} material={galleryModel.materials.wall} />
            <mesh geometry={galleryModel.nodes.RoomGallery.geometry} material={galleryModel.materials.wall} />
            <mesh geometry={galleryModel.nodes.TopGallery.geometry} material={galleryModel.materials.wall} />
            <mesh geometry={galleryModel.nodes.Video1.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video2.geometry}>
                <meshBasicMaterial map={video2} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video3.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video4.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video5.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video6.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video7.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video8.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video9.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
            <mesh geometry={galleryModel.nodes.Video10.geometry}>
                <meshBasicMaterial map={video1} toneMapped={false} />
            </mesh>
        </group>
    </>
}
useGLTF.preload('./model/gallery/gallery.glb')
