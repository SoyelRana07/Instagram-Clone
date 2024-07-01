import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_hAuthor'>
        <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
        {user}
        </div>
           <MoreHorizIcon />
      </div> 
      <div className='post_image'>
        <img src={postImage} alt='Post' />
      </div>

      <div className='post_footer'>
        <div className='post_footericons'>
            <div className='post_iconMain'>
                <FavoriteBorderIcon className='posticon'/>
                <ChatBubbleOutlineIcon className='posticon'/>
                <TelegramIcon className='posticon'/>
            </div>
            <div className='post_iconSave'>
                <BookmarkBorderIcon className='posticon'/>
            </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  );
}

export default Post
