import React from "react";
import ProductForm from './ProductForm';

const AddProduct = () => {
  
  const handleSubmit = (data) => {
    console.log("data:", data);
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
