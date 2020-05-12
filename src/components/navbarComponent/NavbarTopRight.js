import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarRight() {
    return (
        <>
            <div className="col-md-4 col-sm-4 col-xs-12 navbar-top-right">
                <ul className="pull-right header_top_menu cutomer_ser" style={{listStyle: "none", display: "flex", marginBottom: "0", justifyContent: "right"}}>
                    <li>
                        <Link style={{fontSize: "13.5px", color: "white"}}>
                            <i className="fas fa-sign-in-alt"></i><span style={{marginRight: "28px"}}> Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{fontSize: "13.5px", color: "white"}}>
                            <i className="fas fa-lock"></i><span> Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
