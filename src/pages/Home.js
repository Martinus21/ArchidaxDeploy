import React from 'react';

import NavBarTop from '../components/NavBarTop';
import NavbarBottom from '../components/NavbarBottom';
import Slider from '../components/Slider';
import Particles from 'react-particles-js';
import TraficWallet from '../components/TraficWallet';
import TradingList from '../components/TradingList';

export default function Home() {
    return (
        <>
            <header className="navigation">
                <div className="navbar-top" style={{backgroundColor: "#0b0c22"}}>
                    <NavBarTop />
                </div>

                <div className="navbar-bottom" style={{backgroundColor: "#0b0c22", borderTop: "1px solid grey"}}>
                    <NavbarBottom />
                </div>
            </header>

            <div className="jumbotron jumbotron-fluid Sliders" style={{backgroundImage: "radial-gradient(#182646, #0b0e21, #0b0c22)", padding: "10px 0", marginBottom: "0"}}>
                <Slider />
            </div>

            <div className="container-fluid traficWallet" style={{backgroundColor: "#151933"}}>
                <TraficWallet />
            </div>

            <div className="container-fluid tradingList" style={{padding: "30px 30px 35px 30px", backgroundColor: "rgb(11, 12, 34)"}}>
                <TradingList />
            </div>

            <div className="container-fluid" style={{padding: "0px 100px", backgroundColor: "rgb(11, 12, 34)"}}>
                <div className="row">
                    <div className="col-md-3" style={{textAlign: "center"}} >
                        <img src="assets/images/archidaxBanner/licensed1.png" style={{width: "75px"}} alt="..."/>
                        <div className="mt-5">
                            <h4 style={{color: "#e7cf6d", fontSize: "24px"}}>Licensed in Luxembourg</h4>
                            <p  style={{fontSize: "16px"}}>Taking the time to manage your money really pay off.</p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{textAlign: "center"}} >
                        <img src="assets/images/archidaxBanner/searchx.png" style={{width: "60px"}} alt="..."/>
                        <div className="mt-5">
                            <h4 style={{color: "#e7cf6d", fontSize: "24px"}}>No Hidden Fees</h4>
                            <p  style={{fontSize: "16px"}}>Taking the time to manage your money really pay off.</p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{textAlign: "center"}} >
                        <img src="assets/images/archidaxBanner/trading.png" style={{width: "70px"}} alt="..."/>
                        <div className="mt-5">
                            <h4 style={{color: "#e7cf6d", fontSize: "24px"}}>Instant Trading</h4>
                            <p  style={{fontSize: "16px"}}>Taking the time to manage your money really pay off.</p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{textAlign: "center"}} >
                        <img src="assets/images/archidaxBanner/secure.png" style={{width: "55px"}} alt="..."/>
                        <div className="mt-5">
                            <h4 style={{color: "#e7cf6d", fontSize: "24px"}}>Secure and Transparent</h4>
                            <p  style={{fontSize: "16px"}}>Taking the time to manage your money really pay off.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid" style={{backgroundColor: "#001633"}}>
                <div id="particles-js" style={{position: "absolute", width: "100%", height: "700px"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="heading_main" style={{textAlign: "center"}}>
                                <h2 style={{margin: "80px 0 20px 0", fontSize: "48px"}}><span>Archidax Exchange</span></h2>
                                <h5 style={{color: "white"}}>Investments and employment of the Blockchain Technologies. Optimize your business<br />case with blockchain technology and Smart Contracts.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img src="assets/images/archidaxBanner/worldMap.gif" className="img-fluid rounded mx-auto d-block"/>
                    </div>
                </div>
            </div>


            <div className="container-fluid p-0 pt-5" style={{backgroundColor: "#041e37", position: "absolute", color: "white"}}>
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-md-3 p-0">
                        <img src= "assets/images/archidaxBanner/logoArchidaxKecil.png" className="footer-img"/>
                        <p>Investments and employment Blockchain Technologies. Optimize your business blockchain technology and Smart Contracts.</p>
                    </div>
                        
                    <div className="col-md-4 p-0">
                        <h2 className="footer-h2">Quick links</h2>
                        <ul className="footer-menu">
                            <li><a href="#"><i className="fa fa-angle-right"></i> Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Market</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Add Bitcoin/Token</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> IEO</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> News</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i> Earn</a></li>
                        </ul>
                    </div>

                    <div className="col col-md-3 p-0">
                        <h2 className="footer-h2">Newsletter Signup</h2>
                        <p style={{fontSize: "17px", lineHeight: "24px", letterSpacing: "0", margin: "0"}}>Get latest updates, news, surveys &amp; offers</p>
                        
                    </div>
                </div>

                <div className="row justify-content-md-center" style={{backgroundColor: "#e9d16f"}}>
                    <p className="mb-0 pt-3 pb-3" style={{color: "#041e37", fontSize: "14px"}}>Archidax Exchange. 2020 All Rights Reserved.</p>
                </div>
            </div>

        </>
    )
}