import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useAppDispatch } from '../app/hooks';
import { register } from "../reducers/auth";
import "../styles/register.css";
import { Button } from "../components";
import { useAppSelector } from "../app/hooks";

interface FormValues {
  username: string;
  email: string;
  password: string;
  avatar: any;
}

const initialValues: FormValues = {
  username: "",
  email: "",
  password: "",
  avatar: {}
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Too Short for password')
    .max(20, 'Too Long for password')
    .required('Required'),
})

const Register = (props: any) => {
  const user = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const handleRegister = (values: object, email: string) => {
    if(email === user.email) {
      alert('This email has already exist')
    } else {
      dispatch(register(values))
      props.history.push("/home")
    }
  }

  return (
    <div className="flex items-center justify-center bg-white-smoke flex-col min-h-screen">
      <h2 className="text-center text-blue-darkest text-4xl font-extrabold p-5">Register</h2>
      <div className="card-container md:flex p-8 md:p-0">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            handleRegister(values, values.email)
            actions.setSubmitting(false)
          }}
        >
          {(formProps: any) => (
            <Form className="px-8 py-10 h-full">
              <div className="regis-avatar-img hover:border-transparent hover:shadow-lg border-4 border-dashed border-gray-400">
                <label
                  htmlFor="avatar"
                  className="label-upload hover:text-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue"
                >
                  <img id="previewImg" src="" className="w-full h-full rounded-full" style={{display: 'none'}}/>
                  {/* preview size issue */}
                  <PlusIcon id="previewIcon" className="h-10 w-10" />
                  <input
                    className="input-avatar justify-center sr-only"
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
              <div className="text-justify space-y-4">
                <label htmlFor="userName" className="label-form">
                  Username
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input"
                  />
                  <ErrorMessage component='div' className='text-red-dark text-xs -mt-3' name='username' />
                </label>
                <label htmlFor="email" className="label-form">
                  E-mail
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="input"
                  />
                  <ErrorMessage component='div' className='text-red-dark text-xs -mt-3' name='email' />
                </label>
                <label htmlFor="password" className="label-form">
                  Password
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input"
                  />
                  <ErrorMessage component='div' className='text-red-dark text-xs -mt-3' name='password' />
                </label>
              </div>
              <div>
                <Button
                  text={{ text: "Submit", color: "text-yellow-light text-2xl" }}
                  type="submit"
                  positionStyle="mt-6 flex justify-center w-full"
                  size="medium"
                  buttonColor="bg-blue"
                  hoverButton="hover:bg-blue-dark hover:text-yellow"
                  borderColor="border-4 border-blue-dark rounded-lg"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
