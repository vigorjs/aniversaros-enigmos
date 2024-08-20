import Header from "./components/header/Header";
import Quote from "./components/quotes/Quote";
import { useState, useEffect } from "react";
import SpinnerLoadingScreen from "./components/ui/SpinnerLoading/SpinnerLoadingScreen";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import OurTeam from "./components/ourteam/OurTeam";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Quiz from "./components/quiz/Quiz";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SpinnerLoadingScreen loading={loading} />
      <div className={`App ${loading ? "hidden" : ""}`}>
        <Header />
        <Hero />
        <About />
        <Quote />
        <Gallery />
        <Quiz />
        <OurTeam />
        <Footer />
      </div>
    </>
  );
}

export default App;
