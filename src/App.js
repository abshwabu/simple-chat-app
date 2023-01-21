
import './App.css';
import Auth from './components/Auth';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
  const [room,setRoom] = useState(null)
  
  if(!isAuth){

    return (
      <div className="App">
       <Auth />
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
            <input/>
            <button>Enter room</button>
          </div>
        )
      }
     </div>
     )
}

export default App;
