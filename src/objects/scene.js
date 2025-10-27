import * as three from 'three';
import { camera } from './camera';

const scene = new three.Scene()
const cubeTextureLoader = new three.CubeTextureLoader()
cubeTextureLoader.setPath('/cubeMap/')

scene.background = cubeTextureLoader
.load( [
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
] );

// const fog = new three.Fog(0xffffff, 1, 10)
// scene.fog = fog

//axes
// const axesHelper = new three.AxesHelper(30)
// scene.add(axesHelper)

scene.add(camera)

export { scene }