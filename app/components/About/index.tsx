"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import sprinter from "@assets/about-sprinter.webp";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='py-16 px-4 sm:px-5 overflow-hidden'
    >
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='mb-10 font-eukraine-logo text-4xl sm:text-6xl font-black text-[#002FFF]'
      >
        Ваш комфорт – наш пріоритет{" "}
      </motion.h2>
      <motion.p
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className='mb-6 font-eukraine-bold text-[26px] sm:text-[40px]'
      >
        Наш автопарк сучасних мікроавтобусів Mercedes Sprinter забезпечує
        комфортну та безпечну подорож щоразу. Ми надаємо надійні та ефективні
        транспортні послуги по багатьох європейських напрямках, адаптовані до
        вашого графіку та потреб.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className='flex justify-center sm:justify-end'
      >
        <Image
          className='w-full max-w-[100%] sm:w-[1150px]'
          src={sprinter}
          alt='sprinter'
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
