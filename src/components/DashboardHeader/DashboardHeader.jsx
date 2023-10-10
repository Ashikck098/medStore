import React from "react";
import "./DashboardHeader.css";
import logout from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ activeTab, handleTabChange }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="dashboardHeader_main">
      <ul className="dashboardHeader_navItem_container">
        <li
          className={
            activeTab === "tab1" ? "isActive" : "dashboardHeader_navItem"
          }
          onClick={() => handleTabChange("tab1")}
        >
          ADD PRODUCT
        </li>
        <li
          className={
            activeTab === "tab2" ? "isActive" : "dashboardHeader_navItem"
          }
          onClick={() => handleTabChange("tab2")}
        >
          ORDERS
        </li>
      </ul>
      <img
        src={logout}
        alt="Icon"
        onClick={handleLogout}
        className="dashboard_logout_icon"
      />
    </div>
  );
};

export default DashboardHeader;
