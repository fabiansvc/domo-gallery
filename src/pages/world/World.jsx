import { Physics } from "@react-three/rapier";
import Avatar from "./components/Avatar";
import Domo from "./components/Domo";
import Environments from "./components/Environments";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import PhysicsBodies from "./components/PhysicsBodies";
import Player from "./components/Player";
import Cursor from "./components/Cursor";
import keyboardControls from "../../utils/keyBoardControls";
import { Center, KeyboardControls, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ACESFilmicToneMapping } from "three";
import Logout from "../../components/Logout/Logout";
import Instructive from "../../components/Instructive/Instructive";

const World = () => {
    return <>
        <Suspense fallback={<Instructive />}>
            <Logout />
            <Cursor />
            <KeyboardControls
                map={keyboardControls}>
                <Canvas
                    className='canvas'
                    dpr={[1,2]}
                    flat
                    gl={
                        {
                            antialias: true,
                            toneMapping: ACESFilmicToneMapping

                        }
                    }
                    camera={{
                        fov: 50,
                        near: 0.1,
                        far: 40,
                        position: [14.25, -2.5, -5],
                        rotation: [0, Math.PI * 0.65, 0]
                    }}
                >
                        <Physics>
                            <Environments />
                            <PointerLockControls />
                            <Player />
                            <Center>
                                <PhysicsBodies />
                                <Gallery />
                                <Info position={[-8, 2, -4.5]} args={[2.5, 2.5]} rotation={[0, -Math.PI / 2, 0]} />
                                <Avatar urlAvatar={"/static/model/avatar/avatar1.glb"} position={[0, 0, 1]} rotation={[0, Math.PI / 3, 0]} />
                                <Avatar urlAvatar={"/static/model/avatar/avatar2.glb"} position={[0, 0, -1]} rotation={[0, (3 * Math.PI) / 4, 0]} />
                                <Avatar urlAvatar={"/static/model/avatar/avatar3.glb"} position={[-18, 0, 1]} rotation={[0, Math.PI / 4, 0]} />
                                <Avatar urlAvatar={"/static/model/avatar/avatar4.glb"} position={[-15, 0, -6]} rotation={[0, (5 * Math.PI) / 6, 0]} />
                                <Domo />
                            </Center>
                        </Physics>
                </Canvas>
            </KeyboardControls>
        </Suspense>
    </>
}
export default World;