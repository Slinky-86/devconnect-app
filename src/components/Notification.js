import React from 'react';
import { useNavigate } from 'react-router-dom';

function Notification({ message, timestamp, link }) {
     const navigate = useNavigate();
    const handleClick = () => {
       navigate(link);
 };


 return (
    <div onClick={handleClick} style={{ padding: '10px', borderBottom: '1px solid #eee', backgroundColor: 'white', cursor: 'pointer'}}>
          <p style={{color: 'black'}}>
               {message}
               <small style={{float: 'right', color:'gray'}}>{timestamp}</small>
           </p>
      </div>
    );
}

export default Notification;