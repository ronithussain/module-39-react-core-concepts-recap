import './post.css'
export default function Post({post}){
    const {title, userId, body,id} = post;
    return(
        <div className="box">
           <h5>Title:{title}</h5>
           <p><small>UserId:{userId}</small></p>
           <p><small>PostId:{id}</small></p>
           <p>{body}</p>
        </div>
    )
}