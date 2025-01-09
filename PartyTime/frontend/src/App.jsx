import { Outlet } from "react-router-dom";

// Componentes
import NavBar from "./components/Navbar";

import { ToastContainer } from "react-toastify";

// styles
import "./App.css";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
