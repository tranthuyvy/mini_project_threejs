import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My project
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "");