import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ToolDetails = () => {
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
    <div className="tool-detail-container container-paddingX">
      <div className="tool-detail-breadcrumb">
        <span>Trang chủ</span> / <span>VPS Proxy Builder - Proxy Creator</span>
      </div>

      <div className="tool-detail-content">
        <div className="tool-gallery">
          <div className="thumbnail-list">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src={images[selectedImage]} alt="Main preview" />
          </div>
        </div>

        <div className="tool-info">
          <h1 className="tool-title">VPS Proxy Builder - Proxy Creator</h1>

          <div className="tool-rating">
            <div className="stars">{renderStars()}</div>
            <span className="tool-id">Mã tool: 96</span>
          </div>

          <div className="tool-description">
            <h2>Mô tả:</h2>
            <p>
              VPS Proxy Builder là công cụ tiện lợi, gọn nhẹ, chuyên tạo ra số
              lượng lớn proxy IPv6 từ các máy ảo VPS. Phần mềm hỗ trợ tạo từ 500
              đến 2000 proxy với khả năng xoay đổi IP định kỳ để đảm bảo tính
              linh hoạt trong hoạt động trực tuyến.
            </p>
            <p>
              Đặc biệt, VPS Proxy Builder hỗ trợ đa dạng netmask như 48, 64, 80,
              mang đến sự linh hoạt đa dạng trong sử dụng. Ngoài ra, bạn có thể
              thiết lập username, password để tăng cường bảo mật và tùy chỉnh
              thời hạn sử dụng theo nhu cầu.
            </p>
            <p>
              Với khả năng đáp ứng đa dạng, đây là giải pháp lý tưởng cho việc
              nuôi nick, MMO, airdrop và nhiều hoạt động trực tuyến khác, giúp
              tối ưu hiệu quả và tiết kiệm thời gian.
            </p>
          </div>

          <div className="tool-duration">
            <h3>Thời gian: 1 tháng (1 Thiết bị)</h3>
            <div className="duration-options">
              <button className="duration-btn active">1 tháng</button>
              <button className="duration-btn">3 tháng</button>
              <button className="duration-btn">1 năm</button>
              <button className="duration-btn">Vĩnh viễn</button>
            </div>
          </div>

          <div className="tool-price">
            <h3>
              Giá: <span className="price">200.000 VNĐ ~ $7.93</span>
            </h3>
          </div>

          <div className="tool-actions">
            <button className="add-to-cart">Thêm vào giỏ</button>
            <button className="buy-now">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
