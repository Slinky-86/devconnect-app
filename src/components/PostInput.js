import React, { useState } from 'react';
import geminiIcon from '../assets/gemini_icon.png';

function PostInput({ onPostSubmit }) {
   const [postText, setPostText] = useState('');

    const handlePostChange = (event) => {
      setPostText(event.target.value);
    };

      const handleSubmit = (event) => {
          event.preventDefault();
          if (postText.trim() !== '') {
             onPostSubmit(postText);
              setPostText('');
          }
       };

      return (
           <form onSubmit={handleSubmit} style={{display:'flex', alignItems: 'center', paddingRight: '10px' }}>
               <img src={geminiIcon} alt="Gemini Icon" style={{ width: '15px', height: 'auto', marginRight: '5px'}} />
                <textarea
                  value={postText}
                  onChange={handlePostChange}
                   placeholder="What's on your mind?"
                   style={{ flex: 1, marginRight: '10px' }}
                   id="post-input"
                   name="post-input"
              />
              <button type="submit" style={{ padding: '8px 12px'}}>Post</button>
         </form>
      );
    }

    export default PostInput;