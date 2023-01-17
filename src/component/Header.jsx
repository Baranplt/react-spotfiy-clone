import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <div className="icon flex  ml-9 ">
                <span >
                    <MdKeyboardArrowLeft size={30} />
                </span>
                <span>
                    <MdKeyboardArrowRight size={30} />
                </span>
            </div>

            <div className="Header-nav text-white flex items-center">
                <div className="header-nav  ">
                    <button  > Premium</button>
                    <button> Destek</button>
                    <button> İndir</button>
                </div>
                <div className="user mr-7">
                    <NavLink to={'register'} > <button className='userbtn'>Kaydol </button></NavLink>
                    <NavLink to={'login'} >  <button className='bg-white py-3 px-8 text-black font-bold rounded-full'>Oturum aç</button></NavLink>

                </div>
            </div>
        </div>
    )
}

export default Header