import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example page component
import About from "./pages/About"; // Example page component
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import ToolDetails from "./components/ToolDetails";
import ChatBox from "./components/ChatBox";
import ToolFilter from "./pages/ToolFilter";
import Account from "./pages/Account";

function App() {
  return (
    <div>
      <Header /> {/* Always visible Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool-details" element={<ToolDetails />} />
        <Route path="/tool-filter" element={<ToolFilter />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Always visible Footer */}
      <ChatBox />
    </div>
  );
}

export default App;
