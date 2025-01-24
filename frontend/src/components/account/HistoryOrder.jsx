import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCopy } from "@fortawesome/free-solid-svg-icons";

const HistoryOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("hptools");
  };

  return (
    <div className="history-order">
      <div className="license-guide">
        <h2>Hướng Dẫn Kích Hoạt Bản Quyền License 🔑</h2>
        <div className="guide-steps">
          <p>
            Bước 1: Ngay sau khi hoàn tất giao dịch mua Tool, vui lòng sao chép
            Key License từ bảng thông tin sản phẩm.
          </p>
          <p>
            Bước 2: Nhấn vào nút Download, sau đó giải nén, mở Tool, tại màn
            hình chính, hãy dán Key License vào ô trống cần điền Key.
          </p>
          <div className="password-note">
            <span>Note: Mật khẩu giải nén File: </span>
            <span className="password">hptools</span>
            <button className="copy-btn" onClick={handleCopy}>
              <FontAwesomeIcon icon={faCopy} />
              Copy
            </button>
          </div>
          <p>
            Bước 3: Nhấn "Kích Hoạt" để bản quyền được xác nhận và đăng ký với
            thiết bị của bạn.
          </p>
          <p>
            Bước 4: Bạn giờ đây có thể truy cập và sử dụng đầy đủ các tính năng
            của Tool.
          </p>
          <div className="warning">
            <span>
              Lưu ý: Để chuyển Key License sang thiết bị khác, nhấn vào "Xóa
              Thiết Bị", tải Tool trên máy mới và lặp lại quá trình sao chép và
              dán Key để kích hoạt.
            </span>
          </div>
          <button className="guide-video-btn">Xem video hướng dẫn</button>
        </div>
      </div>

      <div className="history-header">
        <h2>Danh sách tool của tôi</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Nhập tool cần tìm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      <div className="history-table">
        <div className="table-header">
          <div className="header-cell">STT</div>
          <div className="header-cell">Tên tool</div>
          <div className="header-cell">LICENSEKEY</div>
          <div className="header-cell">Thời hạn</div>
          <div className="header-cell">Thanh toán</div>
          <div className="header-cell">Tên PC</div>
          <div className="header-cell">Hành động</div>
        </div>
        <div className="empty-history">
          <img src="/src/assets/imgs/logo.png" alt="Empty" />
          <p>Danh sách trống</p>
        </div>
      </div>

      <div className="pagination">
        <button className="page-btn prev" disabled>
          &lt;
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn next" disabled>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HistoryOrder;
