const Header = ({ titlePage, filterTitle, filterData, btnLabel }) => {
  return (
    <div className="admin-content-header">
      <div className="row">
        <div className="col-2">
          <h5 className="admin-content-header-title">{titlePage}</h5>
        </div>
        <div className="col-6">
          <select className="form-select" aria-label="Default select example">
            <option selected>{filterTitle}</option>
            {filterData.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <button type="button" class="btn btn-primary">
            {btnLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
