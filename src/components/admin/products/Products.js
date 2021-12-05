import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import ProductList from "./ProductList";
import { getProducts, deleteProduct } from "../../../services/product";
import Spinner from "../../common/Spinner";
import ToastMessage from "../../common/ToastMessage";
import { Modal } from 'bootstrap';
import ConfirmModal from "../../common/ConfirmModal";
import $ from "jquery";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const handleDelete = (event) => {
    const productID = event.target.value;
    // show confirmation modal
    let modal = new Modal($("#deleteProductModal"));
    modal.show();
    $("#confirmBtn").on("click", function () {
      setIsLoading(true);
      deleteProduct(productID).then(() => {
        setShowToast(true);
        setIsLoading(false);
      });
      modal.hide();
    });
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
            <ProductList products={products} onDelete={handleDelete} />
            <ConfirmModal
              title="Xác nhận"
              modalName="deleteProductModal"
              content="Bạn có thực sự muốn xóa sản phẩm này không?"
            />
            {showToast ? (
              <ToastMessage message="Xóa sản phẩm thành công!" success />
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
