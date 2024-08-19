import { useState, useEffect } from "react";
import SpinnerLoadingScreen from "./components/ui/SpinnerLoading/SpinnerLoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SpinnerLoadingScreen loading={loading} />}
      <div className={`App ${loading ? 'hidden' : ''}`}>
        <h1 className="font-bold">Nudros</h1>
      </div>
    </>
  );
}

export default App;
