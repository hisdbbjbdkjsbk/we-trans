"use client";

import { Variants, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";

type Inputs = {
  fromWhere: string;
  toWhere: string;
  name: string;
  phone?: string;
};

interface IFormProps {
  toggleModalOpen?: () => void;
}

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

const Form = ({ toggleModalOpen }: IFormProps) => {
  const [phone, setPhone] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const body = { ...data, phone };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setPhone("");
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert("Error: " + json.message);
      }
    } catch (e) {
      alert("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className='w-full max-w-xl mx-auto p-10 bg-[#0025FA] rounded-2xl shadow-xl text-center text-white font-eukraine-bold font-black text-lg'
      >
        <p className='mb-6'>
          Дякуємо, наш менеджер зв'яжеться з вами якомога швидше.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-xl mx-auto rounded-2xl p-8 md:p-10 bg-[#0025FA] shadow-xl'
    >
      <motion.div
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 md:grid-cols-2 gap-6'
      >
        <motion.div custom={0} variants={inputVariants}>
          <input
            placeholder='Звідки'
            {...register("fromWhere", { required: true })}
            className={`w-full bg-white px-4 py-3 rounded-xl font-eukraine-bold font-black text-[15px] placeholder-black focus:outline-none focus:ring-2 focus:ring-black
              ${
                errors.fromWhere
                  ? "border border-red-500"
                  : "border border-gray-300"
              }`}
            autoComplete='off'
          />
          {errors.fromWhere && (
            <span className='text-red-500 text-sm mt-1 block font-bold'>
              Це поле обовʼязкове
            </span>
          )}
        </motion.div>

        <motion.div custom={1} variants={inputVariants}>
          <input
            placeholder='Куди'
            {...register("toWhere", { required: true })}
            className={`w-full bg-white px-4 py-3 rounded-xl font-eukraine-bold font-black text-[15px] placeholder-black focus:outline-none focus:ring-2 focus:ring-black
              ${
                errors.toWhere
                  ? "border border-red-500"
                  : "border border-gray-300"
              }`}
            autoComplete='off'
          />
          {errors.toWhere && (
            <span className='text-red-500 text-sm mt-1 block font-bold'>
              Це поле обовʼязкове
            </span>
          )}
        </motion.div>

        <motion.div custom={2} variants={inputVariants}>
          <input
            placeholder='Ваше імʼя'
            {...register("name", { required: true })}
            className={`w-full bg-white px-4 py-3 rounded-xl font-eukraine-bold font-black text-[15px] placeholder-black focus:outline-none focus:ring-2 focus:ring-black
              ${errors.name ? "border border-red-500" : "border border-gray-300"}`}
            autoComplete='off'
          />
          {errors.name && (
            <span className='text-red-500 text-sm mt-1 block font-bold'>
              Це поле обовʼязкове
            </span>
          )}
        </motion.div>

        <motion.div custom={3} variants={inputVariants}>
          <MuiTelInput
            value={phone}
            onChange={handleChange}
            onBlur={() => setPhone((prev) => prev.trim())}
            defaultCountry='UA'
            forceCallingCode
            focusOnSelectCountry
            className='w-full bg-white font-eukraine-bold text-[15px] rounded-xl [&>div]:px-4 [&>div]:py-3 [&>div]:rounded-xl [&>div]:h-[48px] focus:[&>div]:ring-2 focus:[&>div]:ring-black [&>div>input]:font-black'
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='mt-10 flex flex-col md:flex-row gap-4 justify-center'
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.7 }}
      >
        <button
          type='button'
          onClick={toggleModalOpen}
          className='px-6 py-3 font-eukraine-logo font-bold rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition cursor-pointer'
        >
          Відмінити
        </button>
        <button
          type='submit'
          disabled={loading}
          className={`rounded-full font-eukraine-logo font-bold px-6 py-3 text-white transition cursor-pointer ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          {loading ? "Відправка..." : "Відправити"}
        </button>
      </motion.div>
    </form>
  );
};

export default Form;
