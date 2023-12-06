import { Canvas } from "@react-three/fiber";
import "./not-found.css";
import { Text } from "@react-three/drei";
import { Perf } from "r3f-perf";

const NotFound = () => {
    return (
        <div className="container-not-found">
            <Canvas>
                <Perf position={"top-left"} />
                <Text
                    color={"#ffffff"}
                >
                    404 Not Found
                </Text>
            </Canvas>
        </div>
    )
};
export default NotFound;