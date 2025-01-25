import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faWallet,
  faClockRotateLeft,
  faUserGear,
  faPhone,
  faKey,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AccountSide = ({ selectedImage, handleImageChange }) => {
  const location = useLocation();

  const menuItems = [
    {
      id: "personal",
      icon: faUser,
      label: "Thông tin cá nhân",
      path: "/account",
    },
    { id: "wallet", icon: faWallet, label: "Ví", path: "/account/wallet" },
    {
      id: "orders",
      icon: faClockRotateLeft,
      label: "Lịch sử đơn hàng",
      path: "/account/orders",
    },
    {
      id: "level",
      icon: faUserGear,
      label: "Cấp bậc tài khoản",
      path: "/account/account-level",
    },
    {
      id: "contact",
      icon: faPhone,
      label: "Liên hệ",
      path: "/account/contact",
    },
    {
      id: "password",
      icon: faKey,
      label: "Đổi mật khẩu",
      path: "/account/password",
    },
    {
      id: "logout",
      icon: faRightFromBracket,
      label: "Đăng xuất",
      path: "/logout",
    },
  ];

  return (
    <div className="account-sidebar">
      <div className="user-profile">
        <div className="avatar-wrapper">
          <img
            src={selectedImage || "/src/assets/imgs/man.png"}
            alt="Avatar"
            className="user-avatar"
          />
          <div className="rank-badge">Khởi Nguyên</div>
        </div>
        <div className="upload-avatar">
          <label htmlFor="avatar-upload" className="upload-btn">
            Đổi ảnh đại diện
          </label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <p className="upload-note">
            Kích thước ảnh khuyến nghị 300x300, không quá 5MB
          </p>
        </div>
        <div className="user-info">
          <h3 className="username">tonii</h3>
          <p className="email">toan@gmail.com</p>
        </div>
      </div>

      <nav className="account-nav">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AccountSide;
