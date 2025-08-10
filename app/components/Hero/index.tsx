"use client";
import { motion } from "framer-motion";
import bgGif from "../../../assets/hero-bg.gif";
import PhoneCall from "../../../assets/phone-call.svg";

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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        href='tel:+380970551341'
        className='flex gap-1 text-sm md:gap-2 py-2 px-4 md:py-3 md:px-6 md:text-xl items-center justify-center bg-[#0226fa] rounded-[45px] cursor-pointer font-inter  text-white font-black'
      >
        +380 (97) 055 13 41
        <PhoneCall className='scale-50 md:scale-75' />
      </motion.a>
    </motion.section>
  );
};

export default Hero;
