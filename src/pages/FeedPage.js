import React, { useState, useEffect } from 'react';
import PostInput from '../components/PostInput';
import {createPerson} from '../auth'

 function FeedPage({ posts, style }) {
    const [status, setStatus] = useState('Ready');

    useEffect(() => {
          testBack4AppConnection();
     },[]);


     const testBack4AppConnection = async () => {
      setStatus('loading')
     try {
          await createPerson("TestUser");
           setStatus('Completed')
       } catch (error) {
            setStatus(`Error: ${error}`)
        }
    }


      return (
         <div style={{ ...style, backgroundColor: 'white' }}>
            <h1>Feed Page</h1>
             <p>
                   <strong>Status:</strong>
                 {status}
            </p>
               <PostInput />
              {posts.map((post, index) => (
                   <div key={index}>
                      <p>{post.text}</p>
                   </div>
              ))}
          </div>
        );
  }

   export default FeedPage;