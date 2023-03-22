import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function PhysicsBodies() {
    return <>
        <RigidBody type="fixed">
            <CuboidCollider args={[3, 3, 0.1]} position={[0, 3, 3]} />
            <CuboidCollider args={[3, 3, 0.1]} position={[0, 3, - 3]} />
            <CuboidCollider args={[0.1, 3, 3]} position={[3, 3, 0]} />
            <CuboidCollider args={[0.1, 3, 0.75]} position={[- 3, 3, 2.25]} />
            <CuboidCollider args={[0.1, 3, 0.75]} position={[- 3, 3, -2.25]} />
            <CuboidCollider args={[20, 0.1, 20]} position={[0, 0, 0]} />
        </RigidBody>
    </>
}