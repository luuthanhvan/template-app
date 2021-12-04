import React, { useEffect, useState } from 'react';
import Header from "../common/Header";
import ProductList from './ProductList';
import { getProducts } from '../../../services/product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, [products]);

  return (
    <div>
      <Header
        titlePage="Sản phẩm"
        filterTitle="Chọn loại"
        filterData={["Sen", "anc"]}
        btnLabel="Thêm sản phẩm"
      />

      <ProductList 
        products={products}
      />      
    </div>
  );
};

export default Products;
