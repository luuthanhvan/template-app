import './Admin.css';
import NavBar from "./NavBar";
import SideBar from './SideBar';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-navbar-container">
        <NavBar />
      </div>
      <div className="admin-sidebar-container">
        <SideBar />
      </div>

      <div className="admin-content-container">

      </div>
    </div>
  );
};

export default Admin;
