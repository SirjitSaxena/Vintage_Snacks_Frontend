import React, { useState, useEffect ,useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import AppContext from "../../context/AppContext";

const ProductDetail = () => {
    const{addToCart } = useContext(AppContext)
  const [product, setProduct] = useState();
  const { id } = useParams();
  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      //console.log(api.data);
      setProduct(api.data.product);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="left">
          <img
            src={product?.imgSrc}
            alt=""
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <div className="right">
          <h1>{product?.title}</h1>
          <div className="desc">
            <p>{product?.description}</p>
          </div>
          <div
            className="my-3"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <h1 className="mx-3">
              {"₹"}
              {product?.price}
            </h1>
            <button className="btn btn-danger" onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)} style={{ fontWeight: "bold" }}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <RelatedProduct category={product?.category} />
    </>
  );
};

export default ProductDetail;
