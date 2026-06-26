import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroPremium from "@/components/sections/HeroPremium";
import TrustBar from "@/components/sections/TrustBar";
import ProblemsPremium from "@/components/sections/ProblemsPremium";
import ServicesPremium from "@/components/sections/ServicesPremium";
import CaseStudies from "@/components/sections/CaseStudies";
import ProcessPremium from "@/components/sections/ProcessPremium";
import Testimonials from "@/components/sections/Testimonials";
import AboutPremium from "@/components/sections/AboutPremium";
import ContactPremium from "@/components/sections/ContactPremium";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroPremium />
        <TrustBar />
        <ProblemsPremium />
        <ServicesPremium />
        <CaseStudies />
        <ProcessPremium />
        <Testimonials />
        <AboutPremium />
        <ContactPremium />
      </main>
      <Footer />
    </>
  );
}
