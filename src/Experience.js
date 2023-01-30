import { Perf } from 'r3f-perf'
import { Center, useGLTF, OrbitControls, useTexture, useVideoTexture, useHelper } from '@react-three/drei'
import url from "../static/video/video360.mp4";
import { useRef } from 'react';
import * as THREE from 'three'

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })

export default function Experience() {
    const directionalLight = useRef();
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const video = useVideoTexture(url)
    video.flipY = false

    const galleryModel = useGLTF('./model/gallery/gallery.glb')
    const bakedGalleryTexture = useTexture('./textures/gallery/bakedGallery.jpg')
    bakedGalleryTexture.flipY = false

    const domoModel = useGLTF('./model/domo/domo.glb')

    return <>
        <Perf position="top-left"/>

        <ambientLight intensity={1}/>

        <directionalLight ref={directionalLight}            
            position={ [-10, 3, 2] }
            intensity={ 1.5 }
            castShadow
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 5 }
            shadow-camera-right={ 5 }
            shadow-camera-bottom={ - 5 }
            shadow-camera-left={ - 5 } />

        <OrbitControls
            enableDamping={false}
            minDistance={9}
            maxDistance={10}
            enablePan={true}
            enableZoom={false}
            minPolarAngle={Math.PI * 0.5}
            maxPolarAngle={Math.PI * 0.5 - 0.5}
        />
        <Center>
            <mesh geometry={galleryModel.nodes.BakedGallery.geometry}>
                <meshBasicMaterial map={bakedGalleryTexture} />
            </mesh>
            
            <mesh geometry={domoModel.nodes.DoorDomo.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.DoorGallery.geometry} material={domoModel.materials.MetalGray} />
            <mesh receiveShadow geometry={domoModel.nodes.FloorDomo.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.GrayStructure.geometry} material={domoModel.materials.MetalGray} />
            <mesh geometry={domoModel.nodes.RedStructure.geometry} material={domoModel.materials.MetalRed} />
            <mesh geometry={domoModel.nodes.Screen.geometry}>
                <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
        </Center>
    </>
}