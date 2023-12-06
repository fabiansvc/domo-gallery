import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Quaternion, Vector3 } from 'three';
import { useKeyboardControls } from '@react-three/drei';

export default function Player() {
    const avatarBodyRef = useRef();
    const [, get] = useKeyboardControls();
    const { camera } = useThree();
    const desiredDistance = 0;
    const velocity = 5;
    const walkDirection = new Vector3();
    const rotateAngle = new Vector3(0, 1, 0);
    let rotateQuarternion = new Quaternion();

    const getDirectionOffset = (forward, backward, left, right) => {
        if (forward && left) return Math.PI / 4;
        if (forward && right) return -Math.PI / 4;
        if (backward && left) return 3 * Math.PI / 4;
        if (backward && right) return -3 * Math.PI / 4;
        if (forward) return 0;
        if (backward) return Math.PI;
        if (left) return Math.PI / 2;
        if (right) return -Math.PI / 2;
        return 0;
    };

    const move = (delta) => {
        const { forward, backward, left, right } = get();
        if (forward || backward || left || right) {
            const directionOffset = getDirectionOffset(forward, backward, left, right);
            const currentTranslation = avatarBodyRef.current.translation();

            const angleYCameraDirection = Math.atan2(
                camera.position.x - currentTranslation.x,
                camera.position.z - currentTranslation.z
            );

            rotateQuarternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + Math.PI + directionOffset);

            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, directionOffset);

            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            const moveY = 0;

            const newPosition = new Vector3(
                currentTranslation.x + moveX,
                currentTranslation.y,
                currentTranslation.z + moveZ
            );

            avatarBodyRef.current.setTranslation({
                x: newPosition.x,
                y: newPosition.y,
                z: newPosition.z,
            }, true);

            avatarBodyRef.current.setRotation(new Quaternion(0, avatarBodyRef.current.rotation().y, 0, 1).normalize());

            camera.position.add(new Vector3(moveX, moveY, moveZ));
            const avatarPosition = new Vector3(newPosition.x, newPosition.y + 1, newPosition.z);
            const cameraPosition = new Vector3().copy(camera.position);
            const direction = cameraPosition.sub(avatarPosition).normalize();
            const newCameraPosition = avatarPosition.add(direction.multiplyScalar(desiredDistance));
            camera.position.copy(newCameraPosition);
        }
        const pressed = get().back
    }

    useFrame((state, delta) => {
        move(delta);
    });

    return (
        <RigidBody
            ref={avatarBodyRef}
            restitution={0}
            position = {[camera.position.x, 1.5, camera.position.z]}
        >
            <CuboidCollider args={[0.5, 0.4, 0.5]} />
        </RigidBody>
    );
};