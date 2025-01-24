import React from "react";
import HomeIntroduction from "../components/home/HomeIntroduction";
import ToolsSection from "../components/home/ToolsSection";
import TopToolsSection from "../components/home/TopToolsSection";
import TopMemberBuy from "../components/home/TopMemberBuy";
import CustomerBuyCurrent from "../components/home/CustomerBuyCurrent";
import TopBlog from "../components/home/TopBlog";
import FAQ from "../components/home/FAQ";
import ScrollAnimation from "../components/common/ScrollAnimation";

const Home = () => {
  return (
    <div className="container-paddingX">
      <ScrollAnimation>
        <HomeIntroduction />
      </ScrollAnimation>

      <ScrollAnimation>
        <ToolsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <TopToolsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <TopMemberBuy />
      </ScrollAnimation>

      <ScrollAnimation>
        <CustomerBuyCurrent />
      </ScrollAnimation>

      <ScrollAnimation>
        <TopBlog />
      </ScrollAnimation>

      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
    </div>
  );
};

export default Home;
