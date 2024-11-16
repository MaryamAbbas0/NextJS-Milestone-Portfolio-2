"use client";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import AOS from "aos";
import "aos/dist/aos.css"; // Include the default AOS CSS
import { useEffect } from "react";
import "../styles/global.css"; // Import the custom CSS file

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
