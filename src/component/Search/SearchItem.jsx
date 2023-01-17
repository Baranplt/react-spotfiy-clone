import React, { useEffect, useState } from 'react'

function SearchItem({ item }) {

    return (
        <div style={{ backgroundColor: `${item.bg}` }} className={`relative overflow-hidden hover:scale-105 cursor-pointer transition-all  w-48 h-48 rounded-lg p-4`}>
            <div className="text text-white text-2xl leading-10 font-bold">
                {item.text}
            </div>
            <div className="img transform h-24 absolute bottom-0 right-0">

                <img className='w-max h-max max-w-full max-h-full ' src={`${item.img}`} alt="" />
            </div>
        </div>
    )
}

export default SearchItem