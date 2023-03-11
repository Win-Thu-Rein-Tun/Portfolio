import { BrowserRouter } from "react-router-dom";

import { positions, Provider } from "react-alert";

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
// import Particlesbg from "./components/Particlesbg";

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Provider template={AlertTemplate}>
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
          <Particlesbg />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
