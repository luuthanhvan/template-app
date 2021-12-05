import "./Admin.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import Orders from "./orders/Orders";
import Users from "./users/Users";

const Admin = () => {
  return (
    <Router>
      <div className="admin-container">
        <div className="admin-navbar-container">
          <NavBar />
        </div>
        <div className="admin-sidebar-container">
          <SideBar />
        </div>

        <div className="admin-content-container">
          <Route path="/admin" component={Dashboard} exact />
          <Route path="/admin/products" component={Products} exact/>
          <Route path="/admin/orders" component={Orders} exact/>
          <Route path="/admin/users" component={Users} exact/>
          <Route path="/admin/products/add" component={AddProduct} />
          <Route path="/admin/products/edit" component={EditProduct} />
        </div>
      </div>
    </Router>
  );
};

export default Admin;
