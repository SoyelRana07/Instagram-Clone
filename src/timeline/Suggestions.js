import React from 'react';
import './Suggestions.css';
import { Avatar } from '@mui/material';

const suggestionsData = [
  { username: 'iamleyoss', relation: 'New to Instagram' },
  { username: 'john_doe', relation: 'Followed by friend' },
  { username: 'jane_smith', relation: 'New to Instagram' },
  { username: 'alex_jones', relation: 'Recommended for you' },
];

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className='suggestions_title'>
        Suggestions for you
      </div>
      <div className='suggestions_usernames'>
        {suggestionsData.map((suggestion, index) => (
          <div className='suggestions_username' key={index}>
            <div className='username_left'>
              <span className='Avatar'>
                <Avatar>{suggestion.username.charAt(0).toUpperCase()}</Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>{suggestion.username}</span>
                <span className='relation'>{suggestion.relation}</span>
              </div>
            </div>
            <button className='follow_button'>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
