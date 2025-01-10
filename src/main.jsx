import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Experience from './Experience.jsx';
// import { MeshNormalMaterial, TorusKnotGeometry } from 'three';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas>
    <Experience />
  </Canvas>
);
