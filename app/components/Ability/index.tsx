"use client";
import { motion } from "framer-motion";
import Wifi from "@assets/wifi.svg";
import KidChair from "@assets/kid-chair.svg";
import Bookmark from "@assets/bookmark.svg";
import Blanket from "@assets/blanket.svg";
import Food from "@assets/food.svg";
import Seat from "@assets/seat.svg";
import Cocktail from "@assets/cocktail.svg";

const Ability = () => {
  const icons = [
    <Wifi key='wifi' />,
    <KidChair key='b1' />,
    <Bookmark key='bookmark' />,
    <Blanket key='wifi2' />,
    <Food key='b3' />,
    <Seat key='seat' />,
    <Cocktail key='cocktail ' />,
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='flex flex-col items-center text-center py-16 px-4 sm:px-5 overflow-hidden'
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='mb-10 font-eukraine-logo text-4xl sm:text-6xl font-black text-[#002FFF]'
        viewport={{ once: true }}
      >
        Все, що вам потрібно на борту
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='max-w-full font-eukraine-bold sm:max-w-[60%] mb-16 text-[24px] sm:text-[40px]'
        viewport={{ once: true }}
      >
        Подорожі на далекі відстані не обов'язково мають бути незручними. Ми
        пропонуємо Wi-Fi, розваги та зручні функції, щоб зробити вашу подорож
        приємною від початку до кінця.
      </motion.p>

      <div className='flex flex-wrap gap-6 justify-center lg:justify-center lg:gap-28 xl:gap-24'>
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Ability;
