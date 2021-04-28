import Ava from "../../images/Max_.png";

function Post(props){
    return(
        <div className='post'>
            <img src={Ava}/>
            <span>Max Caulfield</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post