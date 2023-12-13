import React from "react";
import ReactDOM from "react-dom/client";
import ListeningQuiz from "./ListeningQuiz.jsx";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/shared/Footer.jsx";
import "/src/index.css";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById("listening")).render(
  <>
    <Navbar />
    <ListeningQuiz />
    <Footer />
  </>
);
