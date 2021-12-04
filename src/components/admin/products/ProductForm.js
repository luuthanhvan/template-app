import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import FormControl from "../../formik/FormikControl";
import { productValidationSchema } from "../../../services/validations";

const listOfCategories = [
  { key: "1", value: "Sương rồng" },
  { key: "2", value: "Sen đá" },
  { key: "3", value: "Hoa hồng" },
  { key: "4", value: "Hoa mai" },
  { key: "5", value: "Lan" },
];

const ProductForm = ({ title, productData, onSubmit, isEditForm }) => {
  const history = useHistory();

  const initialValues = {
    productName: productData ? productData.productName : "",
    category: productData ? productData.category : "",
    price: productData ? productData.price : "",
    status: productData ? productData.status : false,
    description: productData ? productData.description : "",
  };

  return (
    <div className="admin-form-container">
      <h5 className="admin-form-title">{title}</h5>
      <div className="admin-form-content">
        <Formik
          enableReinitialize={isEditForm ? true : false}
          initialValues={initialValues}
          validationSchema={productValidationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="row">
                  <div className="col">
                    <FormControl
                      control="input"
                      label="Tên cây"
                      name="productName"
                    />
                  </div>

                  <div className="col">
                    <FormControl
                      control="select"
                      label="Loại cây"
                      name="category"
                      options={listOfCategories}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <FormControl control="input" label="Giá" name="price" />
                  </div>

                  <div className="col">
                    <label htmlFor="image" className="form-label">
                      Hình ảnh
                    </label>
                    <input type="file" id="image" className="form-control" />
                  </div>

                  <div className="col">
                    <FormControl
                      control="checkbox"
                      label="Ẩn/Hiện"
                      name="status"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <FormControl
                      control="textarea"
                      label="Mô tả chi tiết"
                      name="description"
                    />
                  </div>
                </div>

                <div className="row admin-form-btn-row">
                  <button
                    className="col btn btn-primary"
                    type="submit"
                    disabled={
                      isEditForm
                        ? !formik.isValid
                        : !(formik.isValid && formik.dirty)
                    }
                  >
                    {isEditForm ? "Lưu" : "Thêm"}
                  </button>
                  <button
                    className="col btn btn-secondary"
                    onClick={() => {
                      history.push("/admin/products");
                    }}
                  >
                    Trở về
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ProductForm;
