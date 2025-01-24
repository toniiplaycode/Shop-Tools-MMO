import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="personal-info">
        <h2>Thông tin cá nhân</h2>
        <div className="info-form">
          <div className="form-group">
            <label>Tên đăng nhập *</label>
            <input type="text" value="tonii" disabled />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" value="toan@gmail.com" disabled />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ngày sinh</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Giới tính</label>
              <select defaultValue="">
                <option value="" disabled>
                  ---Chọn giới tính---
                </option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>
          <button className="save-btn">Lưu</button>
        </div>
      </div>

      <div className="account-history">
        <h2>Lịch sử</h2>
        <div className="history-grid">
          <div className="history-item">
            <div className="label">Địa chỉ IP</div>
            <div className="value">103.173.226.108</div>
          </div>
          <div className="history-item">
            <div className="label">Thời gian đăng ký</div>
            <div className="value">23/01/2025</div>
          </div>
          <div className="history-item">
            <div className="label">Đăng nhập gần đây</div>
            <div className="value">23/01/2025</div>
          </div>
          <div className="history-item">
            <div className="label">Thiết bị đăng nhập</div>
            <div className="value">axios/1.6.7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
