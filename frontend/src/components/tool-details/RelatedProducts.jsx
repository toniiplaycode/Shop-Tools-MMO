import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const RelatedProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 300;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newPosition;
    if (direction === "prev") {
      newPosition = Math.max(scrollPosition - scrollAmount, 0);
    } else {
      newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
    }

    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const relatedProducts = [
    {
      id: 1,
      title: "Tool Giải Checkpoint 282, 956",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tool Auto giải Checkpoint 282 và 956 FB tự động vượt qua captcha...",
      price: "400.000",
      priceUSD: "15.86",
      icon: "facebook",
    },
    {
      id: 2,
      title: "Tool Reg Hotmail, Outlook",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Reg Hotmail Outlook tự động, auto giải Captcha, dùng trình duyệt...",
      price: "350.000",
      priceUSD: "13.88",
      icon: "outlook",
    },
    {
      id: 3,
      title: "Tool Add Alias GMX Mailcom",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Add Bí Danh Alias GMX và Mailcom đem lại giải pháp linh hoạt...",
      price: "300.000",
      priceUSD: "11.89",
      icon: "gmx",
    },
    {
      id: 4,
      title: "VPS Proxy Builder - Proxy Creator",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
    },
    {
      id: 5,
      title: "Tool Giải Checkpoint 282, 956",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tool Auto giải Checkpoint 282 và 956 FB tự động vượt qua captcha...",
      price: "400.000",
      priceUSD: "15.86",
      icon: "facebook",
    },
    {
      id: 6,
      title: "Tool Reg Hotmail, Outlook",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Reg Hotmail Outlook tự động, auto giải Captcha, dùng trình duyệt...",
      price: "350.000",
      priceUSD: "13.88",
      icon: "outlook",
    },
    {
      id: 7,
      title: "Tool Add Alias GMX Mailcom",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Add Bí Danh Alias GMX và Mailcom đem lại giải pháp linh hoạt...",
      price: "300.000",
      priceUSD: "11.89",
      icon: "gmx",
    },
    {
      id: 8,
      title: "VPS Proxy Builder - Proxy Creator",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Tạo proxy IPv6 từ VPS, set xoay, set thời hạn. Hỗ trợ netmask 48...",
      price: "200.000",
      priceUSD: "7.93",
      icon: "wifi",
    },
  ];

  return (
    <div className="related-products">
      <h2 className="section-title">SẢN PHẨM TƯƠNG TỰ</h2>

      <div className="products-slider">
        <button
          className="slider-btn prev"
          onClick={() => handleScroll("prev")}
          disabled={scrollPosition <= 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          className="products-container"
          ref={containerRef}
          onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
        >
          {relatedProducts.map((product) => (
            <div key={product.id} className="tool-card">
              <div className="tool-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="tool-content">
                <h3 className="tool-title">{product.title}</h3>
                <p className="tool-description">{product.description}</p>
                <div className="tool-price">
                  <span className="price-vnd">đ {product.price}</span> -
                  <span className="price-usd">${product.priceUSD}</span>
                  <span className={`tool-icon ${product.icon}`}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn next"
          onClick={() => handleScroll("next")}
          disabled={
            containerRef.current &&
            scrollPosition >=
              containerRef.current.scrollWidth -
                containerRef.current.clientWidth
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
