import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {

  const [refreshPost,setRefreshPost] = useState(false)

  const handlePostRefresh = ()=>{
    setRefreshPost(!refreshPost) // toggle when refreshPost when call this function
  }

  return <div className="container">

    <h1> Create post </h1>
    <PostCreate handlePostRefresh = {handlePostRefresh} />
    <hr/>
    <h1>Posts</h1>
    <PostList refreshPost = {refreshPost}/>
  </div>;
};

export default App;
