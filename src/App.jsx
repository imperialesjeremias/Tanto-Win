import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes/Routes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
