import React, { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png';
import {storeData, getData} from '../auth'


  function ProfilePage() {
     const [name, setName] = useState('John Doe');
      const [age, setAge] = useState(30);
      const [location, setLocation] = useState('Some city, Somewhere');

      useEffect(()=>{
        const loadProfile = async () => {
             const storedName = await getData('profileName');
              if(storedName){
                setName(storedName);
              }
            const storedAge = await getData('profileAge');
           if(storedAge){
                setAge(parseInt(storedAge));
            }
         const storedLocation = await getData('profileLocation');
           if (storedLocation){
             setLocation(storedLocation);
           }
        }
           loadProfile();
 },[]);


 const handleNameChange = (e) => {
      setName(e.target.value);
 };
 const handleAgeChange = (e) => {
       setAge(parseInt(e.target.value));
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

    const handleSaveProfile = async () => {
       await storeData('profileName', name);
        await storeData('profileAge', age);
      await storeData('profileLocation', location);
      alert("profile has now been saved locally");
    };

     return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px' }}>
           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:'30px' }}>
                  <img src={avatar} alt="User Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection:'column' }}>
                 <div style={{ marginBottom: '30px', textAlign:'center'}}>
                    <h2 style={{color: 'skyblue', fontSize:'2em', fontWeight:'bold', marginBottom: 0}}>DevConnect</h2>
                      <p>
                         <strong>Name:</strong>
                         <input type="text" value={name} onChange={handleNameChange}  style={{marginLeft: '10px', padding:'5px', borderRadius: '5px'}} id="profile-name" name="profile-name"/>
                       </p>
                      <p>
                        <strong>Age:</strong>
                         <input type="number" value={age} onChange={handleAgeChange} style={{marginLeft: '10px', padding:'5px', borderRadius: '5px'}}  id="profile-age" name="profile-age"/>
                       </p>
                       <p>
                           <strong>Location:</strong>
                          <input type="text" value={location} onChange={handleLocationChange} style={{marginLeft: '10px', padding:'5px', borderRadius: '5px'}} id="profile-location" name="profile-location"/>
                      </p>
               </div>
                 <div style={{ marginBottom: '10px', textAlign:'center'}}>
                     <h3 style={{ color: 'teal' }}>Developer Links</h3>
                       <ul style={{display:'inline-block', textAlign:'left'}}>
                              <li><a href="https://github.com/username">GitHub</a></li>
                           <li><a href="https://gitlab.com/username">GitLab</a></li>
                           <li><a href="https://stackoverflow.com/users/123456">Stack Overflow</a></li>
                            <li><a href="https://firebase.google.com/">Firebase</a></li>
                            <li><a href="https://cloud.google.com/">Cloud</a></li>
                        </ul>
                </div>
             </div>
         <div style={{display: 'flex', justifyContent:'flex-end'}}>
               <button onClick={handleSaveProfile}>Save</button>
         </div>
      </div>
    );
}

export default ProfilePage;