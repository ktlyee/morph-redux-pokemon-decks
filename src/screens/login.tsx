import React from 'react'
import { Button } from '../components'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { Redirect } from 'react-router-dom'

interface FormValues {
    email: string
    password: string
}

function Login(props: any) {
    const initialValues: FormValues = { email: '', password: '' }

    const user = useAppSelector(state => state.auth)

    const handleLogin = (email: string, password: string) => {
        if(email === user.email && password === user.password) {
            console.log('Logged in successful')
            props.history.push('/home')
        } else {
            return alert('Email and password is not correct')
        }
    }

    if (user !== null) {
        return <Redirect to='/home' />
    }

    return (
        <div className='min-h-screen bg-white-smoke flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <img 
                    className='mx-auto w-auto h-auto'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'
                    alt='pokemon-logo'
                />
                <h2 className='mt-6 text-center text-4xl font-extrabold text-blue-darkest'>
                    Sign in to your account
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center'>
                <div className='bg-yellow border-4 border-blue-darkest py-5 px-4 shadow rounded-xl sm:px-5' style={{width: "433px", height: "449px"}}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            handleLogin(values.email, values.password)
                            // console.log({ values, actions });
                            // alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }}
                    >
                        <Form className='space-y-3 py-7 pt-9'>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-xl font-medium text-blue-darkest text-left'
                                >
                                    Email Address
                                </label>
                                <Field
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='you@example.com'
                                    className='mt-1 appearance-none block w-full px-4 py-3 border border-transparent focus:outline-none rounded-lg shadow-sm focus:ring-1 focus:ring-blue focus:border-blue sm:text-sm'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='password'
                                    className='block text-xl font-medium text-blue-darkest text-left'
                                >
                                    Password
                                </label>
                                <Field
                                    id='password'
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                    className='mt-1 appearance-none block w-full px-4 py-3 border border-transparent focus:outline-none rounded-lg shadow-sm focus:ring-1 focus:ring-blue focus:border-blue sm:text-sm'
                                />
                            </div>
                            <div>
                                <Button 
                                    type='submit'
                                    text={{ text: 'Sign in', color: 'text-yellow-light text-xl' }}
                                    buttonColor='bg-blue'
                                    borderColor='border-2 border-blue-dark rounded-lg'
                                    hoverButton='hover:bg-blue-dark'
                                    size='full'
                                    positionStyle='mt-9'
                                />
                            </div>
                        </Form>
                    </Formik>    
                    <div className='mt-6'>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 border-t border-blue-darkest" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className='px-2 bg-yellow text-blue-darkest'>Or</span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <Link
                                to='/register'
                                className='py-6 underline text-blue-darkest font-semibold hover:text-blue-dark'
                            >
                                Register here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Login