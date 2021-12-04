import { Link, useLocation } from "react-router-dom";

const Header = ({ titlePage, filterTitle, filterData, btnLabel }) => {
  // To get the current path, we use the useLocation hook in react-router-dom
  // and access the current path through location.pathname
  const location = useLocation();

  return (
    <div className="admin-content-header">
      <div className="row">
        <div className="col-2">
          <h5 className="admin-content-header-title">{titlePage}</h5>
        </div>
        <div className="col-6">
          <select className="form-select" aria-label="Default select example">
            <option value="">{filterTitle}</option>
            {filterData.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <Link to={`${location.pathname}/add`}>
            <button type="button" className="btn btn-primary">
              {btnLabel}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
