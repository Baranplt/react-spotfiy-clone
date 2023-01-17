import React from 'react'

function Banner() {
    return (
        <div className="fixed bg-gradient-to-r from-[#af2896] to-[#509bf5] z-20 bottom-0  w-full py-3 text-white flex justify-between px-5 ">
            <div>
                <div className="text text-xs leading-5 tracking-widest uppercase">
                    Spotify Önizlemesi
                </div>
                <div className="desc  leading-6  ">
                    Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar için kaydol. Kredi kartına gerek yok.
                </div>
            </div>
            <div className="btn">
                <button className='bg-white py-3 px-7 text-black font-bold rounded-full'> Ücretsiz Kaydol</button>

            </div>
        </div>
    )
}

export default Banner