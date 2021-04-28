import React from 'react'
import Image from './images/logo.png'

function Header(){
    return(
        <div className='header'>
            <img src={Image} alt='ffe'/>
        </div>

    )
}

export default Header;