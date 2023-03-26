import * as THREE from "three"
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CuboidCollider, RigidBody, vec3 } from "@react-three/rapier"
import { useRef, useState } from "react"

export function Player() {
    const rigidBody = useRef()
    const [isCollide, setIsCollide] = useState(false);
    const [rigidNameCollide, setRigidNameCollide] = useState("");

    // Temporary data
    let walkDirection = new THREE.Vector3()
    let rotateAngle = new THREE.Vector3(0, 1, 0)

    // Constants
    const walkVelocity = 2
    let moveX, moveY, moveZ = 0
    const moveCamera = 0.5

    // Diagonal movement angle offset
    const directionOffset = (forward, backward, left, right) => {
        if (forward) {
            return 0
        } else if (backward) {
            return Math.PI
        } else if (left) {
            return Math.PI / 2
        } else if (right) {
            return -Math.PI / 2
        }
    }

    const [, get] = useKeyboardControls()

    useFrame((state, delta) => {
        const { forward, backward, left, right } = get()
        if (!isCollide && (forward || backward || left || right)) {

            // calculate direction
            state.camera.getWorldDirection(walkDirection)
            walkDirection.y = 0
            walkDirection.normalize()
            walkDirection.applyAxisAngle(rotateAngle, directionOffset(forward, backward, left, right))

            // run/walk velocity
            const velocity = walkVelocity

            // move model, pyshycs body & state.camera
            moveX = walkDirection.x * velocity * delta
            moveY = walkDirection.y * velocity * delta
            moveZ = walkDirection.z * velocity * delta

            state.camera.position.x += moveX
            state.camera.position.y += moveY
            state.camera.position.z += moveZ

            rigidBody.current.setTranslation(state.camera.position, true)
        } else if (isCollide) {
            switch (rigidNameCollide) {
                case "rigidPosAxisX":
                    rigidBody.current.setTranslation([state.camera.position.x -= moveCamera, state.camera.position.y, state.camera.position.z], true)
                    break;
                case "rigidNegAxisX":
                    rigidBody.current.setTranslation([state.camera.position.x += moveCamera, state.camera.position.y, state.camera.position.z], true)
                    break;
                case "rigidPosAxisZ":
                    rigidBody.current.setTranslation([state.camera.position.x, state.camera.position.y, state.camera.position.z -= moveCamera], true)
                    break;
                case "rigidNegAxisZ":
                    rigidBody.current.setTranslation([state.camera.position.x, state.camera.position.y, state.camera.position.z += moveCamera], true)
                    break;
                default:
                    break;
            }
            setIsCollide(false)
        }
    })

    return <>
        <RigidBody
            ref={rigidBody}
            position={[1, 0, 0]}
            gravityScale={1}
            restitution={0}
            friction={0.7}
            onCollisionEnter={({ other }) => {
                setIsCollide(true)
                if (other.rigidBodyObject)
                    setRigidNameCollide(other.rigidBodyObject.name)

            }}
            onCollisionExit={() => {
                setIsCollide(false)
            }}
        >
            <CuboidCollider mass={0} args={[0.1, 0.1, 0.1]} />
        </RigidBody>
    </>
}