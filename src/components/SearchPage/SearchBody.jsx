import React, { useState } from "react";
import shop from "../../assets/shopCategory.svg";
import heartWhite from "../../assets/favourite.svg";
import heartPink from "../../assets/Heart.svg";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";
import { useMyContext } from "../../Context";

const SearchBody = ({ results }) => {
  const [favourite, setFavourite] = useState(true);
  const navigate = useNavigate();
  const handleClick = (id) => {
    setFavourite({ ...favourite, [id]: !favourite[id] });
  };
  console.log(results);

  const limitProductName = (productName) => {
    const words = productName.split(" ");
    if (words.length > 20) {
      return words.slice(0, 8).join(" ") + " ...";
    }
    return productName;
  };

  const { setCartCount } = useMyContext();

  const handleAddToCart = (productId) => {
    const data = {
      cart: [
        {
          product: productId,
          selectedCount: 1,
        },
      ],
    };
    axiosApi
      .post("/addCart", data)
      .then((response) => {
        setCartCount(response.data.cart.length);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="searchPage_body">
      <div className="searchPage_sortBy">
        <img src={shop} alt="Icon" /> Sort By
      </div>
      {results && Array.isArray(results) && results.length > 0 ? (
        <div className="searchPage_card_container">
          {results?.map((result, key) => (
            <div key={key} className="collections_card">
              <div
                className="card_image_section"
                  onClick={() => navigate(`/singlePage/${result?._id}`)}
              >
                <img
                  src={result?.productImage?.[0]?.url}
                  alt="Item"
                  className="card_itemImage"
                />
              </div>
              <img
                src={favourite[key] ? heartPink : heartWhite}
                alt="Heart"
                className="card_favourite"
                onClick={() => handleClick(key)}
              />
              <div className="card_content_section">
                <div
                  className="card_text_contents"
                  onClick={() => navigate(`/singlePage/${result?._id}`)}
                >
                  <p className="card_detailsText">
                    {limitProductName(result?.productName)}
                  </p>
                  <span className="card_priceText">₹{result?.price}</span>
                </div>
                <button
                  className="addToCart_btn"
                  onClick={() => handleAddToCart(result?._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no_result_text_container">
          <h5 className="no_result_text">{results?.message}</h5>
        </div>
      )}
    </div>
  );
};

export default SearchBody;
