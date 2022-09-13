import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import "./app.scss";
import { useState } from "react";
// import React, { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
