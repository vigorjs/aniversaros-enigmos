// import Container from "./components/header/Container";
import Header from "./components/header/Header";

import Hero from "./components/hero/Hero";
import { useState, useEffect } from "react";
import SpinnerLoadingScreen from "./components/ui/SpinnerLoading/SpinnerLoadingScreen";

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
      {loading && <SpinnerLoadingScreen loading={loading} />}
      <div className={`App ${loading ? 'hidden' : ''}`}>
        <Header/>
        <Hero/>
      </div>
    </>
  );
}

export default App;
