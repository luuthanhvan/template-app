const SideBar = () => {
  return(
    <div className="admin-sidebar-content">
      <h4 className="admin-sidebar-brand-name">Template app</h4>
      <div className="admin-sidebar-list-group-container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><a href="/admin/dashboard">Dashboard</a></li>
          <li className="list-group-item"><a href="/admin/products">Sản phẩm</a></li>
          <li className="list-group-item"><a href="/admin/orders">Đơn hàng</a></li>
          <li className="list-group-item"><a href="admin/users">Khách hàng</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;