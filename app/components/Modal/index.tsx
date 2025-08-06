"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  toggleModalOpen: () => void;
}

const backdropVariants = {
  visible: { opacity: 1, pointerEvents: "auto" },
  hidden: { opacity: 0, pointerEvents: "none" },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1 },
};

const Modal = ({ children, isModalOpen, toggleModalOpen }: IModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        toggleModalOpen();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, toggleModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) toggleModalOpen();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className='fixed inset-0 bg-[rgba(0,0,0,0.45)] flex justify-center items-center px-4 md:px-0 z-50'
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          onClick={handleBackdropClick}
        >
          <motion.div
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className='bg-[#0025FA] rounded-2xl shadow-xl max-w-xl w-full mx-auto overflow-auto max-h-[90vh]'
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
