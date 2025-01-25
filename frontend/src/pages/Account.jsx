import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AccountSide from "../components/account/AccountSide";
import PersonalInfo from "../components/account/PersonalInfo";
import AccountWallet from "../components/account/AccountWallet";
import HistoryOrder from "../components/account/HistoryOrder";
import AccountLevel from "../components/account/AccountLevel";
import Contact from "../components/account/Contact";
import ChangePassword from "../components/account/ChangePassword";

const Account = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-container container-paddingX margin-common-containerY">
      <div className="breadcrumb">
        <span>Trang chủ</span> / <span>Tài khoản</span>
      </div>

      <div className="account-content">
        <AccountSide
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
        />
        <div className="account-main">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/wallet" element={<AccountWallet />} />
            <Route path="/orders" element={<HistoryOrder />} />
            <Route path="/account-level" element={<AccountLevel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/password" element={<ChangePassword />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Account;
