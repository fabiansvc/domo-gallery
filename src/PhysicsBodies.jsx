import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function PhysicsBodies() {
    return <>
        <RigidBody name="rigidPosAxisX" type="fixed">
            <CuboidCollider args={[0.1, 1, 3]} position={[3, 1, 0]} />
            <CuboidCollider args={[0.1, 1, 3.25]} position={[-8, 1, -4.5]} />
            <CuboidCollider args={[0.1, 1, 3.25]} position={[-8, 1, 4.5]} />
            <CuboidCollider args={[0.1, 1, 0.3]} position={[-18, 1, 3]} />
            <CuboidCollider args={[0.1, 1, 0.3]} position={[-18, 1, -3]} />
        </RigidBody>
        <RigidBody name="rigidNegAxisX" type="fixed">
            <CuboidCollider args={[0.1, 1, 0.75]} position={[-3, 1, 2.25]} />
            <CuboidCollider args={[0.1, 1, 0.75]} position={[-3, 1, -2.25]} />
            <CuboidCollider args={[0.1, 1, 8]} position={[-24, 1, 0]} />
            <CuboidCollider args={[0.1, 1, 0.3]} position={[-14, 1, 3]} />
            <CuboidCollider args={[0.1, 1, 0.3]} position={[-14, 1, -3]} />
        </RigidBody>
        <RigidBody name="rigidPosAxisZ" type="fixed">
            <CuboidCollider args={[3, 1, 0.1]} position={[0, 1, 3]} />
            <CuboidCollider args={[2.5, 1, 0.1]} position={[-5.5, 1, 1.4]} />
            <CuboidCollider args={[8, 1, 0.1]} position={[-16, 1, 8]} />
            <CuboidCollider args={[2, 1, 0.1]} position={[-16, 1, -3.25]} />
            <CuboidCollider args={[2, 1, 0.1]} position={[-16, 1, 2.75]} />
        </RigidBody>
        <RigidBody name="rigidNegAxisZ" type="fixed">
            <CuboidCollider args={[3, 1, 0.1]} position={[0, 1, - 3]} />
            <CuboidCollider args={[2.5, 1, 0.1]} position={[-5.5, 1, -1.4]} />
            <CuboidCollider args={[8, 1, 0.1]} position={[-16, 1, -8]} />
            <CuboidCollider args={[2, 1, 0.1]} position={[-16, 1, -2.75]} />
            <CuboidCollider args={[2, 1, 0.1]} position={[-16, 1, 3.25]} />
        </RigidBody>
    </>
}