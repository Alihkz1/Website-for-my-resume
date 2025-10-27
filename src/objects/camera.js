import * as three from 'three';


const camera = new three.PerspectiveCamera(
    100,
    (window.innerWidth / 2) / window.innerHeight,
    0.01,
    1000
)
camera.position.z = 30

export { camera }