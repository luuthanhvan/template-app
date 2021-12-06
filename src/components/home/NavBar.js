const NavBar = () => {
  return (
    <nav className="navbar navbar-light home-navbar-container">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">Template app</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
