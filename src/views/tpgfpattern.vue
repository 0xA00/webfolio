<template>
    <canvas id="canvas1"></canvas>
</template>

<script>
export default {
    name: "tpgfpattern"
}

//use three.js to create a 3d scene
import * as THREE from "three"


document.addEventListener('DOMContentLoaded', function() {

 const vertexShader = `
 varying vec2 vUv;
 uniform float iTime;

 uniform vec2 iResolution;
 void main() {
   vUv = uv;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }
 `

  const fragmentShader = `
  precision highp float;
  uniform float iTime;
varying vec2 vUv;
  uniform vec2 iResolution;

/* skew constants for 3d simplex functions */
const float F3 =  0.3333333;
const float G3 =  0.1666667;

/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
vec3 random3(vec3 c) {
float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
vec3 r;
r.z = fract(512.0*j);
j *= .125;
r.x = fract(512.0*j);
j *= .125;
r.y = fract(512.0*j);
return r-0.5;
}

/* 3d simplex noise */
float simplex3(vec3 p) {
/* 1. find current tetrahedron T and it's four vertices */
/* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
/* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/

/* calculate s and x */
vec3 s = floor(p + dot(p, vec3(F3)));
vec3 x = p - s + dot(s, vec3(G3));

/* calculate i1 and i2 */
vec3 e = step(vec3(0.0), x - x.yzx);
vec3 i1 = e*(1.0 - e.zxy);
vec3 i2 = 1.0 - e.zxy*(1.0 - e);

/* x1, x2, x3 */
vec3 x1 = x - i1 + G3;
vec3 x2 = x - i2 + 2.0*G3;
vec3 x3 = x - 1.0 + 3.0*G3;

/* 2. find four surflets and store them in d */
vec4 w, d;

/* calculate surflet weights */
w.x = dot(x, x);
w.y = dot(x1, x1);
w.z = dot(x2, x2);
w.w = dot(x3, x3);

/* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
w = max(0.6 - w, 0.0);

/* calculate surflet components */
d.x = dot(random3(s), x);
d.y = dot(random3(s + i1), x1);
d.z = dot(random3(s + i2), x2);
d.w = dot(random3(s + 1.0), x3);

/* multiply d by w^4 */
w *= w;
w *= w;
d *= w;

/* 3. return the sum of the four surflets */
return dot(d, vec4(52.0));
}

float map(float nMin, float nMax, float n) {
return (n - nMin) / (nMax - nMin);
}
float gain(float x, float p) {
return x < .5 ?
.5 * pow(2. * x, p) :
1. - .5 * pow(2. * (1. - x), p);
}

/*float thickness = 10.;*/
float scale = 2.5;
float t = 0.;


void mainImage( out vec4 O, vec2 U )
{
U /= iResolution.xy;
    float n = simplex3( vec3( U * scale, (iTime * 1./5.) * .05)) * 5.;

    O = vec4 ( smoothstep( 2., 0., abs(fract(n+.5)-.5) / fwidth(n) ) );
}
void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
`
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({
    })
    document.body.appendChild(renderer.domElement)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const uniforms = {
        iTime: { value: 0 },
        iResolution:  { value: new THREE.Vector3() }
    };

    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    })
    //create the plane 
    const plane = new THREE.PlaneGeometry(6  , 2)
    const mesh = new THREE.Mesh(plane, material)
   
    
   

    
    scene.add(mesh)

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const clock = new THREE.Clock()
    function render() {
        uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
        uniforms.iTime.value = clock.getElapsedTime();
        renderer.render(scene, camera)
    }
    function animate() {
        requestAnimationFrame(animate)
        render()
    }

    animate()




})
</script>

<style scoped>
    #canvas1{
        margin: 0;
        overflow: hidden;
    }
</style>