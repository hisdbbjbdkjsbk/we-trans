"use client";
import { motion } from "framer-motion";
import PhoneCall from "@assets/phone-call.svg";
import TelegramIcon from "@assets/telegram.svg";
import InstagramIcon from "@assets/instagram.svg";
import WhatsappIcon from "@assets/whatsapp.svg";
import TikTokIcon from "@assets/tiktok.svg";
import FacebookIcon from "@assets/facebook.svg";
import ViberIcon from "@assets/viber.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      viewport={{ once: true }}
      className='footer flex flex-col items-center from-gradient-footer py-16 px-4 sm:px-10'
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className='font-eukraine-bold text-center text-2xl sm:text-4xl text-white mb-24 sm:mb-[120px] max-w-full sm:w-[60%]'
      >
        Потрібна допомога з бронюванням або маєте запитання? Звертайтеся до нас
        будь-коли — ми тут, щоб допомогти вам подорожувати комфортно та
        безпечно.
      </motion.h2>

      <motion.div
        className='flex flex-wrap justify-center py-5 px-8 sm:px-10 gap-8 bg-white rounded-[45px] mb-24 sm:mb-[120px]'
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link target='_blank' href='https://t.me/ostaptrans'>
          <TelegramIcon />
        </Link>
        <Link
          target='_blank'
          href='https://www.instagram.com/pereviznyk_18?igsh=MWVkMXZ0bm15NTV4OQ=='
        >
          <InstagramIcon />
        </Link>
        <Link target='_blank' href='viber://chat?number=%2B380970551341'>
          <ViberIcon />
        </Link>
        <Link
          target='_blank'
          href='https://wa.me/380970551341
'
        >
          <WhatsappIcon />
        </Link>
        <Link
          target='_blank'
          href='https://www.tiktok.com/@ostap_perevezenny?_t=ZM-8xyG281shIU&_r=1'
        >
          <TikTokIcon />
        </Link>
        <Link target='_blank' href='https://www.facebook.com/share/1G62EjPFba/'>
          <FacebookIcon />
        </Link>
      </motion.div>

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
    </motion.footer>
  );
};

export default Footer;
