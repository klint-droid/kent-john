import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Service";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Education />
        <Experience />
        <Certificates />
        <Projects /> {/* ✅ Integrated directly here */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
