import HeroSection from "@/app/components/HeroSection";
import TrainersSection from "@/app/trainers/page"
import MembershipSection from "@/app/membership/page"
// import GallerySection from "@/app/gallery/page"
import ContactSection from "@/app/contact/page"
import AboutUs from "@/app/about/page"
import ClassesSection from "@/app/classes/page"
import MarqueeDemo from "./components/MarqueeDemo";
import WhyChooseUs from "@/app/components/why-choose-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white font-[family-name:var(--font-geist-sans)] relative z-10">
      <HeroSection />
      <AboutUs />
      <ClassesSection />
      <TrainersSection />
      <MembershipSection />
      <WhyChooseUs />
      <MarqueeDemo />
      <ContactSection />
      
      
      
    </main>
  );
}
