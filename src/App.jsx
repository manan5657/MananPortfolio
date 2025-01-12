import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import PreLoader from "./components/Preloader/PreLoader.jsx";

const App = () => {
  return (
    <>
      <PreLoader />
      <CustomCursor />
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default App;
