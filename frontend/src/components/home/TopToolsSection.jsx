import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopToolsSection = () => {
  const topTools = [
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
      title: "Tool Add Alias GMX Mailcom",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Add Bí Danh Alias GMX và Mailcom đem lại giải pháp linh hoạt...",
      price: "300.000",
      priceUSD: "11.89",
      icon: "gmx",
    },
    {
      id: 3,
      title: "FB Email Linked Checker",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Check Email Liên Kết FB, Check code 6 8, FB Email Linked Check...",
      price: "400.000",
      priceUSD: "15.86",
      icon: "facebook",
    },
    {
      id: 4,
      title: "Tool Check Domain Die",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Check Live Die Domain là giải pháp không thể thiếu cho việc kiểm tra...",
      price: "500.000",
      priceUSD: "19.82",
      icon: "domain",
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
      title: "Tool Add Alias GMX Mailcom",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Add Bí Danh Alias GMX và Mailcom đem lại giải pháp linh hoạt...",
      price: "300.000",
      priceUSD: "11.89",
      icon: "gmx",
    },
    {
      id: 7,
      title: "FB Email Linked Checker",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Check Email Liên Kết FB, Check code 6 8, FB Email Linked Check...",
      price: "400.000",
      priceUSD: "15.86",
      icon: "facebook",
    },
    {
      id: 8,
      title: "Tool Check Domain Die",
      image: "/src/assets/imgs/window10pro.png",
      description:
        "Check Live Die Domain là giải pháp không thể thiếu cho việc kiểm tra...",
      price: "500.000",
      priceUSD: "19.82",
      icon: "domain",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsPerView = () => {
    if (viewportWidth > 1200) return 4;
    if (viewportWidth > 992) return 3;
    if (viewportWidth > 576) return 2;
    return 1;
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(Math.ceil(topTools.length / getCardsPerView()) - 1);
        }, 0);
        return prev;
      }
      return prev - 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev >= Math.ceil(topTools.length / getCardsPerView()) - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 0);
        return prev;
      }
      return prev + 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="top-tools-section">
      <h2 className="section-title">TOP TOOL XEM NHIỀU</h2>

      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrevSlide}>
          <IoIosArrowBack />
        </button>

        <div className="tools-slider" ref={sliderRef}>
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / getCardsPerView())
              }%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
          >
            {topTools.map((tool) => (
              <div key={tool.id} className="tool-card">
                <div className="tool-image">
                  <img src={tool.image} alt={tool.title} />
                </div>
                <div className="tool-content">
                  <h3 className="tool-title">{tool.title}</h3>
                  <p className="tool-description">{tool.description}</p>
                  <div className="tool-price">
                    <span className="price-vnd">đ {tool.price}</span> -
                    <span className="price-usd">${tool.priceUSD}</span>
                    <span className={`tool-icon ${tool.icon}`}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-button next" onClick={handleNextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TopToolsSection;
