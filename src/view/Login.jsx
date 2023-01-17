import { Formik } from 'formik'
import *as Yup from 'yup'

import React from 'react'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className='flex flex-col justify-center items-center  '>
            <NavLink to={'/'}>
                <div className=" w-[450px] logo h-14 mt-8 my-4 flex flex-col items-center">
                    <img className='max-w-full max-h-full w-max h-max' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />

                </div>
            </NavLink>

            <div className="pops h-1 w-full border-b">

            </div>
            <div className="w-[450px]  flex flex-col items-center text-center">

                <div className="title text-sm leading-9 font-extrabold mt-5 mb-2">
                    Devam etmek için Spotify'da oturum aç.
                </div>

                <div className="btn w-full">
                    <button className='bg-[#1877f2] w-full py-3  hover:scale-105 rounded-full text-white font-bold flex items-center justify-center'>< BsFacebook className='mr-3 ' size={20} />   Facebook İle Kaydol</button>
                </div>
                <div className="btn w-full my-2">
                    <button className=' border-2 bg-black text-white border-black w-full py-3 opacity-90 hover:opacity-100 hover:scale-105 rounded-full  font-bold flex items-center justify-center'><BsApple className='mr-3 uppercase ' size={20} />   Apple ile devam et</button>
                </div>
                <div className="btn w-full">
                    <button className=' border-2 border-black  w-full py-3 opacity-90 hover:opacity-100 hover:scale-105 rounded-full  font-bold flex items-center justify-center'><FcGoogle className='mr-3 ' size={20} />   Google İle Kaydol</button>
                </div>
                <div className="or mt-2 mb-6 flex items-center w-full">
                    <div className="badge bg-slate-300 w-full h-[1px]">

                    </div>
                    <span className='mx-5'>Veya</span>
                    <div className="badge bg-slate-300 w-full h-[1px]">

                    </div>
                </div>

                <div className="mail w-full">

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',

                        }}

                        validationSchema={
                            Yup.object({
                                email: Yup.string().required('Please enter your e-mail address'),
                                password: Yup.string().required('Please enter your password'),

                            })
                        }
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            console.log(values)
                            setTimeout(() => {
                                setSubmitting(false)
                                resetForm()
                            }, 2000);
                        }}

                    >
                        {
                            ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                <form onSubmit={handleSubmit} className='flex flex-col text-start' >

                                    <div className="email  flex flex-col ">
                                        <label htmlFor="email" className='text-sm font-bold mb-3'>E-posta adresi veya kullanıcı adı</label>
                                        <input type="email"
                                            id='email'
                                            placeholder='E-posta adresi veya kullanıcı adı'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.email}
                                            autoComplete="off"
                                        />
                                        {errors.email && touched.email && (
                                            <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                        )}
                                    </div>


                                    <div className="password flex flex-col">
                                        <label htmlFor="password" className='text-sm font-bold mb-3'>Parola</label>
                                        <input type="password"
                                            id='password'
                                            placeholder='Parola'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.password}
                                            autoComplete="off"
                                        />
                                        {errors.password && touched.password && (
                                            <div className=' text-red-700 text-sm italic'>{errors.password}</div>
                                        )}
                                    </div>

                                    <div>
                                        <button className='text-green-900 border-b border-b-green-900 leading-[1] m-0  p-0 ml-1'>Parolanızımı unuttunuz</button>

                                    </div>
                                    <div className="btn flex items-center justify-between my-10  pb-5  border-b-2 ">
                                        <div className="remember mr-5">

                                            <input type="checkbox" id='remember' className='mr-3' />
                                            <label htmlFor="remember" >Beni hatırla</label>
                                        </div>
                                        <button className='bg-[#1ed760] py-4 px-14 rounded-full font-bold' type='submit'>Oturum Aç</button>

                                    </div>
                                    <div className="text text-lg leading-6 font-extrabold text-center">
                                        Hesabın Yok mu ?
                                    </div>
                                    <div className="btn w-full mb-10">
                                        <NavLink to={'/register'}>
                                            <button className=' border-2  mt-5 w-full py-3 opacity-90 hover:opacity-100 hover:scale-105 rounded-full  font-bold flex items-center justify-center'> Spotify için Kaydol</button>

                                        </NavLink>
                                    </div>
                                </form>
                            )
                        }


                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default Login