import React, { useState, useEffect } from "react";

const CustomerBuyCurrent = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const customers = [
    {
      id: 1,
      name: "tha***",
      avatar: "/src/assets/imgs/man.png",
      product: "VPS Proxy Builder - Proxy Creator",
    },
    {
      id: 2,
      name: "luc***",
      avatar: "/src/assets/imgs/man.png",
      product: "Tool Generate Email to UID",
    },
    {
      id: 3,
      name: "dsa***",
      avatar: "/src/assets/imgs/man.png",
      product: "Tool Add Alias GMX Mailcom",
    },
    {
      id: 4,
      name: "nst***",
      avatar: "/src/assets/imgs/man.png",
      product: "VPS Proxy Builder - Proxy Creator",
    },
    {
      id: 5,
      name: "tha***",
      avatar: "/src/assets/imgs/man.png",
      product: "VPS Proxy Builder - Proxy Creator",
    },
    {
      id: 6,
      name: "luc***",
      avatar: "/src/assets/imgs/man.png",
      product: "Tool Generate Email to UID",
    },
    {
      id: 7,
      name: "dsa***",
      avatar: "/src/assets/imgs/man.png",
      product: "Tool Add Alias GMX Mailcom",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev <= -(customers.length - 4) * 320) {
          return 0;
        }
        return prev - 320;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [customers.length]);

  return (
    <div className="customer-buy-section">
      <h2 className="section-title">KHÁCH HÀNG MUA GẦN ĐÂY</h2>
      <div className="customers-slider">
        <div
          className="customers-track"
          style={{
            transform: `translateX(${currentPosition}px)`,
          }}
        >
          {customers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <div className="customer-avatar">
                <img src={customer.avatar} alt={customer.name} />
              </div>
              <div className="customer-info">
                <h3 className="customer-name">{customer.name}</h3>
                <p className="customer-product">
                  Vừa thanh toán {customer.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerBuyCurrent;
