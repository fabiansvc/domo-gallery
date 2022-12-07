import { Center, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{
    const { nodes, materials } = useGLTF('./model/domo.glb')
    console.log(nodes);
    return <>
        <ambientLight intensity={1.0}></ambientLight>
        <directionalLight color="white" intensity={2.0} position={[2, 1, 2]} />
        <OrbitControls 
            enableDamping = {true}
            minDistance = {0}
            maxDistance = {0.5}
            enablePan = {false}
            enableZoom = {false} 
            minPolarAngle = {Math.PI * 0.5 -0.5}
            maxPolarAngle = {Math.PI }
            
        />
        <Center>
            <mesh 
            geometry={ nodes.sphere.geometry }
            material={materials.gray}>
            </mesh>
        </Center>       
    </>
}