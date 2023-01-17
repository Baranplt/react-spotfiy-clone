import React from 'react'
import { AiFillHome, AiFillHeart, AiOutlineSearch } from 'react-icons/ai'
import { GiBookshelf } from 'react-icons/gi'
import { MdAddBox } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <div className='sidebar-nav'>
            <div className="logo">
                <div className="logo h-9">
                    <img className='max-w-full max-h-full w-max h-max' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
                </div>
                <nav >
                    <ul className=' sidebar-home'>
                        <NavLink to={'/home'} className='nav'>    <li ><AiFillHome size={28} /> <span >Ana Sayfa</span></li></NavLink>
                        <NavLink to={'search'} className='nav'><li ><AiOutlineSearch size={28} /> <span >Ara</span></li></NavLink>
                        <li className='nav'><GiBookshelf size={28} /> <span >Kitaplığınız</span></li>
                    </ul>

                    <ul className='sidebar-add'>
                        <li><MdAddBox size={28} />    <span >Çalma Listesi Oluştur</span></li>
                        <li ><AiFillHeart size={28} /> <span >Beğenilen Şarkılar</span></li>


                    </ul>
                </nav>
            </div>
            <div className="info">
                <div className='flex flex-wrap'>
                    <a href="#"  >
                        <span >Yasal</span>
                    </a>
                    <a href="#" >
                        <span >Gizlilik Merkezi</span>
                    </a>
                    <a href="#" >
                        <span >Gizlilik Politikası</span>
                    </a>
                    <a href="#" >
                        <span >Tanımlama Bilgileri</span>
                    </a>
                    <a href="#">
                        <span>Reklamlar Hakkında</span>
                    </a>
                    <a href="#"><span >Çerezler</span>
                    </a></div>
            </div>
        </div>
    )
}

export default SideBar