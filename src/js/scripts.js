import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// Set up/Config the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up/Config the scene
const scene = new THREE.Scene();

// Set up/Config the camera
const camera = new THREE.PerspectiveCamera(
    // 75,
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
// camera.position.set(0, 2, 5);
camera.position.set(-10, 30, 30)
// -----------------------------------------------------------------------------------------


// Help orbit the scene
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// Added AxesHelper & GridHelper to easy to see & understand
const axesHelper = new THREE.AxesHelper(30);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper)
// -----------------------------------------------------------------------------------------


// Create a box object
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x333333});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Create a plane object
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI
scene.add(plane);

//Create a sphere object
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x3f3f3f,
    wireframe: true
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
// -----------------------------------------------------------------------------------------

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
