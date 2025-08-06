"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import benefit from "@assets/passenger-seats.webp";

const Advantage = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between py-16 px-4 sm:px-5 overflow-hidden'>
      <motion.div
        className='flex flex-col justify-between max-w-full lg:max-w-[65%]'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className='mb-10 font-eukraine-logo text-4xl sm:text-6xl font-black text-[#002FFF]'>
          Чому варто подорожувати з нами?
        </h2>
        <div className='flex flex-col gap-3 mb-6 text-xl sm:text-3xl font-eukraine-bold'>
          <p>
            Наш автопарк обслуговують досвідчені водії, які використовують
            автобуси всесвітньо відомого виробника Mercedes.
          </p>
          <p>
            Наша компанія гарантує безпечні перевезення, оскільки наш автопарк
            складається з нових та комфортних мікроавтобусів преміум-класу. Усі
            транспортні засоби проходять технічне обслуговування перед кожною
            поїздкою та обслуговуються виключно оригінальними запчастинами.
          </p>
          <p>
            Кожен мікроавтобус розрахований на 7 пасажирських місць замість
            стандартних 14 — для максимального комфорту під час подорожі. На
            борту ви знайдете все необхідне: клімат-контроль, зарядні пристрої
            USB, безкоштовний Wi-Fi, телевізор, подушки та ковдри.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='flex mt-10 lg:mt-0 justify-center'
      >
        <Image
          className='w-full max-w-[390px] h-auto lg:h-[520px] lg:mr-16'
          src={benefit}
          alt='passenger seats'
        />
      </motion.div>
    </section>
  );
};

export default Advantage;
