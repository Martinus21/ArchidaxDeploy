import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarBottomMiddle() {
    return (
        <>
            <div className="col-md-6 navbar-bottom-link" style={{padding: "0px 0px"}}>
                <ul className="nav navbar-nav navbar-right" style={{flexDirection: "row"}}>

                    <li>
                        <Link style={{fontSize: "16px", color: "white", fontWeight: "bold", marginRight: "30px"}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link style={{fontSize: "16px", color: "white", fontWeight: "bold", marginRight: "30px"}}>
                            Market
                        </Link>
                    </li>
                    <li>
                        <Link style={{fontSize: "16px", color: "white", fontWeight: "bold", marginRight: "30px"}}>
                            Add Bitcoin / Token
                        </Link>
                    </li>
                    <li>
                        <Link style={{fontSize: "16px", color: "white", fontWeight: "bold", marginRight: "30px"}}>
                            IEO
                        </Link>
                    </li>
                    <li>
                        <Link style={{fontSize: "16px", color: "white", fontWeight: "bold", marginRight: "30px"}}>
                            News
                        </Link>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{fontSize: "16px", color: "white", fontWeight: "bold"}}>Earn + <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link>Action</Link>
                            </li>
                            <li>
                                <Link>Another action</Link>
                            </li>
                            <li>
                                <Link>Something else here</Link>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <Link>Separated link</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </>
    )
}
