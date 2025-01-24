import React, { useState } from "react";
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
import PersonalInfo from "../components/account/PersonalInfo";
import AccountWallet from "../components/account/AccountWallet";
import HistoryOrder from "../components/account/HistoryOrder";
import AccountLevel from "../components/account/AccountLevel";
import Contact from "../components/account/Contact";
import ChangePassword from "../components/account/ChangePassword";

const Account = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");

  const menuItems = [
    { id: "personal", icon: faUser, label: "Thông tin cá nhân" },
    { id: "wallet", icon: faWallet, label: "Ví" },
    { id: "orders", icon: faClockRotateLeft, label: "Lịch sử đơn hàng" },
    { id: "level", icon: faUserGear, label: "Cấp bậc tài khoản" },
    { id: "contact", icon: faPhone, label: "Liên hệ" },
    { id: "password", icon: faKey, label: "Đổi mật khẩu" },
    { id: "logout", icon: faRightFromBracket, label: "Đăng xuất" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo />;
      case "wallet":
        return <AccountWallet />;
      case "orders":
        return <HistoryOrder />;
      case "level":
        return <AccountLevel />;
      case "contact":
        return <Contact />;
      case "password":
        return <ChangePassword />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="account-container container-paddingX margin-common-containerY">
      <div className="breadcrumb">
        <span>Trang chủ</span> / <span>Tài khoản</span>
      </div>

      <div className="account-content">
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
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="account-main">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Account;
