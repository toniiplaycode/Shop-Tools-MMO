import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AccountLevel = () => {
  const levels = [
    {
      id: 1,
      name: "Khởi Nguyên",
      icon: "/src/assets/imgs/logo.png",
      price: "0 VND",
      description:
        'Cấp độ "Khởi Nguyên" là điểm khởi đầu lý tưởng cho những ai mới bước chân vào hành trình. Bạn sẽ bắt đầu làm quen với các dịch vụ và chuẩn bị cho cuộc hành trình.',
      discount: "Giảm giá 0%",
      current: true,
    },
    {
      id: 2,
      name: "Chiến Binh",
      icon: "/src/assets/imgs/logo.png",
      price: "3.000.000 VND",
      description:
        'Ở cấp độ "Chiến Binh", bạn đã vượt qua những thử thách ban đầu. Khi tổng nạp đạt 3.000.000đ, bạn sẽ được vinh danh và thể hiện tinh thần chiến đấu mạnh mẽ.',
      discount: "Giảm giá 5%",
    },
    {
      id: 3,
      name: "Thành Thạo",
      icon: "/src/assets/imgs/logo.png",
      price: "5.000.000 VND",
      description:
        'Cấp độ "Thành Thạo" chứng tỏ sự nỗ lực và khả năng tuyệt vời của bạn. Khi tổng nạp đạt 5.000.000đ, bạn sẽ thăng hạng, khẳng định bản thân với sự bền bỉ và xuất sắc.',
      discount: "Giảm giá 7%",
    },
    {
      id: 4,
      name: "Tinh Anh",
      icon: "/src/assets/imgs/logo.png",
      price: "10.000.000 VND",
      description:
        'Ở cấp độ "Tinh Anh", bạn đã trở thành một phần không thể thiếu. Khi tổng nạp đạt 10.000.000đ, bạn được tôn vinh là thành viên ưu tú, thể hiện sự trung thành và đóng góp to lớn.',
      discount: "Giảm giá 10%",
    },
    {
      id: 5,
      name: "Cao Thủ",
      icon: "/src/assets/imgs/logo.png",
      price: "20.000.000 VND",
      description:
        'Cấp độ "Cao Thủ" là biểu tượng của đẳng cấp và sự vượt trội. Với tổng nạp 20.000.000đ, bạn không chỉ khẳng định vị thế mà còn trở thành huyền thoại trong cộng đồng.',
      discount: "Giảm giá 15%",
    },
    {
      id: 6,
      name: "Bậc Thầy",
      icon: "/src/assets/imgs/logo.png",
      price: "30.000.000 VND",
      description:
        'Cấp độ "Bậc Thầy" là đỉnh cao của sự tận tâm và công hiến. Khi tổng nạp đạt 30.000.000đ, bạn chạm tới đỉnh vinh quang, được tôn vinh là bậc thầy xuất sắc nhất, không định vì thế độc tôn và vượt trội.',
      discount: "Giảm giá 20%",
    },
  ];

  return (
    <div className="account-level">
      <div className="level-grid">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`level-card ${level.current ? "current" : ""}`}
          >
            <div className="level-header">
              <h3>{level.name}</h3>
              <img src={level.icon} alt={level.name} />
            </div>
            <div className="level-price">{level.price}</div>
            <p className="level-description">{level.description}</p>
            <div className="level-discount">
              <FontAwesomeIcon icon={faCheck} />
              <span>{level.discount}</span>
            </div>
            {!level.current && (
              <button className="upgrade-btn">Nâng cấp ngay</button>
            )}
            {level.current && (
              <button className="current-btn" disabled>
                Gói của bạn
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountLevel;
