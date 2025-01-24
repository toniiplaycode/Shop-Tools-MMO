import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPaperPlane,
  faRobot,
  faCommentDots,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: "Channel Thông báo Telegram",
      description: "Channel Thông báo Telegram",
      icon: faPaperPlane,
      iconColor: "#0088cc", // Telegram blue
      link: "#",
    },
    {
      id: 2,
      title: "Telegram Bot Support",
      description: "Telegram Bot Support",
      icon: faRobot,
      iconColor: "#0088cc",
      link: "#",
    },
    {
      id: 3,
      title: "Fanpage Support",
      description: "Trang Fanpage HP Tools",
      icon: faSquareFacebook,
      iconColor: "#1877f2", // Facebook blue
      link: "#",
    },
    {
      id: 4,
      title: "Admin Telegram Support",
      description: "Link Admin Support trên Telegram",
      icon: faCommentDots,
      iconColor: "#0088cc",
      link: "#",
    },
    {
      id: 5,
      title: "Facebook Admin",
      description: "Facebook Admin hỗ trợ",
      icon: faUserTie,
      iconColor: "#1877f2",
      link: "#",
    },
  ];

  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <div
            className="contact-icon"
            style={{ backgroundColor: contact.iconColor }}
          >
            <FontAwesomeIcon icon={contact.icon} />
          </div>
          <div className="contact-info">
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
          </div>
          <a href={contact.link} className="contact-btn">
            Liên hệ
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
