"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LogoSm from "../../../assets/logo-last-header.svg";
import PhoneCall from "../../../assets/phone-call.svg";
import TelegramIcon from "../../../assets/telegram.svg";
import ViberIcon from "../../../assets/viber.svg";
import WhatsappIcon from "../../../assets/whatsapp.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showMenu) {
      timer = setTimeout(() => setShowIcons(true), 300);
    } else {
      setShowIcons(false);
    }
    return () => clearTimeout(timer);
  }, [showMenu]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='p-2 md:px-6 md:py-2 h-[80px] md:h-[94px] flex items-center justify-between relative'
    >
      <motion.a
        href='/'
        className='cursor-pointer scale-85 md:scale-100'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoSm />
      </motion.a>

      <div className='relative scale-55 md:scale-65'>
        <motion.div
          onMouseEnter={() => {
            setShowMenu(true);
            setRotating(true);
          }}
          onMouseLeave={() => {
            setRotating(true);
            setShowMenu(false);
          }}
          className='group flex items-center cursor-pointer overflow-hidden'
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            backgroundColor: "#000",
            borderRadius: showMenu ? 36 : 9999,
            width: showMenu ? 260 : 80,
            padding: showMenu ? "12px 20px" : "20px",
            scale: 1,
          }}
          transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
          style={{
            transition:
              "width 0.3s ease, border-radius 0.3s ease, padding 0.3s ease",
          }}
        >
          <motion.div
            animate={{
              scale: showMenu ? 1.1 : 1,
              rotate: rotating ? 360 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => setRotating(false)}
            className='z-10 mr-5'
          >
            <PhoneCall />
          </motion.div>

          <AnimatePresence>
            {showIcons && (
              <motion.div
                key='socials'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='absolute right-0 top-1/2 flex gap-4 sm:gap-4 -translate-y-1/2 z-20'
                style={{ pointerEvents: showIcons ? "auto" : "none" }}
              >
                <a
                  href='https://t.me/ostaptrans'
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 rounded-2xl'
                >
                  <TelegramIcon className='w-8 h-8 sm:w-8 sm:h-8 hover:scale-110 transition-transform' />
                </a>
                <a
                  href='viber://chat?number=%2B380970551341'
                  className='p-2 rounded-2xl'
                >
                  <ViberIcon className='w-8 h-8 sm:w-8 sm:h-8 hover:scale-110 transition-transform' />
                </a>
                <a
                  href='https://wa.me/380970551341'
                  className='p-2 rounded-2xl'
                >
                  <WhatsappIcon className='w-8 h-8 sm:w-8 sm:h-8 hover:scale-110 transition-transform' />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
