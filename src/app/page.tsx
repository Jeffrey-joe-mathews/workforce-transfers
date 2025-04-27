import { About } from '@/sections/About';
import { Features } from '@/sections/Features';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Testimonials } from '@/sections/Testimonials';
import { Services } from '@/sections/Services'
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
