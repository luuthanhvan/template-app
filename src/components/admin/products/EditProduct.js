import React from "react";
import ProductForm from './ProductForm';

const fakeProductData = {
  productName: "test 1",
  category: "sen",
  price: '100.000đ',
  status: 'true',
  description: 'testtt',
};

const EditProduct = () => {
  
  const handleSubmit = (data) => {
    console.log("data:", data);
  }

  return (
    <>
      <ProductForm 
        title="Sửa sản phẩm"
        productData={fakeProductData}
        onSubmit={handleSubmit}
        isEditForm
      />
    </>
  );
};

export default EditProduct;
