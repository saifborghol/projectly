import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import AboutUs from "@/components/ui/aboutUs";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/Footer";
import Services from "@/components/ui/services";
import Portfolio from "@/components/ui/Portfolio";
import Support from "@/components/ui/Support";
import Projecly from "@/components/ui/Projecly";
import Integration from "@/components/ui/Integration";
import Process from "@/components/ui/Process";
import Launch from "@/components/ui/Launch";
import Testimonials from "@/components/ui/Testimonials";
import Collaborate from "@/components/ui/Collaborate";
import FAQ from "@/components/ui/FAQ";
import Join from "@/components/ui/join";
import SEO from "@/components/SEO";
import GradualBlurMemo from "@/components/GradualBlur";

export default function Home() {
  return (
    <main className="relative">
      <SEO />
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Services />
      <Portfolio />
      <Support />
      <Projecly />
      <Integration />
      <Process />
      <Launch />
      <Testimonials />
      <FAQ />
      <Collaborate />
      <Join />
      <Footer />

      <GradualBlurMemo
        position="bottom"
        height="8rem"
        strength={3}
        divCount={6}
        target="page"
        animated={true}
        duration="0.5s"
        easing="ease-out"
        curve="ease-out"
        opacity={0.9}
      />
    </main>
  );
}
