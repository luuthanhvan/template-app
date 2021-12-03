import { NavLink } from "react-router-dom";

const SideBar = () => {;
  return (
    <div className="admin-sidebar-content">
      <h4 className="admin-sidebar-brand-name">Template app</h4>
      <div className="admin-sidebar-list-group-container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/admin/products">Sản phẩm</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/admin/orders">Đơn hàng</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/admin/users">Khách hàng</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
