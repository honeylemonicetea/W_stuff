import Ava from "../images/Max_.png";
import Post from "./post/Post";

function Posts(){
    return(
    <div className='posts'>
        <input placeholder='enter the post'/>
        <button>Add a post</button>
        <Post message='Hello'/>
        <Post message = 'Um'/>
        <Post message='is there anybody out there?'/>
        <Post message='Wowser'/>
    </div>
    )}
    export default Posts
