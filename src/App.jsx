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
import AnimatedTitle from "./components/AnimatedTitle/AnimatedTitle.jsx";

const App = () => {
  return (
    <>
      <AnimatedTitle />
      <main className="max-w-7xl mx-auto relative">
        <PreLoader />
        <CustomCursor />
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
