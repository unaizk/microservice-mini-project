import React,{useState} from 'react'
import axios from "axios";

const CommentCreate = ({postId,changeRefresh}) => {

    const [content,setContent] = useState('')

    const onSubmit = async(event)=>{
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`,{
            content
        });
        setContent('')
        setTimeout(() => {
            changeRefresh();
          }, 1000);
        
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New comment</label>
                <br />
                <input className='formcontrol' value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <button className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate