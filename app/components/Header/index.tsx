"use client";
import { motion } from "framer-motion";
import LogoSm from "../../../assets/logo-last-header.svg";
import PhoneCall from "../../../assets/phone-call.svg";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='py-6 px-4 sm:px-6 flex items-center justify-between'
    >
      <motion.a
        className='cursor-pointer'
        href='/'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <LogoSm />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        href='tel:+380970551341'
        className='flex gap-1 text-sm md:gap-2 py-2 px-4 md:py-3 md:px-6 md:text-xl items-center justify-center bg-[#0025FA] rounded-[45px] cursor-pointer font-inter  text-white font-black'
      >
        +380 (97) 055 13 41
        <PhoneCall className='scale-50 md:scale-75' />
      </motion.a>
    </motion.header>
  );
};

export default Header;
