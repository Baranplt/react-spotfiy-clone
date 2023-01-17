import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import HomeItem from '../component/Home/HomeItem'

function Home() {
    const data = [
        {
            id: 1,
            img: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
            name: 'Peaceful Piano',
            desc: 'Relax and indulge with beautiful piano pieces',
            like: '6.831.671',
            count: '299 ',
            bg: 'from-slate-400 to-gray-700 ',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                }
            ]

        },
        {
            id: 2,
            img: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5',
            name: 'Deep Focus',
            desc: 'Keep calm and focus with ambient and post-rock music.',
            like: '3.790.051',
            count: '205 ',
            bg: 'from-neutral-700 to-neutral-900',

            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851671195ac699b5a8c8ee45c33',
                    name: 'So Far So Good',
                    desc: 'Sun Of They',
                    album: 'Silent Hills',
                    date: '3 gün önce',
                    time: '3:58'
                }
            ]

        },
        {
            id: 3,
            img: 'https://i.scdn.co/image/ab67706f000000025d87659dcadef82dd0e73f56',
            name: 'Instrumental Study',
            desc: 'Focus with soft study music in the background.',
            like: '1.690.560',
            count: '304 ',
            bg: 'from-yellow-300 to-yellow-700',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851ea00badac2d1d6af988f1d88',
                    name: 'Ein kurzer Augenblick',
                    desc: 'Norman Dück',
                    album: 'Ein kurzer Augenblick',
                    date: '1 hafta önce',
                    time: '2:20'
                }
            ]

        },
        {
            id: 4,
            img: 'https://i.scdn.co/image/ab67706f000000025b0a7b8408322a3b9ed15e1e',
            name: 'chill lofi study beats',
            desc: 'The perfect study beats. Find your focus, crush your productivity. .',
            like: '1.093.215 ',
            count: '500 ',
            bg: 'from-blue-300 to-red-700 ',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d0000485125df0d73ce788f1b05a4f0ca',
                    name: 'Time Moves Slower (With You)',
                    desc: 'Tigerpalm*Bay',
                    album: 'Time Moves Slower (With You)',
                    date: '4 gün önce',
                    time: '2:20'
                }
            ]

        },
        {
            id: 5,
            img: 'https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b',
            name: 'Jazz Vibes',
            desc: 'The original chill instrumental beats playlist.',
            like: '2.110.284 ',
            count: '300 ',
            bg: 'from-blue-300 to-slate-700 ',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851d366e7643a407122e734a28f',
                    name: 'Downtown Bustle',
                    desc: 'RejSende',
                    album: 'Downtown Bustle',
                    date: '4 gün önce',
                    time: '2:00'
                }
            ]

        },
        {
            id: 6,
            img: 'https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696',
            name: 'Coding Mode  ',
            desc: 'Dedicated to all the programmers out there.',
            like: '308.715 ',
            count: '115 ',
            bg: 'from-green-500 to-stone-900',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851f8fceb4384db0f5ede7e40a3',
                    name: 'Candles',
                    desc: 'Jon Hopkins',
                    album: 'Downtown Bustle',
                    date: '1 hafta önce',
                    time: '2:40'
                }
            ]

        },
        {
            id: 7,
            img: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
            name: 'Focus Flow  ',
            desc: 'Uptempo instrumental hip hop beats.',
            like: '349.127 ',
            count: '380 ',
            bg: 'from-red-400 to-red-900',
            songs: [
                {
                    count: 1,
                    img: 'https://i.scdn.co/image/ab67616d00004851e5bc7fca2a233298f738fcce',
                    name: 'Low Jump',
                    desc: 'Gidde',
                    album: 'Low Jump',
                    date: '4 gün  önce',
                    time: '1:36'
                }
            ]

        },
    ]
    return (
        <div className='text-white px-8'>

            <div className="odaklan">
                <div className="item-Header flex justify-between  py-6">
                    <button className="title text-2xl leading-[1] font-bold border-b border-b-transparent hover:border-b-white ">
                        Odaklan
                    </button>
                    <button className='text-xs leading-[1]   font-bold tracking-widest opacity-60 uppercase border-b border-b-transparent hover:border-b-white'>Tümünü Göster</button>
                </div>

                <div className="body grid grid-cols-7 gap-5 ">
                    {
                        data.map((item, index) => {
                            return (
                                <NavLink key={index} to={`/song/${item.id}`}  >

                                    <HomeItem item={item} />
                                </NavLink>

                            )
                        })
                    }
                </div>

            </div>

            <div className="playlist">
                <div className="item-Header flex justify-between  py-6">
                    <button className="title text-2xl leading-[1] font-bold border-b border-b-transparent hover:border-b-white ">
                        Spotify Playlist
                    </button>
                    <button className='text-xs leading-[1]   font-bold tracking-widest opacity-60 uppercase border-b border-b-transparent hover:border-b-white'>Tümünü Göster</button>
                </div>

                <div className="body grid grid-cols-7 gap-5 ">
                    {
                        data.map((item, index) => {
                            return (
                                <NavLink key={index} to={`/song/${item.id}`}  >

                                    <HomeItem item={item} />
                                </NavLink>

                            )
                        })
                    }
                </div>

            </div>
            <div className="Sleep">
                <div className="item-Header flex justify-between  py-6">
                    <button className="title text-2xl leading-[1] font-bold border-b border-b-transparent hover:border-b-white ">
                        Uyku
                    </button>
                    <button className='text-xs leading-[1]   font-bold tracking-widest opacity-60 uppercase border-b border-b-transparent hover:border-b-white'>Tümünü Göster</button>
                </div>

                <div className="body grid grid-cols-7 gap-5 ">
                    {
                        data.map((item, index) => {
                            return (
                                <NavLink key={index} to={`/song/${item.id}`}  >

                                    <HomeItem item={item} />
                                </NavLink>

                            )
                        })
                    }
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home