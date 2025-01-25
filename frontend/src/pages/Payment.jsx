import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  return (
    <div className="payment-container container-paddingX margin-common-containerY">
      <div className="payment-header">
        <Link to="/cart" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Thanh toán</span>
        </Link>
      </div>

      <div className="payment-content">
        <div className="total-row">
          <span>Tổng thanh toán:</span>
          <span className="amount">300.000 đ</span>
        </div>

        <div className="countdown-row">
          <span>Thời gian thanh toán còn lại:</span>
          <span className="time">09:58</span>
        </div>

        <div className="payment-grid">
          <div className="payment-box">
            <h3>Mã nạp tiền MOMO</h3>
            <div className="qr-wrapper">
              <div className="qr-code">
                <img src="/src/assets/imgs/qr-momo.png" alt="QR MOMO" />
              </div>
              <div className="payment-info">
                <div className="info-row">
                  <span className="label">Số tài khoản:</span>
                  <span className="value">0559635988</span>
                </div>
                <div className="info-row">
                  <span className="label">Chủ tài khoản:</span>
                  <span className="value">PHAM NGOC HIEP</span>
                </div>
                <div className="info-row">
                  <span className="label">Ngân hàng:</span>
                  <span className="value">MOMO</span>
                </div>
                <div className="info-row">
                  <span className="label">Nội dung nạp:</span>
                  <span className="value">HPS1614</span>
                </div>
              </div>
            </div>
            <div className="processing">
              <span>Xử lý giao dịch tự động trong vài giây...</span>
              <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>

          <div className="payment-box">
            <h3>Mã nạp tiền ACB</h3>
            <div className="qr-wrapper">
              <div className="qr-code">
                <img src="/src/assets/imgs/qr-acb.png" alt="QR ACB" />
              </div>
              <div className="payment-info">
                <div className="info-row">
                  <span className="label">Số tài khoản:</span>
                  <span className="value">38513707</span>
                </div>
                <div className="info-row">
                  <span className="label">Chủ tài khoản:</span>
                  <span className="value">PHAM NGOC HIEP</span>
                </div>
                <div className="info-row">
                  <span className="label">Ngân hàng:</span>
                  <span className="value">ACB</span>
                </div>
                <div className="info-row">
                  <span className="label">Nội dung nạp:</span>
                  <span className="value">HPS1614</span>
                </div>
              </div>
            </div>
            <div className="processing">
              <span>Xử lý giao dịch tự động trong vài giây...</span>
              <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="support-note">
          <span>
            Hướng dẫn: Sử dụng điện thoại thực hiện quét mã QR và chuyển tiền
            nhanh đến tài khoản. Hỗ trợ:
          </span>
          <Link to="/support">Đội Ngũ Hỗ Trợ</Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
