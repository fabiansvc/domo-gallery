import React, { useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function Avatar(props) {

  const group = useRef();
  const avatar = useGLTF('./model/avatar/avatar-saludando.glb')
  const animations = useAnimations(avatar.animations, avatar.scene);
  console.log(animations);
  const { animationName } = useControls({
    animationName: { options: animations.names }
  })

  animations.actions[animationName].play()

  return <>
    <group ref={group} {...props} dispose={null} position-x={-16}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={avatar.nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={avatar.nodes.Wolf3D_Glasses.geometry}
            material={avatar.materials.Wolf3D_Glasses}
            skeleton={avatar.nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={avatar.nodes.Wolf3D_Body.geometry}
            material={avatar.materials.Wolf3D_Body}
            skeleton={avatar.nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={avatar.nodes.Wolf3D_Hair.geometry}
            material={avatar.materials.Wolf3D_Hair}
            skeleton={avatar.nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={avatar.nodes.EyeLeft.geometry}
            material={avatar.materials.Wolf3D_Eye}
            skeleton={avatar.nodes.EyeLeft.skeleton}
            morphTargetDictionary={avatar.nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={avatar.nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={avatar.nodes.EyeRight.geometry}
            material={avatar.materials.Wolf3D_Eye}
            skeleton={avatar.nodes.EyeRight.skeleton}
            morphTargetDictionary={avatar.nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={avatar.nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={avatar.nodes.Wolf3D_Outfit_Footwear.geometry}
            material={avatar.materials.Wolf3D_Outfit_Footwear}
            skeleton={avatar.nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={avatar.nodes.Wolf3D_Outfit_Top.geometry}
            material={avatar.materials.Wolf3D_Outfit_Top}
            skeleton={avatar.nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={avatar.nodes.Wolf3D_Teeth.geometry}
            material={avatar.materials.Wolf3D_Teeth}
            skeleton={avatar.nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={avatar.nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={avatar.nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={avatar.nodes.Wolf3D_Head.geometry}
            material={avatar.materials.Wolf3D_Skin}
            skeleton={avatar.nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={avatar.nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={avatar.nodes.Wolf3D_Head.morphTargetInfluences}
          />
        </group>
      </group>
    </group>

  </>
}
useGLTF.preload('./model/avatar/avatar.glb')