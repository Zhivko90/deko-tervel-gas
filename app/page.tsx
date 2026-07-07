import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fuels from "@/components/Fuels";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Fuels />
        <Advantages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}