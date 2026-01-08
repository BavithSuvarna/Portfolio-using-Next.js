import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Technologies />
      <Achievements />
      <Contact />
    </div>
  );
}
