import { Metadata } from "next";

import Navbar from ".././components/layout/Navbar";
import Hero from ".././components/sections/Hero";
import Stats from ".././components/sections/Status";
import Products from ".././components/sections/Produto";
import Features from ".././components/sections/Features";
import Gallery from ".././components/sections/Gallery";
import About from ".././components/sections/About";
import Steps from ".././components/sections/Steps";
import Testimonials from ".././components/sections/Testimonials";
import CTA from ".././components/sections/CTA";
import Footer from ".././components/layout/Footer";
import Topbar from "../components/layout/topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Hero />
      <Stats />
      <Products />
      <Features />
      <Gallery />
      <About />
      <Steps />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
