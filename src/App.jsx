import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";

const images = [
  "https://via.placeholder.com/400x400?text=Image+1",
  "https://via.placeholder.com/400x400?text=Image+2",
  "https://via.placeholder.com/400x400?text=Image+3",
  "https://via.placeholder.com/400x400?text=Image+4",
  "https://via.placeholder.com/400x400?text=Image+5",
];

function App() {
  return (
    <>
      <div className="w-full bg-slate-500 relative">
        <Header />
        <Gallery />
      </div>
    </>
  );
}

export default App;
