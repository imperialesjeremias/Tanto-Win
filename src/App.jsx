import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes/Routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
