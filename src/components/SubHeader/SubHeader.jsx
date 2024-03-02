import React from "react";
import "./SubHeader.css";
import shop from "../../assets/shopCategory.svg";
import best from "../../assets/bestSeller.svg";
import brand from "../../assets/brands.svg";
import offer from "../../assets/offerZone.svg";
import blog from "../../assets/blogs.svg";
import gift from "../../assets/giftCard.svg";
import customer from "../../assets/customerSupport.svg";
import scanner from "../../assets/scanner.png";
import { useNavigate } from "react-router-dom";

const SubHeader = () => {

  const navigate = useNavigate()

  return (
    <div className="subHeader_main">
      <div className="subHeader_shopCategory">
        <img src={shop} alt="Icon" /> Shop By Category
      </div>
      <div className="subHeader_card">
        <img src={best} alt="Icon" />
        Best Sellers
      </div>
      <div className="subHeader_card">
        <img src={brand} alt="Icon" />
        Brands
      </div>{" "}
      <div className="subHeader_card">
        <img src={offer} alt="Icon" />
        Offer Zone
      </div>{" "}
      <div className="subHeader_card">
        <img src={blog} alt="Icon" />
        Blogs
      </div>{" "}
      <div className="subHeader_card">
        <img src={gift} alt="Icon" />
        Gift Card
      </div>{" "}
      <div className="subHeader_card">
        <img src={customer} alt="Icon" />
        Customer Support
      </div>{" "}
      <div className="subHeader_card" onClick={()=>navigate('/medlens')}>
        <img src={scanner} alt="Icon" />
        Med lens
      </div>
    </div>
  );
};

export default SubHeader;
