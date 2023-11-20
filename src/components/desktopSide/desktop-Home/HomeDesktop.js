import React from 'react'
import '../desktop-Home/HomeDesktop.css'
import banner from '../../../images/homebg.png'
import lock from '../../../images/lock.png'

function HomeDesktop(){
    return(
        <div className='homecontainer'>
            <img className='bnimg' src={banner} alt='bannerimage'/>
            <h1 className='tagline'>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.<br></br>
               Use pocket notes on up to 4 linked devices and 1 mobile phone</p>
            <div className='encrypt-text'>
                <img src={lock} alt='lock'/>
                <p>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default HomeDesktop;