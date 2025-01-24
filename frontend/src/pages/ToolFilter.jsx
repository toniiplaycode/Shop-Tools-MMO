import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ToolFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const toolCategories = [
    { id: "all", label: "Tất Cả Tool" },
    { id: "interaction", label: "Tool Tương Tác, Buff" },
    { id: "check", label: "Tool Check Info" },
    { id: "reg", label: "Tool Change, Reg" },
    { id: "data", label: "Tool Đào, Lọc Data" },
  ];

  const sortOptions = [
    { id: "asc", label: "Tăng dần" },
    { id: "desc", label: "Giảm dần" },
  ];

  const tools = [
    {
      id: 1,
      title: "Tool Đào Mail Business",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tool Đào Mail Domain, Mail Page, Mail Business từ UID cá nhân...",
      price: "500.000",
      priceUSD: "19.82",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Đào ID Page, Check Ads",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Đào hàng loạt ID page từ UID cá nhân. Nhập càng nhiều UID, thu được càng nhiều ID Page",
      price: "600.000",
      priceUSD: "23.79",
      icon: "facebook",
    },
    // Thêm các tool khác tương tự
  ];

  // Tính toán số trang
  const totalPages = Math.ceil(tools.length / itemsPerPage);

  // Lấy tools cho trang hiện tại
  const getCurrentPageTools = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return tools.slice(startIndex, endIndex);
  };

  // Tạo mảng số trang để hiển thị
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="tool-filter-container container-paddingX margin-common-containerY">
      <div className="breadcrumb">
        <span>Trang chủ</span> / <span>Danh sách tool</span>
      </div>

      <div className="tool-filter-content">
        <div className="filter-sidebar">
          <h2>Loại tool</h2>
          <div className="filter-section">
            {toolCategories.map((category) => (
              <label key={category.id} className="filter-option">
                <input type="radio" name="category" value={category.id} />
                <span>{category.label}</span>
              </label>
            ))}
          </div>

          <h2>Sắp xếp theo</h2>
          <div className="filter-section">
            {sortOptions.map((option) => (
              <label key={option.id} className="filter-option">
                <input type="radio" name="sort" value={option.id} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          <h2>Khoảng giá</h2>
          <div className="filter-section price-range">
            <div className="price-inputs">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
              />
            </div>
            <input
              type="range"
              min="0"
              max="5000000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="price-slider"
            />
          </div>
        </div>

        <div className="tools-grid">
          <h1>Danh sách tool (29)</h1>
          <div className="tools-container">
            {getCurrentPageTools().map((tool) => (
              <div key={tool.id} className="tool-card">
                <div className="tool-image">
                  <img src={tool.image} alt={tool.title} />
                </div>
                <div className="tool-content">
                  <h3 className="tool-title">{tool.title}</h3>
                  <p className="tool-description">{tool.description}</p>
                  <div className="tool-price">
                    <span className="price-vnd">đ {tool.price}</span> -
                    <span className="price-usd">${tool.priceUSD}</span>
                    <span className={`tool-icon ${tool.icon}`}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              className="page-btn prev"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {getPageNumbers().map((number, index) => (
              <button
                key={index}
                className={`page-btn ${
                  number === currentPage ? "active" : ""
                } ${number === "..." ? "dots" : ""}`}
                onClick={() => number !== "..." && setCurrentPage(number)}
                disabled={number === "..."}
              >
                {number}
              </button>
            ))}

            <button
              className="page-btn next"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolFilter;
