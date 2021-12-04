import axios from "axios";

const BASE_SERVER_URL = "http://localhost:5000";

export const storeProduct = async (product) => {
  const { data: res } = await axios.post(`${BASE_SERVER_URL}/product`, product);
  return res;
};

// get all products
export const getProducts = async () => {
  const { data: res } = await axios.get(`${BASE_SERVER_URL}/products`);
  return res;
};

// get one product
export const getProduct = async (productID) => {
  const { data: res } = await axios.get(`${BASE_SERVER_URL}/product/${productID}`);
  return res;
};

export const updateProduct = async (productID, newProduct) => {
  const { data: res } = await axios.put(`${BASE_SERVER_URL}/product/${productID}`, newProduct);
  return res;
};

export const deleteProduct = async (productID) => {
  const { data: res } = await axios.delete(`${BASE_SERVER_URL}/product/${productID}`);
  return res;
};
