import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductForm from "./ProductForm";
import { getProduct, updateProduct } from "../../../services/product";
import Spinner from "../../common/Spinner";
import ToastMessage from "../../common/ToastMessage";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();
  const productID = location.state;

  const handleSubmit = (newProduct) => {
    setIsLoading(true);
    updateProduct(productID, newProduct).then((res) => {
      if (res.status === 1) {
        setShowToast(true);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getProduct(productID).then((product) => {
      setProduct(product.data[0]);
      setIsLoading(false);
    });
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductForm
            title="Sửa sản phẩm"
            productData={product}
            onSubmit={handleSubmit}
            isEditForm
          />
          {showToast ? (
            <ToastMessage message="Sửa sản phẩm thành công!" success />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default EditProduct;
