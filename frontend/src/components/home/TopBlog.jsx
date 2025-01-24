import React, { useState, useEffect } from "react";

const TopBlog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Cách tự học chạy quảng cáo A-Z cho người mới bắt đầu",
      image: "/src/assets/imgs/blogtech.png",
      category: "Facebook",
    },
    {
      id: 2,
      title: "Các Nguyên Tắc Cơ Bản trong Digital Marketing",
      image: "/src/assets/imgs/blogtech.png",
      category: "Coding",
    },
    {
      id: 3,
      title: "Hướng dẫn mua Proxy tại Rayobyte.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 4,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 5,
      title: "Cách tự học chạy quảng cáo A-Z cho người mới bắt đầu",
      image: "/src/assets/imgs/blogtech.png",
      category: "Facebook",
    },
    {
      id: 6,
      title: "Các Nguyên Tắc Cơ Bản trong Digital Marketing",
      image: "/src/assets/imgs/blogtech.png",
      category: "Coding",
    },
    {
      id: 7,
      title: "Hướng dẫn mua Proxy tại Rayobyte.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 8,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 8,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 8,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
    {
      id: 8,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
    },
  ];

  const totalSlides = Math.ceil(blogs.length / 4);

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning, totalSlides]);

  return (
    <div className="top-blog-section">
      <h2 className="section-title">BÀI VIẾT NỔI BẬT</h2>
      <div className="blog-slider">
        <div
          className="blog-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3 className="blog-title">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBlog;
