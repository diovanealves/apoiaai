import { Header } from "./_components/header";
import { HeroSection } from "./_components/hero-section";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
