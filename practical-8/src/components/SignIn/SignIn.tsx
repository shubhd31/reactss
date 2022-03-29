import React from "react";
import "./SignIn.css";
import { Field, Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router";
import { userAction } from "../interface/Interface";
import { SignInSchema } from "../validation/validationSchema";
import { login } from "../../reducers/loginSlice";

function SignIn(): JSX.Element {
  const data: userAction = JSON.parse(localStorage.getItem("login") || "{}");
  const { action } = useSelector((state: RootStateOrAny) => state.login);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (): void => {
    dispatch(login(true));
  };

  return (
    <>
      {!action && (
        <section className="container mt-5 ">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card shadow-lg p-4 border col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={SignInSchema}
                  onSubmit={(values: { email: string; password: string }) => {
                    if (
                      values.email === data.email &&
                      values.password === data.password
                    ) {
                      navigate("/user");
                    } else {
                      alert("Please Enter Valid Email and Password");
                    }
                  }}
                >
                  {({ handleSubmit, errors, touched }) => {
                    return (
                      <Form onSubmit={handleSubmit}>
                        <h3
                          className="mb-3 text-center"
                          style={{ color: "blue" }}
                        >
                          LogIn
                        </h3>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                          <Field
                            type="email"
                            name="email"
                            id="form3Example3"
                            className="form-control form-control"
                            placeholder="Enter a valid email address"
                          />
                          {errors.email && touched.email ? (
                            <p className="error_message">{errors.email}</p>
                          ) : null}
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                          <Field
                            type="password"
                            name="password"
                            id="form3Example4"
                            className="form-control form-control"
                            placeholder="Enter password"
                          />
                          {errors.password && touched.password ? (
                            <p className="error_message">{errors.password}</p>
                          ) : null}
                        </div>
                        <div className="text-center text-lg-start mb-2 pt-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn"
                            style={{
                              paddingLeft: "1.5rem",
                              paddingRight: "1.5rem",
                            }}
                            onClick={() => loginHandler()}
                          >
                            Login
                          </button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <a
                              className="link-danger"
                              onClick={() => navigate("/SignUp")}
                            >
                              Register
                            </a>
                          </p>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SignIn;
