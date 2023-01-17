import React from 'react'
import { Outlet } from 'react-router-dom'
import Register from '../view/Register'

function Auth() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Auth