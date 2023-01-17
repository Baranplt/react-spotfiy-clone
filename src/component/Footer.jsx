import React from 'react'
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
function Footer() {
    return (
        <div className='footer pb-20  mt-32'>
            <div className="footer-head text-white flex border-b border-b-[#ffffff1a] pb-10">

                <ul className='company w-2/12'>
                    <span className='leading-6 font-bold'>Şirket</span>
                    <li ><a href="#">Hakkında</a></li>
                    <li><a href="#">Kariyer</a></li>
                    <li><a href="#">For the Record</a></li>
                </ul>
                <ul className='Communities w-2/12'>
                    <span className='leading-6 font-bold'>Topluluklar</span>
                    <li ><a href="#">Sanatçılar İçin</a></li>
                    <li><a href="#">Geliştiriciler
                    </a></li>
                    <li><a href="#">Reklam</a></li>
                    <li><a href="#">Yatırımcılar</a></li>
                    <li><a href="#">Satıcılar</a></li>
                </ul>
                <ul className='connect w-2/12'>
                    <span className='leading-6 font-bold'>Yararlı bağlantılar</span>
                    <li ><a href="#">Destek</a></li>
                    <li><a href="#">Ücretsiz Mobil Uygulama</a></li>
                </ul>
                <div className="icon w-6/12 flex justify-end">
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-500'>
                        <AiOutlineInstagram size={20} />
                    </div>
                    <div className='w-10 h-10 rounded-full mx-5 flex items-center justify-center bg-slate-800 hover:bg-slate-500'>
                        <AiOutlineFacebook size={20} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-500'>
                        <AiFillTwitterCircle size={20} />
                    </div>
                </div>
            </div>
            <div className="text text-white opacity-70  hover:opacity-100 transition-all py-10">
                © 2023 Spotify AB
            </div>
        </div>
    )
}

export default Footer