import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About/>
    <Experience />
    <ShowcaseSection />
    
    <Contact />
    <Footer />
  </>
);

export default App;
