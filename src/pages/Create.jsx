import "./Create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../services/allAPI.js";

export const Create = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleAddProduct = () => {
    postProduct(newProduct).then((res) => {
      console.log(res);
    });
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
    alert("Product added successfully");
    navigate("/");
  };
  return (
    <div className="create">
      <div className="box">
        <span>Create Product</span>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => {
            setNewProduct({ ...newProduct, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => {
            setNewProduct({ ...newProduct, price: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Image"
          value={newProduct.image}
          onChange={(e) => {
            setNewProduct({ ...newProduct, image: e.target.value });
          }}
        />
        <button type="submit" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};