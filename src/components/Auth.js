import React from 'react'
import {auth,provider} from '../firebase';
import {signInWithPopup} from 'firebase/auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Auth() {
    const signin = async ()=>{
       const result = await signInWithPopup(auth, provider);
       console.log(result);
       cookies.set('auth-token',result.user.refreshToken)

    }
  return (
    <div>
        <p>sign in with google</p>
        <button onClick={signin}>sign in with google</button>
    </div>
  )
}

export default Auth