import React from 'react'
import NavbarLeft from './navbarComponent/NavbarTopLeft'
import NavbarRight from './navbarComponent/NavbarTopRight'

export default function NavBarTop() {
    return (
        <>
            <div className="container" style={{padding: "10px 0 10px 0"}}>
                <div className="row">
                    <NavbarLeft />
                    <NavbarRight />
                </div>
            </div>
        </>
    )
}
