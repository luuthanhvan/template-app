import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductForm from "./ProductForm";
import { getProduct, updateProduct } from "../../../services/product";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const productID = location.state;

  const handleSubmit = (newProduct) => {
    updateProduct(productID, newProduct).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getProduct(productID).then((product) => {
      setProduct(product.data[0]);
    });
  }, []);

  return (
    <>
      <ProductForm
        title="Sửa sản phẩm"
        productData={product}
        onSubmit={handleSubmit}
        isEditForm
      />
    </>
  );
};

export default EditProduct;
