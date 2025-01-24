import React, { useState, useEffect } from "react";

const TopMemberBuy = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const members = [
    {
      id: 1,
      name: "can***",
      avatar: "/src/assets/imgs/man.png",
      rank: "BẬC THẦY",
      rankIcon: "🌟",
    },
    {
      id: 2,
      name: "new***",
      avatar: "/src/assets/imgs/man.png",
      rank: "BẬC THẦY",
      rankIcon: "🌟",
    },
    {
      id: 3,
      name: "kun***",
      avatar: "/src/assets/imgs/man.png",
      rank: "CAO THỦ",
      rankIcon: "🦊",
    },
    {
      id: 4,
      name: "han***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
    {
      id: 5,
      name: "pha***",
      avatar: "/src/assets/imgs/man.png",
      rank: "TINH ANH",
      rankIcon: "🏆",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev <= -(members.length - 5) * 100) {
          return 0;
        }
        return prev - 100;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [members.length]);

  return (
    <div className="top-members-section">
      <h2 className="section-title">TOP THÀNH VIÊN MUA SẮM</h2>
      <div className="members-slider">
        <div
          className="members-track"
          style={{
            transform: `translateX(${currentPosition}px)`,
          }}
        >
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-rank">
                  <span className="rank-icon">{member.rankIcon}</span>
                  <span className="rank-name">{member.rank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMemberBuy;
