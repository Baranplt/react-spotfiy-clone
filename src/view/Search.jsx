import React from 'react'
import Footer from '../component/Footer'
import SearchItem from '../component/Search/SearchItem'


function Search() {

    const searchData = [
        {
            text: `Podcast'ler`,
            img: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bg: '#27856a'
        },
        {
            text: 'Senin İçin Hazırlandı',
            img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bg: `#1e3264`


        },
        {
            text: `Listeler`,
            img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bg: '#8d67ab'
        },
        {
            text: `Yeni Çıkanlar`,
            img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bg: '#e8115b'
        },
        {
            text: `Keşfet`,
            img: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
            bg: '#8d67ab'
        },
        {
            text: `Canlı Etkinlikler`,
            img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
            bg: '#7358ff'
        },
        {
            text: `Pop`,
            img: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
            bg: `#b49bc8`
        },
        {
            text: `Podcast'ler`,
            img: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bg: '#27856a'
        },
        {
            text: 'Senin İçin Hazırlandı',
            img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bg: `#1e3264`


        },
        {
            text: `Listeler`,
            img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bg: '#8d67ab'
        },
        {
            text: `Yeni Çıkanlar`,
            img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bg: '#e8115b'
        },
        {
            text: `Keşfet`,
            img: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
            bg: '#8d67ab'
        },
        {
            text: `Canlı Etkinlikler`,
            img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
            bg: '#7358ff'
        },
        {
            text: `Pop`,
            img: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
            bg: `#b49bc8`
        }, {
            text: `Podcast'ler`,
            img: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bg: '#27856a'
        },
        {
            text: 'Senin İçin Hazırlandı',
            img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bg: `#1e3264`


        },
        {
            text: `Listeler`,
            img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bg: '#8d67ab'
        },
        {
            text: `Yeni Çıkanlar`,
            img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bg: '#e8115b'
        },
        {
            text: `Keşfet`,
            img: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
            bg: '#8d67ab'
        },
        {
            text: `Canlı Etkinlikler`,
            img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
            bg: '#7358ff'
        },
        {
            text: `Pop`,
            img: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
            bg: `#b49bc8`
        }, {
            text: `Podcast'ler`,
            img: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bg: '#27856a'
        },
        {
            text: 'Senin İçin Hazırlandı',
            img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bg: `#1e3264`


        },
        {
            text: `Listeler`,
            img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bg: '#8d67ab'
        },
        {
            text: `Yeni Çıkanlar`,
            img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bg: '#e8115b'
        },
        {
            text: `Keşfet`,
            img: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
            bg: '#8d67ab'
        },
        {
            text: `Canlı Etkinlikler`,
            img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
            bg: '#7358ff'
        },
        {
            text: `Pop`,
            img: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
            bg: `#b49bc8`
        },


    ]
    return (
        <div className='px-8   ' >
            <div className="title text-white my-10 text-2xl font-bold ">
                Hepsine göz at
            </div>

            <div className="body grid grid-cols-7 gap-5 ">

                {
                    searchData.map((item, index) => {
                        return <SearchItem key={index} item={item} />
                    })
                }

            </div>
            <Footer />
        </div>
    )
}

export default Search