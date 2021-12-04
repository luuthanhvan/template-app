import React from "react";
import ProductForm from './ProductForm';
import { storeProduct } from '../../../services/product';

const AddProduct = () => {

  const handleSubmit = (product) => {
    // console.log("data:", product);
    storeProduct(product).then((res) => {
      console.log(res);
    })
  }

  return (
    <>
      <ProductForm 
        title="Thêm sản phẩm"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddProduct;
