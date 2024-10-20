import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"

export default function Posts(){
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div className="">
            <h3>Post:{posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}