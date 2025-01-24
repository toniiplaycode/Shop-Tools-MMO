import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example page component
import About from "./pages/About"; // Example page component
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import ToolDetails from "./components/ToolDetails";

function App() {
  return (
    <div>
      <Header /> {/* Always visible Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool-details" element={<ToolDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Always visible Footer */}
    </div>
  );
}

export default App;
