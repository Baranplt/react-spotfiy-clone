import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

function HomeItem({ item }) {
    return (
        <div className="item bg-[#181818] rounded-lg group relative cursor-pointer hover:bg-[#282828] transition-all duration-500 p-4">
            <div className="img h-[178px] rounded-lg">
                <img className='max-w-full max-h-full h-max w-max rounded-lg' src={item.img} alt="" />
            </div>
            <div className="title py-2">
                <h1 className='font-bold leading-6'>{item.name}</h1>
            </div>
            <div className="desc text-sm opacity-60 bound">
                {item.desc}
            </div>
            <span className='text-green-500 absolute right-5 top-28  opacity-0 group-hover:opacity-100 translate-y-5   group-hover:translate-y-0 transition-all duration-500 '>
                <AiFillPlayCircle size={50} />

            </span>
        </div>
    )
}

export default HomeItem