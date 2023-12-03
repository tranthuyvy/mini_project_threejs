import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm
            <span className="text-[#915eff]"> Thuy Vy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className="sm:block hidden" /> and
            website applications. <br className="sm:block hidden" />I wish
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[70px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 32, 0]
              }}
              transition={{
                duration: 1.75,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-5 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
