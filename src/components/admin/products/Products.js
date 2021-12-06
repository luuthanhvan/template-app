import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import ProductList from "./ProductList";
import { getProducts, deleteProduct } from "../../../services/product";
import Spinner from "../../common/Spinner";
import ToastMessage from "../../common/ToastMessage";
import ConfirmModal from "../../common/ConfirmModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onDelete = (event) => {
    setProductID(event.target.value);
  };

  const handleDelete = () => {
    try {
      deleteProduct(productID).then(() => {
        setIsLoading(false);
        setShowToast(true);
        setToastMessage("Xóa sản phẩm thành công!");
        setIsSuccess(true);
      });
    } catch (error) {
      setToastMessage(error.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
  }, [products]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <>
            <Header
              titlePage="Sản phẩm"
              filterTitle="Chọn loại"
              filterData={["Sen", "anc"]}
              btnLabel="Thêm sản phẩm"
            />
            <ProductList products={products} onDelete={onDelete} />
            <ConfirmModal
              title="Xác nhận"
              modelName="confirmDeleteProductModal"
              content="Bạn có thực sự muốn xóa sản phẩm này không?"
              primaryBtnLabel="OK"
              secondaryBtnLabel="Bỏ qua"
              onClickConfirmBtn={handleDelete}
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
        </>
      )}
    </>
  );
};

export default Products;
