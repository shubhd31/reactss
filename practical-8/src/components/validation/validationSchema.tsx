import * as Yup from "yup";
import "yup-phone";

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Name is Required"),
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  number: Yup.string().phone("IN"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
  image: Yup.mixed()
    .nullable()
    .required("Profile Picture is Required")
    .test("fileSize", "Image Size to much big", (value) => {
      return !value || (value !== null && value.size <= 2000000);
    })
    .test("fileType", "Image should be jpg or png only", (value) => {
      return (
        !value ||
        (value !== null && ["image/jpg", "image/png"].includes(value.type))
      );
    }),
});

export const SignInSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
});
