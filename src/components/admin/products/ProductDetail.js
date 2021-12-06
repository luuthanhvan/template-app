import React from "react";
import Spinner from "../../common/Spinner";

const ProductDetail = ({ product }) => {
  return (
    <>
      {!product ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="/images/sen_da_hong.jpg" width="200" height="200" />
            </div>
            <div className="col">
              <div className="row">
                <p>
                  <b>Tên cây: </b> {product.productName}
                </p>
              </div>
              <div className="row">
                <p>
                  <b>Loại: </b> {product.category}
                </p>
              </div>
              <div className="row">
                <p>
                  <b>Giá: </b> {product.price}
                </p>
              </div>
              <div className="row">
                <p>
                  <b>Trạng thái: </b> {product.status ? "Hiện" : "Ẩn"}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Mô tả: </b> {product.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
