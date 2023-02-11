import React, { useState } from 'react'
import { addDoc,collection,serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'


function Chat(props) {
    const {room} = props
    const [newMessage,setNewMessage] = useState('')
    const messagesRef = collection(db,'messages')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!newMessage) return;
        await addDoc(messagesRef,{
            text: newMessage,
            createdAt:serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage('')
    }
  return (
    <div className='chat-app'>
        <form onSubmit={handleSubmit} className='new-message-form'>
            <input 
            className='new-message-input'
            placeholder='Enter message'
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}/>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default Chat