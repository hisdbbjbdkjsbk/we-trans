"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import flag1 from "@assets/netherlands.png";
import flag2 from "@assets/flag-2.webp";
import flag3 from "@assets/flag-3.webp";
import flag4 from "@assets/flag-4.webp";
import flag5 from "@assets/france.png";
import flag6 from "@assets/poland.png";
import flag7 from "@assets/austria.png";
import flag8 from "@assets/ukraine.png";

const Country = () => {
  const flags = [flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='py-16 px-4 sm:px-5 overflow-hidden'
    >
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className='mb-10 text-4xl font-eukraine-logo sm:text-6xl font-black text-[#002FFF]'
      >
        Ми подорожуємо через кордони
      </motion.h2>

      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className='mb-16 font-eukraine-bold text-[24px] sm:text-[40px]'
      >
        Незалежно від того, чи ви подорожуєте з Великої Британії до Німеччини,
        Нідерландів, Франції чи Бельгії — ми подбаємо про вас. Наші досвідчені
        водії та першокласний автопарк забезпечують безперебійну міжнародну
        подорож.
      </motion.p>

      <div className='flex flex-wrap gap-6 justify-center lg:justify-center lg:gap-14'>
        {flags.map((flag, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
          >
            <Image
              className='w-[140px] sm:w-[180px]'
              src={flag}
              alt={`flag ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Country;
