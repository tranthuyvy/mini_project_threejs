import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Profile, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Tech from "./components/Tech";
// import Works from "./components/Works";
// import Contact from "./components/Contact";
// import StarsCanvas from "./components/canvas/Stars";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Profile />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
