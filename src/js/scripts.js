import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

// Set up/Config the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
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

// Set up/Config the light
const ambientLight = new THREE.AmbientLight(0xff00ff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 12;
scene.add(directionalLight);
const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);
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
const boxMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    wireframe: false
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y += 11;
box.castShadow = true;
scene.add(box);

// Create a plane object
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

//Create a sphere object
const sphereGeometry = new THREE.SphereGeometry(4, 200, 200);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333,
    wireframe: true
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere);
// -----------------------------------------------------------------------------------------


// Set up dat.gui
const gui = new dat.GUI();

// Set up color, control, speed panel for box
const boxOption = ({
    boxColor: '#ffffff',
    wireframe: true
});

gui.addColor(boxOption, 'boxColor').onChange((e)=>{
    box.material.color.set(e);
});

gui.add(boxOption, 'wireframe').onChange((e)=>{
    box.material.wireframe = e;
});

// Set up color, control, speed panel for plane
const planeOption = ({
    planeColor: '#ffff00',
    wireframe: false
});

gui.addColor(planeOption, 'planeColor').onChange((e)=>{
    plane.material.color.set(e);
});

gui.add(planeOption, 'wireframe').onChange((e)=>{
    plane.material.wireframe = e;
});

// Set up color, control, speed panel for sphere
const sphereOption = ({
    sphereColor: '#333333',
    wireframe: true,
    speed: 0.01
});

gui.addColor(sphereOption, 'sphereColor').onChange((e)=>{
    sphere.material.color.set(e);
});

gui.add(sphereOption, 'wireframe').onChange((e)=>{
    sphere.material.wireframe = e;
});

gui.add(sphereOption, 'speed', 0, 0.1);
// -----------------------------------------------------------------------------------------

const silverCoinURL = new URL('../assets/silvercoin.glb', import.meta.url);

const assetLoader = new GLTFLoader();

assetLoader.load(silverCoinURL.href, (gltf)=>{
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-12, 4, 10);
    model.scale.set(5, 5, 5);
    model.rotation.x = -0.5 * Math.PI;
}, undefined, (error)=>{console.error(error);})

// Add animation
let step = 0;
let speed = 0.01;

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;

    sphere.rotation.y += 0.01;

    step += sphereOption.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step));

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
