import { useState, createContext, useContext } from "react";

const CameraContext = createContext({ camera: null, setCameraByKey: null });
const { Provider } = CameraContext;
export const useCamera = () => useContext(CameraContext);

export const CameraProvider = (props) => {
  const [camera, setCamera] = useState({ tilt: 30, rotate: 0, scale: 0 });

  return (
    <Provider
      value={{
        camera,

        setCameraByKey: (key) => (val) =>
          setCamera((state) => ({
            ...state,
            [key]: +val,
          })),
      }}
    >
      {props.children}
    </Provider>
  );
};
