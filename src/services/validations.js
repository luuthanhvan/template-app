import * as Yup from "yup";

export const productValidationSchema = Yup.object({
  productName: Yup.string().required(
    "* Trường tên cây bắt buộc không để trống."
  ),
  category: Yup.string().required(
    "* Trường tên loại cây bắt buộc không để trống."
  ),
  price: Yup.string().required("* Trường giá bắt buộc không để trống."),
  status: Yup.string().required(
    "* Trường trạng thái bắt buộc không để trống."
  ),
});