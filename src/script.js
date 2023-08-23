// src/main.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x888888, wireframe: true });

console.log('tamñano cubo', geometry.parameters)

const planeGeometry = new THREE.PlaneGeometry(10, 10); // Width and height
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 , side: THREE.DoubleSide}); // Green color
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, -0.5); // Example position: x=0, y=1, z=0
scene.add(plane);

// Create a wireframe cube with the same geometry
const wireframeCube = new THREE.Mesh(geometry, wireframeMaterial);
cube.add(wireframeCube);

// Set camera position
camera.position.z = 5;


// Create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false; // Enable damping for smoother controls
controls.update();

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube
//   cube.rotation.x += 0.005;
//   cube.rotation.y += 0.005;

  // Update the orbit controls
  controls.update();

  renderer.render(scene, camera);
};

animate();
