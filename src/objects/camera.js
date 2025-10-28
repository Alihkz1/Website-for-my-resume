import * as three from 'three';
const isMobile = window.innerWidth < 992
const windowInnerWidth = isMobile ? window.innerWidth : window.innerWidth / 2


const camera = new three.PerspectiveCamera(
    65,
    (windowInnerWidth) / window.innerHeight,
    0.01,
    1000
)

camera.position.x = 40
camera.position.y = 15
camera.position.z = isMobile ? 40 : 30

export { camera }