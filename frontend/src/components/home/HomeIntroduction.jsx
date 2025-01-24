import React from "react";

const HomeIntroduction = () => {
  return (
    <div className="home-introduction">
      <div className="intro-text">
        <h2>Chào mừng bạn đến với HT PROXY</h2>
        <p>
          Khám phá danh mục sản phẩm đa dạng của chúng tôi và tìm phần mềm hoàn
          hảo cho nhu cầu của bạn
        </p>
        <button className="explore-button">Khám phá ngay</button>
      </div>
      <div className="intro-image">
        <img src="/src/assets/imgs/introduce.png" alt="Introduction" />
      </div>
    </div>
  );
};

export default HomeIntroduction;
