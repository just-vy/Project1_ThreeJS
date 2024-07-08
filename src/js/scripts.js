import * as THREE from 'three';
import { OrbitControls, RGBELoader, RGBELoader } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

import bluecloth from '../assets/blue cloth.jpg';
import star from '../assets/star.png';
import dark from '../assets/dark.jpg';
import dark2 from '../assets/dark2.jpg'
import copper from '../assets/copper_texture.png';
import silver from '../assets/silver_texture.jpg';
import gold from '../assets/gold_texture.jpg'
import { log } from 'three/examples/jsm/nodes/Nodes.js';

const textureLoader = new THREE.TextureLoader();

// -----------------------------------------------------------------------------------------
// Set up/Config the renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Set up/Config the scene
const scene = new THREE.Scene();

// Set up/Config the camera
const camera = new THREE.PerspectiveCamera(
    // 75,
    25,
    window.innerWidth/window.innerHeight,
    50,
    1000
);

camera.position.set(0, 100, 250);

scene.fog = new THREE.Fog(0xffffff, 250, 2000);
// scene.fog = new THREE.FogExp2(0xffffff, 0.01);

// Set up/Config ambient light
const ambientLight = new THREE.AmbientLight(0xF8C8DC, 1);
scene.add(ambientLight);

// // Set up/Config directional light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.top = 12;
// scene.add(directionalLight);

// Set up/Config spot light
const spotLight = new THREE.SpotLight(0xA7C7E7, 25);
spotLight.position.set(-100, 100, 0);
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.castShadow = true;
spotLight.receiveShadow = true;
spotLight.decay = 0;
spotLight.angle = 0.75;
spotLight.shadow.camera.near = 25;
spotLight.shadow.camera.far = 1000;
// spotLight.shadow.bias = -0.001;
scene.add(spotLight);

// // Set up Background
// renderer.setClearColor(0X222222);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Replicate the view port
// Help orbit the scene
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// // Add Axes Helper
// const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);

// // Add Grid Helper
// const gridHelper = new THREE.GridHelper(200);
// scene.add(gridHelper);

// // Add Directional Light Helper
// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(dLightHelper);

// // Add Directional Light Shadow Helper
// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

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
// // Create box object
// const boxGeometry = new THREE.BoxGeometry();

// const boxMaterial = new THREE.MeshStandardMaterial({
//     color: 0xffffff,
//     wireframe: false,
//     map: textureLoader.load(dark)
// });

// const box = new THREE.Mesh(boxGeometry, boxMaterial);

// box.scale.set(15, 15, 15)
// box.position.set(0, 25, 25)
// box.castShadow = true;
// box.receiveShadow = true;
// scene.add(box);

// // Create box2 object
// const box2Geometry = new THREE.BoxGeometry();

// const box2Material = [
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(copper)}),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(copper)}),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(silver)}),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(silver)}),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(gold)}),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: textureLoader.load(gold)}),
// ];

// const box2 = new THREE.Mesh(box2Geometry, box2Material);

// box2.scale.set(15, 15, 15);
// box2.position.set(0, 50, 25);
// box2.castShadow = true;
// scene.add(box2);

// // Create plane object
// const planeGeometry = new THREE.PlaneGeometry(200, 200);

// const planeMaterial = new THREE.MeshStandardMaterial({
//     color: 0x47004c,
//     side: THREE.DoubleSide
// });

// const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// // plane.position.y -= 40;
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;
// scene.add(plane);
// const planeName = plane.name;

// // Create plane2 object
// const plane2Geometry = new THREE.PlaneGeometry(40, 40, 40, 40);

// const plane2Material = new THREE.MeshStandardMaterial({
//     color: 0xffffff,
//     wireframe: true
// });

// const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);

// plane2.position.set(0, 35, 50);
// scene.add(plane2);

// // Create sphere object
// const sphereGeometry = new THREE.SphereGeometry(25, 50, 50);

// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0xaaaaaa,
//     wireframe: false,
//     map: textureLoader.load(dark2)
// });

// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// sphere.position.set(40, 0, -25)
// sphere.castShadow = true;
// sphere.receiveShadow = true;
// scene.add(sphere);
// const sphereID = sphere.id;

// // Create sphere2 object
// const sphere2Geometry = new THREE.SphereGeometry(25, 50, 50);

// // const vShader = `
// //     void main(){
// //         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// //     }
// // `;

// // const fShader = `
// //     void main(){
// //         gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
// //     }
// // `;

// const sphere2Material = new THREE.ShaderMaterial({
//     vertexShader: document.getElementById("vertexShader").textContent,
//     fragmentShader: document.getElementById("fragmentShader").textContent 
// });

// const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);

// sphere2.position.set(-40, 0, -25);
// sphere2.castShadow = true;
// sphere2.receiveShadow = true;
// scene.add(sphere2);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// // Set up dat.gui
// const gui = new dat.GUI();

// // Set up color, control panel for box
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

// // Set up color, control panel for plane
// const planeOption = ({
//     planeColor: '#47004c',
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
//     sphereColor: '#aaaaaa',
//     wireframe: false,
//     speed: 0.02,
//     angle: 0.75,
//     penumbra: 1,
//     intensity: 25
// });

// gui.addColor(sphereOption, 'sphereColor').onChange((e)=>{
//     sphere.material.color.set(e);
// });

// gui.add(sphereOption, 'wireframe').onChange((e)=>{
//     sphere.material.wireframe = e;
// });

// gui.add(sphereOption, 'speed', 0, 0.1);
// gui.add(sphereOption, 'angle', 0, 5);
// gui.add(sphereOption, 'penumbra', 0, 1);
// gui.add(sphereOption, 'intensity', 0, 50);
// -----------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------
// Add HDR file
const hdrTextureURL = new URL('../hdr/MR_INT-003_Kitchen_Pierre.hdr', import.meta.url);

renderer.outputEncoding = THREE.sRGBEncoding;

const rgbeLoader = new RGBELoader();

rgbeLoader.load(hdrTextureURL, (texture)=>{
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = texture;
    scene.environment = texture;
});

// Add Blender GLTF file
const assetLoader = new GLTFLoader();

// Load Blender (glb/gltf) Silver Coin
const silverCoinURL = new URL('../assets/silvercoin.glb', import.meta.url);
let silverCoinModel;

assetLoader.load(silverCoinURL.href, (gltf)=>{
    silverCoinModel = gltf.scene;
    silverCoinModel.scale.set(30, 30, 30);
    silverCoinModel.position.set(0, 40, 60);
    silverCoinModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(silverCoinModel);
    console.log('silver');
}, undefined, (error)=>{console.error(error);})

// Load Blender (glb/gltf) Copper Coin
const copperCoinURL = new URL('../assets/coppercoin.glb', import.meta.url);

let copperCoinModel;

assetLoader.load(copperCoinURL.href, (gltf)=>{
    copperCoinModel = gltf.scene;
    // copperCoinModel.scale.set(30, 30, 30);
    copperCoinModel.scale.set(1, 1, 1);
    // copperCoinModel.position.set(-20, 40, 60);
    copperCoinModel.position.x = -1;
    copperCoinModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    silverCoinModel.add(copperCoinModel);
    console.log('copper');
}, undefined, (error)=>{console.error(error)});

// Load Blender (glb/gltf) Gold Coin
const goldCoinURL = new URL('../assets/goldcoin.glb', import.meta.url);

let goldCoinModel;

assetLoader.load(goldCoinURL.href, (gltf)=>{
    goldCoinModel = gltf.scene;
    // goldCoinModel.scale.set(30, 30, 30);
    // goldCoinModel.position.set(20, 40, 60);
    goldCoinModel.scale.set(1, 1, 1);
    goldCoinModel.position.x = 1;
    goldCoinModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    silverCoinModel.add(goldCoinModel);
    console.log('gold');
}, undefined, (error)=>{console.error(error);})

// Load Blender (glb/gltf) Diamond
const diamondURL = new URL('../assets/diamond1.glb', import.meta.url);

let diamondModel;

assetLoader.load(diamondURL.href, (gltf)=>{
    diamondModel = gltf.scene;
    diamondModel.scale.set(150, 150, 150);
    diamondModel.position.set(0, 20, 60);
    diamondModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    scene.add(diamondModel);
    console.log('diamond');
}, undefined, (error)=>console.error(error));

// Load Blender (glb/gltf) Sapphire
const sapphireURL = new URL('../assets/sapphire.glb', import.meta.url);

let sapphireModel;

assetLoader.load(sapphireURL.href, (gltf)=>{
    sapphireModel = gltf.scene;
    // sapphireModel.scale.set(150, 150, 150);
    // sapphireModel.position.set(-20, 15, 60);
    sapphireModel.scale.set(1, 1, 1);
    sapphireModel.position.x = -0.4;
    sapphireModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    diamondModel.add(sapphireModel);
    console.log('sapphire');
}, undefined, (error)=>console.error(error));

// Load Blender (glb/gltf) Emerald
const emeraldURL = new URL('../assets/emerald.glb', import.meta.url);

let emeraldModel;

assetLoader.load(emeraldURL.href, (gltf)=>{
    emeraldModel = gltf.scene;
    // emeraldModel.scale.set(175, 175, 175);
    // emeraldModel.position.set(20, 15, 60);
    emeraldModel.scale.set(1, 1, 1);
    emeraldModel.position.x = 0.4;
    emeraldModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    diamondModel.add(emeraldModel);
    console.log('emerald');
}, undefined, (error)=>console.error(error));

// Load Blender (glb/gltf) Ruby
const rubyURL = new URL('../assets/ruby.glb', import.meta.url);

let rubyModel;

assetLoader.load(rubyURL.href, (gltf)=>{
    rubyModel = gltf.scene;
    // rubyModel.scale.set(150, 150, 150);
    // rubyModel.position.set(-20, 15, 60);
    rubyModel.scale.set(0.25, 0.25, 0.25);
    rubyModel.position.x = -0.25;
    rubyModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    sapphireModel.add(rubyModel);
    console.log('ruby');
}, undefined, (error)=>console.error(error));

// Load Blender (glb/gltf) Citrine
const citrineURL = new URL('../assets/citrine.glb', import.meta.url);

let citrineModel;

assetLoader.load(citrineURL.href, (gltf)=>{
    citrineModel = gltf.scene;
    // citrineModel.scale.set(175, 175, 175);
    // citrineModel.position.set(20, 15, 60);
    citrineModel.scale.set(1, 1, 1);
    citrineModel.position.x = 0.25;
    citrineModel.traverse((node)=>{
        if(node.isMesh){
            node.castShadow = true;
            node.recieveShadow = true;
        }
    });
    emeraldModel.add(citrineModel);
    console.log('citrine');
}, undefined, (error)=>console.error(error));

// // Load photo/texture
// scene.background = textureLoader.load(dark2);
// scene.background = textureLoader.load(dark);
// scene.background = textureLoader.load(star);
// scene.background = textureLoader.load(bluecloth);
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load(
//     [
//         dark,
//         dark,
//         star,
//         star,
//         dark2,
//         dark2
//     ]
// );

// Select object from the scene
const mousePosition = new THREE.Vector2();

window.addEventListener('mousemove', (e)=>{
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

const rayCaster = new THREE.Raycaster();

// Add animation
let step = 0;
let speed = 0.01;

function animate(){
    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    // box.rotation.z += 0.01;

    // box2.rotation.x += 0.01;
    // box2.rotation.y += 0.01;
    // box2.rotation.z += 0.01;

    // sphere.rotation.y += 0.01;
    // step += sphereOption.speed;
    // sphere.position.y = 25 * Math.abs(Math.sin(step));

    // sphere2.rotation.y += 0.01;
    // sphere2.position.y = 25 * Math.abs(Math.sin(step));

    // spotLight.angle = sphereOption.angle;
    // spotLight.penumbra = sphereOption.penumbra;
    // spotLight.intensity = sphereOption.intensity;
    
    // sLightHelper.update();

    if(silverCoinModel){
        // silverCoinModel.rotation.x += 0.01;
        silverCoinModel.rotation.y += 0.01;
        // silverCoinModel.rotation.z += 0.01;
    }
    if(copperCoinModel){
        // copperCoinModel.rotation.x += 0.01;
        copperCoinModel.rotation.y += 0.01;
        // copperCoinModel.rotation.z += 0.01;
    }
    if(goldCoinModel){
        // goldCoinModel.rotation.x += 0.01;
        goldCoinModel.rotation.y += 0.01;
        // goldCoinModel.rotation.z += 0.01;
    }
    if(diamondModel){
        // diamondModel.rotation.x += 0.01;
        diamondModel.rotation.y += 0.01;
        // diamondModel.rotation.z += 0.01;
    } 

    if(sapphireModel){
        // sapphireModel.rotation.x += 0.01;
        sapphireModel.rotation.y += 0.01;
        // sapphireModel.rotation.z += 0.01;
    }

    if(emeraldModel){
        // emeraldModel.rotation.x += 0.01;
        emeraldModel.rotation.y += 0.01;
        // emeraldModel.rotation.z += 0.01;
    }

    if(rubyModel){
        // rubyModel.rotation.x += 0.01;
        rubyModel.rotation.y += 0.01;
        // rubyModel.rotation.z += 0.01;
    }

    if(citrineModel){
        // citrineModel.rotation.x += 0.01;
        citrineModel.rotation.y += 0.01;
        // citrineModel.rotation.z += 0.01;
    }

    // // plane2.geometry.attributes.position.array[0] += 100;
    // // plane2.geometry.attributes.position.array[1] += 100;
    // plane2.geometry.attributes.position.array[2] += 1 * Math.random();
    // const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
    // plane2.geometry.attributes.position.array[lastPointZ] += 1 * Math.random();
    // plane2.geometry.attributes.position.needsUpdate = true;

    // rayCaster.setFromCamera(mousePosition, camera);
    // const intersects = rayCaster.intersectObjects(scene.children);
    // console.log(intersects);

    // for (let i = 0; i < intersects.length; i++) {
    //     // if (intersects[i].object.id === sphereID)
    //     //     intersects[i].object.material.color.set(0x000000);
    //     if (intersects[i].object.name === planeName)
    //         intersects[i].object.rotation.z += 0.01;
    // }
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
