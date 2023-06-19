import React, {useRef} from "react";
import { OrbitControls, PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Cube() {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2));

    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#FEC5E5"]} />
                    <Text ref={textRef} fontSize={3} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
}

export default Cube;