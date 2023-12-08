import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Test from "./components/Test";

function App() {
  return (
    <>
      {/* COMPONENTS */}
      <Navbar />
      <Home />
      <Features />
      <Test />
    </>
  );
}

export default App;
