import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Ayurveda from "./components/Ayurveda";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <Ayurveda />
      </div>{" "}
    </>
  );
}

export default App;
