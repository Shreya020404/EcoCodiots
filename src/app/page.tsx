import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navigation from "@/components/Navigation";


export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}
