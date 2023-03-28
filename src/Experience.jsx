import { Center, PointerLockControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier';
import Environments from './utils/Environments';
import Domo from './world/Domo';
import Gallery from './world/Gallery';
import PhysicsBodies from './utils/PhysicsBodies';
import Player from './utils/Player';
import Avatar from './world/Avatar';

export default function Experience() {
    return <>
        <Physics gravity={[0, - 9.08, 0]}>
            {/* <Debug /> */}
            <Environments />
            <Center>
                <Domo />
                <Gallery />
                <Avatar type="woman" urlAvatar={"/static/model/avatar/avatar1.glb"} position={[0, 0, 1]} rotation={[0, (3 * Math.PI) / 4, 0]} />
                <Avatar type="men" urlAvatar={"/static/model/avatar/avatar2.glb"} position={[0, 0, -1]} rotation={[0, (3 * Math.PI) / 4, 0]} />
                <Avatar type="men" urlAvatar={"/static/model/avatar/avatar3.glb"} position={[-16, 0, 1]} rotation={[0, 2 * Math.PI, 0]} />
                <Avatar type="woman" urlAvatar={"/static/model/avatar/avatar4.glb"} position={[-13, 0, -6]} rotation={[0, Math.PI, 0]} />
                <PhysicsBodies />
            </Center>
            <PointerLockControls />
            <Player />
        </Physics>
    </>
}