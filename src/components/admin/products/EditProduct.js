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
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const productID = location.state;

  const handleSubmit = (newProduct) => {
    try {
      setIsLoading(true);
      updateProduct(productID, newProduct).then((res) => {
        if (res.status === 1) {
          setShowToast(true);
          setIsLoading(false);
          setToastMessage("Sửa sản phẩm thành công!");
          setIsSuccess(true);
        }
      });
    } catch (error) {
      setToastMessage(error.message);
      setIsError(true);
    }
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

export default EditProduct;
