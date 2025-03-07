import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { ProductsSection } from "@/components/ui/products-section";
import { TeamSection } from "@/components/ui/team-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}