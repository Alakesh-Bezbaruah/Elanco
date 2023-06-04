import { Routes, Route } from "react-router-dom";

import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Developer from "./components/developer/Developer";
import Home from "../src/pages/home/Home";
import Einfo from "./pages/einfo/Einfo";

function App() {
  return (
    <>
      <>
        <div className="main">
          <Topbar />

          <div className="mainNavbar">
            <Navbar />
          </div>

          <div className="mainDetails">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/einfo" element={<Einfo />} />
            </Routes>
          </div>

          <Footer />
        </div>
        <Developer />
      </>
    </>
  );
}

export default App;
