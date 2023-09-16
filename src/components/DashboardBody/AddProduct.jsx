import React, { useEffect, useState } from "react";
import "./DashboardBody.css";
import delete_icon from "../../assets/delete_white.svg";
import gallery from "../../assets/image.svg";
import axiosApi from "../../AxiosMethod";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    count: "",
  });
  const [products, setProducts] = useState();
  const [buttonText, setButtonText] = useState("Upload Product");

  const handleImageSelect = (event) => {
    const files = event.target.files;
    setSelectedImage(files);
    const selectedCount = selectedImages.length;

    if (selectedCount < 4) {
      const remainingCount = 4 - selectedCount;
      const newImages = Array.from(files).slice(0, remainingCount);
      const selectedUrls = newImages.map((file) => URL.createObjectURL(file));

      setSelectedImages([...selectedImages, ...selectedUrls]);
    }
  };

  const uploadProduct = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("productName", productData.productName);
    formData.append("price", productData.price);
    formData.append("count", productData.count);

    if (selectedImage) {
      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("image", selectedImage[i]);
      }
    }
    setButtonText("Uploading...");
    axiosApi
      .post("/addproducts", formData, {
        headers: {
          productName: "",
          price: "",
          count: "",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const newProduct = response.data;
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setButtonText("Upload Product");
        setProductData({
          productName: "",
          price: "",
          count: "",
        });
        setSelectedImages([]);
        setSelectedImage([]);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    axiosApi
      .get("/getallproducts")
      .then((response) => {
        setProducts(response.data.allproducts);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handdleDelete = (itemId) => {
    axiosApi
      .delete(`/deleteproduct/${itemId}`)
      .then((response) => {
        if (response.data) {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== itemId)
          );
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const limitProductName = (productName) => {
    const words = productName.split(" ");
    if (words.length > 20) {
      return words.slice(0, 10).join(" ") + " ...";
    }
    return productName;
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
            value={productData.productName}
            onChange={(e) =>
              setProductData({ ...productData, productName: e.target.value })
            }
          ></textarea>
          <label htmlFor="" className="addProduct_from_label">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter product price"
            className="addProduct_from_input"
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <label htmlFor="" className="addProduct_from_label">
            Count
          </label>
          <input
            type="number"
            placeholder="Enter product count"
            className="addProduct_from_input"
            value={productData.count}
            onChange={(e) =>
              setProductData({ ...productData, count: e.target.value })
            }
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
              <img
                src={selectedImages[0] ? selectedImages[0] : gallery}
                alt=""
              />
            </div>
            <div className="addProduct_image_box">
              <img
                src={selectedImages[1] ? selectedImages[1] : gallery}
                alt=""
              />
            </div>
            <div className="addProduct_image_box">
              <img
                src={selectedImages[2] ? selectedImages[2] : gallery}
                alt=""
              />
            </div>
          </div>

          <button className="addProduct_from_button" onClick={uploadProduct}>
            {buttonText}
          </button>
        </form>
      </div>

      <div className="addProduct_second_section">
        <h2 className="addProduct_heading">REMOVE PRODUCTS</h2>
        <div className="addProduct_card_container">
          {products ? (
            <>
              {products?.map((product, key) => (
                <div key={key} className="addProduct_card">
                  <img
                    src={product?.productImage?.[0]?.url}
                    alt="Produt"
                    className="addProduct_card_image"
                  />
                  <div className="addProduct_card_text_container">
                    <h5 className="addProduct_card_nameText">
                      {limitProductName(product?.productName)}
                    </h5>
                    <p className="addProduct_card_priceText">
                      ₹{product?.price}
                    </p>
                    <p className="addProduct_card_priceText">
                      Quantity : {product?.count}
                    </p>
                  </div>
                  <div className="addProduct_card_delete">
                    <img
                      src={delete_icon}
                      alt="Delete"
                      onClick={() => handdleDelete(product?._id)}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h3 className="empty_product_text">No Products to List</h3>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
