import * as THREE from 'three';

export function getBox({w=3, h=3, d=1, color= 0x00ffff, wireframe=false}) {
    const boxGeometry = new THREE.BoxGeometry(w, h, d);
    const boxMaterial = new THREE.MeshBasicMaterial({color:color, wireframe: wireframe});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    return box;
}

export function getPhongBox({ w = 0.1, h = 0.1, d = 0.1, color = 0x00ffff, wireframe = true }) {
    const geometry = new THREE.BoxGeometry(w, h, d);
    const material = new THREE.MeshPhongMaterial({ color, wireframe });
    const box = new THREE.Mesh(geometry, material);
    return box;
}

export function getSphere({r=1, h=32, v=32, color=0xffffff, wireframe=true}) {
    const sphereGeometry = new THREE.SphereGeometry(r, h, v); 
    const sphereMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: wireframe});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere;
}

export function getPhongSphere({r=1, h=32, v=32, color=0xffffff, wireframe=true}) {
    const sphereGeometry = new THREE.SphereGeometry(r, h, v); 
    const sphereMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: wireframe});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere;
}


export function getPhongSphereTexture({r=1, h=32, v=32, texture=null}) {
    texture.colorSpace = THREE.SRGBColorSpace;
    const sphereGeometry = new THREE.SphereGeometry(r, h, v); 
    const sphereMaterial = new THREE.MeshPhongMaterial({map:texture});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere;
}

export function rotateAroundX(step, radius) {
    let y = Math.cos(step*Math.PI/180) * radius;
    let z = Math.sin(step*Math.PI/180) * radius;
    return new THREE.Vector3(0, y, z);
}

export function rotateAroundY(step, radius) {
    let x = Math.cos(step*Math.PI/180) * radius;
    let z = Math.sin(step*Math.PI/180) * radius;
    return new THREE.Vector3(x, 0, z);
}     

export function rotateAroundZ(step, radius) {
    let x = Math.cos(step*Math.PI/180) * radius;
    let y = Math.sin(step*Math.PI/180) * radius;
    return new THREE.Vector3(x, y, 0);
}
