import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  face,
  gmail,
  birthday,
  user,
  phone,
  gh,
  linkedin,
  map,
} from "../assets";

const Profile = () => {
  return (
    <div className="xl:mt-12 flex gap-8 overflow-hidden flex-col xl:flex-row lg:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-auto bg-black-100 p-8 rounded-xl flex flex-col item-center xl:flex-col lg:flex-col md:flex-row md:justify-center md:items-center"
      >
        <div className="md:flex-1 flex flex-col justify-center items-center lg:items-start xl:items-start">
          <p className={styles.sectionSubText}>Personal Information</p>
          <h3 className={styles.sectionHeadText}>Tran Thuy Vy</h3>

          <img
            src={face}
            alt="image-face"
            className="w-[250px] h-[360px] rounded-lg border-neutral-400 items-center justify-center m-5 mb-12"
          />
        </div>
        <div className="md:flex-1 md:pt-20 lg:pt-0 xl:pt-0">
          <label className="flex mb-1">
            <img
              src={user}
              alt="icon-user"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4">Female</span>
          </label>

          <label className="flex mb-1">
            <img
              src={birthday}
              alt="icon-birth"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4">04/04/2001</span>
          </label>

          <label className="flex mb-1">
            <img
              src={phone}
              alt="icon-phone"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4">0373162586</span>
          </label>

          <label className="flex mb-1">
            <img
              src={map}
              alt="icon-maps"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4">
              Ho Chi Minh City
            </span>
          </label>

          <label className="flex mb-1">
            <img
              src={gmail}
              alt="icon-gmail"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4 cursor-pointer">
              <a href="https://mail.google.com/mail/u/2/#inbox?compose=new">
                ttv.thuyvy.1544@gmail.com
              </a>
            </span>
          </label>

          <label className="flex mb-1">
            <img
              src={gh}
              alt="icon-github"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4 cursor-pointer">
              <a href="https://github.com/tranthuyvy">
                https://github.com/tranthuyvy
              </a>
            </span>
          </label>

          <label className="flex mb-1">
            <img
              src={linkedin}
              alt="icon-linkedin"
              className="w-[25px] h-[25px] items-center justify-center mr-3"
            />

            <span className="text-white font-medium mb-4 cursor-pointer">
              <a href="https://www.linkedin.com/in/vy-tran-fe/">
                https://www.linkedin.com/in/vy-tran-fe/
              </a>
            </span>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-auto bg-black-100 p-8 rounded-xl"
      >
        <h3 className={styles.sectionHeadText}>Objective</h3>

        <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
          <li className="text-white-100 text-[16px] pl-1 tracking-wider mb-5">
            During the first 3-6 months, focus on learning, acquiring additional
            knowledge and experience, and getting accustomed to the work
            environment.
          </li>
          <li className="text-white-100 text-[16px] pl-1 tracking-wider">
            After 6 months, become an official employee, adapt to the work
            environment and contribute to the company through personal
            development.
          </li>
        </ul>

        <br />

        <h3 className={styles.sectionHeadText}>Education</h3>
        <p className="text-white-100 text-[16px] font-semibold pl-1 tracking-wider mb-5">
          Posts and Telecommunications Institute of Technology at Ho Chi Minh
          City
        </p>
        <p className="text-white-100 text-[14px] font-medium pl-1 tracking-wider mb-5 italic">
          2019 - 2023
        </p>
        <p className="text-white-100 text-[15px] font-extralight pl-1 tracking-wider mb-5">
          Received a Good Scholarship in the first semester of the second year
          and the first semester of the third year.
        </p>

        <h3 className={styles.sectionHeadText}>Experience</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">
            Designer at Little Lotus Preschool
          </li>
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">
            Design banners, posters, brochures and record videos, take photos,
            and edit videos.
          </li>
        </ul>

        <br />

        <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">
            Frontend Developer - ReactJs
          </li>
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">
            Intern and stay to work after. Implementing responsive design.
            Developing web applications using the NodeJs - Express and ReactJs.
          </li>
        </ul>

        {/* <h3 className={styles.sectionHeadText}>Interests</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">Play Badminton.</li>
          <li className="text-white-100 text-[15px] pl-1 tracking-wider">Reading Books.</li>
        </ul> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Profile, "profile");
