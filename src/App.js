import "./App.css";
import { Fragment } from "react";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import SaveTimeSection from "./Components/SaveTimeSection";
import StepsSection from "./Components/StepsSection";
import HostSection from "./Components/HostSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <Nav />
      <HeroSection />
      <SaveTimeSection />
      <StepsSection />
      <HostSection />
      <Footer />
    </Fragment>
  );
}

export default App;
