import Image from "next/image";
import Header from "./shared/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Function from "./components/Function";
import Contact from "./components/Contact";
import Footer from "./shared/Footer";

export default function Home() {
  return (
    <>

    <Header />

    <Hero />

    <Skills />

    {/*Recent Works*/}
    <Project />

    {/*Customer Feedback*/}
    <Testimonial />

    {/*What can you do with Website?*/}
    <Function />

    {/*Want a Website?*/}
    <Contact />

    <Footer />
    </>
  );
}
