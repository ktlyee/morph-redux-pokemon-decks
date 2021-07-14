import React from 'react'
import { InputWithChild } from '../components'

function Login() {
    return (
        <div className='min-h-screen bg-gray-lightflex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <img 
                    className='mx-auto h-12 w-auto'
                    src='../images/logo.png'
                    alt='pokemon-logo'
                />
                <h2 className='mt-6 text-center text-xl font-extrabold text-blue-darkest'>
                    Sign in to your account
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' action='#' method='POST'>
                        <div>
                            <InputWithChild 
                                label={{
                                    htmlFor: 'email',
                                    style: 'block text-sm font-medium text-blue-darkest',
                                    text: 'Email address'
                                }}
                                input={{
                                    id: 'email',
                                    type: 'email',
                                    name: 'email',
                                    placeholder: 'you@example.com',
                                    style: 'appearance-none block w-full px-3 py-2 border border-transparent rounded-md shadow-sm sm:text-sm',
                                    focusStyle: 'focus:outline-none'
                                }}
                                isCheckValid={true}
                                CheckValidation={{
                                    ariaInvalid: true,
                                    defaultValue: '',
                                    ariaDescribedby: 'email-error'
                                }}
                                invalidText={{
                                    text: 'Your email is not correct',
                                    style: 'mt-2 text-sm text-red',
                                    id: 'message-error'
                                }}
                            />
                        </div>

                        <div>
                            <InputWithChild 
                                label={{
                                    htmlFor: 'password',
                                    style: 'block text-sm font-medium text-blue-darkest',
                                    text: 'Password'
                                }}
                                input={{
                                    id: 'password',
                                    type: 'password',
                                    name: 'password',
                                    placeholder: 'your password',
                                    style: 'appearance-none block w-full px-3 py-2 border border-transparent rounded-md shadow-sm sm:text-sm',
                                    focusStyle: 'focus:outline-none'
                                }}
                                isCheckValid={true}
                                CheckValidation={{
                                    ariaInvalid: true,
                                    defaultValue: '',
                                    ariaDescribedby: 'password-error'
                                }}
                                invalidText={{
                                    text: 'Your password is not correct',
                                    style: 'mt-2 text-sm text-red',
                                    id: 'message-error'
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
