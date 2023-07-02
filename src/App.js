import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Social />

    </div>
  );
}

export default App;
