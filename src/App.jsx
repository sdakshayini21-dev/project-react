import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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