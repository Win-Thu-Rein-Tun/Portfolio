import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00ff00]"></div>
          <div className="w-1 sm:h-80 h-40 own-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>
            Hi, I'm&nbsp;
            <span className="own-text-gradient hidden ss:inline-block">
              Sun D Shine
            </span>
            <span className="own-text-gradient ss:hidden">S.D.S</span>
          </h1>
          <p
            className={`${styles.heroSubText} lg:max-w-lg md:max-w-md sm:max-w-sm`}
          >
            <Typewriter
              options={{
                strings: [
                  "Transforming Your Ideas into Fully Functional Websites & Mobile Application",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
