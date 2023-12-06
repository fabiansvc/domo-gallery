import { Physics } from "@react-three/rapier";
import Avatar from "./components/Avatar";
import Domo from "./components/Domo";
import Environments from "./components/Environments";
import Gallery from "./components/Gallery";
import Player from "./components/Player";
import Cursor from "./components/Cursor";
import keysMovements from "../../utils/keys-movements";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Instructive from "../../components/Instructive/Instructive";
import { Perf } from "r3f-perf";

export default function World() {

    const domoRef = useRef()
    const galleryRef = useRef()

    const cameraSettings = {
        fov: 60,
        position: [2, 1.5, -2],
        rotation: [0, Math.PI * 0.75, 0]
    }

    return (
        <Suspense fallback={<Instructive />}>
            <KeyboardControls map={keysMovements}>
                <Cursor />
                <Canvas camera={cameraSettings} style={{ height: "100vh", width: "100vw" }} >
                    {/* <Perf position={"top-left"} /> */}
                    <Environments />
                    <PointerLockControls />
                    <Avatar urlAvatar={"/static/model/avatar/avatar1.glb"} position={[0, 0, 1]} rotation={[0, Math.PI / 3, 0]} />
                    <Avatar urlAvatar={"/static/model/avatar/avatar2.glb"} position={[0, 0, -1]} rotation={[0, (3 * Math.PI) / 4, 0]} />
                    <Avatar urlAvatar={"/static/model/avatar/avatar3.glb"} position={[-18, 0, 1]} rotation={[0, Math.PI / 4, 0]} />
                    <Avatar urlAvatar={"/static/model/avatar/avatar4.glb"} position={[-15, 0, -6]} rotation={[0, (5 * Math.PI) / 6, 0]} />
                    <Physics debug={true}>
                        <Domo domoRef={domoRef} />
                        <Gallery galleryRef={galleryRef} />
                        {domoRef && galleryRef ? <Player /> : null}
                    </Physics>
                </Canvas>
            </KeyboardControls>
        </Suspense>
    )
}