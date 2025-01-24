import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const RecentCustomers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 300;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newPosition;
    if (direction === "prev") {
      newPosition = Math.max(scrollPosition - scrollAmount, 0);
    } else {
      newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
    }

    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const recentCustomers = [
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    {
      id: 1,
      name: "tru***",
      avatar: "/src/assets/imgs/man.png",
      product: "Check Email Pass 2FA FB",
    },
    // Add more customers
  ];

  return (
    <div className="recent-customers">
      <h2 className="section-title">KHÁCH HÀNG MUA GẦN ĐÂY</h2>

      <div className="customers-slider">
        <button
          className="slider-btn prev"
          onClick={() => handleScroll("prev")}
          disabled={scrollPosition <= 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          className="customers-container"
          ref={containerRef}
          onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
        >
          {recentCustomers.map((customer) => (
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

        <button
          className="slider-btn next"
          onClick={() => handleScroll("next")}
          disabled={
            containerRef.current &&
            scrollPosition >=
              containerRef.current.scrollWidth -
                containerRef.current.clientWidth
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default RecentCustomers;
