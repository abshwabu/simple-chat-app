
import './App.css';
import Auth from './components/Auth';
import Chat from './components/Chat'

import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
  const [room,setRoom] = useState(null)
  const roomInputRef = useRef(null);
  const signUserOut =async ()=>{
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  }
  
  if(!isAuth){

    return (
      <div className="App">
       <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return(
     <>
     <div>
      {
        room ? (
        <Chat room={room}/>
        ):(
          <div className="room">
            <label htmlFor="room">Enter room name: </label>
            <input ref={roomInputRef}/>
            <button onClick={()=>{setRoom(roomInputRef.current.value)}}>Enter room</button>
          </div>
        )
      }
     </div>
     <div className="signout">
      <button onClick={signUserOut}>SignOut</button>
     </div>
     </>
     )
}

export default App;
