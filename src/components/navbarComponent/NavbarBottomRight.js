import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarBottomRight() {
    return (
        <>
            <div className="col-md-3 navbar-bottom-link" style={{padding: "0px 0px"}}>
                <ul className="nav navbar-nav navbar-right" style={{flexDirection: "row", justifyContent: "right"}}>

                    <li>
                        <Link><i style={{color: "#728ca3", fontSize: "24px"}} className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li>
                        <Link><i style={{color: "#728ca3", fontSize: "24px", marginLeft: "20px"}} className="fab fa-twitter"></i></Link>
                    </li>
                    <li>
                        <Link><i style={{color: "#728ca3", fontSize: "24px", marginLeft: "20px"}} className="fab fa-google-plus-g"></i></Link>
                    </li>
                    <li>
                        <Link><i style={{color: "#728ca3", fontSize: "24px", marginLeft: "20px"}} className="fab fa-youtube"></i></Link>
                    </li>
                    <li>
                        <Link><i style={{color: "#728ca3", fontSize: "24px", marginLeft: "20px"}} className="fab fa-instagram"></i></Link>
                    </li>
                    <div style={{backgroundColor: "#728ca3", marginLeft: "15px", width: "1px"}}> </div>
                    <li>
                        <Link><i style={{color: "#e9d16f", fontSize: "24px", marginLeft: "15px"}} className="fas fa-search"></i></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
