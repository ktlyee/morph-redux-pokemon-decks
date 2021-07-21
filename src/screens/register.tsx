import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./register.css";
// import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { Link } from 'react-router-dom'

interface MyFormValues {
  username: string;
  email: string;
  password: string;
  avatar: any;
}

const initialValues: MyFormValues = {
  username: "",
  email: "",
  password: "",
  avatar: {},
};

const Register = (props: any) => {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center bg-white-smoke flex-col min-h-screen">
      <h2 className="text-center text-blue-darkest text-4xl p-5">Register</h2>
      <div className="card-container md:flex p-8 md:p-0">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            // handleRegister(values)
            dispatch(register(values))
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {(formProps) => (
            <Form className="px-8 py-12">
              <div className="avatar-img inset-y-0 hover:border-transparent hover:shadow-lg border-4 border-dashed border-gray-400">
                <label
                  htmlFor="avatar"
                  className="label-upload hover:text-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue"
                >
                  <img id="previewImg" src="" className="w-full h-full rounded-full" style={{display: 'none'}}/>
                  {/* preview size issue */}
                  <PlusIcon id="previewIcon" className="h-10 w-10" />
                  <input
                    className="justify-center sr-only"
                    type="file"
                    id="avatar"
                    accept="image/*"
                    name="avatar"
                    onChange={(e) =>{
                      let previewImg = document.querySelector('#previewImg') as HTMLImageElement;
                      let previewIcon = document.querySelector('#previewIcon') as HTMLElement;
                      const [file]: any = e.target.files;
                      if (file && previewImg){
                        previewImg.src = URL.createObjectURL(file)
                        previewImg.style.display = ''
                        previewIcon.style.display = 'none'
                      }
                      formProps.setFieldValue("avatar", URL.createObjectURL(file))
                      }
                    }
                  />
                </label>
              </div>
              <div className="text-justify space-y-2">
                <label htmlFor="userName" className="label-form">
                  Username
                </label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="input"
                />
                <label htmlFor="email" className="label-form">
                  E-mail
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                />
                <label htmlFor="password" className="label-form">
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
                  className="button button-full hover:bg-blue-dark hover:text-yellow mt-5"
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
