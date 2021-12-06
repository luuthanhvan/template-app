import CategoryCard from "./CategoryCard";

const listOfCategories = [
  {
    key: "senda",
    title: "Sen đá",
    image: "/images/sen_da_hong.jpg",
  },
  {
    key: "hoahong",
    title: "Hoa hồng",
    image: "/images/hoa_hong.jpg",
  },
  {
    key: "lan",
    title: "Lan",
    image: "/images/lan.jpg",
  },
  {
    key: "xuongrong",
    title: "Xương rồng",
    image: "/images/xuong_rong.jpg",
  },
  {
    key: "tulip",
    title: "Tulip",
    image: "/images/tulip.jpg",
  },
];

const Categories = () => {
  return (
    <div className="container">
      <h4 className="home-categories-title">Danh mục sản phẩm</h4>
      {listOfCategories.map((category) => {
        return (
          <div className="home-category-card-container">
            <CategoryCard
              key={category.key}
              title={category.title}
              imagePath={category.image}
              btnLabel="Xem danh sách sản phẩm"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
