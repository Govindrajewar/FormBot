import "./App.css";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import LogoSection from "./components/LogoSection";
import Section5 from "./components/Section5";

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
    </div>
  );
}

export default App;
