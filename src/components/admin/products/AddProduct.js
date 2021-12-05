import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { storeProduct } from "../../../services/product";
import Spinner from "../../common/Spinner";
import ToastMessage from "../../common/ToastMessage";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const handleSubmit = (product) => {
    setIsLoading(true);
    storeProduct(product).then((res) => {
      if (res.status === 1) {
        setShowToast(true);
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductForm title="Thêm sản phẩm" onSubmit={handleSubmit} />
          {showToast ? (
            <ToastMessage message="Thêm sản phẩm thành công!" success />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default AddProduct;
