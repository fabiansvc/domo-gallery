import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { VideoTexture } from "three";

const Domo = () => {
    const { nodes, materials } = useGLTF('/static/model/domo/domo.glb')
    const videoUrl = "https://ff4777248bf443185e75eadf75106dc90cc14e408bf1485d258f37b-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video180.mp4?jk=AYvHSREf2DGYGfTy9HpsQmt4ThPAxjaCidO5k3BnBrWAsdmnXxuSU9vpZwqBNl8xF35yQ_PN-hiTkrDJQw-pf9K3SdDAw5HoXKYgKEwPZW0T8Rpkhg8I0ZU7eQmP2gQcWTMbNeSpP4CHxcBy58iuaePQn8n6YbULXMUf-byT_fZVrsLCojlvHG7wboGIberdN5xtCEHZHBAFKAvOUAoPZUvcAOmwFX2yvjdZxV4SF9yq_B81y4RxYU3X0Sk8_jdWu015B3843wp0cEIXeO7X6xx_ZSAnSYxsqEaW-QznE4Gt5I7xEACoU8Qcu-YHuJiIQmP9y-BA3y2BfKurV9WdB06WnvYkv__vC5JrEr9_rO3JJXnqyh0sUoGaZq-k0rmIikPYwg1UlW1kGVArzbBnjLDl6Yy9t01cA12U1vycI1yF8W6cRtmCRpQD5WjLWX7KEF3UOaohiEuTO1-EweqchlC5-XbyWAL9GuFmMiYlPEhElhE--6C2qMhzwXX2bT6k4H7d9381ffFUrKYzQISa1_jtQhtSA2YsEqBUZZHwJcVhIUyNWeOi_IMO_pn5aMPRRUgQDMHb__PoOK_EAohloIrFOwWFk2CFzD7IbVnRez8tPyiLEJS0HsS8ZlTjXrj4Ib4ioUQwjGVAkINXCjFAJEg4_oqk-TA29OrWWvKfoRx7nVEpTIXnb_moPlFNmzA_HhmGf7UnyY1fiSCMLB7BBp_cdOMPxQrev6WiG56PMFavLzbvHcy-p1YKIY9iZiCf1sfxiAM1rG0NnceyWmqAE-5yLUe0WMbxbGqW9n9WiUV1hXpvz_JZjNuXuU4yWLHtbvGLoVIRxUaVqmkVGhbKMEHIEMSxmyEEMdX0LLSOh4QJZSL9FDlpCiFStr_kkATUkE25Nn2vpF4_pjFVidids4WefRbSrdPXMyI33msaTTL2kzcegjdtvbpKBeKI8yiKHBv9mxGTk0OkG1Fknldy9vc1aQRERHQn0EO185ykz8bBskRnhceVXOZZ9bce5427dspAQP76tQLLLcA86zKB1eLYa3dFkKa0TOmSlmhSE0U51RuvMafprF97O0Ibk3j0UW5iXuC_cmLBGYT3eZOxHr1cmtJnTpTNt7yUUxmvSPTBIc-nf90j_57QPkZj9xZge-DsDyhN-sNYowZVn1KqDtQ0jOaNqk_uzErWk5kbIYnbto52ZQ8UM6_d_Kn7LbtskfgpylD2iSWIekKSMSYABF62N9z7JJf5q0toURzpTL5GQcFNmE1PHlpI3SSi_Hahq74&isca=1'";

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
