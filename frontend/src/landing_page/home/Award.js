import React from 'react';
 function Award() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zeroda xlients  contribute to over 15% of all retail order volumes in india daily by  trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and options</p>
                                </li>
                                <li>
                                    <p>Commodity and Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency and Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>FStocks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutuals Funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Government Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
 }
 
 export default Award;