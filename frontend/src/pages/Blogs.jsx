import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const blogs = [
    {
      id: 1,
      title: "Hướng dẫn mua Proxy tại Proxyaz.com - HT PROXY",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "21 tháng 1, 2025",
    },
    {
      id: 2,
      title: "Hướng dẫn mua Proxy tại Raybyte.com - Shophptools.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "22 tháng 1, 2025",
    },
    {
      id: 3,
      title: "Hướng dẫn mua Proxy tại Noxproxy.com - Shophptools.com",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "22 tháng 1, 2025",
    },
    {
      id: 4,
      title: "Hướng dẫn mua Proxy tại Coldproxy.com - HT PROXY",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "22 tháng 1, 2025",
    },
    {
      id: 5,
      title: "Các Nguyên Tắc Cơ Bản trong Digital Marketing | HT PROXY",
      image: "/src/assets/imgs/blogtech.png",
      category: "Digital Marketing",
      author: "HT PROXY",
      date: "28 tháng 5, 2024",
    },
    {
      id: 6,
      title: "Bản Chất, Ưu Điểm và Nhược Điểm của Digital Marketing | HT PROXY",
      image: "/src/assets/imgs/blogtech.png",
      category: "Digital Marketing",
      author: "HT PROXY",
      date: "28 tháng 5, 2024",
    },
    {
      id: 7,
      title: "Hướng dẫn sử dụng Proxy cho Facebook Marketing",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "20 tháng 1, 2025",
    },
    {
      id: 8,
      title: "Cách tối ưu chiến dịch quảng cáo với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Digital Marketing",
      author: "HT PROXY",
      date: "19 tháng 1, 2025",
    },
    {
      id: 9,
      title: "Top 10 công cụ Marketing phải có cho MMO",
      image: "/src/assets/imgs/blogtech.png",
      category: "Digital Marketing",
      author: "HT PROXY",
      date: "18 tháng 1, 2025",
    },
    {
      id: 10,
      title: "Hướng dẫn bảo mật tài khoản Facebook với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "17 tháng 1, 2025",
    },
    {
      id: 10,
      title: "Hướng dẫn bảo mật tài khoản Facebook với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "17 tháng 1, 2025",
    },
    {
      id: 10,
      title: "Hướng dẫn bảo mật tài khoản Facebook với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "17 tháng 1, 2025",
    },
    {
      id: 10,
      title: "Hướng dẫn bảo mật tài khoản Facebook với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "17 tháng 1, 2025",
    },
    {
      id: 10,
      title: "Hướng dẫn bảo mật tài khoản Facebook với Proxy",
      image: "/src/assets/imgs/blogtech.png",
      category: "Tutorial",
      author: "HT PROXY",
      date: "17 tháng 1, 2025",
    },
  ];

  const categories = ["Digital Marketing", "Thủ thuật, tút trick Facebook"];

  const tags = [
    "Proxy MMO",
    "Facebook",
    "Buff View",
    "Thủ thuật Facebook",
    "Tút trick Facebook",
    "Marketing Online",
    "Affiliate Marketing",
    "Google",
    "SEO",
    "MMO",
    "Phần mềm MMO",
    "Phần mềm marketing",
    "Lọc data",
    "Lọc profile",
    "Tool reg",
    "Tool check",
    "Marketing không bỏ vốn",
    "Kiếm tiền",
    "Hướng dẫn",
  ];

  // Tính toán số trang
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Lấy blogs cho trang hiện tại
  const getCurrentPageBlogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  // Handlers cho nút prev/next
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Handler cho click vào số trang cụ thể
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tạo mảng số trang để hiển thị
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="blogs-container container-paddingX margin-common-containerY">
      <div className="blogs-header">
        <div className="breadcrumb">
          <span>Trang chủ</span> / <span>Blog</span>
        </div>
        <h1>Chủ đề: Tất cả</h1>
      </div>

      <div className="blogs-content">
        <div className="blogs-grid">
          {getCurrentPageBlogs().map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="category">{blog.category}</span>
                  <span className="author">{blog.author}</span>
                  <span className="date">{blog.date}</span>
                </div>
                <h2 className="blog-title">{blog.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="blogs-sidebar">
          <div className="sidebar-section">
            <h3>HT PROXY</h3>
            <p>
              Đơn vị cho thuê Tools, phần mềm hàng đầu dành cho MMO. Kiếm phí từ
              việc sử dụng các công cụ chuyên nghiệp của chúng tôi.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link youtube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="social-link telegram">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Chủ đề bài viết</h3>
            <div className="category-buttons">
              {categories.map((category, index) => (
                <button key={index} className="category-btn">
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Related Tags</h3>
            <div className="tags-cloud">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="blogs-pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        {getPageNumbers().map((number) => (
          <button
            key={number}
            className={currentPage === number ? "active" : ""}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blogs;
