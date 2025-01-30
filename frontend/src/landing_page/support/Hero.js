import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5  ' id='supportWrapper'>
            <h4>Support Portal</h4>
            <a href='' style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
                </div>
                <div className='col-6 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>Surveillance measure on scrips - September 2024</a></li>
                        <li className='mt-3'><a href=''>Rights Entitlements listing in September 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;