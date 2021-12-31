import { useState } from "react";

const initialState = [
  { radius: 30, period: 8, offset: 8 },
  { radius: 120, period: 12, offset: 4 },
  { radius: 60, period: 4, offset: 7 },
  { radius: 95, period: 9, offset: 3 },
  { radius: 135, period: 15, offset: 6, min: 30, angle: 0 },
  { radius: 170, period: 6, offset: 1, min: 50, angle: 30, translation: 50 },
];

export const useOrbits = () => useState(initialState);

const CrudControl = (props) => {
  const handler = (e) => props.handleChange(+e.target.value);

  return (
    <label>
      {props.label}
      <input
        type="range"
        min="0"
        max={props.scale}
        value={props.value}
        onChange={handler}
      />
      <input
        type="number"
        min="0"
        max={props.scale}
        value={props.value}
        onChange={handler}
      />
    </label>
  );
};

const updateArrayAtIndex = (source, index, value) => [
  ...source.slice(0, index),
  value,
  ...source.slice(index + 1),
];

const deleteFromArrayAtIndex = (source, index) => [
  ...source.slice(0, index),
  ...source.slice(index + 1),
];

export const CrudView = (props) => {
  const setOrbitValueByKey = (index, key) => (value) =>
    props.setOrbits((state) =>
      updateArrayAtIndex(state, index, { ...state[index], [key]: value })
    );

  return (
    <div>
      {props.orbits.map((o, i) => (
        <div>
          <CrudControl
            label="Radius"
            value={o.radius}
            scale={300}
            handleChange={setOrbitValueByKey(i, "radius")}
          />
          <CrudControl
            label="Min"
            value={o.min || 0}
            scale={300}
            handleChange={setOrbitValueByKey(i, "min")}
          />
          <CrudControl
            label="Angle"
            value={o.angle || 0}
            scale={360}
            handleChange={setOrbitValueByKey(i, "angle")}
          />
          <CrudControl
            label="Translation"
            value={o.translation || 0}
            scale={100}
            handleChange={setOrbitValueByKey(i, "translation")}
          />
          <button
            onClick={() =>
              props.setOrbits((state) => deleteFromArrayAtIndex(state, i))
            }
          >
            -
          </button>
        </div>
      ))}
      <button
        onClick={() => props.setOrbits((state) => [...state, { radius: 100 }])}
      >
        +
      </button>
    </div>
  );
};
