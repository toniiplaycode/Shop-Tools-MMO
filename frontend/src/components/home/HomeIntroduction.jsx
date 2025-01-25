import React from "react";

const HomeIntroduction = () => {
  return (
    <div className="home-introduction">
      <div className="intro-text">
        <h2>Chào mừng bạn đến với HT PROXY</h2>
        <p>
          Khám phá danh mục sản phẩm đa dạng của chúng tôi và tìm phần mềm hoàn
          hảo cho nhu cầu của bạn. Tại HT PROXY, chúng tôi tự hào cung cấp một
          loạt các công cụ và giải pháp phần mềm được thiết kế để đáp ứng nhu
          cầu của cả cá nhân và doanh nghiệp.
        </p>
        <p>
          Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc
          lựa chọn sản phẩm phù hợp nhất với nhu cầu của bạn. Hãy cùng chúng tôi
          khám phá các tính năng nổi bật và lợi ích mà các sản phẩm của chúng
          tôi mang lại, từ việc tối ưu hóa hiệu suất đến việc bảo vệ thông tin
          cá nhân của bạn.
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
