import "./Home.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../services/allAPI.js";

export const Home = () => {
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProduct().then((res) => {
      setProducts(res.data);
    });
    setIsLoading(false);
  }, []);
  console.log(updatedProduct);

  if (isLoading) {
    return <div className="home">Loading...</div>;
  }

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id),
    );
    alert("Product deleted successfully");
  };

  const handleUpdate = async () => {
    await updateProduct(updatedProduct._id, updatedProduct).then(() => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id !== updatedProduct._id ? product : updatedProduct,
        ),
      );
      handleClose();
    });
  };

  return (
    <div className="home">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <input
            defaultValue={updatedProduct.name}
            type="text"
            placeholder="Product Name"
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                name: e.target.value,
              });
            }}
          />
          <input
            defaultValue={updatedProduct.price}
            type="text"
            placeholder="Price"
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                price: e.target.value,
              });
            }}
          />
          <input
            defaultValue={updatedProduct.image}
            type="text"
            placeholder="Image"
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                image: e.target.value,
              });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <span>Current Products</span>
      <div className="products">
        {products.map((product) => (
          <div
            key={product._id}
            className="box"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h1>{product.name}</h1>
              <p>${product.price}</p>
            </div>
            <section>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  handleShow();
                  setUpdatedProduct(product);
                }}
              ></i>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => {
                  handleDelete(product._id).then((res) => {
                    console.log(res);
                  });
                }}
              ></i>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};