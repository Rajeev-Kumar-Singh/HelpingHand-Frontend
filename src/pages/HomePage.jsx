import React from "react";
import { Helmet } from "react-helmet";
import Header from "Components/Header";
import Hero from "Components/Hero";
import About from "Components/About";
import Programs from "Components/Programs";
import Impact from "Components/Impact";
import Team from "Components/Team";
import Donate from "Components/Donate";
import Contact from "Components/Contact";
import Footer from "Components/Footer";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Yashashvi Foundation - Making a Difference Together</title>
        <meta
          name="description"
          content="Empowering communities worldwide through sustainable development, education, and compassionate action. Join Yashashvi Foundation in creating lasting positive change."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Programs />
          <Impact />
          <Team />
          <Donate />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
