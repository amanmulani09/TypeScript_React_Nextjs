import { PostCardProp } from "../../types/types";
import PostCard from "./PostCard";
import {useState,useEffect} from 'react'

const PostList = ()=>{
const [data,setData] = useState([])
const getData = async()=>{
let res= await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
}

useEffect(()=>{

const fetchData = async()=>{
    let data= await getData();
    setData(data)
}
fetchData();
},[])

return(
    <>
       {
        data && data.map((item:PostCardProp)=>(
            <PostCard key={item.id} {...item} />
        ))
       }
    </>
    )
}

export default PostList;