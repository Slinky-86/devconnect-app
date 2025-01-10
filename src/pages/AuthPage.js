import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
  import { registerUser, loginUser, storeData } from '../auth';

function AuthPage() {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [isRegistered, setIsRegistered] = useState(false);
     const navigate = useNavigate();

   const handleSubmit = async (event) => {
        event.preventDefault();
        try{
           let user = null;
            if(isRegistered){
                  user =  await loginUser(username, password);
             }else{
                  user = await registerUser(username, password);
             }
            if(user){
             storeData('isLoggedIn', 'true');
              navigate('/');
           }
        } catch (error){
              alert(`Error: ${error.message}`);
       }
   };


  const setRegisterState = () => {
     setIsRegistered(false);
 }

   const setLoginState = () => {
       setIsRegistered(true);
   }

     return (
         <div style={{display: 'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh'}}>
             <div style={{display:'flex', flexDirection:'column', width:'300px', padding: '20px', border:'1px solid gray', borderRadius: '10px', backgroundColor:'white' }}>
                  <h1>{isRegistered ? 'Login' : 'Register'}</h1>
                  <input
                       type="text"
                     placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                     style={{marginBottom:'10px'}}
                />
               <input
                     type="password"
                      placeholder="Password"
                      value={password}
                    onChange={(e) => setPassword(e.target.value)}
                   style={{marginBottom:'20px'}}
            />
                <button style={{ marginBottom: '5px'}} onClick={handleSubmit}>{isRegistered ? 'Login' : 'Register'}</button>
                {!isRegistered ?
                     <span style={{ textAlign:'center', cursor: 'pointer', padding: '5px 0' }} onClick={setLoginState}> Already Registered? Click to Login. </span>
                     :
                    <span style={{ textAlign:'center', cursor: 'pointer', padding: '5px 0' }} onClick={setRegisterState}> New to DevConnect? Click to Register. </span>
                  }
         </div>
    </div>
     );
  }

  export default AuthPage;