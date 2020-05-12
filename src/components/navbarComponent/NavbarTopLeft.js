import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarLeft() {
    return (
        <>
            <div className="col-md-8 col-sm-8 col-xs-12 navbar-top-left">
                <ul className="pull-left header_top_menu cutomer_ser" style={{listStyle: "none", paddingLeft: "0px", marginBottom: "0"}}>
                    <li>
                        <Link className="navbar-top-left-customerSupport" style={{fontSize: "13.5px", color: "white"}}>
                            <i className="fas fa-life-ring"></i><span style={{marginRight: "20px"}}> Customer Support</span>
                        </Link>
                        <Link className="navbar-top-left-customerSupport" style={{fontSize: "13.5px", color: "white"}}>
                            <i className="fas fa-chart-pie" ></i><span> Trading Fees: 0.05% Taker / -0.54% Market</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
