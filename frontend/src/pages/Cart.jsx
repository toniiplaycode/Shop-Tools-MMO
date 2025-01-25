import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Mask My PC - Change Info PC",
      image: "/src/assets/imgs/window10pro.png",
      duration: "1 tháng",
      price: "100.000 đ",
      quantity: 1,
    },
    {
      id: 2,
      name: "VPS Proxy Builder - Proxy Creator",
      image: "/src/assets/imgs/window10pro.png",
      duration: "1 tháng",
      price: "200.000 đ",
      quantity: 1,
    },
  ];

  const paymentMethods = [
    {
      id: "bank",
      name: "Chuyển khoản ngân hàng",
      description: "Số dư hiện tại: 0 VND",
      icon: "/src/assets/imgs/bankicon.jpg",
    },
    {
      id: "momo",
      name: "Ví MoMo",
      description: "Thanh toán qua ví MoMo",
      icon: "/src/assets/imgs/momoicon.jpg",
    },
  ];

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-container container-paddingX margin-common-containerY">
      <div className="cart-header">
        <Link to="/" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Giỏ hàng của bạn</span>
        </Link>
      </div>

      <div className="cart-content">
        <div className="cart-main">
          <div className="cart-table">
            <div className="table-header">
              <div className="header-cell">Tên tool</div>
              <div className="header-cell">Thời hạn</div>
              <div className="header-cell">Giá</div>
              <div className="header-cell">Số lượng</div>
              <div className="header-cell">Tổng giá</div>
              <div className="header-cell"></div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="table-row">
                <div className="cell product-info">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
                <div className="cell">{item.duration}</div>
                <div className="cell">{item.price}</div>
                <div className="cell quantity">
                  <button className="quantity-btn">-</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button className="quantity-btn">+</button>
                </div>
                <div className="cell">{item.price}</div>
                <div className="cell">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-methods">
            <h3>Phương thức thanh toán</h3>
            <div className="methods-grid">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`payment-method ${
                    selectedPayment === method.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <div className="method-icon">
                    <img src={method.icon} alt={method.name} />
                  </div>
                  <div className="method-info">
                    <h4>{method.name}</h4>
                    <p>{method.description}</p>
                  </div>
                  <div className="method-radio">
                    <div className="radio-circle">
                      {selectedPayment === method.id && (
                        <div className="radio-dot" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="voucher-section">
            <input type="text" placeholder="Nhập Voucher (Nếu có)..." />
            <button className="apply-btn">Áp dụng</button>
          </div>

          <div className="summary-details">
            <div className="summary-row">
              <span>Tổng giá</span>
              <span>300.000 đ</span>
            </div>
            <div className="summary-row">
              <span>Giảm giá</span>
              <span>0 %</span>
            </div>
            <div className="summary-row total">
              <span>Tổng thanh toán</span>
              <span>300.000 đ</span>
            </div>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
