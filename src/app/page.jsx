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
import dynamic from "next/dynamic";
import GlassBottomBar from "@/components/GlassBottomBar";

// import GradualBlurMemo from "@/components/GradualBlur";

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
      <div
        className="pointer-events-none"
        style={{
          position: "fixed",
          insetInline: 0,
          bottom: 0,
          height: "75px",
          zIndex: 50,
          backdropFilter: "url(filters.svg#filter) blur(4px) saturate(150%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 55%,rgba(0,0,0,0.3) 75%,rgba(0,0,0,0) 100%)",
        }}
      />
    </main>
  );
}
