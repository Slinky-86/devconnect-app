import React from 'react';

function FeedArea({ posts, style }) {
    return (
        <div style={{ ...style, overflowY: 'auto', backgroundColor:'white' }}>
            {posts.map((post, index) => (
                <div key={index} style={{color: style.backgroundColor === 'black' ? 'white' : 'black'}}>
                    <p style={{ color: style.backgroundColor === 'black' ? 'white' : 'black'}}>{post.text}</p>
               </div>
           ))}
     </div>
    );

}

export default FeedArea;