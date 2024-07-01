import React, { useState } from 'react'
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './posts/Post';
import Stories from './stories/Stories';


function Timeline() {
  const [posts,setPosts]=useState([
    {
      user:"Klaus  ",
      postImage:"https://th.bing.com/th/id/OIP.OMuHfRSl-aubPp-TBD1tYwHaLH?rs=1&pid=ImgDetMain",
      likes:20,
      timestamp:"2d",
    },
    {
      user:"Caroline ",
      postImage:"https://e0.pxfuel.com/wallpapers/885/652/desktop-wallpaper-caroline-forbes-caroline-forbes-%E1%83%A6-caroline-forbes-vampire-diaries-seasons-vampire-diaries.jpg",
      likes:200,
      timestamp:"1d",
    },
    {
      user:"Zade ",
      postImage:"https://i.pinimg.com/736x/bf/7f/25/bf7f25cfcd23a0ca268d7c5ded0143ac.jpg",
      likes:200000,
      timestamp:"2d",
    },
    {
      user:"Adeline ",
      postImage:"https://i.pinimg.com/736x/11/0e/22/110e2238fe677d6dcd9bc1073db1e4d8.jpg",
      likes:4000,
      timestamp:"3d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className='stories'>
          <Stories />
          </div>
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
        
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline
