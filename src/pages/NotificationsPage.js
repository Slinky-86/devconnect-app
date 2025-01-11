import React, { useState } from 'react';
import Notification from '../components/Notification';
import { useNavigate } from 'react-router-dom';


function NotificationsPage() {
   const navigate = useNavigate();
   const [notifications, setNotifications] = useState([
        { id: 1, message: 'New message from John Doe', timestamp: new Date().toLocaleString(), link: '/messages' },
       { id: 2, message: 'App update available', timestamp: new Date().toLocaleString(), link: '/' },
          { id: 3, message: 'New comment on your post', timestamp: new Date().toLocaleString(), link: '/'}
   //add more test data if you want
 ]);
  const addNotification = (message, link) => {
      const newNotification = {
            id: Date.now(),
             message: message,
             timestamp: new Date().toLocaleString(),
              link: link,
          };
       setNotifications([newNotification, ...notifications]);
   };


   const sendNotification = () => {
         addNotification("You have a new Message", '/messages');
    };
    const navigateToLink = (link) => {
           navigate(link);
     };

       return (
         <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
               <h1>Notifications</h1>
               <button onClick={sendNotification}>Send Notification</button>
                <div style={{display: 'flex', flexDirection:'column', overflowY: 'auto'}}>
                   {notifications.map(notification => (
                        <div key={notification.id} onClick={()=>navigateToLink(notification.link)}>
                           <Notification  message={notification.message} timestamp={notification.timestamp} />
                       </div>
                  ))}
              </div>
         </div>
     );
   }

    export default NotificationsPage;