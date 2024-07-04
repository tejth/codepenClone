import { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import DataProvider from "./context/DataProvider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
