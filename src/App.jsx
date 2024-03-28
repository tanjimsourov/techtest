import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./responsive.css";
import Home from "./components/Pages/Home";
import Sliders from "./components/Shared/Sliders";
import Sidebar from "./components/Shared/Sidebar";
import { Routes, Route } from "react-router-dom";
import AdminPanal from './components/Pages/admin/AdminPanal';



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanal />} />

        </Routes>
    </>
  );
}

export default App;
