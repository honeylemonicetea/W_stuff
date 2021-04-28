import React from 'react'
import Ava from './images/Max_.png'
import Posts from "./posts/Posts";

function Profile(){
    return(
        <div className="profile">
            <div className='me'>
                <img src={Ava}/>
                <p>Max Caulfield</p>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile