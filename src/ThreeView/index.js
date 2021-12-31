import { useEffect, useRef } from "react";
import * as THREE from "three";
import circle from "./circle";
import { controls, camera, scene, renderer } from "./scene";

function animate() {
  scene.traverse(function (child) {
    child.rotation.x = 0;
    child.rotation.z = 0;
  });

  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const orbitMaterial = new THREE.LineBasicMaterial({
  color: 0xdddddd,
  linewidth: 2,
});

const ThreeView = ({ orbits }) => {
  const box = useRef();

  useEffect(() => {
    scene.clear();

    const geometry = new THREE.SphereGeometry(0.05, 100, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    orbits.forEach((o) => {
      const line = new THREE.Line(circle, orbitMaterial);
      line.scale.setScalar(o.radius / 100);

      line.scale.set(
        o.radius / 100,
        o.radius / 100,
        ((o.min / 100) * o.radius || o.radius) / 100
      );

      line.rotation.y = (o.angle || 0) * (Math.PI / 180);

      line.translateX((((o.translation || 0) / 100) * o.radius) / 100);

      scene.add(line);
    });
  }, [orbits]);

  useEffect(() => {
    box.current.appendChild(renderer.domElement);
    animate();
  }, []);

  return <div ref={box} />;
};

export default ThreeView;
