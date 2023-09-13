import React,{useState , useEffect} from 'react'
import axios from 'axios'

const CommentList = ({postId}) => {
    const [comment,setComment] = useState([])

    const fetchData = async()=>{
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComment(res.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const renderedComments = comment.map((comment)=>{
        return(
            <li key={comment.id}>{comment.content}</li>
        )
    })

  return (
    <ul>{renderedComments}</ul>
  )
}

export default CommentList