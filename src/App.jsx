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
} from "./components";
import Particlesbg from "./components/Particlesbg";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-[1]">
          <Navbar />
          {/* <Hero />
          <StarsCanvas /> */}
        </div>
        <Works />
        {/* <Experience /> */}
        <Tech />
        <About />
        {/* <Feedbacks /> */}
        <Contact />
        {/* <Particlesbg /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
