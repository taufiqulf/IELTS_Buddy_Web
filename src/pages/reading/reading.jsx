import React from "react";
import ReactDOM from "react-dom/client";
import ReadingQuiz from "./ReadingQuiz.jsx";
import NavTest from "/src/shared/NavTest.jsx";
import Footer from "/src/shared/Footer.jsx";
import "/src/index.css";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById("reading")).render(
  <>
    <NavTest />
    <ReadingQuiz />
    <Footer />
  </>
);
