import { MotionProvider } from "@/components/motion-provider";
import { Header } from "@/components/site/header";
import {
  ContactSection,
  Footer,
  Hero,
  PrestationsSection,
  SalonSection,
  UniversSection,
} from "@/components/site/sections";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <UniversSection />
        <PrestationsSection />
        <SalonSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionProvider>
  );
}
