import Ecctrl from "ecctrl";

export default function Player() {
    
    return (
        <Ecctrl
            position={[2, 2, -2]}
            camInitDis={-0.1}
            maxVelLimit={6}
            rotation={[0, Math.PI * 0.75, 0]}
            capsuleHalfHeight={0.5}
        />
    );
};