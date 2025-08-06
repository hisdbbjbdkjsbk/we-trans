"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";

import ava1 from "@assets/ava-1.webp";
import ava2 from "@assets/ava-2.webp";
import ava3 from "@assets/ava-3.webp";
import ava4 from "@assets/ava-4.webp";
import ava5 from "@assets/ava-5.webp";
import ava6 from "@assets/ava-6.webp";

const reviews = [
  {
    text: "Дуже професійна та комфортна поїздка. Мікроавтобус був супер чистим, а водій — привітним та пунктуальним. Обов'язково поїду з ними знову!",
    avatar: ava1,
  },
  {
    text: "Поїздка була комфортною, водій — ввічливим і професійним. Машина — чиста, нова, з усіма зручностями. Рекомендую!",
    avatar: ava2,
  },
  {
    text: "Виїзд вчасно, зручні сидіння, спокійна атмосфера. Приємно вразив рівень організації — 10/10.",
    avatar: ava3,
  },
  {
    text: "Мікроавтобус просторий і чистий, кондиціонер працював справно, а водій постійно цікавився, чи все добре. Дуже вдячна!",
    avatar: ava4,
  },
  {
    text: "Сервіс на найвищому рівні! Водій приїхав заздалегідь, допоміг із речами, дорога минула спокійно та швидко.",
    avatar: ava5,
  },
  {
    text: "На борту все необхідне: Wi-Fi, зарядки, пледи. Поїздка пройшла легко та без стресу. Рекомендую друзям!",
    avatar: ava6,
  },
];

const Review = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='py-16 px-4 sm:px-5 text-center'
    >
      <h2 className='mb-20 font-eukraine-logo text-4xl sm:text-6xl font-black text-[#002FFF]'>
        Що кажуть наші пасажири
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        loop
        autoplay
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start text-left max-w-[400px] mx-auto'>
              <Image
                className='max-w-[80px] max-h-[80px] sm:max-w-[90px] sm:max-h-[90px] min-w-[80px] min-h-[80px] sm:min-w-[90px] sm:min-h-[90px] rounded-full object-cover'
                src={review.avatar}
                alt={`avatar-${i + 1}`}
              />
              <p className='font-eukraine-bold text-xl sm:text-2xl leading-snug'>
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Review;
