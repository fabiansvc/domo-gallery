import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

let url = ""

const Avatar = (props) => {
    const avatarRef = useRef()
    const { nodes, materials } = useGLTF(props.urlAvatar);
    const type = nodes.Wolf3D_Avatar.geometry.boundingBox.max.y > 1.80 ? "man" : "woman"
    const { animations } = useGLTF((type == "man") ? "/static/animations/menAnimations.glb" : "/static/animations/womanAnimations.glb");
    const { actions } = useAnimations(animations, avatarRef);

    useEffect(() => {
        if(actions){
            const action = actions.Idle
            action.play()
        }
    }, [actions])

    url = props.urlAvatar

    return (
        <group ref={avatarRef} {...props} dispose={null}>
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
                {nodes.Wolf3D_Avatar_Transparent && (
                    <skinnedMesh
                        geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
                        material={materials.Wolf3D_Avatar_Transparent}
                        skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
                    />
                )}
            </group>
        </group>
    );
}
export default Avatar;

useGLTF.preload(url);