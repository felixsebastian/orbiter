import { CameraProvider } from "./Camera";
import { CrudView, useOrbits } from "./Crud";
import ThreeView from "./ThreeView";

const App = () => {
  const [orbits, setOrbits] = useOrbits();

  return (
    <div className="App">
      <CameraProvider>
        <ThreeView orbits={orbits} />
      </CameraProvider>
      <CrudView orbits={orbits} setOrbits={setOrbits} />
    </div>
  );
};

export default App;
