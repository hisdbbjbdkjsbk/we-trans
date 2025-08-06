"use client";

import { useState } from "react";
import About from "@components/About";
import Country from "@/app/components/Country";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Advantage from "@components/Advantage";
import Ability from "@components/Ability";
import Banner from "@components/Banner";
import Review from "@components/Review";
import Form from "./components/Form";
import Modal from "./components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <main>
        <Hero toggleModalOpen={handleModalOpen} />
        <About />
        <Country />
        <Advantage />
        <Ability />
        <Banner />
        <Review />
      </main>
      <Footer />

      <Modal isModalOpen={isModalOpen} toggleModalOpen={handleModalOpen}>
        <Form toggleModalOpen={handleModalOpen} />
      </Modal>
    </>
  );
};

export default Home;
