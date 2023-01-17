import { Formik } from 'formik'
import *as Yup from 'yup'

import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

function Register() {
    return (
        <div className='flex flex-col justify-center items-center  '>
            <div className="w-[450px]  flex flex-col items-center text-center">
                <NavLink to={'/'}>

                    <div className="logo h-10 my-8">
                        <img className='max-w-full max-h-full w-max h-max' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
                    </div>
                </NavLink>
                <div className="title text-2xl leading-9 font-extrabold my-5">
                    Dinlemeye başlamak için ücretsiz kaydol.
                </div>

                <div className="btn w-full">
                    <button className='bg-[#384F81] w-full py-3 opacity-90 hover:opacity-100 hover:scale-105 rounded-full text-white font-bold flex items-center justify-center'>< BsFacebook className='mr-3 ' size={20} />   Facebook İle Kaydol</button>
                </div>
                <div className="btn w-full">
                    <button className=' border-2 border-black mt-5 w-full py-3 opacity-90 hover:opacity-100 hover:scale-105 rounded-full  font-bold flex items-center justify-center'><FcGoogle className='mr-3 ' size={20} />   Google İle Kaydol</button>
                </div>
                <div className="or mt-10 mb-6 flex items-center w-full">
                    <div className="badge bg-slate-300 w-full h-[1px]">

                    </div>
                    <span className='mx-5'>Veya</span>
                    <div className="badge bg-slate-300 w-full h-[1px]">

                    </div>
                </div>

                <div className="mail w-full">
                    <div className="title font-bold mb-5">E-posta adresinle kaydol</div>

                    <Formik
                        initialValues={{
                            email: '',
                            reTypeEmail: '',
                            password: '',
                            nickName: '',
                            day: '',
                            mount: '',
                            years: '',
                        }}

                        validationSchema={
                            Yup.object({
                                email: Yup.string().required('Please enter your e-mail address'),
                                password: Yup.string().required('Please enter your password'),
                                reTypeEmail: Yup.string().required('Please enter your e-mail address'),
                                nickName: Yup.string().required('Please enter your nickName'),
                                day: Yup.string().required('Please enter your birthday'),
                                mount: Yup.string().required('Please enter your month of birth'),
                                years: Yup.string().required('Please enter your Years of birth'),

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
                                        <label htmlFor="email" className='text-sm font-bold mb-3'>E-posta adresin nedir?</label>
                                        <input type="email"
                                            id='email'
                                            placeholder='E-posta Hesabını gir ..'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.email}
                                            autoComplete="off"
                                        />
                                        {errors.email && touched.email && (
                                            <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                        )}
                                    </div>
                                    <div className="reTypeEmail flex flex-col">
                                        <label htmlFor="reTypeEmail" className='text-sm font-bold mb-3'>E-posta adresini onayla</label>
                                        <input type="email"
                                            id='reTypeEmail'
                                            placeholder='E-posta Hesabını  yeniden gir ..'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.reTypeEmail}
                                            autoComplete="off"
                                        />
                                        {errors.reTypeEmail && touched.reTypeEmail && (
                                            <div className=' text-red-700 text-sm italic'>{errors.reTypeEmail}</div>
                                        )}
                                    </div>

                                    <div className="password flex flex-col">
                                        <label htmlFor="password" className='text-sm font-bold mb-3'>Parola oluştur</label>
                                        <input type="password"
                                            id='password'
                                            placeholder='Parola oluştur'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.password}
                                            autoComplete="off"
                                        />
                                        {errors.password && touched.password && (
                                            <div className=' text-red-700 text-sm italic'>{errors.password}</div>
                                        )}
                                    </div>

                                    <div className="nick flex flex-col">
                                        <label htmlFor="nickName" className='text-sm font-bold mb-3'>Sana hangi isimle hitap etmeliyiz?</label>
                                        <input type="text"
                                            id='nickName'
                                            placeholder='Profil Adı Gir.'
                                            className='py-2 px-4 outline-none border border-black rounded mb-3'
                                            onChange={handleChange}
                                            value={values.nickName}
                                            autoComplete="off"
                                        />
                                        {errors.nickName && touched.nickName && (
                                            <div className=' text-red-700 text-sm italic'>{errors.nickName}</div>
                                        )}
                                    </div>

                                    <div className="britday">
                                        <div className='title text-sm font-bold my-4'>
                                            Doğum Tarihin Nedir
                                        </div>

                                        <div className="body flex space-x-5">
                                            <div className="day flex flex-col w-2/12">

                                                <label htmlFor="day" className='text-sm font-bold my-1'>Gün</label>
                                                <input type="text"
                                                    id='day'
                                                    placeholder='GG.'
                                                    className='py-2 px-4 outline-none border border-black rounded'
                                                    onChange={handleChange}
                                                    value={values.day}
                                                    autoComplete="off"
                                                />

                                            </div>
                                            <div className="mount flex flex-col w-6/12">

                                                <label htmlFor="mount" className='text-sm font-bold my-1'>Ay</label>

                                                <select id='mount' value={values.mount} onChange={handleChange}
                                                    htmlFor='mount' className=' py-[11px] px-2 outline-none border border-black rounded'>
                                                    <option value="Ocak">Ocak</option>
                                                    <option value="Şubat">Şubat</option>
                                                    <option value="Mart">Mart</option>
                                                    <option value="Nisan">Nisan</option>
                                                    <option value="Mayıs">Mayıs</option>
                                                    <option value="Haziran">Haziran</option>
                                                    <option value="Temmuz">Temmuz</option>
                                                    <option value="Ağustos">Ağustos</option>
                                                    <option value="Eylül">Eylül</option>
                                                    <option value="Ekim">Ekim</option>
                                                    <option value="Kasım">Kasım</option>
                                                    <option value="Aralık">Aralık</option>
                                                </select>

                                            </div>
                                            <div className="Years flex flex-col w-4/12">

                                                <label htmlFor="years" className='text-sm font-bold my-1'>Yıl</label>
                                                <input type="text"
                                                    id='years'
                                                    placeholder='YYYY'
                                                    className='py-2 px-4 outline-none border border-black rounded'
                                                    onChange={handleChange}
                                                    value={values.years}
                                                    autoComplete="off"
                                                />
                                            </div>



                                        </div>
                                    </div>
                                    {errors.day && touched.day && (
                                        <div className=' text-red-700 text-sm italic mt-5'>{errors.day}</div>
                                    )}
                                    {errors.mount && touched.mount && (
                                        <div className=' text-red-700 text-sm italic'>{errors.mount}</div>
                                    )}
                                    {errors.years && touched.years && (
                                        <div className=' text-red-700 text-sm italic'>{errors.years}</div>
                                    )}

                                    <div className="gender flex my-5">
                                        <div className="male mr-5">

                                            <input type="checkbox" id='male' className='mr-3' />
                                            <label htmlFor="male" >Male</label>
                                        </div>
                                        <div className="female mr-5">

                                            <input type="checkbox" id='female' className='mr-3' />
                                            <label htmlFor="female" >Female</label>
                                        </div>
                                        <div className="other">

                                            <input type="checkbox" id='other' className='mr-3' />
                                            <label htmlFor="other" >Other</label>
                                        </div>
                                    </div>
                                    <div className="message my-5">

                                        <input type="checkbox" id='message' className='mr-3' />
                                        <label htmlFor="message" className='text-sm'>Spotify'dan yenilik ve teklif bilgilendirmeleri almak istiyorum</label>
                                    </div>
                                    <div className="message flex">

                                        <div>
                                            <input type="checkbox" id='message' className='mr-3' />

                                        </div>
                                        <span>
                                            <label htmlFor="message" className='text-sm'>Kayıt verilerimi pazarlama amaçlarıyla Spotify'ın içerik sağlayıcılarıyla paylaşın. Verilerinin gizlilik politikamızda belirtildiği gibi AEA dışındaki bir ülkeye aktarılabileceğini unutma.</label>

                                        </span>
                                    </div>
                                    <div className="condition">
                                        <div className='text-xs my-5 '>Kaydol seçeneğine tıklayarak Spotify'ın <span className='text-green-900 border-b border-b-green-900'>Kullanım Hüküm  Koşulları'nı</span> kabul etmiş olursun.</div>
                                        <div className='text-xs '>Spotify'ın kişisel verilerini nasıl topladığı, kullandığı, paylaştığı ve koruduğu hakkında daha fazla bilgi edinmek için lütfen<span className='text-green-900  border-b border-b-green-900'> Spotify Gizlilik Politikası'nı </span> oku.</div>


                                    </div>
                                    <div className="btn flex justify-center my-10">
                                        <button className='bg-[#1ed760] py-4 px-14 rounded-full font-bold' type='submit'>Kaydol</button>

                                    </div>

                                    <div className=' flex justify-center mb-5'>Hesabın var mı? <button className='text-green-900 border-b border-b-green-900 leading-[1] m-0  p-0 ml-1'>Oturum Aç</button> </div>
                                </form>
                            )
                        }


                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default Register