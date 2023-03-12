import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { BallCanvas } from "./canvas";
import { me } from "../assets";
import { technologies } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center lg:ml-[100px] mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00ff00]"></div>
          <div className="w-1 sm:h-[220px] h-40 own-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>
            Hi, I'm&nbsp;
            <span className="own-text-gradient hidden ss:inline-block">
              Shine D Sun
            </span>
            <span className="own-text-gradient ss:hidden">S.D.S</span>
          </h1>
          <div className={`${styles.heroSubText} md:max-w-md sm:max-w-sm`}>
            <Typewriter
              options={{
                strings: [
                  "Ignite your business with a website that elevates your brand. Contact me to get started.",
                  "Let's work together to create a website that truly represents your brand.",
                  "Whether you're launching a new website or redesigning an existing one, I can help.",
                  "Transforming Your Ideas into Fully Functional Websites & Mobile Application",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
              }}
            />
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="flex flex-row flex-wrap gap-10 justify-center">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
      <BallCanvas icon={me} />

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-[2]">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-greeny flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-cyanny mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
