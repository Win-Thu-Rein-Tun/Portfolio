import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <TechCards
            imgUrl={technology.icon}
            name={technology.name}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

const TechCards = ({ imgUrl, name, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <img id="tech" src={imgUrl} alt={name} />
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
