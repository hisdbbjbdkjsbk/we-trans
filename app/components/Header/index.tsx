"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LogoSm from "../../../assets/logo-last-header.svg";
import PhoneCall from "../../../assets/phone-call.svg";
import TelegramIcon from "../../../assets/telegram.svg";
import ViberIcon from "../../../assets/viber.svg";
import WhatsappIcon from "../../../assets/whatsapp.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='p-2 md:px-6 flex items-center justify-between relative'
    >
      <motion.a
        className='cursor-pointer scale-75 md:scale-100'
        href='/'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <LogoSm />
      </motion.a>

      <div
        className='relative'
        onClick={() => setShowMenu(!showMenu)}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {/* Phone Button */}
        <motion.div
          className='flex scale-75 items-center justify-center rounded-full p-5 sm:p-7 bg-[#0025FA] cursor-pointer'
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
        >
          <PhoneCall />
        </motion.div>

        {/* Social Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className='absolute scale-75 md:scale-100 sm:top-1/2 top-[50%] right-14 sm:right-[110%] transform -translate-y-1/2 flex flex-row gap-6 sm:gap-8 bg-white shadow-lg p-3 sm:p-4 rounded-lg z-50'
            >
              <a
                href='https://t.me/ostaptrans'
                target='_blank'
                rel='noreferrer'
              >
                <TelegramIcon className='w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform' />
              </a>
              <a href='viber://chat?number=%2B380970551341'>
                <ViberIcon className='w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform' />
              </a>
              <a href='https://wa.me/380970551341'>
                <WhatsappIcon className='w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform' />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
