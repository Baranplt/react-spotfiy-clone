import React from 'react'
import { Outlet } from 'react-router-dom'

function content() {
    return (
        <div className="content bg-[#1e1e1e] w-full h-full z-20 ml-[390px] mt-16">
            <Outlet />

        </div>
    )
}

export default content