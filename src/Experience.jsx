// import { useThree, extend, useFrame } from '@react-three/fiber';
// import { useRef } from 'react';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import CustomObject from './CustomObject.jsx';

// extend({ OrbitControls });

// export default function Experience() {
//   const cubeRef = useRef();
//   const groupRef = useRef();
//   const { camera, gl } = useThree();
//   // delta time
//   useFrame((state, delta) => {
//     cubeRef.current.rotation.y += delta;

//     // const angle = state.clock.elapsedTime;
//     // state.camera.position.x = Math.sin(angle) * 8;
//     // state.camera.position.z = Math.cos(angle) * 8;
//     // state.camera.lookAt(0, 0, 0);
//     // groupRef.current.rotation.y -= delta;
//   });

//   return (
//     <>
//       <orbitControls args={[camera, gl.domElement]} />

//       <directionalLight position={[1, 2, 3]} intensity={2.5} />
//       <ambientLight intensity={1.5} />

//       <group ref={groupRef}>
//         <mesh position-x={-2}>
//           <sphereGeometry />
//           <meshStandardMaterial color='orange' />
//         </mesh>

//         <mesh
//           ref={cubeRef}
//           rotation-y={Math.PI * 0.23}
//           position-x={2}
//           scale={1.5}
//         >
//           {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
//           <boxGeometry scale={1.5} />
//           <meshStandardMaterial color='blue' />
//         </mesh>
//       </group>

//       <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
//         <planeGeometry />
//         <meshStandardMaterial color='greenyellow' />
//       </mesh>

//       <CustomObject />
//     </>
//   );
// }
import {
  Html,
  TransformControls,
  OrbitControls,
  PivotControls,
  Text,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { useRef } from 'react';

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={0.5}>
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
          <Html
            position={[1, 1, 0]}
            wrapperClass='label'
            center
            distanceFactor={8}
            occlude={[sphereRef, cubeRef]}
          >
            Hello
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} scale={1.5} position-x={2}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color='blue' />
      </mesh>
      <TransformControls object={cubeRef} mode='translate' />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color='greenyellow' /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>
      <Float speed={5} floatIntensity={5}>
        <Text>H Ell O</Text>
      </Float>
      {/* <CustomObject /> */}
    </>
  );
}
