import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Background />
      <div className="relative z-10">
        <section className="h-screen relative">
          <Hero />
        </section>
        <section className="bg-white relative">
          <About />
        </section>
        <section className="bg-white relative">
          <Skills />
        </section>
        <section className="bg-white relative">
          <Projects />
        </section>
        <section className="bg-white relative">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}

