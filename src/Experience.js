import { Center } from '@react-three/drei'
import Gallery from './Gallery';
import Domo from './Domo';
import Controls from './Controls';
import Environments from './Environments';
import Debug from './Debug';

export default function Experience() {
    return <>
        <Debug />
        <Controls/>
        <Environments />
        <Center>
            {/* <Avatar /> */}
            <Gallery />
            <Domo />
        </Center>
        
    </>
}