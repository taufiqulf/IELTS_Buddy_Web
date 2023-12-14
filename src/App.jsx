import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/NavHome";
import Features from "./components/Features";
import Test from "./components/Test";
import Footer from "./shared/Footer";
import Speech from "./components/Speech";

function App() {
  return (
    <>
      {/* COMPONENTS */}
      <Navbar />
      <Home />
      <Features />
      <Test />
      <Speech />
      <Footer />
    </>
  );
}

export default App;
