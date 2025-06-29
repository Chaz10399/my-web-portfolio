import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Skills />
        <Credentials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
