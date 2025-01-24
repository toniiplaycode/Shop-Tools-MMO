import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const menuGroups = [
    {
      title: "Trang chủ",
      items: ["Nạp tiền", "Cấp bậc tài khoản", "Lịch sử đơn hàng", "Liên hệ"],
    },
    {
      title: "Về chúng tôi",
      items: ["FAQ", "Danh sách phần mềm"],
    },
  ];

  return (
    <footer className="container-paddingX footer">
      <div className="footer-content ">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/src/assets/imgs/logo.png" alt="Logo" />
              <span>HT PROXY</span>
            </div>
            <p className="footer-description">
              Tối ưu hóa hiệu suất với tốc độ xử lý nhanh chóng, giúp bạn tiết
              kiệm thời gian và tăng cường năng suất
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
          </div>

          {menuGroups.map((group, index) => (
            <div key={index} className="footer-menu">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container-paddingX">
          <p className="footer-copyright-text">
            © 2024 HT PROXY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
