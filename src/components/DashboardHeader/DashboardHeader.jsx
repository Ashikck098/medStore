import React from "react";
import "./DashboardHeader.css"

const DashboardHeader = ({activeTab,handleTabChange}) => {
  return (
    <div className="dashboardHeader_main">
      <ul className="dashboardHeader_navItem_container">
        <li className={activeTab === "tab1" ? "isActive" : "dashboardHeader_navItem"} onClick={() => handleTabChange("tab1")}>ADD PRODUCT</li>
        <li className={activeTab=== "tab2" ? "isActive" : "dashboardHeader_navItem"} onClick={() => handleTabChange("tab2")}>ORDERS</li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
