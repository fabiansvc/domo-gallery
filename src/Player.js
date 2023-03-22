import * as THREE from "three"
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CuboidCollider, RigidBody, vec3 } from "@react-three/rapier"
import { useRef } from "react"

// Temporary data
let walkDirection = new THREE.Vector3()
let rotateAngle = new THREE.Vector3(0, 1, 0)
let collide = false
// Constants
const walkVelocity = 2
let moveX, moveY, moveZ = 0

export function Player() {
    const rigidBody = useRef()

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
        if (!collide && (forward || backward || left || right)) {

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
        } else if (collide) {
            rigidBody.current.setTranslation(state.camera.position, true)
        }
    })
    return <>
        <RigidBody
            ref={rigidBody}
            position={[1, 0, 0]}
            gravityScale={1}
            restitution={0}
            friction={0.7}
            colliders={false}
            onCollisionEnter={() => { collide = true }}
            onCollisionExit={() => { collide = false }}
        >
            <CuboidCollider mass={0} args={[0.1, 0.1, 0.1]} />
        </RigidBody>
    </>
}