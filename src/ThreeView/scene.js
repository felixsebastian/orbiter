import * as THREE from "three";
import { SVGRenderer } from "./SVGRenderer";
import { OrbitControls } from "./OrbitControls";

// the big numbers are clipping distances, we want to include everything
export const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, -99999, 99999);

export const scene = new THREE.Scene();

export const renderer = new SVGRenderer();

scene.background = new THREE.Color(0.1, 0.1, 0.1);
renderer.setSize(500, 300);
camera.aspect = 500 / 300;
camera.updateProjectionMatrix();
camera.position.set(1, 0, 0);

export const controls = new OrbitControls(camera, renderer.domElement);
