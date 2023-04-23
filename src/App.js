import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Squares from "./components/Squares";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Squares />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
