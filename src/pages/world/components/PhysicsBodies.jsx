import { CuboidCollider, RigidBody } from "@react-three/rapier";

const ColliderConfig = [
    { name: 'rigidPosAxisX', type: 'fixed', colliders: [[0.1, 1, 3], [-8, 1, -4.5], [-8, 1, 4.5], [-18, 1, 3], [-18, 1, -3]] },
    { name: 'rigidNegAxisX', type: 'fixed', colliders: [[0.1, 1, 0.75], [-3, 1, 2.25], [-3, 1, -2.25], [-24, 1, 0], [-14, 1, 3], [-14, 1, -3]] },
    { name: 'rigidPosAxisZ', type: 'fixed', colliders: [[3, 1, 0.1], [0, 1, 3], [2.5, 1, 0.1], [-5.5, 1, 1.4], [8, 1, 0.1], [-16, 1, 8], [2, 1, 0.1], [-16, 1, -3.25], [-16, 1, 2.75]] },
    { name: 'rigidNegAxisZ', type: 'fixed', colliders: [[3, 1, 0.1], [0, 1, -3], [2.5, 1, 0.1], [-5.5, 1, -1.4], [8, 1, 0.1], [-16, 1, -8], [2, 1, 0.1], [-16, 1, -2.75], [-16, 1, 3.25]] }
];

const CuboidColliderElement = ({ args, position }) => (
    <CuboidCollider args={args} position={position} />
);

const PhysicsBodies = () => {
    return (
        <>
            {ColliderConfig.map((body, index) => (
                <RigidBody key={index} name={body.name} type={body.type}>
                    {body.colliders.map((collider, idx) => (
                        <CuboidColliderElement key={idx} args={collider.slice(0, 3)} position={collider.slice(3)} />
                    ))}
                </RigidBody>
            ))}
        </>
    );
}

export default PhysicsBodies;
