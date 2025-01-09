import Header from "./ui/Header";
import Hero from "./shared/Hero";
import Skills from "./shared/Skills";
import Project from "./shared/Project";
import Testimonial from "./shared/Testimonial";
import Function from "./shared/Function";
import Contact from "./shared/Contact";
// import Footer from "./ui/Footer";

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

    {/*Want to own a Website?*/}
    <Contact />

    {/* <Footer /> */}
    </>
  );
}
