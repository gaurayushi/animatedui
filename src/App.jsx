import React from "react";
import Hero from "./components/Hero";  // Importing the Hero component
import About from "./components/About";  // Importing the Hero component
import Navbar from "./components/Navbar";  // Importing the Hero component
import Features from "./components/Features";
import Story from "./components/Story";


function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero />  {/* Adding the Hero component here */}
      <About/>
      <Features/>
      <Story/>
    </main>

  );
}

export default App;
