import { Sky } from "@react-three/drei"

const Environments = () => {

    return <>
        <ambientLight intensity={0.1} />
        <pointLight position={[16, 2, 0]} intensity={0.2} />
        <pointLight position={[-1, -2, -6]} intensity={0.2} />
        <pointLight position={[-12, -2, 6]} intensity={0.2} />
        <Sky />
    </>
}

export default Environments;