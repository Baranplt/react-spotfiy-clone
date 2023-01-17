import React from 'react'
import { useParams } from 'react-router-dom'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BsSuitHeart, BsThreeDots } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
function Song() {
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
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
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
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 2,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 3,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 4,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 5,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                },
                {
                    count: 6,
                    img: 'https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74',
                    name: 'Quand vous souriez',
                    desc: 'Libor Kolman',
                    album: 'Quand vous souriez',
                    date: '1 hafta önce',
                    time: '1:58'
                },
                {
                    count: 7,
                    img: 'https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812',
                    name: 'Saying Things',
                    desc: 'Emanuel Fremont',
                    album: 'Saying Things',
                    date: '1 hafta önce',
                    time: '2:58'
                },
                {
                    count: 8,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 9,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 10,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
                ,
                {
                    count: 12,
                    img: 'https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4',
                    name: 'Tjärnheden',
                    desc: 'Farsjön',
                    album: 'Fjäderlätt',
                    date: '1 hafta önce',
                    time: '1:28'
                },
                {
                    count: 13,
                    img: 'https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d',
                    name: 'Lyrides',
                    desc: 'Jozef De Schutter',
                    album: 'Lyrides',
                    date: '1 hafta önce',
                    time: '2:28'
                },
                {
                    count: 14,
                    img: 'https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8',
                    name: 'Oaks Bluffs',
                    desc: 'Elinaura',
                    album: 'Heart Open & Oak Bluffs',
                    date: '1 hafta önce',
                    time: '3:28'
                }
            ]

        },
    ]
    const { id } = useParams()
    const found = data.find(element => element.id == id)
    console.log(found)

    return (
        <div className=' '>
            <div className={`song-header bg-gradient-to-b  ${found.bg}  py-6 px-6 flex items-end`}>
                <div className="img h-60 mr-4">
                    <img className='max-w-full max-h-full w-max h-max' src={found.img} alt="" />

                </div>
                <div className="info text-white">
                    <div className="min-title text-xs font-bold leading-5">
                        ÇALMA LİSTESİ
                    </div>
                    <div className="title text-8xl font-black mt-3">
                        {found.name}
                    </div>
                    <div className="desc leading-7 opacity-70 mt-5">{found.desc}</div>
                    <div className="info flex items-center mt-2">
                        <button className='text-sm leading-5 font-black px-1'>
                            Spotify
                        </button>
                        <div className='w-1 h-1 bg-white rounded-full mx-1'></div>
                        <span className="watc text-sm leading-5 px-1">
                            {found.like} beğenme
                        </span>
                        <div className='w-1 h-1 bg-white rounded-full mx-1'></div>

                        <span className="watc text-sm leading-5 ">
                            {found.count} şarkı
                        </span>
                    </div>
                </div>
            </div>
            <div className="song-body text-white py-5 pb-20 px-6">
                <div className="song-icon flex items-center">
                    <span className='text-green-500'>
                        <AiFillPlayCircle size={60} />

                    </span>
                    <span className='opacity-70 hover:opacity-100 cursor-pointer ml-5'>
                        <BsSuitHeart size={30} />

                    </span>
                    <span className='opacity-70 hover:opacity-100 cursor-pointer ml-5'>
                        < BsThreeDots size={20} />

                    </span>
                </div>
                <div className="song-table  mt-5">
                    <div className="table-header px-8 flex text-xs border-b border-b-neutral-500 pb-2 tracking-wider opacity-60 items-center">
                        <div className="# mr-3" >
                            #
                        </div>
                        <div className="head uppercase w-5/12">
                            Başlık
                        </div>
                        <div className="album uppercase w-3/12">
                            Albüm
                        </div>
                        <div className="date uppercase w-4/12">
                            tarih eklendi
                        </div>
                        <div className="time uppercase">
                            <MdOutlineWatchLater size={20} />
                        </div>
                    </div>
                    <div className="table-body">
                        {found.songs.map((item, index) => {
                            return (
                                <div className='flex  px-8 hover:bg-[#ffffff1a] cursor-pointer group rounded my-2 py-2 items-center'>
                                    <div className="# mr-3">
                                        {item.count}
                                    </div>
                                    <div className="head  w-5/12 flex items-center">
                                        <div className="img h-10">
                                            <img className='max-w-full max-h-full w-max h-max' src={item.img} alt="" />

                                        </div>
                                        <div className='ml-3'>
                                            <button className="name border-b border-b-transparent hover:border-b-white p-0 m-0 font-semibold leading-[1]">
                                                {item.name}
                                            </button>
                                            <div className="desc text-sm opacity-60">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="album text-sm w-3/12  opacity-80 group-hover:opacity-100 transition-all">
                                        {
                                            item.album
                                        }
                                    </div>
                                    <div className="date flex items-center justify-between text-sm w-4/12 opacity-80">
                                        {
                                            item.date
                                        }
                                        <span className='mr-10 opacity-0 group-hover:opacity-100 transition-all'>
                                            <BsSuitHeart size={18} />

                                        </span>
                                    </div>
                                    <div className="time text-sm opacity-60">
                                        {
                                            item.time
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Song