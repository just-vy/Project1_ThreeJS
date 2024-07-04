import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';




// -----------------------------------------------------------------------------------------
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
camera.position.set(-10, 30, 30);

// Set up/Config ambient light
const ambientLight = new THREE.AmbientLight(0x7FBFFF, 1);
scene.add(ambientLight);

// // Set up/Config directional light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.top = 12;
// scene.add(directionalLight);

// Set up/Config spot light
const spotLight = new THREE.SpotLight(0xffffff, 5);
spotLight.position.set(-150, 150, 0);
spotLight.castShadow = true;
spotLight.decay = 0;
spotLight.angle = 0.5;
scene.add(spotLight);

// Set up Background
renderer.setClearColor(0X111111);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Replicate the view port
// Help orbit the scene
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// Add Axes Helper
// const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);

// // Add Grid Helper
// const gridHelper = new THREE.GridHelper(1000);
// scene.add(gridHelper);

// // // Add Directional Light Helper
// // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// // scene.add(dLightHelper);

// // // Add Directional Light Shadow Helper
// // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// // scene.add(dLightShadowHelper);

// // Add Spot Light Helper
// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// // Add Spot Light Shadow Helper
// const sLightShadowHelper = new THREE.CameraHelper(spotLight.shadow.camera);
// scene.add(sLightShadowHelper);

// // Add Camera Helper
// const CameraHelper = new THREE.CameraHelper(camera);
// scene.add(CameraHelper);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Create a box object
// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({
//     color: 0xffffff,
//     wireframe: false
// });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// box.position.y += 11;
// box.castShadow = true;
// scene.add(box);

// // Create a plane object
// const planeGeometry = new THREE.PlaneGeometry(200, 200);
// const planeMaterial = new THREE.MeshStandardMaterial({
//     color: 0xffff00,
//     side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;
// scene.add(plane);

// //Create a sphere object
// const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0x333333,
//     wireframe: false
// });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.castShadow = true;
// sphere.receiveShadow = true;
// scene.add(sphere);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Set up dat.gui
const gui = new dat.GUI();

// Set up color, control, speed panel for box
// const boxOption = ({
//     boxColor: '#ffffff',
//     wireframe: false,
// });

// gui.addColor(boxOption, 'boxColor').onChange((e)=>{
//     box.material.color.set(e);
// });

// gui.add(boxOption, 'wireframe').onChange((e)=>{
//     box.material.wireframe = e;
// });
// // Set up color, control, speed panel for plane
// const planeOption = ({
//     planeColor: '#ffff00',
//     wireframe: false
// });

// gui.addColor(planeOption, 'planeColor').onChange((e)=>{
//     plane.material.color.set(e);
// });

// gui.add(planeOption, 'wireframe').onChange((e)=>{
//     plane.material.wireframe = e;
// });

// // Set up color, control, speed panel for sphere
// const sphereOption = ({
//     sphereColor: '#333333',
//     wireframe: false,
//     speed: 0.01,
//     angle: 0.2,
//     penumbra: 0,
//     intensity: 1
// });

// gui.addColor(sphereOption, 'sphereColor').onChange((e)=>{
//     sphere.material.color.set(e);
// });

// gui.add(sphereOption, 'wireframe').onChange((e)=>{
//     sphere.material.wireframe = e;
// });

// gui.add(sphereOption, 'speed', 0, 0.1);
// gui.add(sphereOption, 'angle', 0, 0.5);
// gui.add(sphereOption, 'penumbra', 0, 0.5);
// gui.add(sphereOption, 'intensity', 0, 0.5);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Add Blender GLTF file
const silverCoinURL = new URL('../assets/silvercoin.glb', import.meta.url);

const assetLoader = new GLTFLoader();

// Load Blender (glb/gltf) Silver Coin
let silverCoinModel;

assetLoader.load(silverCoinURL.href, (gltf)=>{
    silverCoinModel = gltf.scene;
    silverCoinModel.scale.set(30, 30, 30);
    silverCoinModel.position.set(0, 20, 0);
    silverCoinModel.castShadow = true;
    console.log('silver');
    scene.add(silverCoinModel);
}, undefined, (error)=>{console.error(error);})

// Load Blender (glb/gltf) Copper Coin
const copperCoinURL = new URL('../assets/coppercoin.glb', import.meta.url);

let copperCoinModel;

assetLoader.load(copperCoinURL.href, (gltf)=>{
    copperCoinModel = gltf.scene;
    scene.add(copperCoinModel);
    copperCoinModel.scale.set(30, 30, 30);
    copperCoinModel.position.set(-20, 20, 0);
    copperCoinModel.castShadow = true;
    console.log('copper');
}, undefined, (error)=>{console.error(error)});

// Load Blender (glb/gltf) Gold Coin
const goldCoinURL = new URL('../assets/goldcoin.glb', import.meta.url);

let goldCoinModel;

assetLoader.load(goldCoinURL.href, (gltf)=>{
    goldCoinModel = gltf.scene;
    scene.add(goldCoinModel);
    goldCoinModel.scale.set(30, 30, 30);
    goldCoinModel.position.set(20, 20, 0);
    goldCoinModel.castShadow = true;
    console.log('gold');
}, undefined, (error)=>{console.error(error);})

// Load Blender (glb/gltf) Diamond
const diamondURL = new URL('../assets/diamond.glb', import.meta.url);

let diamondModel;

assetLoader.load(diamondURL.href, (gltf)=>{
    diamondModel = gltf.scene;
    scene.add(diamondModel);
    diamondModel.scale.set(150, 150, 150);
    diamondModel.position.set(0, 0, 0);
    diamondModel.castShadow = true;
    console.log('diamond');
}, undefined, (error)=>console.error(error));

// Add animation
let step = 0;
let speed = 0.01;

function animate(){
    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    // box.rotation.z += 0.01;

    // sphere.rotation.y += 0.01;

    // step += sphereOption.speed;
    // sphere.position.y = 10 * Math.abs(Math.sin(step));

    // spotLight.angle = sphereOption.angle;
    // spotLight.penumbra = sphereOption.penumbra;
    // spotLight.intensity = sphereOption.intensity;
    
    // sLightHelper.update();

    if(silverCoinModel)
        silverCoinModel.rotation.y += 0.01;

    if(copperCoinModel)
        copperCoinModel.rotation.y += 0.01;

    if(goldCoinModel)
        goldCoinModel.rotation.y += 0.01;
    if(diamondModel)
        diamondModel.rotation.y += 0.01;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
