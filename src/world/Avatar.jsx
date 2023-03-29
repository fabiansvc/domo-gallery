import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

let url = ""

export default function Avatar(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF(props.urlAvatar);
    const { animations } = useGLTF((props.type == "men")? "/static/animations/menAnimations.glb": "/static/animations/womanAnimations.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const action = actions.Idle
        action.play()
    }, [])

    url = props.urlAvatar
    return (
        <group ref={group} {...props}>
            <group name="Scene">
                <group name="Armature">
                    <primitive object={nodes.Hips} />
                    <skinnedMesh
                        name="Wolf3D_Avatar"
                        geometry={nodes.Wolf3D_Avatar.geometry}
                        material={materials.Wolf3D_Avatar}
                        skeleton={nodes.Wolf3D_Avatar.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(url);