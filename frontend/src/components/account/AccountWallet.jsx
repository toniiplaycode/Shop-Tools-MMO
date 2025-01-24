import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faWallet,
  faChartLine,
  faPercent,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

const AccountWallet = () => {
  const [amount, setAmount] = useState("");

  const stats = [
    {
      id: 1,
      icon: faWallet,
      label: "Số dư hiện tại",
      value: "0đ",
      color: "#00A389",
    },
    {
      id: 2,
      icon: faChartLine,
      label: "Tổng chi tiêu",
      value: "0đ",
      color: "#FF8B3D",
    },
    {
      id: 3,
      icon: faPercent,
      label: "Giảm giá",
      value: "0%",
      color: "#FF5757",
    },
    {
      id: 4,
      icon: faMoneyBillTransfer,
      label: "Tổng tiền nạp",
      value: "0đ",
      color: "#3B82F6",
    },
  ];

  return (
    <div className="account-wallet">
      <div className="account-stats">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="stat-card"
            style={{ borderColor: stat.color }}
          >
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="wallet-info">
        <h2>Nạp Tiền 💰</h2>
        <div className="info-alert">
          <span>⚡ Đây là hệ thống nạp tiền tự động qua Ngân hàng và MOMO</span>
          <ul>
            <li>
              Hệ thống tự động cộng số dư sau 1 - 10 phút, nếu quá thời gian
              không cộng vui lòng inbox Admin
            </li>
            <li>
              Hệ thống nhập sai hay nhiều thông tin cùng lúc khuyến khích quy
              khách quét QR để thanh toán. Nếu thanh toán bằng thủ công vui lòng
              inbox Admin
            </li>
            <li>
              Vui lòng chuyển khoản theo đúng nội dung để hệ thống tự động cộng
              tiền sau khi chuyển khoản thành công.
            </li>
          </ul>
        </div>

        <div className="deposit-section">
          <h3>Nạp Tiền 💸</h3>
          <div className="deposit-form">
            <div className="amount-input">
              <label>Điền số tiền muốn nạp:</label>
              <div className="input-group">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                />
                <span className="currency">VND</span>
                <button className="generate-btn">Tạo mã QR</button>
              </div>
            </div>

            <div className="payment-methods">
              <div className="payment-method">
                <h4>Mã nạp tiền MOMO</h4>
                <div className="qr-code">
                  <img src="/src/assets/imgs/QRmomo.png" alt="MOMO QR" />
                  <FontAwesomeIcon icon={faQrcode} className="qr-icon" />
                </div>
                <div className="payment-details">
                  <div className="detail-item">
                    <span className="label">Số tài khoản:</span>
                    <span className="value">55555555</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Chủ tài khoản:</span>
                    <span className="value">HUYNH NGOC TY</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ngân hàng:</span>
                    <span className="value">MOMO</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Nội dung nạp:</span>
                    <span className="value highlight">HPTOOL518536</span>
                  </div>
                </div>
              </div>

              <div className="payment-method">
                <h4>Mã nạp tiền ACB</h4>
                <div className="qr-code">
                  <img src="/src/assets/imgs/QRmbbank.png" alt="ACB QR" />
                  <FontAwesomeIcon icon={faQrcode} className="qr-icon" />
                </div>
                <div className="payment-details">
                  <div className="detail-item">
                    <span className="label">Số tài khoản:</span>
                    <span className="value">55555555</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Chủ tài khoản:</span>
                    <span className="value">HUYNH NGOC TY</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ngân hàng:</span>
                    <span className="value">MB BANK</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Nội dung nạp:</span>
                    <span className="value highlight">HPTOOL518536</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="transaction-history">
          <h3>Lịch sử nạp tiền 💳</h3>
          <div className="history-tabs">
            <button className="tab active">Auto Bank</button>
            <button className="tab">Auto Momo</button>
            <button className="tab">Auto Usdt</button>
          </div>
          <div className="history-table">
            <div className="table-header">
              <div className="header-cell">STT</div>
              <div className="header-cell">Số lượng</div>
              <div className="header-cell">Ghi chú</div>
              <div className="header-cell">Thời gian</div>
            </div>
            <div className="empty-history">
              <img src="/src/assets/imgs/logo.png" alt="Empty" />
              <p>Danh sách trống</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountWallet;
