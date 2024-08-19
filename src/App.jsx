// import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";

import Hero from "./components/hero/Hero";
import { useState, useEffect } from "react";
import SpinnerLoadingScreen from "./components/ui/SpinnerLoading/SpinnerLoadingScreen";
import About from "./components/about/About";

const images = [
  "https://via.placeholder.com/400x400?text=Image+1",
  "https://via.placeholder.com/400x400?text=Image+2",
  "https://via.placeholder.com/400x400?text=Image+3",
  "https://via.placeholder.com/400x400?text=Image+4",
  "https://via.placeholder.com/400x400?text=Image+5",
];

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       <SpinnerLoadingScreen loading={loading} />
      <div className={`App ${loading ? 'hidden' : ''}`}>
        {/* <Header/>
        <Hero/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
