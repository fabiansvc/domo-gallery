import { Environment, Sky } from "@react-three/drei"

export default function Environments() {
    return <>
        <ambientLight intensity={0.5} />
        <Sky /> 
       <Environment preset="forest" background={false}/>
    </>
}
