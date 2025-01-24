import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "Tôi có thể thanh toán qua hình thức nào ?",
      answer:
        "Hiện tại HT PROXY có 3 hình thức thanh toán: Chuyển khoản ngân hàng, ví MOMO và thanh toán bằng USDT. Vui lòng vào phần Nạp Tiền để biết thêm chi tiết.",
    },
    {
      id: 2,
      question: "Giới thiệu về HT PROXY",
      answer:
        "HT PROXY là nền tảng cung cấp các công cụ và giải pháp tự động hóa hàng đầu, giúp tối ưu hóa quy trình làm việc và tăng hiệu suất cho doanh nghiệp của bạn.",
    },
    {
      id: 3,
      question: "Làm thế nào để xử lý nếu phần mềm gặp lỗi ?",
      answer:
        "Khi gặp lỗi, bạn có thể liên hệ trực tiếp với đội ngũ hỗ trợ kỹ thuật của chúng tôi qua các kênh chat hoặc hotline. Chúng tôi sẽ hỗ trợ bạn trong thời gian sớm nhất.",
    },
    {
      id: 4,
      question: "Làm sao để xóa thiết bị cũ và đổi sang thiết bị mới ?",
      answer:
        "Để thay đổi thiết bị, bạn cần truy cập vào phần Quản lý thiết bị trong tài khoản của mình. Tại đây, bạn có thể xóa thiết bị cũ và thêm thiết bị mới một cách dễ dàng.",
    },
    {
      id: 5,
      question: "Làm sao để kích hoạt Key License của phần mềm ?",
      answer:
        "Sau khi mua license, bạn sẽ nhận được key qua email. Vào phần Kích hoạt License trong phần mềm, nhập key và làm theo hướng dẫn để kích hoạt.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="section-title">CÂU HỎI THƯỜNG GẶP</h2>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
                className="faq-icon"
              />
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
