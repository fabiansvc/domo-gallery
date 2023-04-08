import { Center, PointerLockControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier';
import Environments from './utils/Environments';
import Domo from './world/Domo';
import Gallery from './world/Gallery';
import PhysicsBodies from './utils/PhysicsBodies';
import Player from './utils/Player';
import Avatar from './world/Avatar';
import Info from './world/Info';

export default function Experience() {
    return <>
        <Physics gravity={[0, - 9.08, 0]}>
            {/* <Debug /> */}
            <Environments />
            <Center>
                <Gallery />
                <Info position={[-8, 2, -4.5]} args={[2.5, 2.5]} rotation={[0, -Math.PI / 2, 0]}/>
                <Avatar type="woman" urlAvatar={"/static/model/avatar/avatar1.glb"} position={[0, 0, 1]} rotation={[0, Math.PI / 3, 0]} />
                <Avatar type="men" urlAvatar={"/static/model/avatar/avatar2.glb"} position={[0, 0, -1]} rotation={[0, (3 * Math.PI) / 4, 0]} />
                <Avatar type="men" urlAvatar={"/static/model/avatar/avatar3.glb"} position={[-18, 0, 1]} rotation={[0, Math.PI/4, 0]} />
                <Avatar type="woman" urlAvatar={"/static/model/avatar/avatar4.glb"} position={[-15, 0, -6]} rotation={[0, (5 * Math.PI)/6, 0]} />
                <Domo />
                <PhysicsBodies />
            </Center>
            <PointerLockControls />
            <Player />
        </Physics>
    </>
}