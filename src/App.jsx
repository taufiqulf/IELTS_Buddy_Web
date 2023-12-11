import "./App.css";
import "./index.css";
import Home from "../src/pages/components/Home";
import Navbar from "../src/pages/components/Navbar";
import Features from "../src/pages/components/Features";
import Test from "../src/pages/components/Test";
import Footer from "../src/pages/shared/Footer";
import Speech from "./pages/components/Speech";

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
