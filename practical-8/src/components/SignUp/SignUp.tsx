import "./SignUp.css";
import * as React from "react";
import { Field, Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignUpSchema } from "../validation/validationSchema";
import { NavigateFunction, useNavigate } from "react-router";
import login from "../../reducers/logoutSlice";
import { updateVal } from "../../reducers/registerSlice";

const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="container">
      <div className="container col-md-10">
        <label className="h3 font-weight-bold text-left mt-3"> Sign Up </label>
        <div className="row">
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              password: "",
              confirm_password: "",
              image: null,
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              dispatch(
                updateVal({
                  name: values.name,
                  email: values.email,
                  number: values.number,
                  password: values.password,
                  confirm_password: values.confirm_password,
                  image: URL.createObjectURL(values.image),
                }),
                navigate("/signin")
              );
              dispatch(() => {
                login(true);
              });
            }}
          >
            {({ handleSubmit, setFieldValue, errors, touched }) => {
              return (
                <Form className="col-md-5" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="text-center">
                      <label role="button">
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="jpg,.png"
                          onChange={(event: React.FormEvent) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }}
                          hidden
                        />
                        Photo +
                        {errors.image && touched.image ? (
                          <p className="error_message">{errors.image}</p>
                        ) : null}
                      </label>
                    </div>
                    <label htmlFor="name" className="mb-0">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control inputcolor"
                      id="name"
                    />
                    {errors.name && touched.name ? (
                      <p className="error_message">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="mb-0">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control inputcolor"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                    {errors.email && touched.email ? (
                      <p className="error_message">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="examplePhoneNumber" className="mb-0">
                      PhoneNo
                    </label>
                    {errors.number && touched.number ? (
                      <p className="error_message">{errors.number}</p>
                    ) : null}
                    <Field
                      type="tel"
                      name="number"
                      className="form-control inputcolor"
                      id="number"
                    />
                    {errors.number && touched.number ? (
                      <p className="error_message">{errors.number}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="mb-0">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control inputcolor"
                      id="password"
                    />
                    {errors.password && touched.password ? (
                      <p className="error_message">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2" className="mb-0">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirm_password"
                      className="form-control inputcolor"
                      id="confirm_password"
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="error_message">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-danger ml-3">
                    Reset
                  </button>
                </Form>
              );
            }}
          </Formik>
          <img
            src="https://i.ibb.co/DVp4DTV/Microsoft-Teams-image.png"
            alt="Trial Image"
            className="col"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
