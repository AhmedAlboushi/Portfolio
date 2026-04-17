import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg"></div>

      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
