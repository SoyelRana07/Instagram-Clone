import React from 'react';
import './Stories.css';
import { Avatar } from '@mui/material';

const storiesData = [
  { username: 'Klaus', image: 'https://example.com/user1.jpg' },
  { username: 'Caroline', image: 'https://example.com/user2.jpg' },
  { username: 'Zade', image: 'https://example.com/user3.jpg' },
  // Add more stories as needed
];

function Stories() {
  return (
    <div className='stories'>
      {storiesData.map((story, index) => (
        <div className='story' key={index}>
          <Avatar className='story_avatar' src={story.image} alt={story.username} />
          <p className='story_username'>{story.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
