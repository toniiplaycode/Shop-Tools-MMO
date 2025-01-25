import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const DetailBlog = () => {
  const { id } = useParams();

  // Mock data cho bài viết chi tiết
  const blogDetail = {
    title: "Hướng dẫn mua Proxy tại Raybyte.com - htproxy.com",
    author: "HT PROXY",
    date: "22 tháng 1, 2025",
    image: "/src/assets/imgs/blogtech.png",
    content: [
      {
        type: "text",
        content: "Bước 1: vào https://rayobyte.com/",
      },
      {
        type: "text",
        content:
          "Đăng ký nick nếu chưa có. hãy đăng ký ở phần Residential Dashboard",
      },
      {
        type: "image",
        url: "/src/assets/imgs/blogtech.png",
        caption: "Giao diện đăng ký Rayobyte",
      },
      {
        type: "text",
        content: "Bước 2: Vào Home và chọn tới Rotating Data Center proxies",
      },
      {
        type: "image",
        url: "/src/assets/imgs/blogtech.png",
        caption: "Giao diện đăng ký Rayobyte",
      },
    ],
    relatedPosts: [
      {
        id: 1,
        title: "Hướng dẫn mua Proxy tại Noxproxy.com - htproxy.com",
        image: "/src/assets/imgs/blogtech.png",
      },
      {
        id: 2,
        title: "Hướng dẫn mua Proxy tại Coldproxy.com - HT PROXY",
        image: "/src/assets/imgs/blogtech.png",
      },
      {
        id: 3,
        title: "Hướng dẫn mua Proxy tại Proxyaz.com - HT PROXY",
        image: "/src/assets/imgs/blogtech.png",
      },
    ],
  };

  return (
    <div className="blog-detail container-paddingX margin-common-containerY">
      <div className="blog-detail-header">
        <div className="breadcrumb">
          <span>Trang chủ</span> / <span>Blog</span> /{" "}
          <span>{blogDetail.title}</span>
        </div>
        <h1>{blogDetail.title}</h1>
        <div className="blog-meta">
          <span className="author">{blogDetail.author}</span>
          <span className="date">{blogDetail.date}</span>
        </div>
      </div>

      <div className="blog-detail-content">
        <div className="blog-main">
          <div className="featured-image">
            <img src={blogDetail.image} alt={blogDetail.title} />
          </div>

          <div className="content">
            {blogDetail.content.map((section, index) => (
              <div key={index} className="content-section">
                {section.type === "text" ? (
                  <p>{section.content}</p>
                ) : (
                  <div className="content-image">
                    <img src={section.url} alt={section.caption} />
                    {section.caption && (
                      <p className="caption">{section.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="share-section">
            <h3>Chia sẻ bài viết:</h3>
            <div className="share-buttons">
              <button className="share-btn facebook">
                <FontAwesomeIcon icon={faFacebookF} />
                Facebook
              </button>
              <button className="share-btn twitter">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </button>
              <button className="share-btn linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </button>
              <button className="share-btn email">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </button>
            </div>
          </div>

          <div className="related-posts">
            <h3>Xem thêm:</h3>
            <div className="related-grid">
              {blogDetail.relatedPosts.map((post) => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <h4>{post.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
