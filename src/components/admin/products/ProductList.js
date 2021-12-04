import { NavLink, useLocation } from "react-router-dom";
import { deleteProduct } from "../../../services/product";

const ProductList = ({ products }) => {
  const location = useLocation();

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
                        onClick={() => {
                          deleteProduct(product._id).then((res) => {
                            console.log(res);
                          });
                        }}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
