"use client";
import { motion } from "framer-motion";
import PhoneCall from "../../../assets/phone-call.svg";
import bgGif from "../../../assets/hero-bg.gif";

interface IHeroProps {
  toggleModalOpen: () => void;
}

const Hero = ({ toggleModalOpen }: IHeroProps) => {
  return (
    <motion.section
      className='h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center flex-col w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${bgGif.src})` }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='text-white uppercase font-black font-eukraine-logo text-3xl sm:text-5xl p-4 mb-20 sm:mb-28 text-center max-w-[100%] sm:max-w-[80%] lg:max-w-[80%] md:leading-14 lg:leading-18'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Надійне та комфортне транспортування по всій Європі
      </motion.h1>
      <motion.button
        onClick={toggleModalOpen}
        className='py-3 px-6 mb-14 flex items-center justify-center bg-[#0025FA] rounded-[45px] cursor-pointer font-eukraine-bold text-2xl sm:text-3xl text-white font-black'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        Забронюйте поїздку
      </motion.button>
      <motion.a
        className='flex items-center justify-center rounded-full p-5 sm:p-7 bg-black cursor-pointer'
        initial={{ scale: 0, rotate: 180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
        href='tel:+380970551341'
      >
        <PhoneCall />
      </motion.a>
    </motion.section>
  );
};

export default Hero;
