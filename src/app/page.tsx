import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import AboutUs from "@/components/ui/aboutUs";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/Footer";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Services />
      <Footer />
    </main>
  );
}
