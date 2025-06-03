import { CTASection } from "./_components/cta-section";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/hero-section";
import { HowItWorksSection } from "./_components/how-it-works-section";
import { StatisticsSection } from "./_components/statistics-section";
import { StreamersSection } from "./_components/streamers-section";
import { TestimonialsSection } from "./_components/testimonials-section";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatisticsSection />
        <HowItWorksSection />
        <StreamersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
