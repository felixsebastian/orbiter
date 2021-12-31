import { BufferGeometry, Float32BufferAttribute } from "three";

const vertices = [];
const divisions = 300;

for (let i = 0; i <= divisions; i++) {
  const v = (i / divisions) * (Math.PI * 2);
  const x = Math.sin(v);
  const z = Math.cos(v);
  vertices.push(x, 0, z);
}

const circle = new BufferGeometry();
circle.setAttribute("position", new Float32BufferAttribute(vertices, 3));

export default circle;
