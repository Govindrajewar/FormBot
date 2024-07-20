import "./App.css";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import LogoSection from "./components/LogoSection";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <LogoSection />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;
