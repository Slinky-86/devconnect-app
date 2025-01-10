import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import androidideLogo from '../assets/androidide_logo.png'
import { removeData } from '../auth';

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

  const handleLogout = async () => {
    await removeData('isLoggedIn');
      navigate('/');
   };

    return (
        <nav className="sidebar">
           <Logo/>
            <ul style={{marginTop:'auto'}}>
                <li>
                    <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</NavLink>
               </li>
                <li>
                   <NavLink to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</NavLink>
             </li>
                <li>
                   <NavLink to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>Settings</NavLink>
                </li>
               <li>
                   <NavLink to="/notifications" className={`nav-link ${location.pathname === '/notifications' ? 'active' : ''}`}>Notifications</NavLink>
               </li>
              <li>
                  <NavLink to="/messages" className={`nav-link ${location.pathname === '/messages' ? 'active' : ''}`}>Messages</NavLink>
                 </li>
           </ul>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop:'auto'}}>
               <span style={{ textAlign:'left', padding: '5px 0', cursor: 'pointer' }}>Help</span>
               <button style={{fontSize:'0.8em', padding:'5px 10px', marginTop:'20px', width:'fit-content', alignSelf:'start'}} className='logout-button' onClick={handleLogout}>Logout</button>
                <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px', justifyContent: 'center', flexDirection: 'row-reverse' }}>
                   <img src={androidideLogo} alt="Android IDE Logo" style={{ width: '20px', height: 'auto', marginRight: '5px' }}/>
                    <p style={{fontSize: '0.8em'}}> © {new Date().getFullYear()} DevConnectApp. All rights reserved.</p>
                </div>
            </div>
       </nav>
   );
}
export default Sidebar;