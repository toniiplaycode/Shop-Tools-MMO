import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCopy } from "@fortawesome/free-solid-svg-icons";

const HistoryOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const orders = [
    {
      id: 1,
      toolName: "VPS Proxy Builder",
      licenseKey: "XXXX-XXXX-XXXX",
      duration: "30 ngày",
      payment: "200,000đ",
      pcName: "DESKTOP-ABC123",
      status: "Đang hoạt động",
    },
    {
      id: 1,
      toolName: "VPS Proxy Builder",
      licenseKey: "XXXX-XXXX-XXXX",
      duration: "30 ngày",
      payment: "200,000đ",
      pcName: "DESKTOP-ABC123",
      status: "Đang hoạt động",
    },
    {
      id: 1,
      toolName: "VPS Proxy Builder",
      licenseKey: "XXXX-XXXX-XXXX",
      duration: "30 ngày",
      payment: "200,000đ",
      pcName: "DESKTOP-ABC123",
      status: "Đang hoạt động",
    },
    {
      id: 1,
      toolName: "VPS Proxy Builder",
      licenseKey: "XXXX-XXXX-XXXX",
      duration: "30 ngày",
      payment: "200,000đ",
      pcName: "DESKTOP-ABC123",
      status: "Đang hoạt động",
    },
    {
      id: 1,
      toolName: "VPS Proxy Builder",
      licenseKey: "XXXX-XXXX-XXXX",
      duration: "30 ngày",
      payment: "200,000đ",
      pcName: "DESKTOP-ABC123",
      status: "Đang hoạt động",
    },
    // Thêm các orders khác...
  ];

  // Tính toán số trang
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Lấy orders cho trang hiện tại
  const getCurrentPageOrders = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orders.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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
        {orders.length > 0 ? (
          getCurrentPageOrders().map((order, index) => (
            <div className="table-row" key={order.id}>
              <div className="table-cell" data-label="STT">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </div>
              <div className="table-cell" data-label="Tên tool">
                {order.toolName}
              </div>
              <div className="table-cell" data-label="LICENSEKEY">
                {order.licenseKey}
              </div>
              <div className="table-cell" data-label="Thời hạn">
                {order.duration}
              </div>
              <div className="table-cell" data-label="Thanh toán">
                {order.payment}
              </div>
              <div className="table-cell" data-label="Tên PC">
                {order.pcName}
              </div>
              <div className="table-cell" data-label="Hành động">
                <button className="action-btn">Xóa thiết bị</button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-history">
            <img src="/src/assets/imgs/logo.png" alt="Empty" />
            <p>Danh sách trống</p>
          </div>
        )}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <div className="page-number">
          <span>{currentPage}</span> / <span>{totalPages}</span>
        </div>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HistoryOrder;
