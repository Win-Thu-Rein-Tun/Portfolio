import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Particlesbg,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-[1]">
        <Navbar />
        {/* <Hero />
        <StarsCanvas /> */}
      </div>
      <Works />
      
      {/* <Tech />
      <About />
      
      <Contact />
      <Particlesbg /> */}
    </BrowserRouter>
  );
};

export default App;
