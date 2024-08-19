// import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
// import Quote from "./components/quotes/Quote";
import { useState, useEffect } from "react";
import SpinnerLoadingScreen from "./components/ui/SpinnerLoading/SpinnerLoadingScreen";
import About from "./components/about/About";
import Footer from "./components/footer/Footer"


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
        <Header/>
        {/* <Hero/> */}
        <About/>
      </div>
     <Footer />
    </>
  );
}

export default App;
