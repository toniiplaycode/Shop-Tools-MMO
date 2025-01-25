import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example page component
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import ToolDetails from "./components/ToolDetails";
import ChatBox from "./components/ChatBox";
import ToolFilter from "./pages/ToolFilter";
import Account from "./pages/Account";
import Blogs from "./pages/Blogs";
import DetailBlog from "./components/blogs/DetailBlog";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <Header /> {/* Always visible Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool-details" element={<ToolDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tool-filter" element={<ToolFilter />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer /> {/* Always visible Footer */}
      <ChatBox />
    </div>
  );
}

export default App;
