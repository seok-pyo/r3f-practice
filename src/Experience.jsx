import { useThree, extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();
  // delta time
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y -= delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color='orange' />
        </mesh>

        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.23}
          position-x={2}
          scale={1.5}
        >
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry scale={1.5} />
          <meshBasicMaterial color='blue' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color='greenyellow' />
      </mesh>
    </>
  );
}
