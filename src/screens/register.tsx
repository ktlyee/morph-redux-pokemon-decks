import React from "react";
import { Button, InputWithChild } from "../components";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./register.css";

interface MyFormValues {
  userName: string;
  email: string;
  password: string;
  avatar: any;
}

const initialValues: MyFormValues = {
  userName: "",
  email: "",
  password: "",
  avatar: {},
};

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-white-smoke flex-col min-h-screen">
      <h2 className="text-center text-blue-darkest text-4xl p-5">Register</h2>
      <div className="card-container md:flex p-8 md:p-0">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {(formProps) => (
            <Form className="p-8">
              <div className="bg-white-smoke rounded-full w-44 h-44 justify-center">
                <label
                  htmlFor="avatar"
                  className="relative top-20 cursor-pointe bg-white-smoke rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    className="justify-center sr-only"
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={(e) =>
                      formProps.setFieldValue("avatar", e.target.files)
                    }
                  />
                </label>
              </div>
              <div className="text-justify">
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
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
