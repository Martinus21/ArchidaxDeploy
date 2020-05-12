import React from 'react'

export default function TradingList() {
    return (
        <>
            <div className="row" style={{paddingBottom: "20px"}}>
                <div className="col-md-1 col-sm-12 mb-2">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle button_tradingList col-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: "none", boxShadow: "none"}}>
                            USDT
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">USD</a>
                            <a className="dropdown-item" href="#">IDR</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 mb-2">
                    <button className="btn button_tradingList col-12" type="button" style={{border: "none", boxShadow: "none", fontWeight: "bold"}} disabled>
                        <span style={{marginRight: "50px"}} className="justify-space-around">Reference Price </span>7.1 CNY/USDT
                    </button>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                    <div class="input-group">
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        
                            <button className="input-group-append btn dropdown-toggle button_tradingList" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: "none", boxShadow: "none"}}>
                                CNY
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">USD</a>
                                <a className="dropdown-item" href="#">IDR</a>
                            </div>
                        
                    </div>
                </div>
                <div className="col-md-2 col-sm-12">
                    <button type="button" className="btn btn-primary col-12">
                        Rapid Buy
                    </button>
                </div>
            </div>

            <div className="row card text-center">
                <div className="card-header" style={{backgroundColor: "#151933"}}>
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Rise Ranking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Transaction Ranking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rise List</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Pair</th>
                                <th scope="col">Price</th>
                                <th scope="col">24 H Fluctation</th>
                                <th scope="col">24 H High</th>
                                <th scope="col">24 H Low</th>
                                <th scope="col">24 H Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>XCON/USDT</td>
                                <td><span className="text-warning">0.0000000274</span>+0.0832 CNY</td>
                                <td><span className="text-success">+22.12%</span></td>
                                <td>0.0000007681</td>
                                <td>0.0000007222</td>
                                <td>8273.9827</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>ZIL/ETH</td>
                                <td><span className="text-warning">0.0000000274</span>+0.0832 CNY</td>
                                <td><span className="text-success">+17.44%</span></td>
                                <td>0.0000007681</td>
                                <td>0.0000007222</td>
                                <td>8273.9827</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>ZIL/USDT</td>
                                <td><span className="text-warning">0.0000000274</span>+0.0832 CNY</td>
                                <td><span className="text-success">+17.32%</span></td>
                                <td>0.0000007681</td>
                                <td>0.0000007222</td>
                                <td>8273.9827</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
