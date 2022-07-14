import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "../src/screens/LandingPage/LandingPage";
import MyNotes from "../src/screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main style={{ minHeight: "93vh" }}>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
