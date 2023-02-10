import { Center } from '@react-three/drei'
import Gallery from './Gallery';
import Domo from './Domo';
import Controls from './Controls';
import Environments from './Environments';
import Debug from './Debug';
import Avatar from './Avatar';

export default function Experience() {

    return <>
        <Debug />
        <Environments />
        <Controls />

        <Center>
            <Gallery />
            <Domo />
            <Avatar/>
        </Center>
    </>
}