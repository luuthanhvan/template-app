import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { storeProduct } from "../../../services/product";
import Spinner from "../../common/Spinner";
import ToastMessage from "../../common/ToastMessage";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (product) => {
    try {
      setIsLoading(true);
      storeProduct(product).then((res) => {
        if (res.status === 1) {
          setShowToast(true);
          setIsLoading(false);
          setToastMessage("Thêm sản phẩm thành công!");
          setIsSuccess(true);
        }
      });
    } catch (error) {
      setToastMessage(error.message);
      setIsError(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductForm title="Thêm sản phẩm" onSubmit={handleSubmit} />
          {showToast ? (
            <ToastMessage
              message={toastMessage}
              success={isSuccess}
              error={isError}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default AddProduct;
