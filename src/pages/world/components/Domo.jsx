import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { VideoTexture } from "three";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl ="https://ffc9a5337e41bc5b8bb9a7e7c2f59fdc4882d45dd8b2a00acc709d0-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video180.mp4?jk=AYvHSRHYjljr5tzJ03gJWw3SSYyPcLZnq_MMUP70BXRHlfiRuyp6njWHnPcSJ9TzbF4szjBDZFkadcfyhRPHgAPk-t3HfBODZD0HSqKXydXyqOMItPaWhEXdPK1RVd5FPc3mmpucINGxF5p5v5e8qRLskFbP_kEW3vwPNRyYYoo4u5kK4R45sXSb1Cd8IJJXTRtvRkhdk05bn9VK0sao2S__wMR7fJb5isPlrNtCu8XyqESkSKNYEpQTfTXQRO9KAv4J07OWRtbYnFAt-kjkelTSy2lctmL0hfJbzdFJCDvZ8uQkGqYQI4JqBhqdsYDZl04VVavVkCjsX0dxovXpic7m0pN9x8jFj27mDsNWbz5sBZirHoGKAvwAZeOHuZJ1-fuQONo3YIe3vajZC_pFXiZr6y_Uva_HKA6btaT6td9Cnc8wGvJIm-Uvn8iiSYvZjBlLrzJbvqzkn5gAYWgtnaJWHUkRT6CuZVA0GlLacN9O5eS4tndhodLSjdosEjcJF5por7M7pstJ4_jUufq_RXT8WQwubTa584cBpSjBHp5ykrlTUe-K-1mKu9o3Xw5bM--rxNblkhwYpv611s7WLWEFVHwct8wZWqjYEl_HfOX-xI_NLDDl_N19hYK8GENtcJnZRCuBG1D6B0_Nk4oGZDkD_dTSwbD-skYAKTgahB6TYRLSMKYtFemKiDOaqK9duQ-cnaST5QVIi6FVOgNpNkmsxhUGFcyVW-GQPxhvOU5V4LBJnNaUr27K2bwrxUQJT7rILVbBcoClaHoIqk6vHZl_UxDfo6rMkafydZzGnwwe1oj6ytODIGhjQbUXDNgRIkqtd4s3DL2wkuLw_7xDAusRfyB8aQH_TcUNniUes9tq1-LkjrUehsHLfAG8hmODigKdHgaeqD2XszKQnwwGdoIjusQSGVWTBrV8QZIqS2TYNSu39CJYnI2IrIrTw5w5VGhlb0HTumlQROcXjVwEdGYVie1b2J1c7w4WbQostCZb6dsLjqomUeXyLZfagTDBAkdoqWkURCxt7IeSdDs71GDOvdfcdsbFATgct5ZK_4YM72ittrvrIVB5tCkfaGlWzMOZQ-Hop5_oK22jxQgj4TjhzhUgXHFzMSJZ-rr42nKk0-gfaFSYS7acLB99m0Cts8p1a9He9An4m9r9Ah7typy2R2OJfUlE_k8oPPShVOWj65rPdY7ANv7I-aJCHdVEAkdqvHcq1OyecGy4CRJ4yoNryAhDTkPK2IKrD08cxLYGXgQOSIhgk5cTz4fFkKVcwiM&isca=1"

    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = videoUrl;
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.play();
        return vid;
    });

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.FloorDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.GrayStructureDomo.geometry}
                material={materials.MetalGray}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.RedStructureDomo.geometry}
                material={materials.MetalRed}
                position={[0, -2, 0]}
            />
            <mesh
                geometry={nodes.WallDomo.geometry}
                material={materials.MetalGray}
            />
            <mesh
                geometry={nodes.StreetOut.geometry}
                material={materials.MetalRed}
            />
            <mesh
                geometry={nodes.StreetInner.geometry}
                material={materials.MetalRed}
            />
            <mesh
                geometry={nodes.ScreenDomo.geometry}
                material={materials.MetalGray}
            >
                  <meshStandardMaterial>
                    <videoTexture flipY={false} attach="map" args={[video]} />
                </meshStandardMaterial>
            </mesh>
        </group>
    )
}
export default Domo;

useGLTF.preload('/static/model/domo/domo.glb')
