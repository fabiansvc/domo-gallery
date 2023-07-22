import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { VideoTexture } from "three";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl = "https://ff80e3f1e1ebb6463d7dff6aabe20f79d1cbd598ea3c0ee48652d32-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video180.mp4?jk=AYvHSRG0ELR8P7rlVxc6CesHINv_81Fx-vW2Ef3vUODm_aSf6YdcjrrqOBdOISjTUVPPjQ2IaUZ6D5Rt_YvlAwDXx_zp7qA1e7_NGC45kzja-S_HO2l9_DDJrS7Me17SbsKVJ3dZR9VsoFcP8KTiJHXaA9oFWBx5txLxfZbILlVO4Azuxbe_SdrqWqMciraULYXwtnXnEMt4H7l4-qlN1Z82ocF5JWkRzrsjCkn1PK00KtPMtQVWmca2-I_Gf3eX2HD7qw6Cobc-aN9wXeqM1_hl5ztNYJ2QedDTkASQ6K9agN3jETOMYsPMkPNUVdKGb0ix5oKhHfVl9000Ric1b5VcV7ydry6hYS1MryMv1Woq5pFX8DMbo6dAHGcbk5HMbc7-XLstFzE2i2hrzP2afHM0PpwImbrmNhwZTd_iB1herHZEBdvl_v5iTWD10NQJ9bQWqxM0x8XuAIwT8IFPr9xr8IlRCyDI25maJ_CyUcIPI3spKNXjYj-_FcwaoTdgkC4cGSO1KNkYOl7YlwGT8T-LMOyijCpcdeBNKoIEGCn6HbRbZBprem4NlrroG3J86B6JKExdpJq-uUpshouWhlMzEYsFBtuHTEe5ywn102cv_ypQDdnHV4X27Cx0Ng0a6VkbVPf3IIY48S2hvG8aNqrqyANgk7UySP9ywFW7s3ncZGpLeWRacBsnLLo8IRYcnCOEShNCr-5MzZ1sjTS2ui1wMv_pjPI1gRMxxcPMWVg3sHGeTSBNF_6l0Gjv3n1xtZOkljn9TARdEBjKr7UemsNp9f_PTlnjR_kH3LqUxU3lEcCP0nIlqmsojLKdALEUtZc22lOjPjkjL8GjtNi7SFP-ZJCc3y1uLFOvEMRow3YrqVRSOI9p0uzAcGzKlr1FWvBgdpNz4NU2OLQHf7LBGyortCgTjxB6WZGnqdoQkSs7X83KUlZHJ41OjuaX_qSyJZFJJ95_cwiX9yAooV853YjJ2CmCtE9L7rmHaTW7YUFthfuKdlBMdmXg9cPxh2abFMwbr-St04U1c8raIv2TNseResinvB0gbgdMmwdxPX7KlJa0ld9iENlkQGmrTwbfKlYntOvox_7z2wnQb1VJD4ONWLzAMKvm1q0XgdLQs2q_TkuIXOSCY5dl2l_psEHAtSpZmA-ifevWbUjghLFLdOKmk4sukudwJubEvlvzeNBVy0gfuwb8DtmG9BhYdLbOIgk4nPrNm0hGfdKoWVagvdg9KUaKmF6H-88kGSYI6DQ5BtxDHoo3H57mGqA2RossrOc&isca=1";

    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = videoUrl;
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.play();
        return vid;
    });

    const videoTexture = useRef(new VideoTexture(video));
    videoTexture.current.flipY = false;

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
                <meshStandardMaterial map={videoTexture.current}/>
            </mesh>
        </group>
    )
}
export default Domo;

useGLTF.preload('/static/model/domo/domo.glb')
