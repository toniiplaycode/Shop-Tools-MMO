import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Xử lý gửi tin nhắn ở đây
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className={`chat-box ${isOpen ? "open" : ""}`}>
      {!isOpen ? (
        <button className="chat-toggle" onClick={toggleChat}>
          <FontAwesomeIcon icon={faComments} />
          <span>Chat với chúng tôi</span>
        </button>
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <h3>HT PROXY Support</h3>
            <button className="close-btn" onClick={toggleChat}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="chat-messages">
            <div className="message admin">
              <div className="message-avatar">
                <img src="/src/assets/imgs/logo.png" alt="Admin" />
              </div>
              <div className="message-content">
                <p>Xin chào! Chúng tôi có thể giúp gì cho bạn?</p>
                <span className="message-time">14:30</span>
              </div>
            </div>

            <div className="message user">
              <div className="message-content">
                <p>Tôi cần hỗ trợ về sản phẩm</p>
                <span className="message-time">14:31</span>
              </div>
            </div>
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
