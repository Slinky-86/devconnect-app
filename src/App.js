import React, { Component, useState, useEffect } from 'react';
   import { Routes, Route} from 'react-router-dom';
    import Sidebar from './components/Sidebar';
     import PostInput from './components/PostInput';
     import './App.css';
     import ProfilePage from './pages/ProfilePage';
    import SettingsPage from './pages/SettingsPage';
     import NotificationsPage from './pages/NotificationsPage';
     import FeedArea from './components/FeedArea';
     import AuthPage from './pages/AuthPage';
 import MessagesPage from './pages/MessagesPage';


 class ErrorBoundary extends Component {
     constructor(props) {
        super(props);
         this.state = { hasError: false, error: null, errorInfo: null };
     }

     static getDerivedStateFromError(error) {
       return { hasError: true };
      }

     componentDidCatch(error, errorInfo) {
         this.setState({ error, errorInfo });
     }

     render() {
         if (this.state.hasError) {
              return (
                  <div>
                     <h2>Something went wrong.</h2>
                      <details>
                         {this.state.error && this.state.error.toString()}
                         <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                 </div>
           );
      }
      return this.props.children;
 }
}

function App() {
   const [posts, setPosts] = useState([]);
   const [theme, setTheme] = useState('system');
    const [fontFamily, setFontFamily] = useState('Arial');
     const [fontSize, setFontSize] = useState(16);
   const [prebuiltTheme, setPrebuiltTheme] = useState('teal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
       const storedTheme = localStorage.getItem('theme') || 'system';
          setTheme(storedTheme);
     const storedFontFamily = localStorage.getItem('fontFamily') || 'Arial';
       setFontFamily(storedFontFamily);
     const storedFontSize = localStorage.getItem('fontSize') || '16';
         setFontSize(parseInt(storedFontSize));
       const storedPrebuiltTheme = localStorage.getItem('prebuiltTheme') || 'teal';
          setPrebuiltTheme(storedPrebuiltTheme);
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if(storedLoggedIn){
           setIsLoggedIn(true)
      }
   }, []);

    const handlePostSubmit = (postText) => {
       setPosts([...posts, {text: postText}]);
    };
  const appStyle = {
      fontFamily: fontFamily,
       fontSize: fontSize,
  };

   if(theme === 'dark'){
     appStyle.backgroundColor = '#333'
        appStyle.color = 'white'
    }else if (theme === 'light'){
       appStyle.backgroundColor = 'white'
         appStyle.color = 'black'
} else if (theme === 'pure-dark'){
    appStyle.backgroundColor = 'black'
     appStyle.color = 'white'
  }

   return (
       <ErrorBoundary>
          {isLoggedIn ? (
               <div className="app-container" style={{display: 'flex', overflowY:'auto', ...appStyle}}>
                    <Sidebar style={{height:'100vh'}}/>
                 <div style={{ display: 'flex', flexDirection: 'column', flex:1 }}>
                       <header className="app-header">
                            <PostInput onPostSubmit={handlePostSubmit} />
                        </header>
                         <Routes>
                              <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/settings" element={<SettingsPage
                                        theme={theme}
                                         setTheme={setTheme}
                                        fontFamily={fontFamily}
                                        setFontFamily={setFontFamily}
                                         fontSize={fontSize}
                                         setFontSize={setFontSize}
                                         prebuiltTheme={prebuiltTheme}
                                        setPrebuiltTheme={setPrebuiltTheme}
                                   />} />
                               <Route path="/notifications" element={<NotificationsPage />} />
                              <Route path="/messages" element={<MessagesPage />} />
                               <Route path="/" element={<FeedArea posts={posts} style={{flex: 1, backgroundColor: (prebuiltTheme==='teal' ? 'white' : '#f0f0f0') }}/>} />
                          </Routes>
                  </div>
             </div>
      ) : (
          <AuthPage />
       )}
   </ErrorBoundary>
   );
}

export default App;