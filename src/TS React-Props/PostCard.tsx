import {PostCardProp} from '../types/types'
const PostCard = (props:PostCardProp)=>{
    return(
        <>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        </>
    )
}

export default PostCard;