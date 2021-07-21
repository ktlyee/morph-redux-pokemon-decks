import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Formik, Field, Form } from "formik";
import { Button } from "../components";
// import "./register.css";

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
    <div className='min-h-screen bg-white-smoke flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img 
          className='mx-auto w-60'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'
          alt='pokemon-logo'
        />
        <h2 className='mt-6 text-center text-xl font-extrabold text-blue-darkest'>
          Register
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-yellow border-2 border-blue-darkest py-5 px-4 shadow rounded-xl sm:px-5'>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            {(formProps) => (
              <Form className='space-y-3'>
                <div className="bg-white-smoke rounded-full w-44 h-44 flex justify-center inset-y-0 hover:border-transparent hover:shadow-lg border-4 border-dashed border-gray-400">
                  <label
                    htmlFor="avatar"
                    className="hover:text-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue"
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
                  <div>
                    <label
                      htmlFor='userName'
                      className='block text-sm font-medium text-blue-darkest text-left'
                    >
                      Username
                    </label>
                    <Field
                      id='userName'
                      type='text'
                      name='userName'
                      placeholder='Username'
                      className='mt-1 appearance-none block w-full px-4 py-2 border border-transparent rounded-lg shadow-sm focus:outline-none sm:text-sm'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-blue-darkest text-left'
                    >
                      Email Address
                    </label>
                    <Field
                      id='email'
                      type='email'
                      name='email'
                      placeholder='you@example.com'
                      className='mt-1 appearance-none block w-full px-4 py-2 border border-transparent rounded-lg shadow-sm focus:outline-none sm:text-sm'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-blue-darkest text-left'
                    >
                      Password
                    </label>
                    <Field
                      id='password'
                      type='password'
                      name='password'
                      placeholder='password'
                      className='mt-1 appearance-none block w-full px-4 py-2 border border-transparent rounded-lg shadow-sm focus:outline-none sm:text-sm'
                    />
                  </div>
                  <div>
                    <Button 
                      type='submit'
                      text={{ text: 'Sign in', color: 'text-yellow-light' }}
                      buttonColor='bg-blue'
                      borderColor='border-2 border-blue-dark rounded-lg'
                      hoverButton='hover:bg-blue-dark'
                      size='full'
                      positionStyle='mt-5'
                    />
                  </div>
                </Form>
            )}
          </Formik>    
        </div>
      </div> 
    </div>
  );
};
export default Register;
