import React, { useState } from "react";
import ToolDetailContent from "./tool-details/ToolDetailContent";
import ToolTabs from "./tool-details/ToolTabs";
import RelatedProducts from "./tool-details/RelatedProducts";
import RecentCustomers from "./tool-details/RecentCustomers";

const ToolDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const handleFullscreen = () => {
    const videoContainer = document.querySelector(".video-container iframe");
    if (videoContainer) {
      if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch((err) => {
          console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="tool-detail-container container-paddingX margin-common-containerY">
      <div className="tool-detail-breadcrumb">
        <span>Trang chủ</span> / <span>VPS Proxy Builder - Proxy Creator</span>
      </div>

      <ToolDetailContent />

      <ToolTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleFullscreen={handleFullscreen}
      />

      <RelatedProducts />

      <RecentCustomers />
    </div>
  );
};

export default ToolDetails;
