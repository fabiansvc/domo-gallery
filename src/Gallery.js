import { useGLTF, useTexture } from "@react-three/drei"
import { useRef } from "react"

export default function Gallery(props) {

    const galleryRef = useRef()

    const galleryModel = useGLTF('./model/gallery/gallery.glb')
    const bakedGalleryTexture = useTexture('./textures/gallery/bakedGallery.jpg')
    bakedGalleryTexture.flipY = false

    return <>
        <group {...props}>
            <mesh ref={galleryRef} geometry={galleryModel.nodes.BakedGallery.geometry}>
                <meshBasicMaterial map={bakedGalleryTexture} />
            </mesh>
        </group>

    </>
}
useGLTF.preload('./model/gallery/gallery.glb')