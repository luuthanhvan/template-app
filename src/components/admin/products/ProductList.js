import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import ModalWrapper from "../../common/ModalWapper";
import ProductDetail from "./ProductDetail";

const ProductList = ({ products, onDelete }) => {
  const location = useLocation();
  const [product, setProduct] = useState({});

  return (
    <div className="admin-content-table">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên cây</th>
            <th scope="col">Lọai</th>
            <th scope="col">Giá</th>
            <th scope="col">Trạng thái</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.status ? "Hiện" : "Ẩn"}</td>
                <td>
                  <div className="row">
                    <div className="col-2">
                      <NavLink
                        to={{
                          pathname: `${location.pathname}/edit`,
                          state: product._id,
                        }}
                      >
                        <button type="button" className="btn btn-secondary">
                          Sửa
                        </button>
                      </NavLink>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteProductModal"
                        value={product._id}
                        onClick={onDelete}
                      >
                        Xóa
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#productDetailModal"
                        onClick={() => { setProduct(product) }}
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ModalWrapper
        title="Chi tiết sản phẩm"
        modelName="productDetailModal"
        contents={<ProductDetail product={product} />}
      />
    </div>
  );
};

export default ProductList;
