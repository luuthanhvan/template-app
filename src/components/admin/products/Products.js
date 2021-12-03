import Header from "../common/Header";
import ProductList from './ProductList';
const Products = () => {
  let productData = [
    {
      _id: "12",
      name: "cay 1",
      type: "test",
      price: "123",
      status: "con hang",
    },
    {
      _id: "322",
      name: "cay 2",
      type: "test 2",
      price: "13423",
      status: "con hang",
    },
    {
      _id: "233",
      name: "cay 3",
      type: "test 3",
      price: "14423",
      status: "het hang",
    },
  ];
  return (
    <div>
      <Header
        titlePage="Sản phẩm"
        filterTitle="Chọn loại"
        filterData={["Sen", "anc"]}
        btnLabel="Thêm sản phẩm"
      />

      <ProductList 
        products={productData}
      />      
    </div>
  );
};

export default Products;
