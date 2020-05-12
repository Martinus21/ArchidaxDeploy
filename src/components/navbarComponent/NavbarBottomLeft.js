import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarBottomLeft() {
    return (
        <>
            <div className="col-md-3 navbar-header navbar-bottom-brand" style={{padding: "0px 0px"}}>
                <Link className="navbar-brand">
                    <img alt="Brand" src="assets/images/archidaxBanner/logoArchidaxKecil.png" width="170px"/>
                </Link>
            </div>
        </>
    )
}
