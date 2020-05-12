import React from 'react'

export default function Slider() {
    return (
        <>
            <div id="sliderBanner" className="carousel slide" data-ride="carousel">
                <div className="row carousel-inner">

                    <div className="carousel-item active">
                        <div className="container" style={{padding: "0"}}>
                            <div className="row justify-content-between">
                                <div className="col-md-5" style={{padding: "0"}}>
                                    <h1 style={{color: "white"}}>
                                        ARCHIDAX <span style={{color: "#e7cf6d"}}> Exchange</span> Digital Assets Market and Trader
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <img src="assets/images/archidaxBanner/gambar1.png" className="d-block w-100" alt="..."/>
                                </div>    
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container" style={{padding: "0"}}>
                            <div className="row justify-content-between">
                                <div className="col-md-5" style={{padding: "0"}}>
                                    <h1 style={{color: "white"}}>
                                        ARCHIDAX <span style={{color: "#e7cf6d"}}> Exchange</span> Digital Assets, Market and Trader
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <img src="assets/images/archidaxBanner/gambar1.png" className="d-block w-100" alt="..."/>
                                </div>    
                            </div>
                        </div>
                    </div>

                </div>
                

                <a className="carousel-control-prev" href="#sliderBanner" role="button" data-slide="prev" style={{width: "50px"}}>
                    <div style={{padding: "15px", backgroundColor: "#e7cf6d", display: "flex"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#sliderBanner" role="button" data-slide="next" style={{width: "50px"}}>
                    <div style={{padding: "15px", backgroundColor: "#e7cf6d", display: "flex"}}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>
                </a>

            </div>
        </>
    )
}
