import Background from "./components/background/background";
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const sections = [
  { Component: Hero, className: "h-screen" },
  { Component: About, className: "bg-white" },
  { Component: Skills, className: "bg-white" },
  { Component: Projects, className: "bg-white" },
  { Component: Contact, className: "bg-white" }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Background />
      <div className="relative z-10">
        {sections.map(({ Component, className }, index) => (
          <section key={index} className={`relative ${className}`}>
            <Component />
          </section>
        ))}
        <Footer />
      </div>
    </main>
  );
}

