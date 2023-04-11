import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
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
    </div>
  );
};

export default App;
