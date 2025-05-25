import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Service from "@/components/Service";
import Voice from "@/components/Voice";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Header />
      <Mission />
      <Service />
      <Voice />
      <About />
    </main>
  );
}
