const CategoryCard = ({ title, content, imagePath, btnLabel }) => {
  return (
    <div className="card home-card-container">
      <img src={imagePath} className="card-img-top" alt="..." width="200" height="200"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <div className="card-btn">
          <a href="#" className="btn btn-primary">
            {btnLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
