import { Center, PointerLockControls } from '@react-three/drei'
import Gallery from './Gallery';
import Domo from './Domo';
import Environments from './Environments';
import { Player } from './Player';
import { Physics, Debug } from '@react-three/rapier';
import { PhysicsBodies } from './PhysicsBodies';

export default function Experience() {
    return <>
        <Environments />
        <Physics gravity={[0, - 9.08, 0]}>
            {/* <Debug /> */}
            <Center>
                <Domo />
                <Gallery />
                <PhysicsBodies />
            </Center>
            <PointerLockControls />
            <Player />
        </Physics>
    </>
}