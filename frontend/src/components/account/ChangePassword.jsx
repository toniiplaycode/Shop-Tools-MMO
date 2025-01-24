import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đổi mật khẩu
    console.log(formData);
  };

  return (
    <div className="change-password">
      <h2>Đổi mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Nhập mật khẩu hiện tại <span className="required">*</span>
          </label>
          <div className="password-input">
            <input
              type={showPassword.current ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Nhập mật khẩu hiện tại"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("current")}
              className="toggle-password"
            >
              <FontAwesomeIcon
                icon={showPassword.current ? faEye : faEyeSlash}
              />
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>
            Nhập mật khẩu mới <span className="required">*</span>
          </label>
          <div className="password-input">
            <input
              type={showPassword.new ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Nhập mật khẩu mới"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("new")}
              className="toggle-password"
            >
              <FontAwesomeIcon icon={showPassword.new ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>
            Nhập lại mật khẩu mới <span className="required">*</span>
          </label>
          <div className="password-input">
            <input
              type={showPassword.confirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu mới"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirm")}
              className="toggle-password"
            >
              <FontAwesomeIcon
                icon={showPassword.confirm ? faEye : faEyeSlash}
              />
            </button>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Lưu
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
