import React from 'react'
import NavbarBottomLeft from './navbarComponent/NavbarBottomLeft'
import NavbarBottomMiddle from './navbarComponent/NavbarBottomMiddle'
import NavbarBottomRight from './navbarComponent/NavbarBottomRight'

export default function NavbarBottom() {
    return (
        <>
            <div className="navbar navbar-default">
                <div className="container" style={{padding: "10px 0 10px 0"}}>

                    {/* Left */}
                    <NavbarBottomLeft />

                    {/* Middle */}
                    <NavbarBottomMiddle />

                    {/* Right */}
                    <NavbarBottomRight />
                
                </div>
            </div>
        </>
    )
}
