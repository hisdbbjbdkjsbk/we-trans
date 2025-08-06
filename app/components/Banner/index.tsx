import road from "@assets/road.webp";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='overflow-hidden'
    >
      <Image
        className='w-full bg-cover h-[400px] sm:h-[600px] md:h-[760px]'
        src={road}
        alt='road'
      />
    </motion.section>
  );
};

export default Banner;
