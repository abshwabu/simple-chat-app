
import './App.css';
import Auth from './components/Auth';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useRef } from 'react';
const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
  const [room,setRoom] = useState(null)
  const roomInputRef = useRef(null);
  
  if(!isAuth){

    return (
      <div className="App">
       <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return(
     <div>
      {
        room ? (
        <div>chat</div>
        ):(
          <div className="room">
            <label htmlFor="room">Enter room name: </label>
            <input ref={roomInputRef}/>
            <button onClick={()=>{setRoom(roomInputRef.current.value)}}>Enter room</button>
          </div>
        )
      }
     </div>
     )
}

export default App;
