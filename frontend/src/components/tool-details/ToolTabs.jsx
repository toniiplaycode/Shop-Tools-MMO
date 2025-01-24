import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const ToolTabs = ({ activeTab, setActiveTab, handleFullscreen }) => {
  return (
    <div className="tool-tabs">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          CHI TIẾT TOOL
        </button>
        <button
          className={`tab-btn ${activeTab === "guide" ? "active" : ""}`}
          onClick={() => setActiveTab("guide")}
        >
          HƯỚNG DẪN SỬ DỤNG
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "details" && (
          <div className="details-content">
            <div className="feature-list">
              <p className="feature-intro">
                🔥 VPS Proxy Builder là công cụ tiện lợi, gọn nhẹ, chuyên tạo
                proxy IPv6 từ các máy ảo VPS, mang đến giải pháp tối ưu cho
                nhiều nhu cầu trực tuyến. Các tính năng nổi bật:
              </p>
              <ul>
                <li>
                  👉 Tạo proxy IPv6 dễ dàng: Hỗ trợ tạo từ 500 đến 2000 proxy
                  IPv6 từ các máy ảo VPS, đáp ứng nhu cầu sử dụng lớn.
                </li>
                <li>
                  👉 Hỗ trợ đa dạng netmask: Tích hợp các netmask phổ biến như
                  48, 64, 80, mang lại sự linh hoạt tối đa.
                </li>
                {/* Add more features */}
              </ul>
            </div>

            <div className="video-demo">
              <h3>VIDEO DEMO</h3>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/7W7zT3LJ6Kw"
                  title="VPS Proxy Builder Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button className="fullscreen-btn" onClick={handleFullscreen}>
                  <FontAwesomeIcon icon={faExpand} />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "guide" && (
          <div className="guide-content">
            <h3>Hướng dẫn sử dụng chi tiết</h3>
            {/* Add guide content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolTabs;
