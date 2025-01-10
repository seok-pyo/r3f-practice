import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Experience from './Experience.jsx';
import {
  ACESFilmicToneMapping,
  CineonToneMapping,
  SRGBColorSpace,
} from 'three';
// import { MeshNormalMaterial, TorusKnotGeometry } from 'three';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    // flat
    // dpr={[1, 2]} // default pixle ratio
    gl={{
      antialias: true,
      toneMapping: ACESFilmicToneMapping,
      outputColorSpace: SRGBColorSpace,
    }}
    // orthographic
    camera={{
      fov: 45,
      // zoom: 50,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
