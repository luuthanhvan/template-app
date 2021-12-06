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
  const [file, setFile] = useState({});

  const onChooseFile = (event) => {
    // console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSubmit = (product) => {
    try {
      setIsLoading(true);

      let formData = new FormData();
      formData.append('productName', product.productName);
      formData.append('category', product.category);
      formData.append('price', product.price);
      formData.append('status', product.status);
      formData.append('image', file);
      formData.append('description', product.description);

      storeProduct(formData).then((res) => {
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
          <ProductForm
            title="Thêm sản phẩm"
            onSubmit={handleSubmit}
            onChooseFile={onChooseFile}
          />
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
