import React, { useState, useEffect } from 'react';
import MessageDisplay from '../components/MessageDisplay';
import { storeData, getData } from '../auth';

function MessagesPage() {
const [messageText, setMessageText] = useState('');
const [messages, setMessages] = useState([]);
const [selectedUser, setSelectedUser] = useState('');
const users = [
{id:1, name: 'John Doe'},
{id:2, name:'Jane Smith'},
{id:3, name:'Alice Brown'}
];

useEffect(()=>{
      const loadMessages = async () =>{
          const storedMessages = await getData('messages');
        if(storedMessages){
               setMessages(JSON.parse(storedMessages))
          }
 }
      loadMessages();
   },[]);


    const handleMessageChange = (event) => {
        setMessageText(event.target.value);
 };

const handleMessageSubmit = async (event) => {
      event.preventDefault();
      if(messageText.trim() !== ''){
           const newMessages = [...messages, {text: messageText, sender: 'You', receiver: selectedUser}];
           setMessages(newMessages);
            await storeData('messages', JSON.stringify(newMessages))
          setMessageText('');
     }
};

  const selectUser = (id) => {
       setSelectedUser(id)
  }


 return (
    <div style={{display: 'flex', flexDirection:'column', flex: 1}}>
          <h1>Messages</h1>
           <div style={{marginBottom: '10px'}}>
                <select value={selectedUser} onChange={e=> selectUser(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map(user => (
                         <option key={user.id} value={user.name}>{user.name}</option>
                    ))}
               </select>
         </div>
          <div style={{flex:1, overflowY:'auto', marginBottom: '20px'}}>
              <MessageDisplay messages={messages} />
           </div>
          <div style={{display:'flex', padding: '10px 0', marginBottom:'10px'}}>
                <textarea
                     value={messageText}
                    onChange={handleMessageChange}
                  placeholder="Enter your message here"
                  style={{flex:1, marginRight:'10px'}}
                    id="messageInput"
                  name="messageInput"
            />
              <button onClick={handleMessageSubmit} style={{width:'fit-content'}}>Send</button>
          </div>
    </div>
);

}

export default MessagesPage;