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
    {options.type === "info" && "❗"}
    {options.type === "success" && "😍"}
    {options.type === "error" && "❌"}
    {message}
    <button onClick={close}>X</button>
  </div>
);

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <BrowserRouter>
      <Provider template={AlertTemplate} {...options}>
        <div>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-[1]">
            <Navbar />
            <Hero />
            <StarsCanvas />
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
