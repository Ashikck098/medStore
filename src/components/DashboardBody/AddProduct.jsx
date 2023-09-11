import React, { useState } from "react";
import "./DashboardBody.css";
import delete_icon from "../../assets/delete_white.svg";
import medicine from "../../assets/medicine.png";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (event) => {
    const files = event.target.files;
    const selectedCount = selectedImages.length;

    if (selectedCount < 4) {
      const remainingCount = 4 - selectedCount;
      const newImages = Array.from(files).slice(0, remainingCount);
      const selectedUrls = newImages.map((file) => URL.createObjectURL(file));

      setSelectedImages([...selectedImages, ...selectedUrls]);
    }
  };

  return (
    <div className="addProduct_main">
      <div className="addProduct_first_section">
        <h2 className="addProduct_heading">ADD PRODUCT</h2>
        <form action="" className="addProduct_from">
          <label htmlFor="" className="addProduct_from_label">
            Title
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Enter the product title"
            className="addProduct_from_input"
          ></textarea>
          <label htmlFor="" className="addProduct_from_label">
            Price
          </label>
          <input
            type="text"
            placeholder="Enter product price"
            className="addProduct_from_input"
          />
          <label htmlFor="" className="addProduct_from_label imagePicker_label">
            Add 4 Images of your product
          </label>

          <div className="addProduct_images_section">
            {selectedImages.length < 4 ? (
              <input
                type="file"
                className="addProduct_imagePicker"
                onChange={handleImageSelect}
                accept="image/*"
                multiple
              />
            ) : (
              <div className="addProduct_image_box">
                
                <img src={selectedImages[3]} alt="" />
              </div>
            )}

            <div className="addProduct_image_box">
              
              <img src={selectedImages[0]} alt="" />
            </div>
            <div className="addProduct_image_box">
              
              <img src={selectedImages[1]} alt="" />
            </div>
            <div className="addProduct_image_box">
              
              <img src={selectedImages[2]} alt="" />
            </div>
          </div>

          <button className="addProduct_from_button">Upload Product</button>
        </form>
      </div>

      <div className="addProduct_second_section">
        <h2 className="addProduct_heading">REMOVE PRODUCTS</h2>
        <div className="addProduct_card_container">
          <div className="addProduct_card">
            <img
              src={medicine}
              alt="Produt"
              className="addProduct_card_image"
            />
            <div className="addProduct_card_text_container">
              <h5 className="addProduct_card_nameText">1GM Pendox Xero 1mg</h5>
              <p className="addProduct_card_priceText">₹999</p>
            </div>
            <div className="addProduct_card_delete">
              <img src={delete_icon} alt="Delete" />
            </div>
          </div>

          <div className="addProduct_card">
            <img
              src={medicine}
              alt="Produt"
              className="addProduct_card_image"
            />
            <div className="addProduct_card_text_container">
              <h5 className="addProduct_card_nameText">1GM Pendox Xero 1mg</h5>
              <p className="addProduct_card_priceText">₹999</p>
            </div>
            <div className="addProduct_card_delete">
              <img src={delete_icon} alt="Delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
