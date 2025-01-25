import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faMagnifyingGlass,
  faWallet,
  faBars,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Select, Drawer, Badge } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { title: "Trang chủ", path: "/" },
    { title: "Nạp tiền", path: "/account/wallet" },
    { title: "Danh sách phần mềm", path: "/tool-filter" },
    { title: "Cấp bật tài khoản", path: "/account/account-level" },
    { title: "Lịch sử đơn hàng", path: "/account/orders" },
    { title: "Liên hệ", path: "/account/contact" },
    { title: "Blog", path: "/blogs" },
  ];

  const cartItems = [
    {
      id: 1,
      name: "Mask My PC - Change Info PC",
      image: "/src/assets/imgs/window10pro.png",
      price: "100.000 đ",
    },
    {
      id: 2,
      name: "VPS Proxy Builder",
      image: "/src/assets/imgs/window10pro.png",
      price: "200.000 đ",
    },
  ];

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="mobile-left">
          <button className="menu-toggle" onClick={() => setIsDrawerOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link to="/cart" className="header-cart mobile-only">
            <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon" />
          </Link>
        </div>

        <div className="header-logo">
          <img src="/src/assets/imgs/logo.png" alt="Logo" />
        </div>

        <div className="header-search-container">
          <input
            className="header-search"
            type="text"
            placeholder="Nhập sản phẩm cần tìm..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>

        <div className="header-actions">
          <div className="header-cart desktop-only">
            <Badge count={cartItems.length} size="small">
              <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon" />
            </Badge>

            <div className="cart-preview">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <button className="remove-btn">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <span>Tổng tiền:</span>
                <span className="total-amount">300.000 đ</span>
              </div>

              <div className="cart-actions">
                <Link to="/cart" className="view-cart">
                  Giỏ hàng
                </Link>
                <Link to="/payment" className="checkout">
                  Thanh toán
                </Link>
              </div>
            </div>
          </div>
          <div className="header-language">
            <Select defaultValue="1" style={{ width: 145 }}>
              <Option value="1">
                <img
                  src="/src/assets/imgs/iconvietnam.png"
                  alt="Vietnamese"
                  style={{ width: 20, marginRight: 5 }}
                />
                Vietnamese
              </Option>
              <Option value="2">
                <img
                  src="/src/assets/imgs/iconenglish.png"
                  alt="English"
                  style={{ width: 20, marginRight: 5 }}
                />
                English
              </Option>
              <Option value="3">
                <img
                  src="/src/assets/imgs/iconchina.png"
                  alt="Chinese"
                  style={{ width: 20, marginRight: 5 }}
                />
                Chinese
              </Option>
            </Select>
          </div>
          <div className="header-wallet">
            0đ
            <FontAwesomeIcon icon={faWallet} className="wallet-icon" />
          </div>
          <Link to="/account" className="header-profile">
            <div className="profile-text">tonii</div>
            <img src="/src/assets/imgs/man.png" alt="Profile" />
          </Link>
        </div>
      </div>

      <div className="header-bottom">
        <nav className="header-nav">
          {menuItems.map((item, index) => (
            <a key={index} href={item.path}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      <Drawer
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        className="mobile-drawer"
      >
        <div className="mobile-search">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="header-search"
          />
        </div>
        <nav className="mobile-nav">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </Drawer>
    </div>
  );
};

export default Header;
