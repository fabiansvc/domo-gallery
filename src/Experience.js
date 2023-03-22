import { Center, PointerLockControls } from '@react-three/drei'
import Gallery from './Gallery';
import Domo from './Domo';
import Environments from './Environments';
import { Player } from './Player';
import { Physics, Debug } from '@react-three/rapier';
import { Perf } from 'r3f-perf';
import { PhysicsBodies } from './PhysicsBodies';

export default function Experience() {
    return <>
        {/* <Perf position="top-left" /> */}
        <Environments />
        <Physics gravity={[0, - 9.08, 0]}>
            {/* <Debug />             */}
            <Center>
                <Domo />
                <Gallery />
            </Center>
            <PointerLockControls/>
            <Player />
        </Physics>
    </>
}