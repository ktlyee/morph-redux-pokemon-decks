import React from "react";
import { Button, InputWithChild } from "../components";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./register.css";

interface MyFormValues {
  userName: string;
  email: string;
  password: string;
}

const initialValues: MyFormValues = { userName: "", email: "", password: "" };

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-white-smoke flex-col min-h-screen">
      <h2 className="text-center text-blue-darkest text-4xl p-5">Register</h2>
      <div
        className="bg-yellow flex items-center justify-center border-4 border-blue-darkest shadow rounded-xl md:flex p-8 md:p-0"
        style={{ width: "534px", height: "699px" }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form className="p-8">
            <div>
              <label htmlFor="userName" className="text-left text-lg">
                Username
              </label>
              <Field
                id="userName"
                name="userName"
                placeholder="Username"
                className="input"
              />
              <label htmlFor="email" className="text-left text-lg">
                E-mail
              </label>
              <Field
                id="email"
                name="email"
                placeholder="E-mail"
                className="input"
              />
              <label htmlFor="password" className="text-left text-lg">
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                className="input"
              />
            </div>
            <div>
              <button
                className="button button-full hover:bg-blue-dark mt-5"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Register;
