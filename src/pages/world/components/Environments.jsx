import { Environment, Sky, Stars } from "@react-three/drei"

const Environments = () => {

    return <>
        <ambientLight intensity={0.5} />
        <Environment preset="forest"/>
        <Sky />
    </>
}

export default Environments;