import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Test from "./components/Test";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      {/* COMPONENTS */}
      <Navbar />
      <Home />
      <Features />
      <Test />
      <Footer />
    </>
  );
}

export default App;
