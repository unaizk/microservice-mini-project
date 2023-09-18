import React, {useState , useEffect} from 'react';
import axios from 'axios'
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = ({refreshPost}) => {
     const [posts,setPosts] = useState({});

     const [refresh,setRefresh] = useState(false);



     const changeRefresh = () => setRefresh(!refresh)



     const fetchPost = async()=>{
        const res = await axios.get("http://posts.com/posts");

        setPosts(res.data)
        
     }

     useEffect(()=>{
        fetchPost();
     },[refresh,refreshPost])

     console.log(posts);

     const renderedPosts = Object.values(posts).map((post)=>{
        return(
            <div className='card' style={{width:'30%',marginBottom:'20px'}} key={post.id}>
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} changeRefresh={changeRefresh}/>
                </div>
            </div>
        )
     })
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPosts}
    </div>
  )
}

export default PostList