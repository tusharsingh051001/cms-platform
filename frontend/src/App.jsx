import { Outlet } from "react-router-dom";
import "./styles/global.css";
import NavBar from "./components/NavBar/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
