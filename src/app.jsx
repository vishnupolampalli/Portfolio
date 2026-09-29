import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/project";
import Education from "./components/Education";
import Certifications from "./components/Certification";
import Experience from "./components/Experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MouseLight from "./components/MouseLight";

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <MouseLight />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;