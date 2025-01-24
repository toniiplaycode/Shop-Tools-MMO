import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ToolDetailContent = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/src/assets/imgs/window10pro.png",
    "/src/assets/imgs/blogtech.png",
    "/src/assets/imgs/window10pro.png",
    "/src/assets/imgs/window10pro.png",
    "/src/assets/imgs/introduce.png",
    "/src/assets/imgs/blogtech.png",
    "/src/assets/imgs/introduce.png",
    "/src/assets/imgs/blogtech.png",
  ];

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`star ${index < 2 ? "active" : ""}`}
      />
    ));
  };

  return (
    <div className="tool-detail-content">
      <div className="tool-gallery">
        <div className="thumbnail-list">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="main-image">
          <img src={images[selectedImage]} alt="Selected" />
        </div>
      </div>

      <div className="tool-info">
        <h1 className="tool-title">VPS Proxy Builder - Proxy Creator</h1>
        <div className="tool-rating">
          <div className="stars">{renderStars()}</div>
          <span className="tool-id">ID: 123456</span>
        </div>

        <div className="tool-description">
          <h2>Mô tả sản phẩm</h2>
          <p>
            VPS Proxy Builder là công cụ chuyên nghiệp giúp tạo và quản lý proxy
            IPv6 từ VPS một cách hiệu quả. Với giao diện đơn giản và tính năng
            mạnh mẽ, tool hỗ trợ tối đa cho việc tạo proxy số lượng lớn.
          </p>
        </div>

        <div className="tool-duration">
          <h3>Thời hạn sử dụng</h3>
          <div className="duration-options">
            <button className="duration-btn active">15 ngày</button>
            <button className="duration-btn">30 ngày</button>
            <button className="duration-btn">60 ngày</button>
            <button className="duration-btn">90 ngày</button>
          </div>
        </div>

        <div className="tool-price">
          <span className="price">200.000đ - $7.93</span>
        </div>

        <div className="tool-actions">
          <button className="add-to-cart">Thêm vào giỏ hàng</button>
          <button className="buy-now">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailContent;
