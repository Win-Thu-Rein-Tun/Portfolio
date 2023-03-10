import React from "react";
import { motion, cardVariants } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} alt="tech_icon" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
