import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProfessionalProjects } from "./components/ProfessionalProjects";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className="app loaded">
      <Navbar />
      <Hero />
      <ProfessionalProjects />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
