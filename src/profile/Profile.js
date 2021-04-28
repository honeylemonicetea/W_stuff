import React from 'react'
import Ava from './images/Max_.png'

function Profile(){
    return(
        <div className="profile">
            <div className='me'>
                <img src={Ava}/>
                <p>Max Caulfield</p>
            </div>
            <div className='posts'>
                <input placeholder='enter the post'/>
                <button>Add a post</button>
                <div className='post'>
                    <img src={Ava}/>
                    <span>Max Caulfield</span>
                    <p>Some text</p>
                </div>
            </div>
        </div>
    )
}

export default Profile