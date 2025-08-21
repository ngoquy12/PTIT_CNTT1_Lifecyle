import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/ControlledForm";
import FormMultipleFiled from "./components/FormMultipleFiled";
import Timer from "./components/timer/Timer";
// import ParentComponent from "./components/ParentComponent";

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      {/* <ParentComponent /> */}
      {/* <ControlledForm /> */}
      {/* <FormMultipleFiled /> */}
      <button onClick={() => setIsShow((prev) => !prev)}>Toggle</button>

      {isShow && <Timer />}
    </>
  );
}

export default App;
