import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tất Cả Tool");

  const categories = [
    "Tất Cả Tool",
    "Tool Tương Tác, Buff",
    "Tool Check Info",
    "Tool Change, Reg",
    "Tool Đào, Lọc Data",
  ];

  const tools = [
    {
      id: 1,
      title: "Tìm kiếm nhóm Zalo",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Cào link nhóm Zalo hiệu quả qua các nền tảng như Facebook, các...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "messenger",
      category: "Tool Tương Tác, Buff",
    },
    {
      id: 2,
      title: "Fastmail Valid Checker",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Fastmail Check Live Die, Valid là công cụ vô cùng hữu ích để kiểm...",
      price: "249.000",
      priceUSD: "9.87",
      icon: "mail",
      category: "Tool Check Info",
    },
    {
      id: 3,
      title: "Mask My PC - Change Info PC",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đổi thông số máy tính, tạo mới trường sạch. Công cụ cho phép...",
      price: "100.000",
      priceUSD: "3.96",
      icon: "windows",
      category: "Tool Change, Reg",
    },
    {
      id: 4,
      title: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
      category: "Tool Đào, Lọc Data",
    },
    {
      id: 4,
      title: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
      category: "Tool Đào, Lọc Data",
    },
    {
      id: 4,
      title: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
      category: "Tool Đào, Lọc Data",
    },
    {
      id: 4,
      title: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
      category: "Tool Đào, Lọc Data",
    },
    {
      id: 4,
      title: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
      category: "Tool Đào, Lọc Data",
    },
  ];

  const filteredTools =
    activeCategory === "Tất Cả Tool"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <div className="tools-section">
      <h2 className="section-title">DANH SÁCH TOOL</h2>

      <div className="tools-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              category === activeCategory ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="tools-grid">
        {filteredTools.map((tool) => (
          <Link to={`/tool-details/`} key={tool.id} className="tool-card">
            <div className="tool-image">
              <img src={tool.image} alt={tool.title} />
            </div>
            <div className="tool-content">
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
              <div className="tool-price">
                <span className="price-vnd">đ {tool.price}</span> -
                <span className="price-usd">${tool.priceUSD}</span>
                <span className={`tool-icon ${tool.icon}`}></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button className="seemore-button">Xem thêm</button>
    </div>
  );
};

export default ToolsSection;
