import Navbar from "@/app/components/landing-page/Navbar";
import Hero from "@/app/components/landing-page/Hero";
import About from "@/app/components/landing-page/About";
import Features from "@/app/components/landing-page/Features";
import WhyInvest from "@/app/components/landing-page/WhyInvest";
import Services from "@/app/components/landing-page/Services";
import HowItWorks from "@/app/components/landing-page/HowItWorks";
import Pricing from "@/app/components/landing-page/Pricing";
import FAQ from "@/app/components/landing-page/FAQ";
import Footer from "@/app/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <WhyInvest />
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
