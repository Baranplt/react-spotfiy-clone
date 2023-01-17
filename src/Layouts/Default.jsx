import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from "../component/Banner";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import Content from "../component/Content";
function Default() {
    return (
        <>

            <div className="flex">
                <SideBar />
                <Header />
                <Content />
                <Banner />

            </div>

        </>
    )
}

export default Default