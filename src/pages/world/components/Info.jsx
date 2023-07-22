import { useTexture } from "@react-three/drei"

const Info = (props) => {
    const infoMaterial = useTexture('/static/textures/info/info.jpg')
    return (
        <mesh position={props.position} rotation={props.rotation}>
            <planeGeometry args={props.args} />
            <meshBasicMaterial map={infoMaterial} />
        </mesh>
    )
}

export default Info;