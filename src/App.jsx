import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      

      {/* Main Portfolio */}
      <main>
        <Navbar/>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;