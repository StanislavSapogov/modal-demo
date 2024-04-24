import { createRef } from "react";
import "./App.css";
import { ModalTestRef } from "./components/ModalTest/ModalTest";

function App() {
  const limitPopup = createRef<any>();

  return (
    <div className="App">
      <button onClick={() => limitPopup.current.open()}>Show</button>
      <ModalTestRef ref={limitPopup} />
    </div>
  );
}

export default App;
